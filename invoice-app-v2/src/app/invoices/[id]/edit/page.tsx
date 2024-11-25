import InvoiceForm from "@/components/Form/InvoiceForm";
import { getInvoiceById } from "@/lib/actions";
import { InvoiceDetails } from "@/lib/types";
import Link from "next/link";

export default async function EditInvoice({
	params,
}: { params: { id: string } }) {
	const invoicedata = await getInvoiceById(params.id);

	//fix from https://stackoverflow.com/questions/76533055/fetching-data-from-nextjs13-server-component
	const invoice = JSON.parse(JSON.stringify(invoicedata));

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
