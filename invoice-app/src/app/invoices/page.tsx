"use client";

import { useState } from "react";
import data from "@/data.json";
import styles from "./styles.module.css";
import AddInvoiceModal from "@/components/AddInvoiceModal";

export default function Invoices() {
	const [addInvoiceModalOpen, setAddInvoiceModalOpen] = useState(false);

	return (
		<section className={`content_wrapper  ${styles.invoice_wrapper}`}>
			<div className={styles.invoice_header}>
				<div>
					<h1>Invoices</h1>
					<p>There are 7 total invoices</p>
				</div>
				<div className={styles.invoice_options}>
					<p>Filter</p>
					<button onClick={() => setAddInvoiceModalOpen(true)}>
						New Invoice
					</button>
				</div>
			</div>
			{data ? (
				<ul className={styles.invoice_inner_wrapper}>
					{data.map((invoice) => (
						<li key={invoice.id} className={styles.invoice}>
							<p>
								<span className={styles.invoiceid}>#</span>
								{invoice.id}
							</p>
							<p>{invoice.paymentDue}</p>
							<p>{invoice.clientName}</p>
							<p>{invoice.total}</p>
							<p>{invoice.status}</p>
							<p>
								<a href={`/invoices/${invoice.id}`}>&gt;</a>
							</p>
						</li>
					))}
				</ul>
			) : (
				<div>
					<img src="./assets/illustration-empty.svg" alt="No invoices" />
				</div>
			)}
			{addInvoiceModalOpen && (
				<AddInvoiceModal
					handleClose={() => setAddInvoiceModalOpen(false)}
					isOpen={addInvoiceModalOpen}
				>
					This is a modal
				</AddInvoiceModal>
			)}
		</section>
	);
}
