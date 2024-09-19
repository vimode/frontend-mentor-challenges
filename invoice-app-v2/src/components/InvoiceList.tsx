import { InvoiceDetails } from "@/lib/types";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({
	invoices,
}: { invoices: InvoiceDetails[] }) {
	return (
		<ul className="flex flex-col gap-y-[10px]">
			{invoices.map((invoice: InvoiceDetails) => (
				// key might not be needed here but nextjs sohws an error otherwise
				<InvoiceItem invoice={invoice} key={invoice.id} />
			))}
		</ul>
	);
}
