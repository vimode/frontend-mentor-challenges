import mongoose, { Connection } from "mongoose";

export async function connectToMongoDB() {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI, {
			useCache: true,
		});
		console.log(`New MongoDB connection established`);
		return connection;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
