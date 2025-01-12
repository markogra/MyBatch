import * as mongoose from 'mongoose'


export const connectDB = async() => {
    try {
      const connect = await mongoose.connect(process.env.DATABASE_URL!)
      console.log('Mongo connected!! Lets gooo 🚀')
    }catch(err){
      const error = err as Error;
      console.log('There is an issue connecting to DB...')
      console.log(error.message)
    }
  }
