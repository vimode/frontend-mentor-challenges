import data from "@/data.json";
import styles from "./styles.module.css";

export default function Invoices() {
	return (
		<section className={styles.invoice_wrapper}>
			<div className={styles.invoice_header}>
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
				<ul className={styles.invoice_inner_wrapper}>
					{data.map((invoice) => (
						<li key={invoice.id} className={styles.invoice}>
							<p>{invoice.id}</p>
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
				<div>Nothing</div>
			)}
		</section>
	);
}
