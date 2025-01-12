import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors'

import connectDB from './models/db'
import router from './router'

dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Connecting to DB
connectDB()

app.listen( process.env.PORT, function () {
  console.log("MyBatch server listening on port " + process.env.PORT);
});
