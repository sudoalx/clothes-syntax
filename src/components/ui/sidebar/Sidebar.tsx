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

interface MenuItem {
  title: string;
  url: string;
  icon: JSX.Element;
}

const MainMenuItems: MenuItem[] = [
  { title: "Profile", url: "/profile", icon: <IoPersonOutline size={20} /> },
  { title: "Orders", url: "#", icon: <IoTicketOutline size={20} /> },
  { title: "Login", url: "#", icon: <IoLogInOutline size={20} /> },
];

const SecondaryMenuItems: MenuItem[] = [
  { title: "Products", url: "#", icon: <IoShirtOutline size={20} /> },
  { title: "Orders", url: "#", icon: <IoTicketOutline size={20} /> },
  { title: "Users", url: "#", icon: <IoPeopleOutline size={20} /> },
];

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

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
        {MainMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
          >
            <span className="mx-2">{item.icon}</span>
            {item.title}
          </Link>
        ))}
        <button
          className="flex w-full items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
          onClick={() => logout()}
        >
          <IoLogOutOutline size={20} className="mx-2" />
          Logout
        </button>

        <hr className="my-4" />

        {/* Secondary Menu */}
        {SecondaryMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="flex items-center my-4 p-2 hover:bg-gray-100 rounded-md transition-all"
          >
            <span className="mx-2">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
    </>
  );
};
