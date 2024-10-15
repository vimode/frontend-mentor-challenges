import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI_TEST!;

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI enviornment variable inside .env.local",
	);
}

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
	if (cachedConnection) {
		console.log("Using cached db connection.");
		return cachedConnection;
	}
	try {
		const cnx = await mongoose.connect(MONGODB_URI);
		console.log("New MongoDB connection established");
		cachedConnection = cnx.connection;
		return cachedConnection;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
