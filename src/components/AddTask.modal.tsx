import { useTask } from "../contexts/task";
import useModalHandler from "../hooks/useModalHandler";
import SelectPriority from "./SelectPriority";
import Button from "./base/buttons/Button";
import DatePickerInput from "./base/inputs/DateInput";
import TextArea from "./base/inputs/TextArea";
import TextField from "./base/inputs/TextField";
import { Modal } from "./base/modal";

const AddTaskModal = ({
	isModalOpen,
	toggleModal,
}: {
	isModalOpen: boolean;
	toggleModal: () => void;
}) => {
	const { handleSubmit, handleInputChange, onCloseModal } = useModalHandler();
	const { task } = useTask();

	return (
		<div>
			<Modal.Container isModalOpen={isModalOpen}>
				<Modal.Title title="Novo Card" />

				<Modal.Content className="flex flex-col gap-6">
					<TextField
						label="Título da Task"
						placeholder="Digite aqui o título da task"
						name="title"
						value={task.title}
						onChange={handleInputChange}
					/>
					<TextArea
						label="Descrição"
						placeholder="Digite a descrição"
						name="description"
						value={task.description}
						onChange={handleInputChange}
					/>
					<div className="xl:flex xl:flex-row xl:items-end flex flex-col gap-5">
						<DatePickerInput label="Data final" />
						<SelectPriority />
					</div>
				</Modal.Content>

				<Modal.Actions>
					<Button
						color="danger"
						visual="outline"
						fontSize="sm"
						onClick={onCloseModal}
						rounded
					>
						CANCELAR
					</Button>
					<Button color="default" visual="contained" fontSize="sm" rounded onClick={handleSubmit}>
						CRIAR
					</Button>
				</Modal.Actions>
			</Modal.Container>
		</div>
	);
};

export default AddTaskModal;
