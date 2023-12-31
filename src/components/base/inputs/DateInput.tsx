"use client";

import ptBR from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { Task } from '../../../@types/card';
import { useTask } from '../../../contexts/task';

interface DateInputProps {
	label: string;
}

const DateInput = ({ label }: DateInputProps) => {
	const { task, setTask } = useTask();

	return (
		<div className='relative w-full'>
			<label className="absolute ml-3 -top-3 bg-white px-1 text-sm">
				{label}
			</label>
			<DatePicker
				className='
					border border-[#C4C4C4] rounded-md 
					p-2 block w-full mt-0 bg-transparent 
					focus:outline-none 
					focus:ring-0 focus:border-primary min-w-[250px]
				'
				showPopperArrow={false}
				locale={ptBR}
				showIcon
				placeholderText='Selecione a data de entrega'
				selected={task.expirationDate}
				onChange={(date) => setTask((prevState: Task) => {
					return {
						...prevState,
						expirationDate: date
					};
				})}
			/>
		</div>
	);
};

export default DateInput;
