"use client";
import { deleteInvoice } from "@/lib/actions";
import { InvoiceDetails } from "@/lib/types";

export default function MarkAsPaidButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	async function handleClick() {
		const confirmAction = window.confirm(
			"Are you sure you want to delete this invoice?",
		);

		if (!confirmAction) return;

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
