import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";

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

          {/* Checkout */}
          <div className="flex flex-col mt-5">
            <div className="bg-white shadow-xl p-7 rounded-xl">
              <div>
                {/* Display shipping address */}
                <div className="">
                  <h2 className="text-2xl mb-2">Shipping address</h2>
                  <div className="mb-10">
                    <span>
                      Name: <span className="font-bold">John Doe</span>
                    </span>
                    <br />
                    <span>
                      Address: <span className="font-bold">1234 Main St.</span>
                    </span>
                    <br />
                    <span>
                      Address 2:{" "}
                      <span className="font-bold">
                        Apartment, studio, or floor
                      </span>
                    </span>
                    <br />
                    <span>
                      Zip Code: <span className="font-bold">12345-6789</span>
                    </span>
                    <br />
                    <span>
                      City: <span className="font-bold">New York</span>
                    </span>
                    <br />
                    <span>
                      Country: <span className="font-bold">United States</span>
                    </span>
                    <br />
                    <span>
                      Phone: <span className="font-bold">123-456-7890</span>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="mt-10">
                  <h2 className="text-2xl mb-2">Order summary</h2>

                  <div className="grid grid-cols-2">
                    <span>Products</span>
                    <span className="text-right">5 items</span>
                    <span>Subtotal</span>
                    <span className="text-right">$190</span>
                    <span>
                      Taxes <span className="text-sm">(15%)</span>
                    </span>
                    <span className="text-right">$300</span>
                    <span className="text-2xl mt-5">
                      Total <span className="text-sm">(USD)</span>
                    </span>
                    <span className="text-right text-2xl mt-5">$212</span>
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
                <Link
                  href={"/orders/123"}
                  className="w-full bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition-all text-center mt-5"
                >
                  Confirm order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
