import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const TextField = ({ label, ...rest }: TextFieldProps) => {
	return (
		<div className="relative">
			<label className="absolute ml-3 -top-3 bg-white px-1 text-sm">
				{label}
			</label>
			<input
				className="
          border border-[#C4C4C4] rounded-md 
          p-2 block w-full mt-0 bg-transparent 
          appearance-none focus:outline-none 
          focus:ring-0 focus:border-primary
        "
				{...rest}
			/>
		</div>
	);
};

export default TextField;
