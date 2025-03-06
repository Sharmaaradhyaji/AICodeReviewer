import express from "express";
import getAiReview from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/get-review", getAiReview)

export default router