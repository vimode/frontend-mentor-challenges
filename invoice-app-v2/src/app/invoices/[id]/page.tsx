export default async function InvoiceId({
	params,
}: { params: { id: string } }) {
	const res = await fetch(`${process.env.API_URL}/invoices/api`);
	const data = await res.json();
	const invoice = data.data.filter(
		(item) => item.id.toString() === params.id.toString(),
	)[0];
	console.log(invoice);

	return <>Invoice id: {invoice.id}</>;
}
