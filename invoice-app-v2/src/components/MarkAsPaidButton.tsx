"use client";
import { updateInvoiceStatus } from "@/lib/action";
import { InvoiceDetails } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function MarkAsPaidButton({
	invoice,
}: { invoice: InvoiceDetails }) {
	const router = useRouter();
	return (
		<button
			onClick={async () => {
				const response = await updateInvoiceStatus({ id: invoice.id });
				// if (response.status === "success") {
				// 	window.location.reload();
				// 	revalidatePath(`/invoices/${invoice.id}`);
				// }
			}}
		>
			Mark as Paid
		</button>
	);
}
