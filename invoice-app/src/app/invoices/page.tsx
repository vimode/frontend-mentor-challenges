"use client";

import { useState } from "react";
import data from "@/data.json";
import styles from "./styles.module.css";
import AddInvoiceModal from "@/components/AddInvoiceModal";
import NewInvoiceForm from "@/components/NewInvoiceForm";

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
					<button
						className={`primary-text-size bold-text ${styles.buttonPrimary}`}
						onClick={() => setAddInvoiceModalOpen(true)}
					>
						<div>
							<img src="./assets/icon-plus.svg" />
							<p>New Invoice</p>
						</div>
					</button>
				</div>
			</div>
			{data ? (
				<ul className={styles.invoice_inner_wrapper}>
					{data.map((invoice) => (
						<li key={invoice.id} className={styles.invoice}>
							<p className={`bold-text primary-text-size ${styles.title}`}>
								<span className={styles.invoiceid}>#</span>
								{invoice.id}
							</p>
							<p>{invoice.paymentDue}</p>
							<p>{invoice.clientName}</p>
							<p className={`tertiary-text-size`}>{invoice.total}</p>
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
			{/* Modal starts here */}
			{addInvoiceModalOpen && (
				<AddInvoiceModal
					isOpen={addInvoiceModalOpen}
					handleClose={() => setAddInvoiceModalOpen(false)}
				>
					<NewInvoiceForm handleClose={() => setAddInvoiceModalOpen(false)} />
				</AddInvoiceModal>
			)}
		</section>
	);
}
