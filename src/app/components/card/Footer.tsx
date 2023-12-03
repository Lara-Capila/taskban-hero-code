import Time from "../../icons/Time.icon";
import { Priority } from "../../types/card.types";
import {
	getBorderColorByPriority,
	getTextColorByPriority,
} from "../../utils/card.utils";

const Footer = ({
	expirationDate,
	priority,
}: {
	expirationDate: string;
	priority: Priority;
}) => {
	const isHighPriority = priority === "high";
	const defaultClass = "uppercase py-2 px-5 rounded-[20px] border";
	const textcolorByPriority = getTextColorByPriority(priority);
	const borderColorByPriority = getBorderColorByPriority(priority);

	const highPriority = (
		<div className={`${defaultClass} bg-high-priority text-white`}>
			{priority}
		</div>
	);

	return (
		<div className="flex items-center justify-between text-xs">
			<div
				className={`flex items-center gap-2 ${
					isHighPriority ? textcolorByPriority : ""
				}`}
			>
				<Time />
				{expirationDate}
			</div>

			{isHighPriority ? (
				highPriority
			) : (
				<div
					className={`${defaultClass} ${borderColorByPriority} ${textcolorByPriority}`}
				>
					{priority}
				</div>
			)}
		</div>
	);
};

export default Footer;
