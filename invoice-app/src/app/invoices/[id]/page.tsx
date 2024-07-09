"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";

export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;

	const [invoiceData, setInvoiceData] = useState([]);

	const fetchData = useCallback(async (id: string) => {
		try {
			const response = await fetch(`http://localhost:3000/api/invoices/${id}`, {
				method: "GET",
			});
			if (response.ok) {
				const { data } = await response.json();
				const dbInvoiceData = data[0];
				const updateData = {
					...dbInvoiceData,
					createdAt: formatDate(dbInvoiceData.createdAt),
					paymentDue: formatDate(dbInvoiceData.paymentDue),
				};
				setInvoiceData(updateData);
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		fetchData(id);
	}, [id, fetchData]);

	function formatDate(dbdate: Date) {
		const date = new Date(dbdate);
		const yyyy = date.getFullYear();
		const mm = String(date.getMonth() + 1).padStart(2, "0");
		const dd = String(date.getDate()).padStart(2, "0");
		return `${yyyy}-${mm}-${dd}`;
	}

	return (
		<section className={`content_wrapper ${styles.invoice_outer_wrapper}`}>
			<nav className={styles.invoice_nav}>
				<a href="/invoices">&lt; Go back</a>
			</nav>
			<div className={styles.invoice_status}>
				<p>Status</p>
				<p>{invoiceData.status}</p>
			</div>
			<div className={styles.invoice_options}>
				<button>Edit</button>
				<button>Delete</button>
				<button>Mark as Paid</button>
			</div>

			<div className={styles.invoice_content_wrapper}>
				<div className={styles.invoice_details}>
					<p>
						<span className={styles.invoiceid}>#</span>
						{invoiceData.id}
					</p>
					<p>{invoiceData.description}</p>
				</div>

				<div className={styles.invoice_add}>
					<p>
						{invoiceData.senderAddress?.street},<br />
						{invoiceData.senderAddress?.city},<br />
						{invoiceData.senderAddress?.postCode},<br />
						{invoiceData.senderAddress?.country}
						<br />
					</p>
				</div>

				<div className={styles.invoice_dates}>
					<div>
						<p>Invoice Date</p>
						<p>{invoiceData.createdAt}</p>
					</div>
					<div>
						<p>Payment Due</p>
						<p>{invoiceData.paymentDue}</p>
					</div>
				</div>
				<div className={styles.invoice_to}>
					<p>Bill To</p>
					<div>
						<p>{invoiceData.clientAddress?.street}</p>
						<p>{invoiceData.clientAddress?.city}</p>
						<p>{invoiceData.clientAddress?.postCode}</p>
						<p>{invoiceData.clientAddress?.country}</p>
					</div>
				</div>
				<div className={styles.invoice_to_email}>
					<p>Sent to</p>
					<p>{invoiceData.clientEmail}</p>
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
							{invoiceData.items?.map((item, index) => (
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
						<p>{invoiceData.total}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
