const todosRouter = require("express").Router();
const Todo = require("../models/todo.js");

const middleware = require("../utils/middleware.js");

todosRouter.get("/", async (request, response) => {
  const todos = await Todo.find({});
  response.json(todos);
});

todosRouter.post("/", async (request, response) => {
  const body = request.body;
  const todo = new Todo({
    title: body.title,
    completed: body.completed,
  });
  if (todo.title) {
    const savedTodo = await todo.save();
    response.status(201).json(savedTodo);
  } else {
    response.status(400).end();
  }
});

todosRouter.delete("/clearCompleted", async (request, response) => {
  let theseTodos = await Todo.deleteMany({ completed : true})
  console.log(theseTodos)
  response.status(204).end()
})

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
