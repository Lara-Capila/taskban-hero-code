"use client";

import AddTaskModal from "../components/AddTask.modal";
import ContainerCard from "../components/ContainerCard";
import { Card } from "../components/base/card";
import { useBoard } from "../contexts/board";
import { useTask } from "../contexts/task";

export default function Home() {
	const { boardData } = useBoard();
	const { toggleModal, isModalOpen } = useTask();

	return (
		<section className="flex items-center">
			<ContainerCard />

			{Object.values(boardData).map((item) => item.map((item1) => (
				<Card.Container key={item1.id}>
					<Card.Title title={item1.title} />
					<Card.Description description={item1.description} />
					<Card.Footer expirationDate={item1.expirationDate!} priority={item1.priority!} />
				</Card.Container>
			)))}

			<AddTaskModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
		</section>
	);
}
