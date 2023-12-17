import { HTMLAttributes, ReactNode } from "react";

interface ActionsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Content = ({ children, ...rest }: ActionsProps) => {
	return (
		<div className="py-10 flex flex-col gap-6" {...rest}>
			{children}
		</div>
	);
};

export default Content;
