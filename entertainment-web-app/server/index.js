import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import movieRoutes from "./routes/movieRoutes.js";
import multiRoutes from "./routes/multiRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import tvShowRoutes from "./routes/tvShowRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;
if (!mongoUrl) {
  throw new Error("Please add the MONGO_URI enviornment variable");
}

mongoose.connect(mongoUrl);

const database = mongoose.connection;
database.on("error", console.error.bind(console, "mongodb connnection error"));
database.once("open", () => console.log("mongodb connected successfully"));

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tvshows", tvShowRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/multi", multiRoutes);

app.get("/", (req, res) => {
  res.send({message: "API Server OK"});
});

// catch-all route?
app.get("*", (req, res) => {
  res.send(`Nothing to see at ${req.params[0]}`);
});


app.listen(port, () => console.log(`Server started on port ${port}`));
