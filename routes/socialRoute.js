import express from "express";
import { getAllSocials, getSocialById, updateSocial } from "../controllers/socialController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const socialRouter = express.Router();

socialRouter.get("/", getAllSocials);
socialRouter.get("/:id", authenticateJWT, getSocialById);
socialRouter.patch("/:id", authenticateJWT, updateSocial);

export default socialRouter;
