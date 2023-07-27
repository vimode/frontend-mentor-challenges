import express from "express";
import { getUserBookmarks } from "../controllers/userController.js";

const router = express.Router();

router.get("/bookmarks", getUserBookmarks);

export default router;
