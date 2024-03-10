import express from "express";
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticleById,
} from "../controllers/articleController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";
import multer from "multer";
import path from "path";  

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/public/mediaStorage');
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

const articleRouter = express.Router();

articleRouter.get("/", getAllArticles);
articleRouter.get("/:id", getArticleById);
articleRouter.post("/", upload.array('file'), createArticle);
articleRouter.patch("/:id", upload.array('file'), updateArticle);
articleRouter.delete("/:id", authenticateJWT, deleteArticleById);

export default articleRouter;
