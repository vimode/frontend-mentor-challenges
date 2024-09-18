"use client";
import { updateInvoiceStatus } from "@/lib/action";

export default function MarkAsPaid({ invoice }) {
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
