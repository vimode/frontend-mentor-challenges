import { Router } from "express";
import Todo from "../models/todo.js";
import User from "../models/user.js";
const todosRouter = Router();

todosRouter.get("/", async (request, response) => {
	const authUser = request.user.username;
	const todos = await find({})
		.populate("user", {
			username: 1,
			name: 1,
			id: 1,
		})
		.sort("-date");

	const userTodos = await todos.filter(
		(todo) => todo.user.username === authUser,
	);

	response.json(userTodos);
});

todosRouter.post("/", async (request, response) => {
	const body = request.body;

	const user = request.user;
	const foundUser = await findById(user.id);

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
	await deleteMany({ completed: true });
	response.status(204).end();
});

todosRouter.delete("/:id", async (request, response) => {
	await findByIdAndRemove(request.params.id);
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
		const updatedTodo = await findByIdAndUpdate(request.params.id, todo, {
			new: true,
		});
		response.status(200).json(updatedTodo);
	} catch (err) {
		console.log(err);
	}
});

export default todosRouter;
