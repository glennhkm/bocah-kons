import mongoose from "mongoose";

const mediaTypes = ["image", "video"];

const Media = new mongoose.Schema(
  {
    mediaType: {
      type: String,
      enum: mediaTypes,
      required: true,
    },
    mediaUrl: {
        type: String,
        required: true
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Media", Media);
