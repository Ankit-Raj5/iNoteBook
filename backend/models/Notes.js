import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
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
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", noteSchema);

export default Notes;
