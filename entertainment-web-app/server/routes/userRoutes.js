import express from "express";
import {
  getUserBookmarks,
  addNewBookmark,
  getBookmarksDev
} from "../controllers/userController.js";

const router = express.Router();

router.get("/bookmarks/:userId", getUserBookmarks);
router.put("/bookmarks", addNewBookmark);
router.get("/bookmarks", getBookmarksDev)

export default router;
