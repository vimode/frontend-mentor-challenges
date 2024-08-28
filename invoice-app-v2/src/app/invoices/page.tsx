export default function Invoices() {
	return (
		<div>
			<div>Sidebar</div>
			<main>
				<div>
					<div>
						<h1>Invoices</h1>
						<p>There are 7 total invoices</p>
					</div>
					<div>
						<div>
							<p>Filter</p>
							<button>New Invoice</button>
						</div>
					</div>
				</div>
				<section>
					<ul>
						<li>
							<p>#Invoice id</p>
							<p>Invoice Date</p>
							<p>Client Name</p>
							<p>Invoice Total</p>
							<p>Invoice Status</p>
							<a href="#">{`>`}</a>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
