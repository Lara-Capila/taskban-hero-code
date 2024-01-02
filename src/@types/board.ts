import { Task } from "./task";

export type BoardStatus = "toDo" | "doing" | "QA" | "done";

export type BoardDataByStatus = { [key in BoardStatus]: Task[] };