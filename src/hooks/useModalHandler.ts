import { Task } from '../@types/task';
import { useBoard } from '../contexts/board';
import { useTask } from '../contexts/task';
import { generateRandomId } from '../utils/functions.utils';
import notify from '../utils/notify';

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
    const { success, error } = notify();

    if (!title || !priority || !description || !expirationDate) {
      return error({
        id: 'error-add-task',
        content: 'Por favor, preencha todos os campos!'
      });
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
    success({
      id: 'add-task',
      content: 'Item criado com sucesso!'
    });
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