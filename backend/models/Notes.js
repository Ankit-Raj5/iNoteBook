import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descrption: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Notes = mongoose.model("Notes", noteSchema);
