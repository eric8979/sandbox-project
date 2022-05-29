const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(
      `Error occured while connecting to the mongoDB`.magenta.underline
    );
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
