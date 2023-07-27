import express from "express";
import {
  getTVShowDetails,
  getPopularTVShows,
} from "../controllers/tvshowController.js";
import { cachedTVShowDataMiddleware } from "../middleware/dataCache.js";
const router = express.Router();

router.get("/popular", cachedTVShowDataMiddleware, getPopularTVShows);
router.get("/:id", cachedTVShowDataMiddleware, getTVShowDetails);

export default router;
