const Title = ({ title }: { title: string }) => {
	return (
		<h1 id="modal-title" className="text-primary text-2xl font-semibold">
			{title}
		</h1>
	);
};

export default Title;
