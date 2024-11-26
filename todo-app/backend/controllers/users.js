import { hash } from "bcrypt";
import { Router } from "express";
const usersRouter = Router();
import User from "../models/user.js";
import { userExtractor, tokenExtractor } from "../utils/middleware.js";

usersRouter.get(
	"/",
	tokenExtractor,
	userExtractor,
	async (request, response) => {
		const users = await User.find({}).populate("todos");
		response.json(users);
	},
);

usersRouter.get(
	"/:id",
	tokenExtractor,
	userExtractor,
	async (request, response) => {
		const userData = await User.findById(request.user.id);
		const token = request.token;

		const user = {
			username: userData.username,
			name: userData.name,
			id: userData.id,
			token: token,
		};
		response.json(user);
	},
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
	const passwordHash = await hash(password, saltRounds);

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

export default usersRouter;
