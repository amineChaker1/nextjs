const { NextResponse } = require("next/server");
const { default: courses } = require("./data");

export async function GET(request) {
  return NextResponse.json(courses);
}
export async function POST(request) {
  const newCourse = await request.json();
  courses.push(newCourse);
  return NextResponse.json(courses);
}
