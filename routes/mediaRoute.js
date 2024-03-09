import express from "express";
import { authenticateJWT } from "../middlewares/authMiddleware.js";
import multer from "multer";
import { createMedia, getMediaByArticleId } from "../controllers/mediaController.js";
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/mediaStorage');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
  });

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.jpg', '.jpeg', '.heic'];
  const extname = path.extname(file.originalname).toLowerCase();
  if (allowedFileTypes.includes(extname)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.'));
  }
};  
    
const upload = multer({ storage: storage, fileFilter: fileFilter });
const mediaRouter = express.Router();

mediaRouter.get("/:articleId", getMediaByArticleId);
mediaRouter.post("/", upload.single('file'), createMedia);

export default mediaRouter;