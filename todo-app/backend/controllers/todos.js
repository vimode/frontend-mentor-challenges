const todosRouter = require("express").Router();
const Todo = require("../models/todo.js");
const User = require("../models/user.js");

todosRouter.get("/", async (request, response) => {
  const todos = await Todo.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
    date: 1,
  }).sort('-date');
  response.json(todos);
});

todosRouter.post("/", async (request, response) => {
  const body = request.body;

  const user = request.user;
  const foundUser = await User.findById(user.id);

  const todo = new Todo({
    title: body.title,
    completed: body.completed || false,
    date: new Date(),
    user: foundUser._id,
  });
  if (todo.title) {
    const savedTodo = await todo.save();
    user.todos = user.todos.concat(savedTodo._id);
    await user.save();
    response.status(201).json(savedTodo);
  } else {
    response.status(400).end();
  }
});

todosRouter.delete("/clearCompleted", async (request, response) => {
  let theseTodos = await Todo.deleteMany({ completed: true });
  response.status(204).end();
});

todosRouter.delete("/:id", async (request, response) => {
  await Todo.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

todosRouter.put("/:id", async (request, response) => {
  const body = request.body;
  const todo = {
    id: body.id,
    title: body.title,
    completed: body.completed,
  };
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(request.params.id, todo, {
      new: true,
    });
    response.status(200).json(updatedTodo);
  } catch (err) {
    console.log(err);
  }
});

module.exports = todosRouter;
