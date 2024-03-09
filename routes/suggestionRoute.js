import express from "express";
import {
  createSuggestion,
  deleteSuggestionById,
  getAllSuggestion,
  updateSuggestion,
} from "../controllers/suggestionController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const suggestionRouter = express.Router();

suggestionRouter.get("/", authenticateJWT, getAllSuggestion);
suggestionRouter.post("/", createSuggestion);
suggestionRouter.patch("/:id", authenticateJWT, updateSuggestion);
suggestionRouter.delete("/:id", authenticateJWT, deleteSuggestionById);

export default suggestionRouter;
