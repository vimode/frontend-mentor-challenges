const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const { userExtractor, tokenExtractor } = require("../utils/middleware.js");

usersRouter.get(
  "/",
  tokenExtractor,
  userExtractor,
  async (request, response) => {
    const users = await User.find({}).populate("todos")
    response.json(users);
  }
);

usersRouter.get(
  "/:id",
  tokenExtractor,
  userExtractor,
  async (request, response) => {
    const userData = await User.findById(request.user.id)
    const token = request.token;
    
    const user = {
      username: userData.username,
      name: userData.name,
      id: userData.id,
      token: token,
    };
    response.json(user);
  }
);

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  if (!username || !password) {
    return response
      .status(400)
      .json({ error: "Username or password missing." });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({ error: "username taken" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name: name || username,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    return response.status(400).json({
      error: "Username and/or password too short, minimum 3 characters long.",
    });
  }
});

module.exports = usersRouter;
