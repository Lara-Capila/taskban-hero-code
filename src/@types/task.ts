
export type Priority = "high" | "medium" | "low";

export type Task = {
	id?: string;
	title: string;
	description: string;
	expirationDate: Date | null;
	priority: Priority | null;
};
