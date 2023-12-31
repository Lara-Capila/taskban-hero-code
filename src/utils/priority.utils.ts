import { Priority } from "../@types/card";

const priorityToTextColorMapping: Record<Priority, string> = {
	high: "text-high-priority",
	medium: "text-medium-priority",
	low: "text-low-priority",
};

const priorityToBorderColorMapping: Record<Priority, string> = {
	high: "border-high-priority",
	medium: "border-medium-priority",
	low: "border-low-priority",
};

function getTextColorByPriority(priority: Priority): string {
	return priorityToTextColorMapping[priority] || "inherit";
}

function getBorderColorByPriority(priority: Priority): string {
	return priorityToBorderColorMapping[priority] || "inherit";
}

export { getBorderColorByPriority, getTextColorByPriority };
