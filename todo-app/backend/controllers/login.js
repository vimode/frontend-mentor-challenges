const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });

  const validPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && validPassword)) {
    return response.status(401).json({ error: "Invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
    expiresIn: 60 * 1440,
  });

  const userData = await User.findOne({ username }, "name username").populate(
    "todos"
  );

  response.status(200).send({
    token,
    username: userData.username,
    name: userData.name,
    todos: userData.todos,
    id: userData.id,
  });
});

module.exports = loginRouter;
