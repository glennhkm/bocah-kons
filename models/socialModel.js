import mongoose from "mongoose";

const socialMedia = ["tiktok", "instagram", "linkedin", "email", "twitter", "github", "youtube", "phone"];

const Social = new mongoose.Schema(
  {
    socialMedia: {
      type: String,
      enum: socialMedia,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    socialMediaUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

Social.path("socialMediaUrl").default(function () {
  if (this.socialMedia === "email") {
    return `https://mail.google.com/mail/?view=cm&to=${this.accountName}`;
  }
  else if (this.socialMedia === "phone") {    
    return `https://api.whatsapp.com/send?phone=${this.accountName}`;
  }
  return "";
});

export default mongoose.model("Social", Social);