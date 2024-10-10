"use client";
import { InvoiceDetails } from "@/lib/types";
import InvoiceItem from "./InvoiceItem";
import { useSearchParams } from "next/navigation";

interface InvoiceListProps {
	invoices: InvoiceDetails[];
}
export default function InvoiceList({ invoices }: InvoiceListProps) {
	const searchParams = useSearchParams();
	const filter = searchParams.get("filter");

	const filteredInvoices = filter
		? invoices.filter((invoice) => invoice.status === filter)
		: invoices;
	return (
		<ul className="flex flex-col gap-y-[10px]">
			{filteredInvoices.map((invoice: InvoiceDetails) => (
				// key might not be needed here but nextjs shows an error otherwise
				<InvoiceItem invoice={invoice} key={invoice.id} />
			))}
		</ul>
	);
}
