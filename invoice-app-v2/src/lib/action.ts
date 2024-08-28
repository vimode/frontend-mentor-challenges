import Invoice from "@/models/invoice";
import { connectToMongoDB } from "./dbConnect";

export const allInvoices = async () => {
	try {
		await connectToMongoDB();
		const invoices = await Invoice.find({});
		return invoices;
	} catch (error) {
		console.error("Error fetching invoices:", error);
		throw error;
	}
};
