import { ReactNode } from "react";

const CardRoot = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-white shadow-card rounded-xl min-h-[150px] min-w-[300px] p-5 hover:bg-gray-100">
			{children}
		</div>
	);
};

export default CardRoot;
