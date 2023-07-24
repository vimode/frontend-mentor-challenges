import express from "express";
import { searchMovies, searchShows } from "../controllers/searchController.js";

const router = express.Router();

router.get("/movies", searchMovies);
router.get("/tvshows", searchShows);

export default router;
