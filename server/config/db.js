const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Log the connected database name
    console.log(`Connected to database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;