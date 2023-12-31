import ContainerCardTitle from "./ContainerCardTitle";

export type BoardStatus = "toDo" | "doing" | "QA" | "done";

const statusTypes: BoardStatus[] = ["toDo", "doing", "QA", "done"];

const ContainerCard = () => {
	return (
		<section className="flex items-center justify-center gap-10 flex-wrap">
			{statusTypes.map((status) => (
				<div
					key={status}
					className="min-w-[330px] max-h-max bg-background-card p-4 rounded-3xl"
				>
					<ContainerCardTitle status={status} />
				</div>
			))}
		</section>
	);
};

export default ContainerCard;
