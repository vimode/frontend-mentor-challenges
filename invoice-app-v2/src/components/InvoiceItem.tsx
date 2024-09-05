import { formatDateMedFormat } from "@/utils/helper";

export default function InvoiceItem({ invoice }) {
	return (
		<li key={invoice.id} className="flex flex-row gap-8 items-center max-w-3xl">
			<p className="flex-1">
				<span>#</span>
				{invoice.id}
			</p>
			<p className="flex-1">
				<span>Due</span> {formatDateMedFormat(invoice.paymentDue)}
			</p>
			<p className="flex-1">{invoice.clientName}</p>
			<p className="flex-1 flex justify-end">{invoice.total}</p>
			<p className="flex-1">
				<span>&bull;</span>
				{invoice.status}
			</p>
			<p className="">
				<a href={`/invoices/${invoice.id}`}>&gt;</a>
			</p>
		</li>
	);
}
