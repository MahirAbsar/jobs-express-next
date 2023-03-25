import mongoose from "mongoose";

export const connectDB = async (MONGO_URI: string) => {
  return mongoose.connect(MONGO_URI);
};
