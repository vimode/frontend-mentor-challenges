import { InvoiceDetails } from "@/lib/types";
import InvoiceItem from "./InvoiceItem";

interface InvoiceListProps {
	invoices: InvoiceDetails[];
}
export default function InvoiceList({ invoices }: InvoiceListProps) {
	return (
		<ul className="flex flex-col gap-y-[10px]">
			{invoices.map((invoice: InvoiceDetails) => (
				// key might not be needed here but nextjs sohws an error otherwise
				<InvoiceItem invoice={invoice} key={invoice.id} />
			))}
		</ul>
	);
}
