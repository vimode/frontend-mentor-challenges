import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({
	weight: "variable",
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
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={`primary-text-size ${spartan.className}`}>
				{children}
			</body>
		</html>
	);
}
