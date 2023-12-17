"use client";

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { Task } from "../types/card.types";

interface TasksContextProps {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
}

const defaultValues: TasksContextProps = {
	tasks: [],
	setTasks: (value) => value,
};

const TasksContext = createContext<TasksContextProps>(defaultValues);

export const useTasks = () => {
	const context = useContext(TasksContext);

	if (!context) {
		throw new Error("useTasks deve ser usado dentro de um TasksContext");
	}
	return context;
};

export const TasksProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>(defaultValues.tasks);

	return (
		<TasksContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TasksContext.Provider>
	);
};
