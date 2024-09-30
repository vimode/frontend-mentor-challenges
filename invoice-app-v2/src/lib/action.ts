"use server";
import Invoice from "@/models/invoice";
import { connectToMongoDB } from "./dbConnect";
import { InvoiceDetails } from "./types";
import { revalidatePath } from "next/cache";

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
export async function updateInvoiceStatus(data: {
	id: string;
	status: string;
}) {
	const { id, status } = data;
	const filter = { id };
	const updateToPaid = { status: "paid" };
	const updateToPending = { status: "pending" };

	try {
		await connectToMongoDB();
		let updated;
		if (status === "paid") {
			updated = await Invoice.findOneAndUpdate(filter, updateToPending, {
				new: true,
			});
		} else {
			updated = await Invoice.findOneAndUpdate(filter, updateToPaid, {
				new: true,
			});
		}
		revalidatePath(`/invoices`);
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
		revalidatePath("/invoices");
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
export async function createNewInvoice(newInvoiceData: InvoiceDetails) {
	try {
		await connectToMongoDB();
		const newInvoice = await Invoice.create(newInvoiceData);
		revalidatePath("/invoices");
		console.log(`New invoice created:`, newInvoice);
	} catch (error) {
		console.error(`Error creating new Invoice`, error);
		return Response.json(
			{ status: "error", message: "Failed to create invoice" },
			{ status: 500 },
		);
	}
}
