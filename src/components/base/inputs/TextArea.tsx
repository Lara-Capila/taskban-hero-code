import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

const TextArea = ({ label, placeholder }: TextAreaProps) => {
	return (
		<div className="relative">
			<label className="absolute ml-3 -top-3 bg-white px-1 text-sm">
				{label}
			</label>
			<textarea
				placeholder={placeholder}
				className="
          border border-[#C4C4C4] rounded-md 
          p-2 block w-full mt-0 bg-transparent 
          appearance-none focus:outline-none 
          focus:ring-0 focus:border-primary
        "
			/>
		</div>
	);
};

export default TextArea;
