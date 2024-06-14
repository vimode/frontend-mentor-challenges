import styles from "./page.module.css";

export default function InvoicesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className={styles.main}>
			<section className={styles.sidebar}>
				<div className={styles.nav}>
					<p>T</p>
					<img
						className={styles.profile_image}
						src="./assets/image-avatar.jpg"
					/>
				</div>
			</section>
			{children}
		</main>
	);
}
