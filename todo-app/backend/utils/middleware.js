const logger = require("./logger.js");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "JsonWebToken Error") {
    return response.status(401).json({ error: "Invalid token" });
  } else if (error.name === "CastError") {
    return response.status(400).send({ error: error.message });
  } else if (error.name === "ValidationError") {
    return response.status(400).send({ error: error.message });
  }
  next(error);
};

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
  }
  next();
};

const userExtractor = async (request, response, next) => {
  const token = request.token;
  if (!token) {
    return response.status(401).json({ error: "token missing" });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "invalid token" });
  }

  const user = await User.findById(decodedToken.id);
  request.user = user;
  next();
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  userExtractor,
  tokenExtractor,
};
