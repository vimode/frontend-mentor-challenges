"use server";

import Invoice from "@/models/invoice.ts";
import { connectToMongoDB } from "./dbConnect.ts";

export const addNewInvoice = async (formData: FormData) => {
	await connectToMongoDB();
	const invoiceData = {};

	for (const [key, value] of formData.entries()) {
		invoiceData[key] = value;
	}

	try {
		const newInvoice = await Invoice.create({ invoiceData });
		newInvoice.save();
		return newInvoice.toString();
	} catch (error) {
		console.log(error);
		return { message: "error creating invoice" };
	}
};
