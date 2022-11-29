const config = require("./utils/config.js");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");

const todosRouter = require("./controllers/todos.js");
const usersRouter = require("./controllers/users.js")

const logger = require("./utils/logger.js");
const middleware = require('./utils/middleware.js')
const mongoose = require("mongoose");

const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/todos", todosRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app;
