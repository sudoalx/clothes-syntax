"use client";

import { useState } from "react";

interface Props {
  quantity: number;

  onQuantityChanged: (value: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1 || quantity + value > 5) return;
    onQuantityChanged(quantity + value);
  };
  return (
    <div className="my-5">
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => onValueChanged(-1)}
          className="text-gray-500 border border-gray-300 px-3 py-1"
        >
          -
        </button>
        <span className="text-gray-500">{quantity}</span>
        <button
          onClick={() => onValueChanged(1)}
          className="text-gray-500 border border-gray-300 px-3 py-1"
        >
          +
        </button>
      </div>
    </div>
  );
};
