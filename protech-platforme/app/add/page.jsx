"use client";

import React from "react";

const AddPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      tittle: e.target.tittle.value,
      instructor: e.target.instructor.value,
      description: e.target.description.value,
    };
    console.log(newCourse);
  };
  return (
    <div className="my-16 mx-32 ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-black border border-blue-600 flex flex-col  p-4"
      >
        <label> Workshop Name </label>
        <input
          name="tittle"
          type="text"
          className="bg-black border border-blue-600 my-4 p-2"
        />
        <label> Instructor </label>
        <input
          name="instructor"
          type="text"
          className="bg-black border border-blue-600 my-4 p-2"
        />
        <label> Description </label>
        <textarea
          name="description"
          className="bg-black border border-blue-600 my-4 p-2"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPage;
