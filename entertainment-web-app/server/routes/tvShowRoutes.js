import express from "express";
import { getPopularTVShows } from "../controllers/tvshowController.js";
const router = express.Router();

router.get("/popular", getPopularTVShows);

export default router;
