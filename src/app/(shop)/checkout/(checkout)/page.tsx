import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-28 px10 sm:px-0">
      <div className="flex flex-col w-full ">
        <Title>Checkout</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Confirm your order</span>
            <Link
              href={"/cart"}
              className="underline text-blue-500 hover:text-blue-600"
            >
              Modify cart
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Order summary */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
