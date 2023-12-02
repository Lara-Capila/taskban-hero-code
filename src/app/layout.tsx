import type { Metadata } from "next";
import { K2D, Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--libre-franklin",
});

const k2D = K2D({
	weight: "700",
	subsets: ["latin"],
	variable: "--k2D",
});

export const metadata: Metadata = {
	title: "TASKBAN",
	description: "Gerencie suas tarefas!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-br"
			className={`${k2D.variable} ${libreFranklin.variable} font-libreFranklin`}
		>
			<body>{children}</body>
		</html>
	);
}
