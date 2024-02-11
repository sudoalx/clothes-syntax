import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
];

const uniqueProducts = productsInCart.filter(
  (product, index, self) =>
    index ===
    self.findIndex((p) => p.slug === product.slug && p.title === product.title)
);

interface Props {
  params: {
    id: string;
  };
}

export default function OrdersIdPage({ params }: Props) {
  const { id } = params;

  const isPaymentPending = true;

  return (
    <div className="flex justify-center items-center mb-28 px10 sm:px-0">
      <div className="flex flex-col w-full ">
        <Title>
          Order <span className="font-bold">#{id}</span>
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": isPaymentPending,
                  "bg-green-700": !isPaymentPending,
                }
              )}
            >
              <IoCardOutline className="text-2xl mr-2" />
              <span>
                Payment status: {isPaymentPending ? "Pending" : "Completed"}
              </span>
            </div>
            {/* Items */}
            <div className="flex flex-col gap-5 mt-5">
              {uniqueProducts.map((product) => (
                <div key={product.slug} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <Image
                        width={240}
                        height={240}
                        src={`/products/${product.images[0]}`}
                        alt={product.title}
                        className="w-32 h-32"
                      />
                      <div className="flex flex-col">
                        <span>{product.title}</span>
                        <span>
                          ${product.price} x{" "}
                          {
                            productsInCart.filter(
                              (p) => p.slug === product.slug
                            ).length
                          }
                        </span>
                        <span className="font-bold">
                          Subtotal: $
                          {product.price *
                            productsInCart.filter(
                              (p) => p.slug === product.slug
                            ).length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                    <span className="text-right">
                      {productsInCart.length} items
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
              </div>
              <div className="mt-5 mb-2 w-full flex flex-col">
                {isPaymentPending ? (
                  <button className="w-full bg-blue-500 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition-all text-center mt-5">
                    Pay now
                  </button>
                ) : (
                  <div
                    className={clsx(
                      "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                      {
                        "bg-red-500": isPaymentPending,
                        "bg-green-700": !isPaymentPending,
                      }
                    )}
                  >
                    <IoCardOutline className="text-2xl mr-2" />
                    <span>
                      Payment status:{" "}
                      {isPaymentPending ? "Pending" : "Completed"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
