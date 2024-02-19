import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrder } from "./ui/PlaceOrder";
import { auth } from "@/auth.config";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session) {
    return <h3>You need to be logged in to access this page</h3>;
  }
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
