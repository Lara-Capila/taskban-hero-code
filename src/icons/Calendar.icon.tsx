import { IconProps } from "../types/icons.types";

export default function Calendar({ className, ...rest }: IconProps) {
	return (
		<svg
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`w-6 h-6 fill-current ${className}`}
			{...rest}
		>
			<path d="M19.0625 11.1875H16.4375V13.8125H19.0625V11.1875Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.9375 2H7.25V3.3125H17.75V2H19.0625V3.3125H21.6875H23V4.625V21.6875V23H21.6875H3.3125H2V21.6875V4.625V3.3125H3.3125H5.9375V2ZM21.6875 4.625H3.3125V21.6875H21.6875V4.625Z"
			/>
			<path d="M19.7188 6.59375H5.28125V9.21875H19.7188V6.59375Z" />
		</svg>
	);
}
