const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

function letConnect() {
  mongoose.connect(url, console.log('Connected to MongoDB'));
}

letConnect();

module.exports = mongoose;
