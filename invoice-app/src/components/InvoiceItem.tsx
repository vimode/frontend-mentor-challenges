"use client";
import styles from "./InvoiceItem.module.css";

export default function InvoiceItem({ data }) {
	return (
		<li className={styles.invoice}>
			<p className={`bold-text primary-text-size ${styles.title}`}>
				<span className={styles.invoiceid}>#</span>
				{data.id}
			</p>
			<p>{data.paymentDue}</p>
			<p>{data.clientName}</p>
			<p className={`tertiary-text-size`}>{data.total}</p>
			<p>{data.status}</p>
			<p>
				<a href={`/invoices/${data.id}`}>&gt;</a>
			</p>
		</li>
	);
}
