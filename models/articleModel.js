import mongoose from "mongoose";

const categories = ["article", "achievement", "event", "heading", "history"];
const mediaTypes = ["image", "video"];

const Article = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
    media: [
      {
        mediaType: {
          type: String,
          enum: mediaTypes,
          required: true,
        },
        mediaUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Article", Article);
