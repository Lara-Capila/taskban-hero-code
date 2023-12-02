import { IconProps } from "../types/icons.types";

export default function Time({ linearGradient }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
				fill={!linearGradient ? "#6F6F6F" : "url(#paint0_linear_1_36)"}
			/>
			<path
				d="M13 7H11V13H17V11H13V7Z"
				fill={!linearGradient ? "#6F6F6F" : "url(#paint0_linear_1_36)"}
			/>
			<linearGradient
				id="paint0_linear_1_36"
				x1="1.99994"
				y1="12.9999"
				x2="22.9999"
				y2="12.9999"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#48409E" />
				<stop offset="1" stop-color="#5142F1" />
			</linearGradient>
		</svg>
	);
}
