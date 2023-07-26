import express from "express";
import { getTrendingMoviesAndShows } from "../controllers/multiDataController.js";

const router = express.Router();

router.get("/trending", getTrendingMoviesAndShows);

export default router;
