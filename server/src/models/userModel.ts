import mongoose, {Schema,Types, Document} from 'mongoose'
import bcrypt from 'bcrypt'

export type IUser = Document & {
  name:string;
  email:string;
  password:string;
  passwordConfirm: string | undefined;
  active:boolean;
  passwordChangedAt?:Date;
  passwordResetToken?:string;
  passwordResetExpires?:Date;
  _id: Types.ObjectId;
  correctPassword(candidatePassword:string, userPassword:string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  name:{
    type:String,
    required:[true, 'Please tell us your name']
  }, 
  email: {
    type:String,
    required:[true, 'Please tell us your email'],
    unique:true,
    lovercase:true,
    trim:true
  },
  password:{
    type:String, 
    required:[true, 'Please provide a password'],
    minLength:8,
    select:false
  },
  passwordConfirm: {
    type:String,
    required:[true, 'Please confirm your password'],
    select:false,
    validate: {
      // Only works on SAVE and CREATE
      validator:function(this:IUser, el:string):boolean{
        return el === this.password;
      },
      message: 'Passwords are not the same'
    }
  }, 
  active:{
    type:Boolean,
    default:true,
    select:false
  },
  passwordResetExpires: {
    type:Date
  },
  passwordChangedAt:{
    type:Date
  },
  passwordResetToken: {
    type:String
  },
}, {timestamps:true})


userSchema.methods.correctPassword = async function(candidatePassword:string, userPassword:string){
  try{
    return await bcrypt.compare(candidatePassword, userPassword)

  }catch(err){
    console.error('Error comparing passwords: ', err)
    throw err
  }
}

// hashing pass before saving to DB

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next()
  
  this.password = await bcrypt.hash(this.password, 12)

  this.passwordConfirm = undefined;

  next()
})



const User = mongoose.model<IUser>('User', userSchema)

export default User