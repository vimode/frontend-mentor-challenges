import {
	allInvoices,
	updateInvoiceStatus,
	createNewInvoice,
} from "@/lib/action";

export const dynamic = "force-static";

export async function GET() {
	let data = await allInvoices();

	return Response.json({ data });
}

export async function POST(request) {
	const [action, data] = await request.json();

	switch (action) {
		case "updateInvoiceStatus":
			return await updateInvoiceStatus(data);
		case "createNewInvoice":
			return await createNewInvoice(data);
		default:
			return Response.json({ error: "Invalid cction" }, { status: 400 });
	}
}
