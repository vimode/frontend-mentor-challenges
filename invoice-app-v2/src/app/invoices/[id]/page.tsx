import Link from "next/link";
import MarkAsPaid from "@/components/MarkAsPaid";

export default async function InvoiceId({
	params,
}: { params: { id: string } }) {
	// fetch all data and filter the single invoice data
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const data = await res.json();
	const invoice = data.data.filter(
		(item) => item.id.toString() === params.id.toString(),
	)[0];

	return (
		<>
			<nav>
				{/* TODO: use history stack to go back */}
				<Link href="/invoices">&lt; Go back</Link>
			</nav>
			<section>
				<div>
					<p>Status: </p>
					<p>{invoice.status}</p>
				</div>
				<div>
					<button>Edit</button>
					<button>Delete</button>
					<MarkAsPaid invoice={invoice} />
				</div>
			</section>
			<main>
				<div>
					<p>
						<span>#</span>
						{invoice.id}
					</p>
					<p>{invoice.description}</p>
				</div>
				<div>
					<p>
						{invoice.senderAddress?.street}, <br />
						{invoice.senderAddress?.city},<br />
						{invoice.senderAddress?.postCode},<br />
						{invoice.senderAddress?.country} <br />
					</p>
				</div>
				<div>
					<div>
						<p>Invoice Date</p>
						<p>{invoice.createdAt}</p>
					</div>
					<div>
						<p>Payment Due</p>
						<p>{invoice.paymentDue}</p>
					</div>
				</div>
				<div>
					<p>Bill To</p>
					<div>
						<p>{invoice.clientAddress?.street}</p>
						<p>{invoice.clientAddress?.city}</p>
						<p>{invoice.clientAddress?.postCode}</p>
						<p>{invoice.clientAddress?.country}</p>
					</div>
				</div>
				<div>
					<p>Sent to</p>
					<p>{invoice.clientEmail}</p>
				</div>

				<div>
					<table>
						<thead>
							<tr>
								<th>Item Name</th>
								<th>QTY.</th>
								<th>Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{invoice.items?.map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>
										{item.quantity} x {item.price}
									</td>
									<td>{item.total}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div>
						<p>Grand Total</p>
						<p>{invoice.total}</p>
					</div>
				</div>
			</main>
		</>
	);
}
