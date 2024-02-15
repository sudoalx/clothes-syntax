"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CartSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <CartSummarySkeleton />;

  return (
    <div className="flex flex-col mt-5">
      <div className="bg-white shadow-xl p-7 rounded-xl">
        <div>
          <h2 className="text-2xl mb-2">Order summary</h2>

          <div className="grid grid-cols-2">
            <span>Products</span>
            <span className="text-right">{itemsInCart}</span>
            <span>Subtotal</span>
            <span className="text-right">{currencyFormat(subTotal)}</span>
            <span>
              Taxes <span className="text-sm">(15%)</span>
            </span>
            <span className="text-right">{currencyFormat(tax)}</span>
            <span className="text-2xl mt-5">
              Total <span className="text-sm">(USD)</span>
            </span>
            <span className="text-right text-2xl mt-5">
              {currencyFormat(total)}
            </span>
          </div>
        </div>
        <div className="mt-5 mb-2 w-full flex text-center">
          <Link
            href={"/checkout/address"}
            className={clsx(
              "w-full bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition-all",
              {
                "cursor-not-allowed bg-gray-300 pointer-events-none":
                  itemsInCart === 0,
              }
            )}
            aria-disabled={itemsInCart === 0}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSummarySkeleton = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="bg-white shadow-xl p-7 rounded-xl animate-pulse">
        <div>
          <h2 className="text-2xl mb-2 bg-gray-300 w-28 h-6">&nbsp;</h2>

          <div className="grid grid-cols-2">
            <span className="bg-gray-300 w-16 h-4"></span>
            <span className="bg-gray-300 w-20 h-4 justify-self-end"></span>
            <span className="bg-gray-300 w-16 h-4"></span>
            <span className="bg-gray-300 w-20 h-4 justify-self-end"></span>
            <span className="bg-gray-300 w-16 h-4"></span>
            <span className="bg-gray-300 w-20 h-4 justify-self-end"></span>
            <span className="text-2xl mt-5 bg-gray-300 w-28 h-6"></span>
            <span className="text-right text-2xl mt-5 bg-gray-300 w-20 h-6 justify-self-end"></span>
          </div>
        </div>
        <div className="mt-5 mb-2 w-full flex text-center">
          <div className="w-full bg-gray-300 text-gray-300 py-5 px-5 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
