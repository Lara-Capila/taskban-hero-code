import { Task } from '../@types/task';
import { useBoard } from '../contexts/board';
import { useTask } from '../contexts/task';
import { generateRandomId } from '../utils/functions.utils';

const useModalHandler = () => {
  const { task, setTask, clearTaskData, toggleModal } = useTask();
  const { boardData, setBoardData } = useBoard();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setTask((prevData: Task) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const { title, priority, description, expirationDate } = task;

    if (!title || !priority || !description || !expirationDate) {
      return console.log('Todos os campos são obrigatórios!');
    }

    const id = generateRandomId();

    const newTask: Task = {
      id,
      title,
      description,
      expirationDate,
      priority,
    };

    const newToDos = [...boardData.toDo, newTask];

    setBoardData((prevState) => {
      return {
        ...prevState,
        toDo: newToDos
      };
    });

    clearTaskData();
    toggleModal();
  };

  const onCloseModal = () => {
    clearTaskData();
    toggleModal();
  };

  return {
    handleInputChange,
    handleSubmit,
    onCloseModal
  };
};

export default useModalHandler;