import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className=" flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white ">
      <Link href={"/"} className=" flex items-center">
        <span className=" cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </span>
        <h3 className=" px-3 cursor-pointer"> Online-shop</h3>
      </Link>
      <div className=" flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home page
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            All products
          </Link>
        </nav>
        <Link href={"/shopping-cart"}>
          <button className="button bg-blue-600 text-white border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black">
            My bag
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
