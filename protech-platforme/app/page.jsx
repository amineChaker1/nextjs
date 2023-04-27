export async function getCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();

  return courses;
}

export default async function Home() {
  const courses = await getCourses();
  return (
    <main className="text-white my-12 mx-28  ">
      {courses.map((course) => (
        <div className="border border-blue-600 border-l-8 p-4 my-6">
          <h1> {course.tittle} </h1>
          <h2>Instructure : {course.instructor} </h2>
          <p>{course.description}</p>
        </div>
      ))}
    </main>
  );
}
