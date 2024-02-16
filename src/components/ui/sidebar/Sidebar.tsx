"use client";
import { useUIStore } from "@/store";
import Link from "next/link";
import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { logout } from "@/actions";
import { useSession } from "next-auth/react";

interface MenuItem {
  title: string;
  url: string;
  icon: JSX.Element;
}

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;
  console.log(isAuthenticated, session?.user);

  return (
    <>
      {/* Overlay */}
      {isSideMenuOpen && (
        <button
          aria-label="Close Menu"
          onClick={closeMenu}
          className="fade-in fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* sidebar */}
      <nav
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-96 max-w-full bg-white h-screen shadow-lg p-4",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          onClick={closeMenu}
          className="absolute top-4 right-4 text-2xl cursor-pointer z-50"
        />
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Menu */}

        <Link
          href="/profile"
          className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <IoPersonOutline size={20} className="mx-2 inline-block" />
          Profile
        </Link>
        <Link
          href="#"
          className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <IoTicketOutline size={20} className="mx-2 inline-block" />
          Orders
        </Link>
        {isAuthenticated && (
          <button
            className="flex w-full items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
            onClick={() => logout()}
          >
            <IoLogOutOutline size={20} className="mx-2" />
            Logout
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
          >
            <IoLogInOutline size={20} className="mx-2 inline-block" />
            Login
          </Link>
        )}

        <hr className="my-4" />

        {/* Secondary Menu */}
        <Link
          href="#"
          className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <IoShirtOutline size={20} className="mx-2 inline-block" />
          Products
        </Link>
        <Link
          href="#"
          className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <IoTicketOutline size={20} className="mx-2 inline-block" />
          Orders
        </Link>
        <Link
          href="#"
          className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
        >
          <IoPeopleOutline size={20} className="mx-2 inline-block" />
          Users
        </Link>
      </nav>
    </>
  );
};
