export default function InvoicesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="flex flex-row w-screen min-h-screen">
			<section className="min-h-screen max-w-[100px] rounded-r-lg bg-status-neutral">
				<div className="flex flex-col items-center h-full place-content-between">
					<p>T</p>
					<img src="/assets/image-avatar.jpg" className="rounded-full w-1/2" />
				</div>
			</section>
			<main className="flex flex-col place-content-center w-full max-w-[700px] m-auto">
				{children}
			</main>
		</main>
	);
}
