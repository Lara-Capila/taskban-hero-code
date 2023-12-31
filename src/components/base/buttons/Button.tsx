import { ButtonHTMLAttributes, ReactNode } from "react";

type Visual = "outline" | "contained";
type Color = "warning" | "danger" | "success" | "default";
type Font = "xs" | "sm";

const visualVariants = {
	outline: "bg-white border-2",
	contained: "text-white border-none",
};

const colorVariants = {
	warning: "bg-medium-priority text-medium-priority border-medium-priority",
	danger: "bg-high-priority text-high-priority border-high-priority",
	success: "bg-low-priority text-low-priority border-low-priority",
	default: "bg-primary text-primary border-primary",
};

const fontSizeVariants = {
	xs: "text-xs",
	sm: "text-sm",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	visual?: Visual;
	color?: Color;
	rounded?: boolean;
	children: ReactNode;
	fontSize?: Font;
}

const Button = ({
	visual = "contained",
	color = "default",
	rounded = false,
	fontSize,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={`
        py-2 w-full
        ${visualVariants[visual]}
        ${colorVariants[color]}
        ${rounded ? "rounded-3xl" : ""}
        ${fontSize ? fontSizeVariants[fontSize] : ""}
      `}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
