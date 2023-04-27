import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-12 border-b border-blue-600 items-center">
      <div>
        <h1 className="text-2xl font-extrabold text-blue-600">
          Protech <span className="text-white">- List</span>
        </h1>
      </div>
      <div className="flex gap-5 text-white">
        <Link href="/"> Courses </Link>
        <Link href="/members"> Members </Link>
        <Link href="/add"> Add </Link>
      </div>
    </div>
  );
};

export default Navbar;
