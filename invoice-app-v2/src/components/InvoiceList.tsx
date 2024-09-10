import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
	return (
		<ul className="flex flex-col gap-y-[10px]">
			{invoices.map((invoice) => (
				<InvoiceItem invoice={invoice} />
			))}
		</ul>
	);
}
