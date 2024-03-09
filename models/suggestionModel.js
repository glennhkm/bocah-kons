import mongoose from "mongoose";

const Suggestion = new mongoose.Schema(
  {
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Suggestion", Suggestion);