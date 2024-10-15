import {
	allInvoices,
	updateInvoiceStatus,
	createNewInvoice,
	getInvoiceById,
} from "@/lib/actions";
import { type NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl;
	const query = searchParams.get("id");
	let data;

	if (query) {
		data = await getInvoiceById(query);
	} else {
		data = await allInvoices();
	}

	return Response.json({ data });
}

export async function POST(request: NextRequest) {
	const [action, data] = await request.json();

	switch (action) {
		case "updateInvoiceStatus":
			return await updateInvoiceStatus(data);
		case "createNewInvoice":
			return await createNewInvoice(data);
		default:
			return Response.json({ error: "Invalid action" }, { status: 400 });
	}
}
