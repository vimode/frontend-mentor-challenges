"use client";
import { deleteInvoice } from "@/lib/action";
import { InvoiceDetails } from "@/lib/types";

export default function MarkAsPaidButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	return (
		<button
			className="bg-background-alert text-white py-2 px-4 rounded-full"
			onClick={() => {
				deleteInvoice({ id: invoice.id });
			}}
		>
			Delete
		</button>
	);
}
