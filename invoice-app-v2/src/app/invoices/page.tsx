import { allInvoices } from "@/lib/action";
import InvoiceList from "@/components/InvoiceList";

export default async function Invoices() {
	const invoices = await allInvoices();

	return (
		<div className="flex flex-row w-screen">
			<div>Sidebar</div>
			<main className="flex flex-col place-content-center w-full">
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
				<section>
					<InvoiceList invoices={invoices} />
				</section>
			</main>
		</div>
	);
}
