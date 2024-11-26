import http from "http";
import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import cors from "cors";

const config = require("../utils/config.js");
const logger = require("../utils/logger.js");

const todosRouter = require("../controllers/todos.js");
const usersRouter = require("../controllers/users.js");

const loginRouter = require("../controllers/login.js");
const logger = require("../utils/logger.js");
const middleware = require("../utils/middleware.js");

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl);

const app = express();

const server = http.createServer(app);

server.listen(config.PORT, () => {
	logger.info(`Server running OK`);
});

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "dist")));

// app.get('/', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

app.use("/", (request, response) => {
	response.send({ message: "Server OK" });
});
app.use("/api/login", loginRouter);
app.use("/api/users", usersRouter);

app.use(middleware.tokenExtractor);
app.use(middleware.userExtractor);

app.use("/api/todos", todosRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
