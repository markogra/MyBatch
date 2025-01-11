const express = require("express");
const app = express();
require('dotenv').config()
const {letsConnect} = require('./models/db')

const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

// Connecting to DB
letsConnect()

app.listen( process.env.PORT, function () {
  console.log("MyBatch server listening on port " + process.env.PORT);
});
