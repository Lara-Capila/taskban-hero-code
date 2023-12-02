import Calendar from "./icons/Calendar.icon";
import Dashboard from "./icons/Dashboard.icon";
import Time from "./icons/Time.icon";
import Timeline from "./icons/Timeline.icon";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<p>Libre Franklin</p>
			<p className="font-k2D font-bold">TASKBAN</p>
			<Dashboard />
			<Calendar />
			<Time />
			<Timeline />
		</main>
	);
}
