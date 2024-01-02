import { BoardDataByStatus, BoardStatus } from "../@types/board";
import ContainerCardTitle from "./CardStatusWrapper";
import { Card } from "./base/card";

const statusTypes: BoardStatus[] = ["toDo", "doing", "QA", "done"];

const Task = ({ boardData }: { boardData: BoardDataByStatus; }) => {
	return (
		<section className="flex items-start justify-center gap-10 flex-wrap">
			{statusTypes.map((status) => (
				<div
					key={status}
					className="min-w-[330px] max-h-max bg-background-card shadow-card p-4 rounded-3xl"
				>
					<ContainerCardTitle status={status} quantityItems={boardData[status].length} />

					<div className="flex flex-col gap-5">
						{boardData[status].map((item) => (
							<Card.Container key={item.id}>
								<Card.Title title={item.title} />
								<Card.Description description={item.description} />
								<Card.Footer expirationDate={item.expirationDate!} priority={item.priority!} />
							</Card.Container>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Task;
