import { Task } from "../types/card.types";

let tasks: Task[] = [];

export const getTasks = (): Task[] => {
	return tasks;
};

export const addTasks = (task: Task): number => {
	const generateId = tasks.length + 1;

	task.id = generateId;
	tasks.push(task);

	return generateId;
};
