import express from "express";
import { getProfile } from "../controllers/userProfile.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/me", protect, getProfile);
export default router;
