import { allInvoices } from "@/lib/action";
import InvoiceList from "@/components/InvoiceList";

export default async function Invoices() {
	const invoices = await allInvoices();

	return (
		<main className="flex flex-col place-content-center w-full max-w-[700px] m-auto">
			<div>
				<div>
					<h1>Invoices</h1>
					<p>There are {invoices.length} total invoices</p>
				</div>
				<div>
					<div>
						<p>Filter</p>
						<button>New Invoice</button>
					</div>
				</div>
			</div>
			<InvoiceList invoices={invoices} />
		</main>
	);
}
