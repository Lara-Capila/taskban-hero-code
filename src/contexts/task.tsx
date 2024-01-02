"use client";

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { Task } from "../@types/task";

interface TaskContextProps {
	task: Task;
	setTask: Dispatch<SetStateAction<Task>>;
	clearTaskData: () => void;
	toggleModal: () => void;
	isModalOpen: boolean;
}

const defaultValues: TaskContextProps = {
	task: {
		id: undefined,
		title: '',
		description: '',
		expirationDate: null,
		priority: null,
	},
	setTask: (value) => value,
	clearTaskData: () => { },
	toggleModal: () => { },
	isModalOpen: false
};

const TaskContext = createContext<TaskContextProps>(defaultValues);

export const useTask = () => {
	const context = useContext(TaskContext);

	if (!context) {
		throw new Error("useTask deve ser usado dentro de um TaskContext");
	}
	return context;
};

export const TasksProvider = ({ children }: { children: ReactNode; }) => {
	const [task, setTask] = useState<Task>(defaultValues.task);
	const [isModalOpen, setModalOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	const clearTaskData = () => {
		setTask({
			id: '',
			title: '',
			description: '',
			expirationDate: null,
			priority: null,
		});
	};

	return (
		<TaskContext.Provider value={{ task, setTask, clearTaskData, toggleModal, isModalOpen }}>
			{children}
		</TaskContext.Provider>
	);
};
