const mongoose = require("mongoose");
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

function connectDB() {
  mongoose.connect(
    process.env.DATABASE_URL,
    console.log("Connected to MongoDB")
  );
}

module.exports = {connectDB};
