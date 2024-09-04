import { formatDateMedFormat } from "@/utils/helper";

export default function InvoiceItem({ invoice }) {
	return (
		<li key={invoice.id}>
			<p>
				<span>#</span>
				{invoice.id}
			</p>
			<p>
				<span>Due</span> {formatDateMedFormat(invoice.paymentDue)}
			</p>
			<p>{invoice.clientName}</p>
			<p>{invoice.total}</p>
			<p>
				<span>&bull;</span>
				{invoice.status}
			</p>
			<p>
				<a href={`/invoices/${invoice.id}`}>&gt;</a>
			</p>
		</li>
	);
}
