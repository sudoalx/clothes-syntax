"use client";
import { getStockBySlug } from "@/actions";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, [slug]);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <h3 className="animate-pulse bg-gray-200 text-lg text-gray-700 w-20 h-7 rounded-md">
          &nbsp;
        </h3>
      ) : (
        <h3
          className={`${stock > 0 ? "text-gray-500" : "text-red-500"} text-lg`}
        >
          {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
        </h3>
      )}
    </>
  );
};
