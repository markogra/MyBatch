const mongoose = require("mongoose");
require('dotenv').config()

function letsConnect() {
  mongoose.connect(
    process.env.DATABASE_URL,
    console.log("Connected to MongoDB")
  );
}

module.exports = {letsConnect};
