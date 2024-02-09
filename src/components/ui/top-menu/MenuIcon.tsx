"use client";

import { useUIStore } from "@/store";

export const MenuIcon = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <button
      onClick={openMenu}
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
    >
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
  );
};
