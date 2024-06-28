import mongoose from "mongoose";

interface Address {
	street: string;
	city: string;
	postCode: string;
	country: string;
}

interface Item {
	name: string;
	price: number;
	quantity: number;
	total: number;
}

export interface InvoiceDetails extends mongoose.Document {
	id: string;
	createdAt: Date;
	paymentDue: Date;
	description: string;
	// paymentTerms: any;
	clientEmail: string;
	clientName: string;
	status: string;
	senderAddress: Address;
	clientAddress: Address;
	items: Item[];
	total: number;
}

const InvoiceSchema = new mongoose.Schema<InvoiceDetails>({
	id: String,
	createdAt: { type: Date, default: Date.now },
	paymentDue: Date,
	description: String,
	// paymentTerms: mongoose.Schema.Types.Mixed,
	clientEmail: String,
	clientName: String,
	status: String,
	senderAddress: {
		name: String,
		price: Number,
		quantity: Number,
		total: Number,
	},
	clientAddress: {
		name: String,
		price: Number,
		quantity: Number,
		total: Number,
	},
	items: {
		name: String,
		price: Number,
		quantity: Number,
		total: Number,
	},
	total: Number,
});

InvoiceSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		(returnedObject.id = returnedObject._id.toString()),
			delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Invoice =
	mongoose.models.Invoice ||
	mongoose.model<InvoiceDetails>("Invoice", InvoiceSchema);

export default Invoice;
