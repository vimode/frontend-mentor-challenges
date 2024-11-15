import { formatDateMedFormat } from "@/lib/helper";
import { InvoiceDetails } from "@/lib/types";
import Link from "next/link";

export default function InvoiceItem({ invoice }: { invoice: InvoiceDetails }) {
	return (
		<Link href={`/invoices/${invoice.id}`}>
			<li
				key={invoice.id}
				// FIX: border-transparent not working
				className="grid grid-cols-2 grid-rows-3 md:grid-cols-5 md:grid-rows-1 md:place-items-center md:justify-items-start max-w-3xl bg-background-secondary p-4 rounded-lg border border-background-secondary hover:border hover:border-accent hover:drop-shadow-xl hover:transition-shadow "
			>
				<p className=" font-bold row-start-1 row-end-2 col-start-1 col-end-2 md:col-auto md:row-auto">
					<span className="text-text-tertiary">#</span>
					{invoice.id}
				</p>
				<p className=" text-text-tertiary row-start-2 row-end-3 col-span-1 md:col-auto md:row-auto">
					<span>Due</span> {formatDateMedFormat(invoice.paymentDue)}
				</p>
				<p className="text-text-tertiary text-right row-start-1 row-end-2 col-start-2 col-end-3 md:col-auto md:row-auto">
					{invoice.clientName}
				</p>
				<p className="md:justify-self-end mr-4 font-bold row-start-3 row-end-4 col-span-1 md:col-auto md:row-auto">
					${invoice.total}
				</p>
				<p
					className={`row-start-2 row-end-4 col-start-2 col-end-3  md:col-auto md:row-auto text-center font-bold justify-self-end place-self-center w-[100px] px-1 py-2 rounded-lg ${invoice.status === "pending" ? "text-status-pending bg-background-pending_bg" : invoice.status === "draft" ? "text-status-neutral bg-background-neutral_bg" : "text-status-success bg-background-success_bg"}`}
				>
					<span>&bull;</span>
					{`${invoice?.status.charAt(0).toUpperCase()}${invoice?.status.slice(1)}`}
				</p>
				{/* <p className="hidden md:block md:col-auto md:row-auto md:w-1/12 md:justify-self-end"> */}
				{/* 	&gt; */}
				{/* </p> */}
			</li>
		</Link>
	);
}
