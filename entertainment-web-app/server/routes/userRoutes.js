import express from "express";
import {
  getUserBookmarks,
  addNewBookmark,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/bookmarks", getUserBookmarks);
router.post("/bookmarks/:id", addNewBookmark);

export default router;
