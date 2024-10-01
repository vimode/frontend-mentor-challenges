import InvoiceForm from "@/components/Form/InvoiceForm";
import { InvoiceDetails } from "@/lib/types";
import Link from "next/link";

export default async function EditInvoice({
	params,
}: { params: { id: string } }) {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const data = await res.json();
	const invoice = data.data.filter(
		(item: InvoiceDetails) => item.id?.toString() === params.id.toString(),
	)[0];

	return (
		<section>
			<nav>
				{/* TODO: use history stack to go back */}
				<Link href="/invoices">&lt; Go back</Link>
			</nav>
			<main>
				<h2>
					Edit <span>#</span>
					{invoice.id}
				</h2>
				<InvoiceForm invoiceData={invoice} />
			</main>
		</section>
	);
}
