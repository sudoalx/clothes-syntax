"use client";

import { useState } from "react";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [QtyCount, setQtyCount] = useState(quantity);

  const onQtyChange = (value: number) => {
    if (QtyCount + value < 1 || QtyCount + value > 5) return;
    setQtyCount(QtyCount + value);
  };
  return (
    <div className="my-5">
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => onQtyChange(-1)}
          className="text-gray-500 border border-gray-300 px-3 py-1"
        >
          -
        </button>
        <span className="text-gray-500">{QtyCount}</span>
        <button
          onClick={() => onQtyChange(1)}
          className="text-gray-500 border border-gray-300 px-3 py-1"
        >
          +
        </button>
      </div>
    </div>
  );
};
