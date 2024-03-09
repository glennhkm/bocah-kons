import express from "express";
import { createStaff, getStaffBySlug } from "../controllers/staffController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const staffRouter = express.Router();

staffRouter.get("/:periode/:department/:position", getStaffBySlug);
// staffRouter.get("/:id", getArticleById);
staffRouter.post("/", authenticateJWT, createStaff);
// staffRouter.patch("/:id", authenticateJWT, updateArticle);
// staffRouter.delete("/:id", authenticateJWT, deleteArticleById);

export default staffRouter;
