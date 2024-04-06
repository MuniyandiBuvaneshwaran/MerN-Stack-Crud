import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dataBase = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dataBase);
    console.log(`connected to mongoDB database`);
  } catch (error) {
    console.log(`Failed to connect to mongoDB database ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;