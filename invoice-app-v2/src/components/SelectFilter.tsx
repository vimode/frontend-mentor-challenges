"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectFilter() {
	const [selectedFilter, setSelectedFilter] = useState("");
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString());
		if (selectedFilter) {
			params.set("filter", selectedFilter);
		} else {
			params.delete("filter");
		}
		router.push(pathname + "?" + params.toString());
	}, [selectedFilter, pathname, router, searchParams]);

	return (
		<select
			name="status"
			id="status-select"
			onChange={(e) => setSelectedFilter(e.target.value)}
			className="h-max w-max place-self-center bg-transparent"
		>
			<option value="">Filter by Status</option>
			<option value="paid">Paid</option>
			<option value="pending">Pending</option>
			<option value="draft">Draft</option>
			<option value="">Reset</option>
		</select>
	);
}