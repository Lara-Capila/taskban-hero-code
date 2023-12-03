const Header = () => {
	return (
		<header className="text-gray-600 body-font bg-primary max-h-[90px] p-4 flex justify-end items-center">
			<button
				className="
          inline-flex items-center bg-secondary 
          border-0 py-[18px] px-5 
          focus:outline-none cursor-pointer
          rounded-[10px] text-base mt-4 md:mt-0 font-medium text-white"
			>
				+ Novo Card
			</button>
		</header>
	);
};

export default Header;
