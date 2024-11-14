import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-24 justify-between place-items-center">
			<form className="flex flex-col place-items-center ">
				<fieldset className="flex flex-col gap-4 md:place-items-center">
					<legend className="text-accent font-semibold text-secondary_text">
						Login
					</legend>
					<div className="input-label-group w-full ">
						<label htmlFor="username" className="form_label_basic">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="font-bold"
						/>
					</div>
					<div className="input-label-group w-full ">
						<label htmlFor="password" className="form_label_basic">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="font-bold"
						/>
					</div>
				</fieldset>
				<div className="flex flex-row gap-4 ">
					<button
						className="btn-basic bg-accent text-background-secondary w-max"
						type="submit"
						disabled
					>
						Login
					</button>
					<button
						className="btn-basic bg-accent text-background-secondary w-max"
						type="button"
						disabled
					>
						Signup
					</button>
				</div>
			</form>
			<Link
				className="text-[33px] text-accent underline text-center"
				href="/invoices"
			>
				Go to Invoices
			</Link>
		</main>
	);
}
