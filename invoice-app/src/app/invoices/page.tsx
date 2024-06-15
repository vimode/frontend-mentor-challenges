import data from "@/data.json";

export default function Invoices() {
	return (
		<section>
			<div>
				<div>
					<h1>Invoices</h1>
					<p>There are 7 total invoices</p>
				</div>
				<div>
					<p>Filter</p>
					<button>New Invoice</button>
				</div>
			</div>
			{data ? (
				data.map((invoice) => (
					<ul key={invoice.id}>
						<li>
							<p>{invoice.id}</p>
							<p>{invoice.paymentDue}</p>
							<p>{invoice.clientName}</p>
							<p>{invoice.total}</p>
							<p>{invoice.status}</p>
							<p>
								<a href={`/invoices/${invoice.id}`}>&gt;</a>
							</p>
						</li>
					</ul>
				))
			) : (
				<div>Nothing</div>
			)}
		</section>
	);
}
