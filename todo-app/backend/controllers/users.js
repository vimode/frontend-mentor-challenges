const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get('/', async(request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  if (!username || !password ) {
    return response.status(400).json({ error: 'Username or password missing.'})
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({ error: "username must be unique" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  try {
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    return response.status(400).json({ error: "Username and/or password too short, minimum 3 characters long.",});
  }
});

module.exports = usersRouter;
