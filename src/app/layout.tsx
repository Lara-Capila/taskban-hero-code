import type { Metadata } from "next";
import { K2D, Libre_Franklin } from "next/font/google";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { TasksProvider } from "../contexts/tasks";
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
			<body>
				<div className="dark:bg-boxdark-2 dark:text-bodydark">
					<div className="flex h-screen overflow-hidden">
						<TasksProvider>
							<SideBar />
							<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
								<Header />
								<main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
									{children}
								</main>
							</div>
						</TasksProvider>
					</div>
				</div>
			</body>
		</html>
	);
}
