import { Suspense } from "react";
import InvoiceList from "@/components/InvoiceList";
import SelectFilter from "@/components/SelectFilter";
import NoInvoices from "@/components/NoInvoices";

export default async function Invoices() {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const invoices = await res.json();

	return (
		<>
			<div className="flex place-items-center justify-between">
				<div>
					<h1>Invoices</h1>
					<p>There are {invoices.data.length} total invoices</p>
				</div>
				<div>
					<div className="flex gap-10">
						<SelectFilter />
						<a
							href="/invoices/new"
							className="bg-accent text-background-secondary btn-basic"
						>
							New Invoice
						</a>
					</div>
				</div>
			</div>
			<Suspense fallback={<NoInvoices />}>
				<InvoiceList invoices={invoices.data} />
			</Suspense>
		</>
	);
}
