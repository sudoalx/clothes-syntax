import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 px-8 bg-white shadow-md">
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Clothes
          </span>
          <span> | Syntax</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Men
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Women
        </Link>
        <Link
          href="/category/kids"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Kids
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/search"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href="/cart"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
          </div>
          <IoCartOutline className="w-5 h-5" />
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          <span className="sr-only">Open Menu</span>
          <span aria-hidden="true">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};
