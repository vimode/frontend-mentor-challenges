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

const addressSchema = new mongoose.Schema<Address>({
	street: String,
	city: String,
	postCode: String,
	country: String,
});

const itemSchema = new mongoose.Schema<Item>({
	name: String,
	price: Number,
	quantity: Number,
	total: Number,
});

export interface InvoiceDetails extends mongoose.Document {
	id: string;
	createdAt: Date;
	paymentDue: Date;
	description: string;
	paymentTerms: number;
	clientEmail: string;
	clientName: string;
	status: string;
	senderAddress: Address;
	clientAddress: Address;
	items: Item[];
	total: number;
}

const InvoiceSchema = new mongoose.Schema<InvoiceDetails>(
	{
		id: String,
		paymentDue: Date,
		description: String,
		paymentTerms: Number,
		clientEmail: String,
		clientName: String,
		status: String,
		senderAddress: addressSchema,
		clientAddress: addressSchema,
		items: [itemSchema],
		total: Number,
	},
	{ timestamps: true },
);

InvoiceSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const Invoice =
	(mongoose.models.Invoice as mongoose.Model<InvoiceDetails>) ||
	mongoose.model<InvoiceDetails>("Invoice", InvoiceSchema);

export default Invoice;
