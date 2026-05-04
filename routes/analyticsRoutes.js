import express from "express";
import { recommendProducts } from "../controllers/analyticsController.js";

const router = express.Router();
router.get("/recommend", recommendProducts);
export default router;