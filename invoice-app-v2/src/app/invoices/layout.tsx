export default function InvoicesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="flex flex-row w-screen h-full">
			<section className="h-full max-w-100px rounded-r-lg bg-status-neutral">
				<div className="flex flex-col items-center h-full place-content-end">
					<p>T</p>
					<img src="/assets/image-avatar.jpg" className="rounded-full w-1/2" />
				</div>
			</section>
			{children}
		</main>
	);
}
