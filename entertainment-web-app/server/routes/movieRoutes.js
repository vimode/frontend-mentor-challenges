import express from "express";
import {
  getPopularMovies,
  getTrendingMovies,
} from "../controllers/movieController.js";
import { cachedMoviesDataMiddleware } from "../middleware/dataCache.js";

const router = express.Router();

router.get("/trending", cachedMoviesDataMiddleware, getTrendingMovies);
router.get("/popular",cachedMoviesDataMiddleware, getPopularMovies);

export default router;
