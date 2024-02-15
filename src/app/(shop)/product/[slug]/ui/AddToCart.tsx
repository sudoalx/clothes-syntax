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
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
  };

  return (
    <>
      {/* size selector */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSelectSize={setSize}
      />

      {/* error message */}
      {posted && !size && (
        <p className="text-red-500 mb-5 fade-in">
          A size must be selected before adding to cart.
        </p>
      )}

      {/* quantity selector */}
      <p className="text-gray-500 mb-5">Quantity</p>
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* add to cart button */}
      <button className="btn-primary my-5" type="button" onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
};
