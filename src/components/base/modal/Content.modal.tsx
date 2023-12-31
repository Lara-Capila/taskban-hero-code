import { HTMLAttributes, ReactNode } from "react";

interface ActionsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Content = ({ children, ...rest }: ActionsProps) => {
	return (
		<div style={{ padding: '40px 0px' }} {...rest} >
			{children}
		</div>
	);
};

export default Content;
