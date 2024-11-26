"use client";
import { updateInvoiceStatus } from "@/lib/actions";
import { InvoiceDetails } from "@/lib/types";

export default function UpdateStatusButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	async function handleClick() {
		await updateInvoiceStatus({
			id: invoice.id as string,
			status: invoice.status,
		});
	}

	return (
		<button
			className="bg-accent btn-basic transition-colors hover:bg-accent-alt"
			onClick={handleClick}
		>
			Mark as {invoice.status !== "paid" ? "paid" : "pending"}
		</button>
	);
}
