import express, {Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import { resolve } from 'path';
import cors from 'cors'

import connectDB from './models/db'
import recipeRouter from './routes/recipeRoutes'
import userRouter from './routes/userRoutes'
import AppError from './utils/AppError';
import globalErrorHandler from './controllers/errorController';

dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();

app.use(cors());

app.use(express.json({limit:'10kb'}));
app.use(express.urlencoded({extended:true, limit:'10kb'}))
app.use(cookieParser());

app.use(recipeRouter);
app.use(userRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler)

// Connecting to DB
connectDB()

app.listen( process.env.PORT, function () {
  console.log("MyBatch server listening on port " + process.env.PORT);
});
