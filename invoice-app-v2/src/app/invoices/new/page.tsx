import InvoiceForm from "@/components/Form/InvoiceForm";
import Link from "next/link";

export default async function NewInvoice() {
	return (
		<section>
			<nav>
				{/* TODO: use history stack to go back */}
				<Link href="/invoices">&lt; Go back</Link>
			</nav>
			<main>
				<h2>New Invoice</h2>
				<InvoiceForm />
			</main>
		</section>
	);
}
