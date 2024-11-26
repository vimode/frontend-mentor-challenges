import { Schema, model } from "mongoose";

const todoSchema = new Schema({
	title: String,
	date: Date,
	completed: Boolean,
	user: { type: Schema.Types.ObjectId, ref: "User" },
});

todoSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		(returnedObject.id = returnedObject._id.toString()),
			delete returnedObject._id,
			delete returnedObject.__v;
	},
});

export default model("Todo", todoSchema);
