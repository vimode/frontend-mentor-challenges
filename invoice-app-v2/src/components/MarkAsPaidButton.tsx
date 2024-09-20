"use client";
import { updateInvoiceStatus } from "@/lib/action";
import { InvoiceDetails } from "@/lib/types";

export default function MarkAsPaidButton({ invoice }: { invoice: InvoiceDetails }) {
	return (
		<button
			onClick={() => {
				updateInvoiceStatus({ id: invoice.id });
			}}
		>
			Mark as Paid
		</button>
	);
}
