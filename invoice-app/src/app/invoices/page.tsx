"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import NewInvoiceForm from "@/components/NewInvoiceForm.tsx";
import InvoiceItem from "@/components/InvoiceItem.tsx";

export default function Invoices() {
	const [invoices, setInvoices] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/invoices", {
				method: "GET",
			});
			if (response.ok) {
				const { data } = await response.json();
				setInvoices(data);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const openDialog = () => {
		if (dialogRef.current) dialogRef.current.showModal();
	};

	const closeDialog = () => {
		if (dialogRef.current) dialogRef.current.close();
	};

	return (
		<section className={`content_wrapper  ${styles.invoice_wrapper}`}>
			<div className={styles.invoice_header}>
				<div>
					<h1>Invoices</h1>
					<p>There are {invoices.length} total invoices</p>
				</div>
				<div className={styles.invoice_options}>
					<p>Filter</p>
					<button
						className={`primary-text-size bold-text ${styles.buttonPrimary}`}
						onClick={openDialog}
					>
						<div>
							<img src="./assets/icon-plus.svg" />
							<p>New Invoice</p>
						</div>
					</button>
				</div>
			</div>
			{invoices ? (
				<ul className={styles.invoice_inner_wrapper}>
					{invoices.map((invoice) => (
						<InvoiceItem key={invoice.id} data={invoice} />
					))}
				</ul>
			) : (
				<div>
					<img src="./assets/illustration-empty.svg" alt="No invoices" />
				</div>
			)}
			<dialog id="newInvoiceDialog" ref={dialogRef}>
				<NewInvoiceForm handleClose={closeDialog} />
			</dialog>
		</section>
	);
}
