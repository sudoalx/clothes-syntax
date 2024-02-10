"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div key={product.slug} className="rounded-md overflow-hidden fade-in">
      <Link
        className="text-xl font-bold mb-2 hover:text-blue-700 transition-all duration-300 ease-in-out"
        href={`/product/${product.slug}`}
        passHref
      >
        <Image
          width={300}
          height={300}
          src={`/products/${displayImage}`}
          alt={product.title}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 transform-gpu"
        />
        <div className="p-4 flex flex-col">
          <h3>{product.title}</h3>
          <p className="font-bold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};
