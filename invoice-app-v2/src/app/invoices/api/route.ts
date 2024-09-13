import { allInvoices } from "@/lib/action";

export async function GET() {
	let data = await allInvoices();

	return Response.json({ data });
}
