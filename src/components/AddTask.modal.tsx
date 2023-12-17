import Button from "./base/Button";
import DatePicker from "./base/inputs/DatePicker";
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
	return (
		<>
			<Modal.Container isModalOpen={isModalOpen}>
				<Modal.Title title="Novo Card" />
				<Modal.Content>
					<TextField
						label="Título da Task"
						placeholder="Digite aqui o título da task"
					/>
					<TextArea label="Descrição" placeholder="Digite a descrição" />
					<DatePicker />
				</Modal.Content>
				<Modal.Actions>
					<Button
						color="danger"
						visual="outline"
						fontSize="sm"
						onClick={toggleModal}
						rounded
					>
						CANCELAR
					</Button>
					<Button color="default" visual="contained" fontSize="sm" rounded>
						CRIAR
					</Button>
				</Modal.Actions>
			</Modal.Container>
		</>
	);
};

export default AddTaskModal;
