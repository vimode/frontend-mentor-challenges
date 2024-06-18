import data from "@/data.json";
import styles from "./styles.module.css";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const routeInvoice =
		data.filter((invoice) => {
			invoice.id === id;
		})[0] || data[0];
	console.log(routeInvoice);

	return (
		<section className={`content_wrapper ${styles.invoice_outer_wrapper}`}>
			<nav className={styles.invoice_nav}>
				<a href="/invoices">&lt; Go back</a>
			</nav>
			<div className={styles.invoice_status}>
				<p>Status</p>
				<p>{routeInvoice.status}</p>
			</div>
			<div className={styles.invoice_options}>
				<button>Edit</button>
				<button>Delete</button>
				<button>Mark as Paid</button>
			</div>

			<div className={styles.invoice_content_wrapper}>
				<div className={styles.invoice_details}>
					<p>{routeInvoice.id}</p>
					<p>{routeInvoice.description}</p>
				</div>

				<div className={styles.invoice_add}>
					<p>
						{routeInvoice.senderAddress.street},<br />
						{routeInvoice.senderAddress.city},<br />
						{routeInvoice.senderAddress.postCode},<br />
						{routeInvoice.senderAddress.country}
						<br />
					</p>
				</div>

				<div className={styles.invoice_dates}>
					<div>
						<p>Invoice Date</p>
						<p>{routeInvoice.createdAt}</p>
					</div>
					<div>
						<p>Payment Due</p>
						<p>{routeInvoice.paymentDue}</p>
					</div>
				</div>
				<div className={styles.invoice_to}>
					<p>Bill To</p>
					<div>
						<p>{routeInvoice.clientAddress.street}</p>
						<p>{routeInvoice.clientAddress.city}</p>
						<p>{routeInvoice.clientAddress.postCode}</p>
						<p>{routeInvoice.clientAddress.country}</p>
					</div>
				</div>
				<div className={styles.invoice_to_email}>
					<p>Sent to</p>
					<p>{routeInvoice.clientEmail}</p>
				</div>

				<div className={styles.invoice_content}>
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
							{routeInvoice.items.map((item, index) => (
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
					<div className={styles.invoice_total}>
						<p>Grand Total</p>
						<p>{routeInvoice.total}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
