"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderActions, CreateOrderData } from "@paypal/paypal-js";

interface Props {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const roundedAmount = Math.round(amount * 100) / 100;
  if (isPending) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="h-8 w-full bg-gray-300 rounded-md animate-pulse" />
        <div className="h-8 w-full bg-gray-300 rounded-md animate-pulse" />
        <div className="h-5 w-40 bg-gray-300 rounded-md animate-pulse" />
      </div>
    );
  }
  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ) => {
    const transactionId = await actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: `${roundedAmount}`,
          },
        },
      ],
    });
    console.log(transactionId);
    return transactionId;
  };

  return <PayPalButtons createOrder={createOrder} />;
};
