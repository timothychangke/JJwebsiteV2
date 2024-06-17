import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
