import { type NextRequest } from "next/server";
import { getInvoice } from "@/lib/action";

export async function GET(request: NextRequest, { params }) {
	const invoiceId = params.id;
	try {
		const data = await getInvoice(invoiceId);
		return Response.json({ data });
	} catch (error) {
		console.error(error);
	}
}
