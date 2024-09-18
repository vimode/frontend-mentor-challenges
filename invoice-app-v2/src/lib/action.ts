"use server";
import Invoice from "@/models/invoice";
import { connectToMongoDB } from "./dbConnect";

export async function allInvoices() {
	try {
		await connectToMongoDB();
		const invoices = await Invoice.find({});
		return invoices;
	} catch (error) {
		console.error("Error fetching invoices:", error);
		return Response.json({
			status: "error",
			message: "Failed to get invoices",
		});
	}
}

export async function updateInvoiceStatus(data) {
	const { id } = data;
	const filter = { id };
	const update = { status: "paid" };

	try {
		await connectToMongoDB();
		const updated = await Invoice.findOneAndUpdate(filter, update, {
			new: true,
		});
		console.log(updated);
	} catch (error) {
		console.error("Error updating invoice status:", error);
		return Response.json(
			{ status: "error", message: "Failed to update invoice status" },
			{ status: 500 },
		);
	}
}

export async function createNewInvoice(data) {
	return Response.json({ status: "pending action" });
}
