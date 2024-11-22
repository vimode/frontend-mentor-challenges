import { Suspense } from "react";
import InvoiceList from "@/components/InvoiceList";
import SelectFilter from "@/components/SelectFilter";
import NoInvoices from "@/components/NoInvoices";
import Link from "next/link";

export default async function Invoices() {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const invoices = await res.json();

	return (
		<>
			<div className="flex place-items-center justify-between">
				<div>
					<h1>Invoices</h1>
					<p>
						<span className="hidden md:inline">There are </span>
						{invoices.data.length}{" "}
						<span className="hidden md:inline">total </span>
						invoices
					</p>
				</div>
				<div>
					<div className="flex gap-2 md:gap-10 ">
						<SelectFilter />
						<Link
							href="/invoices/new"
							className="bg-accent text-background-secondary btn-basic"
						>
							New <span className="md:inline hidden">Invoice</span>
						</Link>
					</div>
				</div>
			</div>
			<Suspense fallback={<NoInvoices />}>
				<InvoiceList invoices={invoices.data} />
			</Suspense>
		</>
	);
}
