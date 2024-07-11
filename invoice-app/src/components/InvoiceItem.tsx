"use client";
import styles from "./InvoiceItem.module.css";
import { formatDateMedFormat } from "@/utils/helper.ts";

export default function InvoiceItem({ data }) {
	let statusClass =
		data.status === "paid"
			? "styles.paid"
				? data.status === "pending"
				: "styles.pending"
			: "styles.draft";

	return (
		<li className={styles.invoice}>
			<p className={`bold-text primary-text-size ${styles.title}`}>
				<span className={styles.invoiceid}>#</span>
				{data.id}
			</p>
			<p>
				<span>Due</span> {formatDateMedFormat(data.paymentDue)}
			</p>
			<p>{data.clientName}</p>
			<p className={`tertiary-text-size`}>{data.total}</p>
			<p className={`${statusClass}`}>
				<span>&bull;</span>
				{data.status}
			</p>
			<p>
				<a href={`/invoices/${data.id}`}>&gt;</a>
			</p>
		</li>
	);
}
