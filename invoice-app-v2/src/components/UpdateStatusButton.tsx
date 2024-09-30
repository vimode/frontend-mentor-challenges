"use client";
import { updateInvoiceStatus } from "@/lib/action";
import { InvoiceDetails } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function UpdateStatusButton ({
	invoice,
}: { invoice: InvoiceDetails }) {

	const router = useRouter();
	return (
		<button
			onClick={async () => {
				const response = await updateInvoiceStatus({ id: invoice.id, status: invoice.status });
				// if (response.status === "success") {
				// 	window.location.reload();
				// 	revalidatePath(`/invoices/${invoice.id}`);
				// }
			}}
		>
			Mark as {invoice.status !== "paid" ? "paid" : "pending" }
		</button>
	);
}
