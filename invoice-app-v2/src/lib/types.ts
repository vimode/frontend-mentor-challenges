interface Address {
	street: string;
	city: string;
	postCode: string;
	country: string;
}

export interface Item {
	name: string;
	price: number;
	quantity: number;
	total?: number;
}

export interface InvoiceDetails {
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
