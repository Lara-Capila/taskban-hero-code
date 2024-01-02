const ContainerCardTitle = ({ status, quantityItems }: { status: string, quantityItems: number; }) => {
	return (
		<h1 className="font-bold text-xl capitalize pb-9 break-words">
			{`${status} (${quantityItems})`}
		</h1>
	);
};

export default ContainerCardTitle;
