export function formatDate(dbdate: Date): string {
	const date = new Date(dbdate);
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	return `${yyyy}-${mm}-${dd}`;
}

export function formatDateMedFormat(dbdate: string | Date): string {
	const date = new Date(dbdate);
	if (isNaN(date.getTime())) {
		const defaultDate = new Date();
		return formatDateMedFormat(defaultDate);
	}
	const yyyy = date.getFullYear();
	const mm = Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
	const dd = String(date.getDate()).padStart(2, "0");
	return `${dd} ${mm} ${yyyy}`;
}

export function generateInvoiceNumber(): string {
	const letters = String.fromCharCode(
		...Array.from({ length: 2 }, () => Math.floor(Math.random() * 26) + 65),
	);
	const numbers = Array.from({ length: 4 }, () =>
		Math.floor(Math.random() * 10),
	).join("");
	const invoiceNumber = letters + numbers;
	return invoiceNumber;
}
