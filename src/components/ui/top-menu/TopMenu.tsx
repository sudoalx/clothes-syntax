import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MenuIcon } from "./MenuIcon";
import { CartCounter } from "./CartCounter";

export const TopMenu = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16 px-2 md:px-8 bg-white shadow-md">
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
          href="/gender/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Men
        </Link>
        <Link
          href="/gender/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Women
        </Link>
        <Link
          href="/gender/kids"
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
        <CartCounter />
        <MenuIcon />
      </div>
    </nav>
  );
};
