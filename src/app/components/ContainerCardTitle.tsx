const ContainerCardTitle = ({ status }: { status: string }) => {
	return (
		<h1 className="font-bold text-xl capitalize pb-9 break-words">{status}</h1>
	);
};

export default ContainerCardTitle;
