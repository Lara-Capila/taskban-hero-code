import { NextRequest, NextResponse } from "next/server";
import { addTasks, getTasks } from "../../../repository/task";

export async function GET() {
	const allTasks = getTasks();

	return NextResponse.json(allTasks);
}

export async function POST(request: NextRequest) {
	const body = await request.json();

	const id = addTasks(body);

	return NextResponse.json(JSON.stringify(id));
}
