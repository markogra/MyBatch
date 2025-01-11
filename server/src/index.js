const express = require("express");
const app = express();
require('dotenv').config()
const {connectDB} = require('../models/db')

const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

// Connecting to DB
connectDB()

app.listen( process.env.PORT, function () {
  console.log("MyBatch server listening on port " + process.env.PORT);
});
