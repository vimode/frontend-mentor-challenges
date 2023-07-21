import express from "express";
import {
  getTVShowDetails,
  getPopularTVShows,
} from "../controllers/tvshowController.js";
const router = express.Router();

router.get("/popular", getPopularTVShows);
router.get("/:id", getTVShowDetails);

export default router;
