import Link from "next/link";
import UpdateStatusButton from "@/components/UpdateStatusButton";
import DeleteInvoiceButton from "@/components/DeleteInvoiceButton";
import { InvoiceDetails, Item } from "@/lib/types";
import { Suspense } from "react";
import { formatDateMedFormat } from "@/lib/helper";

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
				{/* Invoice Actions */}
				<section className="flex md:justify-between md:flex-row flex-col bg-background-secondary p-5 rounded-xl md:place-items-center gap-8">
					<div>
						<p>
							Status
							<span
								className={` ml-4 text-primary_text font-semibold rounded-lg px-4  py-2   ${invoice?.status === "pending" ? "text-status-pending bg-background-pending_bg" : invoice?.status === "paid" ? "text-status-success bg-background-success_bg" : "text-status-neutral bg-background-neutral_bg"} `}
							>
								<span>&bull;</span>
								{`${invoice?.status.charAt(0).toUpperCase()}${invoice?.status.slice(1)}`}
							</span>
						</p>
					</div>
					<div className="flex gap-2 place-self-center">
						<Link
							href={`/invoices/${invoice?.id}/edit`}
							className="btn-basic text-text-tertiary bg-background-neutral hover:bg-text-tertiary hover:text-background-neutral transition-colors"
						>
							Edit
						</Link>
						<DeleteInvoiceButton invoice={invoice} />
						<UpdateStatusButton invoice={invoice} />
					</div>
				</section>

				{/* Invoice Details */}
				<main className="bg-background-secondary p-5 rounded-xl">
					<div className="flex flex-col gap-7 md:flex-row md:justify-between">
						<div>
							<p className="text-primary_text font-bold">
								<span className="text-text-tertiary">#</span>
								{invoice?.id}
							</p>
							<p className="text-secondary_text text-text-secondary">
								{invoice?.description}
							</p>
						</div>
						<p className="text-secondary_text text-text-secondary md:text-right">
							{invoice?.senderAddress?.street}, <br />
							{invoice?.senderAddress?.city},<br />
							{invoice?.senderAddress?.postCode},<br />
							{invoice?.senderAddress?.country} <br />
						</p>
					</div>
					<div className="flex flex-row flex-wrap gap-9 md:gap-28 my-6">
						<div className="flex flex-col gap-3 md:gap-5">
							<div className="flex flex-col gap-1 md:gap-2">
								<p className="text-secondary_text text-text-secondary">
									Invoice Date
								</p>
								<p className="text-primary_text font-bold">
									{formatDateMedFormat(invoice?.createdAt)}
								</p>
							</div>
							<div className="flex flex-col gap-1 md:gap-2">
								<p className="text-secondary_text text-text-secondary">
									Payment Due
								</p>
								<p className="text-primary_text font-bold">
									{formatDateMedFormat(invoice?.paymentDue)}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-secondary_text text-text-secondary">Bill To</p>
							<p className="text-secondary_text text-text-secondary">
								<span className="text-primary_text text-text font-bold">
									{invoice?.clientName}
								</span>
								<br />
								{invoice?.clientAddress?.street} <br />
								{invoice?.clientAddress?.city}
								<br />
								{invoice?.clientAddress?.postCode}
								<br />
								{invoice?.clientAddress?.country}
								<br />
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-secondary_text text-text-secondary">Sent to</p>
							<p className="text-primary_text font-bold">
								{invoice?.clientEmail}
							</p>
						</div>
					</div>

					<div>
						<div className="table bg-background-neutral w-full rounded-t-lg p-5">
							<div className="table-header-group">
								<div className="table-row text-secondary_text text-text-secondary">
									<div className="table-cell w-1/2 py-2">Item Name</div>
									<div className="table-cell w-auto py-2 text-center">QTY.</div>
									<div className="table-cell w-1/5 py-2 text-end">Price</div>
									<div className="table-cell w-1/5 py-2 text-end">Total</div>
								</div>
							</div>
							<div className="table-row-group font-bold">
								{invoice.items?.map((item: Item, index: string) => (
									<div className="table-row" key={index}>
										<div className="table-cell w-1/2 py-2">{item.name}</div>
										<div className="table-cell text-secondary_text text-text-secondary w-auto text-center py-2">
											{item.quantity}
										</div>
										<div className="table-cell text-secondary_text text-text-secondary w-1/5 py-2 text-end">
											{item.price}
										</div>
										<div className="table-cell text-secondary_text  w-1/5 py-2 text-end">
											{item.total}
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-status-neutral flex flex-row justify-between text-background-neutral items-center rounded-b-lg p-5">
							<p>Amount Due</p>
							<p className="text-[28px]">{invoice.total}</p>
						</div>
					</div>
				</main>
			</Suspense>
		</div>
	);
}
