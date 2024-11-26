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
	total: number;
}

export interface InvoiceDetails {
	id?: string | undefined;
	createdAt?: Date | string;
	paymentDue?: Date | string;
	clientName: string;
	clientEmail: string;
	senderAddress: Address;
	clientAddress: Address;
	status: string;
	description: string;
	paymentTerms: string;
	items: Item[];
	total?: number;
}
