import { Title } from "@/components";
import { initialData } from "@/seed/seed";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ProductsInCart } from "./ui/ProductsInCart";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
];

export default function CartPage() {
  if (productsInCart.length === 0) redirect("/empty");
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

          {/* Checkout */}
          <div className="flex flex-col mt-5">
            <div className="bg-white shadow-xl p-7 rounded-xl">
              <div>
                <h2 className="text-2xl mb-2">Order summary</h2>

                <div className="grid grid-cols-2">
                  <span>Products</span>
                  <span className="text-right">
                    $
                    {productsInCart.reduce(
                      (acc, product) => acc + product.price,
                      0
                    )}
                  </span>
                  <span>Subtotal</span>
                  <span className="text-right">
                    $
                    {productsInCart.reduce(
                      (acc, product) => acc + product.price,
                      0
                    )}
                  </span>
                  <span>
                    Taxes <span className="text-sm">(15%)</span>
                  </span>
                  <span className="text-right">
                    $
                    {productsInCart.reduce(
                      (acc, product) => acc + product.price,
                      0
                    ) * 0.15}
                  </span>
                  <span className="text-2xl mt-5">
                    Total <span className="text-sm">(USD)</span>
                  </span>
                  <span className="text-right text-2xl mt-5">
                    $
                    {productsInCart.reduce(
                      (acc, product) => acc + product.price,
                      0
                    ) +
                      productsInCart.reduce(
                        (acc, product) => acc + product.price,
                        0
                      ) *
                        0.15}
                  </span>
                </div>
              </div>
              <div className="mt-5 mb-2 w-full flex text-center">
                <Link
                  href={"/checkout/address"}
                  className="w-full bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
