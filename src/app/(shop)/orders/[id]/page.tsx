import { getOrderById } from "@/actions/order/get-order-by-id";
import { PayPalButton, Title } from "@/components";
import { clsx } from "clsx";
import Image from "next/image";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { currencyFormat } from "../../../../utils/currencyFormat";

interface Props {
  params: {
    id: string;
  };
}

export default async function OrdersIdPage({ params }: Readonly<Props>) {
  const { id } = params;

  const { ok, order } = await getOrderById(id);

  if (!ok) redirect("/");

  const address = order!.OrderAddress;

  const isPaymentPending = !order?.isPaid;

  return (
    <div className="flex justify-center items-center mb-28 px10 sm:px-0">
      <div className="flex flex-col w-full ">
        <Title>
          Order{" "}
          <span className="font-bold">#{id.slice(0, 6).toUpperCase()}</span>
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
              {order?.OrderItem.map((item) => (
                <div key={item.product.slug} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <Image
                        width={240}
                        height={240}
                        src={`/products/${item.product.ProductImage[0].url}`}
                        alt={item.product.name}
                        className="w-32 h-32"
                      />
                      <div className="flex flex-col">
                        <span>{item.product.name}</span>
                        <span>
                          ${item.price} x {item.quantity}
                        </span>
                        <span className="font-bold">
                          Subtotal: {currencyFormat(item.price * item.quantity)}
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
                      Name:{" "}
                      <span className="font-bold">
                        {address?.firstName} {address?.lastName}
                      </span>
                    </span>
                    <br />
                    <span>
                      Address:{" "}
                      <span className="font-bold">{address?.address}</span>
                    </span>
                    <br />
                    <span>
                      Address 2:{" "}
                      <span className="font-bold">{address?.address2}</span>
                    </span>
                    <br />
                    <span>
                      Zip Code:{" "}
                      <span className="font-bold">{address?.zipCode}</span>
                    </span>
                    <br />
                    <span>
                      City: <span className="font-bold">{address?.city}</span>
                    </span>
                    <br />
                    <span>
                      Country:{" "}
                      <span className="font-bold">{address?.countryId}</span>
                    </span>
                    <br />
                    <span>
                      Phone: <span className="font-bold">{address?.phone}</span>
                    </span>
                  </div>
                </div>
                <hr />
                <div className="mt-10">
                  <h2 className="text-2xl mb-2">Order summary</h2>

                  <div className="grid grid-cols-2">
                    <span>Products</span>
                    <span className="text-right">
                      {order?.OrderItem.length}
                    </span>
                    <span>Subtotal</span>
                    <span className="text-right">
                      {currencyFormat(order!.subTotal)}
                    </span>
                    <span>
                      Taxes <span className="text-sm">(15%)</span>
                    </span>
                    <span className="text-right">
                      {currencyFormat(order!.tax)}
                    </span>
                    <span className="text-2xl mt-5">
                      Total <span className="text-sm">(USD)</span>
                    </span>
                    <span className="text-right text-2xl mt-5">
                      {currencyFormat(order!.total)}
                    </span>
                  </div>
                </div>
              </div>
              {isPaymentPending ? (
                <PayPalButton orderId={id} amount={order!.total} />
              ) : (
                <div className="flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white my-5 bg-green-700">
                  <IoCardOutline className="text-2xl mr-2" />
                  <span>Payment status: Completed</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
