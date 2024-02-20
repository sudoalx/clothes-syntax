"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {
  CreateOrderData,
  CreateOrderActions,
  OnApproveActions,
  OnApproveData,
} from "@paypal/paypal-js";
import { paypalCheckPayment, setTransactionId } from "@/actions";

interface Props {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const rountedAmount = Math.round(amount * 100) / 100; //123.23

  if (isPending) {
    return (
      <div className="animate-pulse mb-16">
        <div className="h-11 bg-gray-300 rounded" />
        <div className="h-11 bg-gray-300 rounded mt-2" />
      </div>
    );
  }

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions | any // Use a union type to make it more flexible
  ): Promise<string> => {
    const transactionId = await actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            currency_code: "USD",
            value: `${rountedAmount}`,
          },
        },
      ],
    });

    const { ok } = await setTransactionId(orderId, transactionId);
    if (!ok) {
      throw new Error("Failed to set transaction id");
    }

    return transactionId;
  };

  const onApprove = async (
    data: OnApproveData,
    actions: OnApproveActions | any
  ) => {
    const details = await actions.order?.capture();
    if (!details || !details.id) return;

    await paypalCheckPayment(details.id);
  };

  return (
    <div className="relative z-0">
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </div>
  );
};
