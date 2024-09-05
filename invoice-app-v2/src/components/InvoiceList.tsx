import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
	return (
		<ul className="flex flex-col">
			{invoices.map((invoice) => (
				<InvoiceItem invoice={invoice} />
			))}
		</ul>
	);
}
