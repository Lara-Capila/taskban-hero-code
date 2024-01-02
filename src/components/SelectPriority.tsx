import { Priority } from '../@types/task';
import { useTask } from '../contexts/task';
import PriorityButton from './base/buttons/Priority.button';

const SelectPriority = () => {
  const { setTask, task } = useTask();

  const handleChangePriority = (selectedPriority: Priority) => {
    setTask((prevState) => {
      return {
        ...prevState,
        priority: selectedPriority
      };
    });
  };

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-sm mb-2'>Priority</label>
      <div className='flex xl:justify-between gap-3'>
        <PriorityButton priority='high' onChange={() => handleChangePriority('high')} isSelected={task.priority === 'high'} />
        <PriorityButton priority='medium' onChange={() => handleChangePriority('medium')} isSelected={task.priority === 'medium'} />
        <PriorityButton priority='low' onChange={() => handleChangePriority('low')} isSelected={task.priority === 'low'} />
      </div>
    </div>
  );
};

export default SelectPriority;