import Calendar from "../icons/Calendar.icon";
import Dashboard from "../icons/Dashboard.icon";
import Timeline from "../icons/Timeline.icon";

const sideBarItens = [
	{
		icon: <Dashboard />,
		label: "Quadro",
	},
	{
		icon: <Calendar />,
		label: "Lista",
	},
	{
		icon: <Timeline />,
		label: "Timeline",
	},
	{
		icon: <Calendar />,
		label: "Calendário",
	},
];

const SideBar = () => {
	return (
		<aside className="pt-[30px] px-14 bg-white">
			<h1 className="text-4xl font-bold font-k2D uppercase">taskban</h1>
			<ul className="flex flex-col gap-9 pt-32">
				{sideBarItens.map((item) => (
					<li
						key={item.label}
						className="
              flex gap-3 items-center font-semibold py-3 px-2 rounded-md
              hover:bg-secondary cursor-pointer transition-all
            "
					>
						{item.icon} {item.label}
					</li>
				))}
			</ul>
		</aside>
	);
};

export default SideBar;
