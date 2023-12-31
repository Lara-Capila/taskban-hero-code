import { ChangeEventHandler } from 'react';
import { Priority } from '../../../@types/card';
import { getBorderColorByPriority, getTextColorByPriority } from '../../../utils/priority.utils';

interface PriorityProps {
  priority: Priority;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isSelected: boolean;
}

const priorityToPeerColorMapping: Record<Priority, string> = {
  high: 'peer-checked:bg-high-priority',
  medium: 'peer-checked:bg-medium-priority',
  low: 'peer-checked:bg-low-priority',
};

const PriorityButton = ({ priority, onChange, isSelected }: PriorityProps) => {
  const borderColorByPriority = getBorderColorByPriority(priority);
  const peerColorByPriority = priorityToPeerColorMapping[priority];
  const textColorByPriority = getTextColorByPriority(priority);

  return (
    <span>
      <input
        type='radio'
        id={priority}
        name='priority'
        className='hidden peer'
        onChange={onChange}
        checked={isSelected}
      />
      <label
        htmlFor={priority}
        className={`
          py-2 px-4 uppercase text-center rounded-3xl border font-bold
          cursor-pointer peer-checked:text-white
          ${textColorByPriority} ${borderColorByPriority} ${peerColorByPriority}
        `}
      >
        {priority}
      </label>
    </span>
  );
};

export default PriorityButton;