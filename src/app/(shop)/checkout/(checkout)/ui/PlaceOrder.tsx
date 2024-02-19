"use client";

import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { placeOrder } from "@/actions";

export const PlaceOrder = () => {
  const [loaded, setLoaded] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);

  const address = useAddressStore((state) => state.address);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handlePlaceOrder = async () => {
    setPlacingOrder(true);
    const productsToOrder = cart.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size,
    }));
    await placeOrder(productsToOrder, address);
    setPlacingOrder(false);
  };

  if (!loaded) return <LoadingOrderSummary />;

  return (
    <div className="flex flex-col mt-5">
      <div className="bg-white shadow-xl p-7 rounded-xl">
        <div>
          {/* Display shipping address */}
          <div className="">
            <h2 className="text-2xl mb-2">Shipping address</h2>
            <div className="mb-10">
              <span>
                Name:{" "}
                <span className="font-bold">
                  {`${address.firstName} ${address.lastName}`}
                </span>
              </span>
              <br />
              <span>
                Address: <span className="font-bold">{address.address}</span>
              </span>
              <br />
              <span>
                Address 2: <span className="font-bold">{address.address2}</span>
              </span>
              <br />
              <span>
                Zip Code: <span className="font-bold">{address.zipCode}</span>
              </span>
              <br />
              <span>
                City: <span className="font-bold">{address.city}</span>
              </span>
              <br />
              <span>
                Country: <span className="font-bold">{address.country}</span>
              </span>
              <br />
              <span>
                Phone: <span className="font-bold">{address.phone}</span>
              </span>
            </div>
          </div>
          <hr />
          <div className="mt-10">
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
        </div>
        <div className="mt-5 mb-2 w-full flex flex-col">
          <span className="text-xs">
            By confirming your order, you agree to our{" "}
            <Link href={"#"} className="underline text-blue-500">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href={"#"} className="underline text-blue-500">
              Privacy Policy
            </Link>
          </span>
          <span className="text-red-500 text-xs mt-2">
            Error placing order, please try again later
          </span>
          <button
            disabled={placingOrder}
            onClick={handlePlaceOrder}
            className={clsx(
              "w-full bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition-all text-center mt-5",
              {
                "animate-pulse": placingOrder,
              }
            )}
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingOrderSummary = () => {
  return (
    // Skeleton loader for the order summary
    <div className="animate-pulse flex flex-col mt-5">
      <div className="bg-white shadow-xl p-7 rounded-xl">
        {/* Shipping address skeleton */}
        <div>
          <h2 className="text-2xl mb-2 bg-gray-300 w-2/3 h-7 rounded-md"></h2>
          <div className="mb-10">
            <span className="bg-gray-300 w-3/4 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-1/2 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-5/6 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-1/3 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-2/3 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-4/5 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-4/6 h-5 block mb-1 rounded-md"></span>
          </div>
        </div>
        <hr className="bg-gray-300 mt-10" />
        {/* Order summary skeleton */}
        <div className="mt-10">
          <h2 className="text-2xl mb-2 bg-gray-300 w-2/3 h-7 rounded-md"></h2>
          <div className="grid grid-cols-2">
            <span className="bg-gray-300 w-1/2 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-1/4 h-5 block mb-1 rounded-md justify-self-end"></span>
            <span className="bg-gray-300 w-1/2 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-1/4 h-5 block mb-1 rounded-md justify-self-end"></span>
            <span className="bg-gray-300 w-1/2 h-5 block mb-1 rounded-md"></span>
            <span className="bg-gray-300 w-1/4 h-5 block mb-1 rounded-md justify-self-end"></span>
            <span className="bg-gray-300 w-2/3 h-7 block mb-1 mt-4 rounded-md"></span>
            <span className="bg-gray-300 w-1/2 h-7 block mb-1 mt-4 rounded-md justify-self-end"></span>
          </div>
          <div className="mt-5 mb-2 w-full flex flex-col gap-1 text-center">
            <div className="w-full bg-gray-300 text-gray-300 py-2 px-2 rounded-md"></div>
            <div className="w-2/3 bg-gray-300 text-gray-300 py-2 px-2 rounded-md"></div>
          </div>
          <div className="mt-5 mb-2 w-full flex text-center">
            <div className="w-full bg-gray-300 text-gray-300 py-5 px-5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
