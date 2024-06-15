import data from "@/data.json";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const routeInvoice =
		data.filter((invoice) => {
			invoice.id.toString() === id;
		})[0] || data[0];

	return (
		<section>
			<nav>
				<a href="/invoices">&lt; Go back</a>
			</nav>
			<div>
				<p>Status: {routeInvoice.status}</p>
				<div>
					<button>Edit</button>
					<button>Delete</button>
					<button>Mark as Paid</button>
				</div>
			</div>

			<div>
				<div>
					<p>{routeInvoice.id}</p>
					<p>{routeInvoice.description}</p>
				</div>

				<div>
					<p>
						{routeInvoice.senderAddress.street},{" "}
						{routeInvoice.senderAddress.city},{" "}
						{routeInvoice.senderAddress.postCode},{" "}
						{routeInvoice.senderAddress.country}
					</p>
				</div>

				<div>
					<div>
						<p>Invoice Date</p>
						<p>{routeInvoice.createdAt}</p>
					</div>
					<div>
						<p>Payment Due</p>
						<p>{routeInvoice.paymentDue}</p>
					</div>
					<div>
						<p>Bill To</p>
						<div>
							<p>{routeInvoice.clientAddress.street}</p>
							<p>{routeInvoice.clientAddress.city}</p>
							<p>{routeInvoice.clientAddress.postCode}</p>
							<p>{routeInvoice.clientAddress.country}</p>
						</div>
					</div>
					<div>
						<p>Sent to</p>
						<p>{routeInvoice.clientEmail}</p>
					</div>
				</div>

				<div>
					<ul>
						{routeInvoice.items.map((item) => (
							<li>
								<div>
									<p>{item.name}</p>
									<p>
										{item.quantity} x {item.price}
									</p>
								</div>
								<div>
									<p>{item.total}</p>
								</div>
							</li>
						))}
					</ul>
					<div>
						<p>Grand Total</p>
						<p>{routeInvoice.total}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
