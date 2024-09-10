import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
	return (
		<ul className="flex flex-col gap-y-[10px]">
			{invoices.map((invoice) => (
				// key might not be needed here but nextjs sohws an error otherwise
				<InvoiceItem invoice={invoice} key={invoice.id} />
			))}
		</ul>
	);
}
