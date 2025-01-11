const express = require("express");
const app = express();
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const {connectDB} = require('./models/db')

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
