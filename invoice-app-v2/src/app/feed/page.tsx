"use client";
export default function Feed() {
	async function handleSubmit(e) {
		e.preventDefault();
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/feed/api`,
			{
				method: "POST",
			},
		);
		const data = await response.json();
		console.log(data.success);
	}
	return (
		<section className="p-10">
			<ul className="flex flex-col gap-8">
				<li>
					<h2>Step 1: Add this to your .env</h2>
					<code>
						MONGODB_URI_TEST=mongodb+srv://username:password@cluster0.s3rpaev.mongodb.net/vimo_invoice_app_fm?retryWrites=true&w=majority
					</code>
					<p>
						This will add a new database by name &nbsp;
						<code>vimo_invoice_app_fm</code>
					</p>
				</li>
				<li>
					<h2>Step 2: Feed the db with dummy data</h2>
					<div className="flex items-center flex-col">
						<button
							className="text-background-secondary bg-accent px-4 py-2 rounded w-max uppercase"
							onClick={handleSubmit}
						>
							Feed db
						</button>
					</div>
					<p>
						Open your browser console to make sure its done, it should return
						&nbsp;<code>true</code>.
					</p>
					<p>
						This will add a new collection <code>invoices</code> in the
						previously created database with some dummy data.
					</p>
				</li>
				<li>
					<h2>Step 3: Change env in dbConnect</h2>
					<p>Go to /src/lib/dbConnect.ts</p>
					<p>to update the env</p>
					<code>const MONGODB_URI = process.env.MONGODB_URI!;</code>
					<p>to</p>
					<code>const MONGODB_URI = process.env.MONGODB_URI_TEST!;</code>
				</li>
				<li>
					<h3>
						After this <code>/invoices</code> should show some invoices.
					</h3>
				</li>
			</ul>
		</section>
	);
}
