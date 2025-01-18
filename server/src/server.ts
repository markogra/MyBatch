import express, {Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import { resolve } from 'path';
import cors from 'cors'

import connectDB from './models/db'
import recipeRouter from './routes/recipeRoutes'
import userRouter from './routes/userRoutes'
import globalErrorHandler from './controllers/errorController';

dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(recipeRouter);
app.use(userRouter);

app.all('*', (req:Request, res:Response, next:NextFunction) => {
  res.send('Sorry, that in not valid url :)')
})

app.use(globalErrorHandler)

// Connecting to DB
connectDB()

app.listen( process.env.PORT, function () {
  console.log("MyBatch server listening on port " + process.env.PORT);
});
