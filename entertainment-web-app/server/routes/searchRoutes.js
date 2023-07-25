import express from "express";
import {
  searchMovies,
  searchShows,
  searchMoviesAndShows,
} from "../controllers/searchController.js";

const router = express.Router();

router.get("/movies", searchMovies);
router.get("/tvshows", searchShows);
router.get("/all", searchMoviesAndShows);

export default router;
