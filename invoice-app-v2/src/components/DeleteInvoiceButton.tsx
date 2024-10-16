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
			className="btn-basic bg-background-alert hover:bg-background-alert_alt transition-colors"
			onClick={handleClick}
		>
			Delete
		</button>
	);
}
