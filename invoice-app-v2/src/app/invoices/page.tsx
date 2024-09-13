import InvoiceList from "@/components/InvoiceList";

export default async function Invoices() {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const invoices = await res.json();

	return (
		<main className="flex flex-col place-content-center w-full max-w-[700px] m-auto">
			<div>
				<div>
					<h1>Invoices</h1>
					<p>There are {invoices.data.length} total invoices</p>
				</div>
				<div>
					<div>
						<p>Filter</p>
						<button>New Invoice</button>
					</div>
				</div>
			</div>
			<InvoiceList invoices={invoices.data} />
		</main>
	);
}
