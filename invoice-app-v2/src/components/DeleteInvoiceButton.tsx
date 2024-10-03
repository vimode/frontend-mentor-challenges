"use client";
import { deleteInvoice } from "@/lib/actions";
import { InvoiceDetails } from "@/lib/types";

export default function MarkAsPaidButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	async function handleClick() {
		// TODO: Add a  confirmation dialog/popup
		await deleteInvoice({ id: invoice.id });
	}

	return (
		<button
			className="bg-background-alert text-white py-2 px-4 rounded-full"
			onClick={handleClick}
		>
			Delete
		</button>
	);
}
