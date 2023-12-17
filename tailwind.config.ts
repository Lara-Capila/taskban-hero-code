import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#48409E",
				secondary: "#BFB9FF",
				background: "#F1F0FF",
				"background-card": "#F2F2F2",
				"high-priority": "#FF7979",
				"low-priority": "#2BA700",
				"medium-priority": "#FFBA53",
				"dark-gray": "#6F6F6F",
			},
			fontFamily: {
				k2D: ["var(--k2D)"],
				libreFranklin: ["var(--libre-franklin)"],
			},
			boxShadow: {
				default: "0px 4px 10px rgba(0, 0, 0, 0.10)",
				sidebar: "4px 0px 30px 10px rgba(0, 0, 0, 0.05)",
				card: "0px 10px 10px rgba(0, 0, 0, 0.05)",
			},
		},
	},
	plugins: [],
};
export default config;
