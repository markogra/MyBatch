import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload }  from 'jsonwebtoken'
import User, {IUser} from "../models/userModel";

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

}

export const protect = async(req:Request, res:Response, next:NextFunction) => {

}

export const logout = async(req:Request, res:Response, next:NextFunction) => {

}