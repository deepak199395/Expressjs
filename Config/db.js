const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ASP:ASP123@spyzy.cr7opeb.mongodb.net/expressjs');
    console.log(`Connected to MongoDB server`.bgBlue);

  } catch (error) {
    console.log(`MongoDB error: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;
