"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const productsInCart = useCartStore((state) => state.cart);
  const removeProduct = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <LoadingSkeleton />;
  }

  if (productsInCart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col gap-5 mt-5">
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <Image
                width={240}
                height={240}
                src={`/products/${product.image}`}
                alt={product.title}
                className="w-32 h-32"
              />
              <div className="flex flex-col">
                <Link href={`/product/${product.slug}`}>
                  <span className="text-blue-500 hover:text-blue-600">
                    {product.title}
                  </span>
                </Link>
                <span>
                  Price: <span className="font-bold">${product.price}</span>
                </span>
                <span>
                  Size: <span className="font-bold">{product.size}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChanged={(quantity) =>
                  updateProductQuantity(product, quantity)
                }
              />
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => removeProduct(product)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    // Skeleton loader while loading
    <div className="animate-pulse flex flex-col gap-5 mt-5">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col">
                <span className="bg-gray-300 w-40 h-5 mb-2 rounded-md"></span>
                <span className="bg-gray-300 w-20 h-5 rounded-md"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-300 w-12 h-5 mb-2 rounded-md"></div>
              <div className="bg-gray-300 w-16 h-5 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center mt-5 space-y-5 bg-gray-300 rounded-lg p-10 shadow-md">
      <h1 className="text-3xl font-bold">Your cart is empty</h1>
      <Link className="text-blue-500 hover:text-blue-600" href="/">
        Go to shop
      </Link>
    </div>
  );
};
