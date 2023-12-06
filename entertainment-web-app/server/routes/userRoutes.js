import express from "express";
import {
  getUserBookmarks,
  addNewBookmark,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/bookmarks/:userId", getUserBookmarks);
router.put("/bookmarks", addNewBookmark);

export default router;
