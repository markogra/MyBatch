const mongoose = require("mongoose");
require('dotenv').config()

function connectDB() {
  mongoose.connect(
    process.env.DATABASE_URL,
    console.log("Connected to MongoDB")
  );
}

module.exports = {connectDB};
