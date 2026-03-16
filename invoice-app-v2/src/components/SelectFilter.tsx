"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectFilter() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const current = searchParams?.get("filter") ?? "";
    setSelectedFilter(current);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (selectedFilter) params.set("filter", selectedFilter);
    else params.delete("filter");

    const newQuery = params.toString();
    const newUrl = newQuery ? `${pathname}?${newQuery}` : pathname;

    const currentUrl = searchParams ? (searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname) : pathname;
    if (newUrl === currentUrl) return;

    router.push(newUrl);
  }, [selectedFilter, pathname, router]);
  
  return (
    <select
      name="status"
      id="status-select"
      value={selectedFilter}
      onChange={(e) => setSelectedFilter(e.target.value)}
      className="p-3 bg-transparent place-self-center"
    >
      <option value="">Filter by Status</option>
      <option value="">All</option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  );
}
