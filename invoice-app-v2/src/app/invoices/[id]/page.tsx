import Link from "next/link";
import UpdateStatusButton from "@/components/UpdateStatusButton";
import DeleteInvoiceButton from "@/components/DeleteInvoiceButton";
import { InvoiceDetails, Item } from "@/lib/types";
import { Suspense } from "react";

export default async function InvoiceId({
	params,
}: { params: { id: string } }) {
	// fetch all data and filter the single invoice data
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const data = await res.json();
	const invoice = data.data.filter(
		(item: InvoiceDetails) => item.id?.toString() === params.id.toString(),
	)[0];

	return (
		<div className="flex flex-col gap-10">
			<nav>
				{/* TODO: use history stack to go back */}
				<Link href="/invoices" className="font-bold text-primary_text">
					&lt; Go back
				</Link>
			</nav>
			<Suspense fallback={<p>Loading...</p>}>
				<section className="flex justify-between bg-background-secondary p-5 rounded-xl place-items-center">
					<div>
						<p>
							Status
							{/* TODO: Remove border after fixing bg opacity */}
							<span
								className={` ml-4 text-primary_text font-semibold rounded-lg px-4  py-2 border-2  ${invoice.status === "pending" ? "text-status-pending border-background-alert_alt bg-background-alert_alt/[50]" : invoice.status === "paid" ? "text-status-success border-status-success" : "text-status:neutral"} `}
							>
								{`${invoice?.status.charAt(0).toUpperCase()}${invoice?.status.slice(1)}`}
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<Link
							href={`/invoices/${invoice?.id}/edit`}
							className="btn-basic text-text-tertiary bg-background-neutral"
						>
							Edit
						</Link>
						<DeleteInvoiceButton invoice={invoice} />
						<UpdateStatusButton invoice={invoice} />
					</div>
				</section>
				<main className="bg-background-secondary p-5 rounded-xl">
					<div>
						<p>
							<span>#</span>
							{invoice?.id}
						</p>
						<p>{invoice?.description}</p>
					</div>
					<div>
						<p>
							{invoice?.senderAddress?.street}, <br />
							{invoice?.senderAddress?.city},<br />
							{invoice?.senderAddress?.postCode},<br />
							{invoice?.senderAddress?.country} <br />
						</p>
					</div>
					<div>
						<div>
							<p>Invoice Date</p>
							<p>{invoice?.createdAt}</p>
						</div>
						<div>
							<p>Payment Due</p>
							<p>{invoice?.paymentDue}</p>
						</div>
					</div>
					<div>
						<p>Bill To</p>
						<div>
							<p>{invoice?.clientAddress?.street}</p>
							<p>{invoice?.clientAddress?.city}</p>
							<p>{invoice?.clientAddress?.postCode}</p>
							<p>{invoice?.clientAddress?.country}</p>
						</div>
					</div>
					<div>
						<p>Sent to</p>
						<p>{invoice?.clientEmail}</p>
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
								{invoice.items?.map((item: Item, index: string) => (
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
			</Suspense>
		</div>
	);
}
