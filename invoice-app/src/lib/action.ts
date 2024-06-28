"use server";

import Invoice from "@/models/invoice.ts";
import { connectToMongoDB } from "./dbConnect.ts";

export const addNewInvoice = async (formData: FormData) => {
	await connectToMongoDB();
	const invoiceData = {};

	for (const [key, value] of formData.entries()) {
		invoiceData[key] = value;
	}
	console.log(invoiceData);
	const newInvoiceData = {
		clientEmail: invoiceData.clientEmail,
		clientName: invoiceData.clientName,
		description: invoiceData.projectDescription,
		paymentDue: invoiceData.invoiceDate,
		senderAddress: {
			name: invoiceData.senderAddress,
			quantity: invoiceData.Qty1,
			total: invoiceData.itemPrice1,
		},
	};

	try {
		const newInvoice = await Invoice.create(newInvoiceData);
		await newInvoice.save();
		console.log("Created invoice:", newInvoiceData);
	} catch (error) {
		console.log(error);
	}
};

export const allInvoices = async () => {
	try {
		await connectToMongoDB();
		const allInvoices = await Invoice.find({});
		return allInvoices;
	} catch (error) {
		console.error("Error fetching invoices:", error);
		throw error;
	}
};
