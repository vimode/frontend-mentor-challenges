import express from "express";
import {
  getPopularMovies,
  getTrendingMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/trending", getTrendingMovies);
router.get("/popular", getPopularMovies);

export default router;
