import mongoose, { Connection } from "mongoose";

function letConnect(): Connection {
  mongoose.connect("mongodb://127.0.0.1:27017/mybatch").then(() => {
    console.log("Connected to MongoDB");
  });

  return mongoose.connection;
}

letConnect();

module.exports = mongoose;
