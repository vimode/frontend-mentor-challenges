import { allInvoices } from "@/lib/action";

export default async function Invoices() {
	const invoices = await allInvoices();

	return (
		<div>
			<div>Sidebar</div>
			<main>
				<div>
					<div>
						<h1>Invoices</h1>
						<p>There are 7 total invoices</p>
					</div>
					<div>
						<div>
							<p>Filter</p>
							<button>New Invoice</button>
						</div>
					</div>
				</div>
				<section>
					<ul>
						{invoices.map((invoice) => (
							<li key={invoice.id}>
								<p>{invoice.id}</p>
								<p>{invoice.clientName}</p>
								<p>{invoice.total}</p>
								<p>{invoice.status}</p>
								<a href={`/invoices/${invoice.id}`}>&gt;</a>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}
