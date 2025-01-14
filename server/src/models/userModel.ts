import mongoose, {Schema,Types, Document} from 'mongoose'

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

const User = mongoose.model<IUser>('User', userSchema)

export default User