import { Schema, model } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		minLength: 3,
		required: true,
	},
	name: String,
	passwordHash: {
		type: String,
		minLength: 3,
		required: true,
	},
	todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

userSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		(returnedObject.id = returnedObject._id.toString()),
			delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.passwordHash;
	},
});

const User = model("User", userSchema);

export default User;
