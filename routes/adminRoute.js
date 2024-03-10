import express from "express";
// import { getAdmin, loginAdmin, registerAdmin } from "../controllers/adminController.js";
import { getAdmin, loginAdmin, registerAdmin } from "../controllers/adminController.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/", registerAdmin);
adminRouter.post("/login", loginAdmin); 

export default adminRouter; 
