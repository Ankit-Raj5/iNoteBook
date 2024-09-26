import mongoose from "mongoose";
const mongoUri = "mongodb://localhost:27017/i-NoteBook";
export const connect = async () => {
  await mongoose.connect(mongoUri);
};
