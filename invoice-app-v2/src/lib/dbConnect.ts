import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
	// If a cahced connection exists, return that connection
	if (cachedConnection) {
		console.log(`Using cached db connection`);
		return cachedConnection;
	}

	// If no cached connection exists, establish a new connection to db
	try {
		const cnx = await mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS:20000});
		cachedConnection = cnx.connection;
		console.log(`New MongoDB connection established`);
		return cachedConnection;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
