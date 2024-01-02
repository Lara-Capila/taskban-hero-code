import { Priority } from "../../../@types/task";
import Time from "../../../icons/Time.icon";
import { formatDateToBrazilianFormat } from "../../../utils/functions.utils";
import {
	getBorderColorByPriority,
	getTextColorByPriority,
} from "../../../utils/priority.utils";
import Tooltip from "../Tooltip";

const Footer = ({
	expirationDate,
	priority,
}: {
	expirationDate: Date;
	priority: Priority;
}) => {
	const defaultClass = "uppercase py-2 px-5 rounded-[20px] border";
	const textcolorByPriority = getTextColorByPriority(priority);
	const borderColorByPriority = getBorderColorByPriority(priority);

	const dateFormatted = formatDateToBrazilianFormat(expirationDate);
	const currentDate = new Date();
	const isOverdue = expirationDate ? new Date(expirationDate) <= currentDate : false;

	return (
		<div className="flex items-center justify-between text-xs">
			<Tooltip message={isOverdue ? "Está tarefa está atrasada!" : `Data de entrega: ${dateFormatted}`}>
				<div className={`flex items-center gap-2 ${isOverdue ? "text-high-priority" : "text-inherit"}`}>
					<Time />
					<span className="text-sm font-semibold">{dateFormatted}</span>
				</div>
			</Tooltip>

			<div className={`${defaultClass} ${textcolorByPriority} ${borderColorByPriority}`}>
				{priority}
			</div>
		</div>
	);
};

export default Footer;
