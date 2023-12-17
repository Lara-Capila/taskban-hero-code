import { HTMLAttributes, ReactNode } from "react";

interface ActionsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Actions = ({ children, ...rest }: ActionsProps) => {
	return (
		<div className={`flex gap-8 ${rest.className}`} {...rest}>
			{children}
		</div>
	);
};

export default Actions;
