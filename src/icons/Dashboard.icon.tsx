import { IconProps } from "../@types/icons";

export default function Dashboard({ className, ...rest }: IconProps) {
	return (
		<svg
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`w-6 h-6 fill-current ${className}`}
			{...rest}
		>
			<path d="M22.9166 20.8333H11.4583V13.5416H22.9166V20.8333ZM9.37498 20.8333H2.08331V13.5416H9.37498V20.8333ZM22.9166 11.4583H2.08331V4.16663H22.9166V11.4583Z" />
		</svg>
	);
}
