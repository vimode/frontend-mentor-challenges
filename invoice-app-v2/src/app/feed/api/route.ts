import Invoice from "@/models/invoice";
import mongoose from "mongoose";
import dummyData from "@/app/_data/dummy_data.json";

export const dynamc = "force-dynamic";

const MONGODB_URI = process.env.MONGODB_URI_TEST!;

export async function POST() {
	if (!MONGODB_URI) {
		throw new Error(
			`Please define the MONGODB_URI enviornment variable inside .env.local`,
		);
	}
	try {
		await mongoose.connect(MONGODB_URI);
		console.log(`New MongoDB connection established`);
		const result = await Invoice.insertMany(dummyData);
		return Response.json({ status: 201, success: true, data: result });
	} catch (error) {
		return Response.json({ status: 500, success: false, error: error });
	}
}
