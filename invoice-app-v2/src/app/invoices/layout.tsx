import Link from "next/link";

export default function InvoicesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col md:flex-row w-screen min-h-screen">
			<section className=" w-screen md:min-h-screen md:max-w-[100px] md:rounded-r-xl bg-status-neutral">
				<div className="flex flex-row md:flex-col items-center h-full justify-between md:place-content-between md:m-h-screen">
					<div className="bg-accent w-max md:w-full rounded-r-xl">
						<Link href="/invoices">
							<img src="/assets/logo.svg" className="m-auto p-8" />
						</Link>
					</div>
					<img
						src="/assets/image-avatar.jpg"
						className="rounded-full w-[10%] mr-5 md:mr-0 md:w-1/2"
					/>
				</div>
			</section>
			<main className="flex flex-col w-4/5 md:w-full max-w-[700px] mx-auto py-11">
				{children}
			</main>
		</main>
	);
}
