import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			background: {
				DEFAULT: "var(--background)",
				secondary: "var(--secondary-background)",
				neutral: "var(--neutral-bg)",
				neutral_alt: "var(--neutral-bg-alt)",
				alert: "var(--alert-bg)",
				alert_alt: "var(--alert-bg-alt)",
			},
			accent: {
				DEFAULT: "var(--accent)",
				alt: "var(--accent-alt)",
			},
			status: {
				success: "var(--success)",
				pending: "var(--pending)",
				neutral: "var(--neutral)",
			},
			text: {
				DEFAULT: "var(--primary-text)",
				secondary: "var(--secondary-text)",
				tertiary: "var(--tertiary-text)",
			},
		},
		fontSize: {
			primary_text: ["20px", { lineHeight: "27px", letterSpacing: "-0.25px" }],
			secondary_text: [
				"18px",
				{ lineHeight: "20px", letterSpacing: "-0.23px" },
			],
			tertiary_text: [
				"16px",
				{ lineHeight: "24px", letterSpacing: "-0.8px", fontWeight: "700" },
			],
		},
	},
	plugins: [],
};
export default config;
