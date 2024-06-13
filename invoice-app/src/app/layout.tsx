import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({
	weight: ["500", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Invoice",
	description: "FM - Invoice App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={spartan.className}>{children}</body>
		</html>
	);
}
