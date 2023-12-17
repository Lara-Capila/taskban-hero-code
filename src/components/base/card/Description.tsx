const Description = ({ description }: { description: string }) => {
	return (
		<h3 className="text-sm font-medium break-words max-w-[260px] py-4">
			{description}
		</h3>
	);
};

export default Description;
