import { Task } from "../@types/card";
import { generateRandomId } from "../utils/functions.utils";

let tasks: Task[] = [];

export const getTasks = (): Task[] => {
	return tasks;
};

export const addTasks = async (task: Task): Promise<string> => {
	const id = generateRandomId();

	task.id = id;
	tasks.push(task);

	console.log(tasks);

	return id;
};
