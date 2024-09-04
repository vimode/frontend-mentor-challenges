import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
	return (
		<ul>
			{invoices.map((invoice) => (
				<InvoiceItem invoice={invoice} />
			))}
		</ul>
	);
}
