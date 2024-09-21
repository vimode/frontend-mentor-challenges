"use client";
import { deleteInvoice } from "@/lib/action";
import { InvoiceDetails } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function MarkAsPaidButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	const router = useRouter();

	return (
		<button
			className="bg-background-alert text-white py-2 px-4 rounded-full"
			onClick={() => {
				deleteInvoice({ id: invoice.id });
				router.push("/invoices");
			}}
		>
			Delete
		</button>
	);
}
