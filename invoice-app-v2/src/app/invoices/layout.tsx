import Link from "next/link";

export default function InvoicesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="flex flex-row w-screen min-h-screen">
			<section className="min-h-screen max-w-[100px] rounded-r-xl bg-status-neutral">
				<div className="flex flex-col items-center h-full place-content-between">
					<div className="bg-accent w-full rounded-r-xl">
						<Link href="/invoices">
							<img src="/assets/logo.svg" className="m-auto p-8" />
						</Link>
					</div>
					<img src="/assets/image-avatar.jpg" className="rounded-full w-1/2" />
				</div>
			</section>
			<main className="flex flex-col w-full max-w-[700px] mx-auto py-11">
				{children}
			</main>
		</main>
	);
}
