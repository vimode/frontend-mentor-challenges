import InvoiceList from "@/components/InvoiceList";

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
						<p>Filter</p>
						<a href="/invoices/new">New Invoice</a>
					</div>
				</div>
			</div>
			<InvoiceList invoices={invoices.data} />
		</>
	);
}
