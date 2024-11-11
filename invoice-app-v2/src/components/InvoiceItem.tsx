import { formatDateMedFormat } from "@/lib/helper";
import { InvoiceDetails } from "@/lib/types";
import Link from "next/link";

export default function InvoiceItem({ invoice }: { invoice: InvoiceDetails }) {
	return (
		<Link href={`/invoices/${invoice.id}`}>
			<li
				key={invoice.id}
				className="flex flex-row  items-center max-w-3xl bg-background-secondary p-4 rounded-lg"
			>
				<p className="flex-1 font-bold ">
					<span className="text-text-tertiary">#</span>
					{invoice.id}
				</p>
				<p className="flex-1 text-text-tertiary">
					<span>Due</span> {formatDateMedFormat(invoice.paymentDue)}
				</p>
				<p className="flex-1 text-text-tertiary">{invoice.clientName}</p>
				<p className="flex-1 text-right mr-4 font-bold">${invoice.total}</p>
				<p
					className={`flex-1 p-1 text-center font-bold  ${invoice.status === "pending" ? "text-status-pending bg-background-pending_bg" : invoice.status === "draft" ? "text-status-neutral bg-background-neutral_bg" : "text-status-success bg-background-success_bg"}`}
				>
					<span>&bull;</span>
					{`${invoice?.status.charAt(0).toUpperCase()}${invoice?.status.slice(1)}`}
				</p>
				<p>&gt;</p>
			</li>
		</Link>
	);
}
