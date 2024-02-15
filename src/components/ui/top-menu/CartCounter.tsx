"use client";
import { useCartStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";

export const CartCounter = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
    >
      <div className="relative">
        {loaded && totalItems > 0 && (
          <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
            {totalItems}
          </span>
        )}
      </div>
      <IoCartOutline className="w-5 h-5" />
    </Link>
  );
};
