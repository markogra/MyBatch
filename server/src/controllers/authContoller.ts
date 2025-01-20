import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload }  from 'jsonwebtoken'
import User, {IUser} from "../models/userModel";
import AppError from "../utils/AppError";
import { verifyToken } from "../utils/authHelper";
import Email from "../utils/Email";
import crypto from 'crypto'

type cookieOptions = {
  expires:Date;
  httpOnly:boolean;
  secure?:boolean;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Add the `user` property to the Request interface
    }
  }
}

const signToken = (id:string) => {
  return jwt.sign({id}, process.env.JWT_SECRET!, {
    expiresIn:process.env.JWT_EXPIRES_IN
  })
}

const createSendToken = (user:IUser, statusCode: number, res: Response) => {
  const token = signToken(user._id.toString())

  const cookieOptions:cookieOptions = {
    expires:new Date(Date.now()  + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000 ),
    httpOnly: true
  }

  if(process.env.NODE_ENV === 'production') cookieOptions.secure = true
  res.cookie('jwt', token, cookieOptions)
  // Remove password from output !!!
  user.password = undefined!;
  res.status(statusCode).json({
    status:'success',
    token,
    data: {
      user
    }
  })

}

export const signup = async(req:Request,res:Response,next:NextFunction) => {
  try {
    const newUser = await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm,
      passwordChangedAt:req.body.passwordChangedAt,
      role:req.body.role
    })

    const url = `${req.protocol}://${req.get('host')}/me`;
    await new Email(newUser,url).sendWelcome()

    createSendToken(newUser,201,res)

  }catch(err){
    const error = err as Error;
    res.status(404).json({
        status:'Fail',
        message:error.message
    })
  }
}

export const login = async(req:Request, res:Response, next:NextFunction) => {
  try{
    const {email, password} = req.body

    console.log(email)
    console.log(password)
    // 1. Check if email and password exists
    if(!email || !password){
      return next(new AppError('Please provide email and password', 400))
    }
    // 2.Check if user exists and password is correct 
    const user = await User.findOne({email}).select('+password')

    console.log('This is user ', user)

    if(!user){
      return next(new AppError('User cannot be found', 400))
    }

    

    if(!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Inccorect email or password', 401))
    }

    createSendToken(user,201,res)

  }catch(err){
    const error = err as Error;
    res.status(400).json({
        status:'Fail',
        message:error.message
    })
  }
}

export const protectRoute = async(req:Request, res:Response, next:NextFunction) => {
  try {
    // 1. Getting token and check if it is there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    console.log(`token -> ${token}`)
    if (!token) {
      console.log('You have no token')
      return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    // 2. Verify token
    const decoded = await verifyToken(token, process.env.JWT_SECRET!);

    // If `iat` (issued at) is missing or invalid, throw an error
    if (!decoded || !decoded.iat) {
      return next(new AppError('Token is invalid or expired!', 401));
    }

    // 3. Check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return next(new AppError('The user belonging to the token no longer exists.', 401));
    }

    // 4. Check if user changed password after the token was issued
    if (freshUser.changedPasswordAfter(decoded.iat)) {
      return next(new AppError('User recently changed password! Please log in again.', 401));
    }

    // Grant access for the protected route
    req.user = freshUser; // Add the user to the request object
    next(); 
  } catch (err) {
    next(err)
  }
}

export const logout = async(req:Request, res:Response, next:NextFunction) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 10 * 1000)
  })
  console.log('You are successfully logged out')
  res.status(200).json({
    status:'success',
    message:'You have success logged out'
  })
}

export const updatePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1. Make sure you have all data in req body
    if (!req.body.passwordCurrent || !req.body.password || !req.body.passwordConfirm) {
      return next(new AppError('Please provide all required fields: passwordCurrent, password, passwordConfirm', 400));
    }

    // 2. Get user from collection
    const user = await User.findById(req.user!.id).select('+password'); // Await the query to get the actual user document

    // Ensure user exists
    if (!user) {
      return next(new AppError('User not found', 404));
    }

    // 3. Check if the posted current password is correct
    const isCorrectPassword = await user.correctPassword(req.body.passwordCurrent, user.password);
    if (!isCorrectPassword) {
      return next(new AppError('Your current password is incorrect', 401));
    }

    // 4. If so, update the password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;

    // Save the updated user document
    await user.save();

    // 5. Log user in and send JWT
    createSendToken(user, 200, res);
  } catch (err) {
    const error = err as Error;
    res.status(400).json({
      status: 'Fail',
      message: error.message,
    });
  }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new AppError('There is no user with that email address', 404));
    }

    const resetToken = crypto.randomBytes(32).toString('hex');

    user.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    user.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    
    await user.save();

    const resetURL = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`;
    console.log('Reset URL:', resetURL);

    try {
      await new Email(user, resetURL).sendPasswordReset();
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      return next(new AppError('There was an error sending the email. Try again later!', 500));
    }
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1. Get the token from the URL
    const tokenFromURL = req.params.token;
    console.log('Plain token from URL:', tokenFromURL);

    // 2. Hash the token from the URL
    const hashedToken = crypto.createHash('sha256').update(tokenFromURL).digest('hex');
    console.log('Hashed token for comparison:', hashedToken);

    // 3. Find the user based on the hashed token
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }, // Ensure token has not expired
    });

    if (!user) {
      console.log('No user found with the given token or token has expired.');
      return next(new AppError('Token is invalid or has expired', 400));
    }

    console.log('User found:', user);

    // 4. Proceed with resetting the password
    if (!req.body.password || !req.body.passwordConfirm) {
      return next(new AppError('Please provide both password and password confirmation', 400));
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    // Send JWT and log the user in
    createSendToken(user, 200, res);
  } catch (err) {
    const error = err as Error;
    console.error('Error in resetPassword:', error.message);
    res.status(401).json({
      status: 'fail',
      message: error.message,
    });
  }
};


