"use client";
import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* size selector */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSelectSize={setSize}
      />

      {/* quantity selector */}
      <p className="text-gray-500 mb-5">Quantity</p>
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* add to cart button */}
      <button className="btn-primary my-5" type="button">
        Add to cart
      </button>
    </>
  );
};
