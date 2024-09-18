import { formatDateMedFormat } from "@/utils/helper";

export default function InvoiceItem({ invoice }) {
	return (
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
			<p className="flex-1 flex justify-end mr-4 font-bold">${invoice.total}</p>
			<p
				className={`flex-1 p-1 text-center font-bold  ${invoice.status === "pending" ? "text-status-pending" : invoice.status === "draft" ? "text-status-neutral bg-background-neutral/50" : "text-status-success"}`}
			>
				<span>&bull;</span>
				{invoice.status}
			</p>
			<p>
				<a href={`/invoices/${invoice.id}`}>&gt;</a>
			</p>
		</li>
	);
}
