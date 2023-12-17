"use client";

import { useEffect } from "react";
import ContainerCard from "../components/ContainerCard";
import { useTasks } from "../contexts/tasks";
import { useModal } from "../hooks/useModal";

export default function Home() {
	const { tasks, setTasks } = useTasks();
	const { isModalOpen, toggleModal } = useModal();

	useEffect(() => {
		const getTasks = async () => {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_PATH_URL_BACKEND}/api/taskban`
			);

			const allTasks = await response.json();

			if (!allTasks) return;

			setTasks(allTasks);
		};

		getTasks();
	}, []);

	console.log(tasks);
	return (
		<section className="flex items-center">
			<ContainerCard />
			{/* <Card.Container>
				<Card.Title title="Atualizar Bibliotecas" />
				<Card.Description description="Manter as libs atualizadas para garantir segurança e aproveitar novos recursos" />
				<Card.Footer expirationDate={"25/12/2023"} priority="high" />
			</Card.Container>

			<Card.Container>
				<Card.Title title="Atualizar Bibliotecas" />
				<Card.Description description="Manter as libs atualizadas para garantir segurança e aproveitar novos recursos" />
				<Card.Footer expirationDate={"25/12/2023"} priority="medium" />
			</Card.Container> */}
		</section>
	);
}
