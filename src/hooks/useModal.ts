import { useState } from "react";

interface useModalReturn {
	isModalOpen: boolean;
	toggleModal: () => void;
}

export const useModal = (): useModalReturn => {
	const [isModalOpen, setModalOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return {
		isModalOpen,
		toggleModal,
	};
};
