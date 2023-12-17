"use client";

import { useModal } from "../hooks/useModal";
import AddTaskModal from "./AddTask.modal";

const Header = () => {
	const { toggleModal, isModalOpen } = useModal();

	return (
		<header className="text-gray-600 body-font bg-primary max-h-[90px] p-4 flex justify-end items-center">
			<button
				onClick={toggleModal}
				className="
          inline-flex items-center bg-secondary 
          border-0 py-[18px] px-5 
          focus:outline-none cursor-pointer
          rounded-[10px] text-base mt-4 md:mt-0 font-medium text-white
				"
			>
				+ Novo Card
			</button>

			<AddTaskModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
		</header>
	);
};

export default Header;
