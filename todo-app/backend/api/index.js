import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import cors from "cors";
import { PORT, MONGODB_URI } from "../utils/config.js";
import todosRouter from "../controllers/todos.js";
import usersRouter from "../controllers/users.js";
import loginRouter from "../controllers/login.js";
import {
	tokenExtractor,
	userExtractor,
	errorHandler,
	unknownEndpoint,
} from "../utils/middleware.js";

const mongoUrl = MONGODB_URI;
mongoose.connect(mongoUrl);

const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "dist")));

// app.get('/', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);

app.use(tokenExtractor);
app.use(userExtractor);

app.use("/api/todos", todosRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.use("/", (request, response) => {
	response.send({ message: "Server OK" });
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
