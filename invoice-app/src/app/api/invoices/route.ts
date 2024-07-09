import { allInvoices } from "@/lib/action";

export async function GET() {
	const data = await allInvoices();

	return Response.json({ data });
}
