import { Suspense } from "react";
import InvoiceList from "@/components/InvoiceList";
import SelectFilter from "@/components/SelectFilter";

export default async function Invoices() {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const invoices = await res.json();

	return (
		<>
			<div>
				<div>
					<h1>Invoices</h1>
					<p>There are {invoices.data.length} total invoices</p>
				</div>
				<div>
					<div>
						<SelectFilter />
						<a href="/invoices/new">New Invoice</a>
					</div>
				</div>
			</div>
			<Suspense fallback={<p>No invoices...</p>}>
				<InvoiceList invoices={invoices.data} />
			</Suspense>
		</>
	);
}
