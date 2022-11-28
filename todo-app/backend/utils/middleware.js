const logger = require("./logger.js");

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "uknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  next(error);
};

module.exports = { unknownEndpoint, errorHandler };
