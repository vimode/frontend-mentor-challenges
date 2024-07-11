export function formatDate(dbdate: Date) {
	const date = new Date(dbdate);
	const yyyy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const dd = String(date.getDate()).padStart(2, "0");
	return `${yyyy}-${mm}-${dd}`;
}

export function formatDateMedFormat(dbdate: Date) {
	const date = new Date(dbdate);
	const yyyy = date.getFullYear();
	const mm = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
	const dd = String(date.getDate()).padStart(2, "0");
	return `${dd} ${mm} ${yyyy}`;
}
