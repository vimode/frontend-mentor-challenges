"use server";
import Invoice from "@/models/invoice";
import { connectToMongoDB } from "./dbConnect";
import { InvoiceDetails } from "./types";

// Get all invoices
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

// Mark invoice as paid
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
		return {
			status: "success",
			message: "Invoice status updated successfully",
		};
	} catch (error) {
		console.error("Error updating invoice status:", error);
		return Response.json(
			{ status: "error", message: "Failed to update invoice status" },
			{ status: 500 },
		);
	}
}

// Delete a single invoice
export async function deleteInvoice(data: { id: string }) {
	const { id } = data;
	try {
		await connectToMongoDB();
		const deletedInvoice = await Invoice.deleteOne({ id });
		console.log(deletedInvoice);
	} catch (error) {
		console.error("Error deleting invoice: ", error);
		return Response.json(
			{ status: "error", message: "Failed to delete invoice" },
			{ status: 500 },
		);
	}
}

// Create a new Invoice
export async function createNewInvoice(data: InvoiceDetails) {
	return Response.json({ status: "pending action" });
}
