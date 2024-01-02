"use client";

import { useTask } from "../contexts/task";


const Header = () => {
	const { toggleModal } = useTask();

	return (
		<header className="text-gray-600 body-font bg-primary max-h-[90px] p-4 flex justify-end items-center">
			<button
				onClick={toggleModal}
				className="
          inline-flex items-center bg-secondary 
          border-0 py-2 px-5 hover:scale-110
          focus:outline-none cursor-pointer
          rounded-[10px] text-base mt-4 md:mt-0
					text-primary font-semibold tracking-wider
				"
			>
				Criar
			</button>
		</header>
	);
};

export default Header;
