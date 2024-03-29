import { Title } from "@/components";

import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { CartSummary } from "./ui/CartSummary";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-28 px10 sm:px-0">
      <div className="flex flex-col w-full ">
        <Title>Shopping Cart</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link
              href={"/"}
              className="underline text-blue-500 hover:text-blue-600"
            >
              Continue Shopping
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Summary */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
