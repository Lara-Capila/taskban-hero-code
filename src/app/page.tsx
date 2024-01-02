"use client";

import AddTaskModal from "../components/AddTask.modal";
import Task from "../components/Task.card";
import { useBoard } from "../contexts/board";
import { useTask } from "../contexts/task";

export default function Home() {
	const { boardData } = useBoard();
	const { toggleModal, isModalOpen } = useTask();

	return (
		<section className="flex items-center">
			<Task boardData={boardData} />

			<AddTaskModal
				isModalOpen={isModalOpen}
				toggleModal={toggleModal}
			/>
		</section>
	);
}
