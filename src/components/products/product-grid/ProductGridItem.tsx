import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div key={product.slug} className="rounded-md overflow-hidden fade-in">
      <Image
        width={300}
        height={300}
        src={`/products/${product.images[0]}`}
        alt={product.title}
      />
      <div className="p-4 flex flex-col">
        <Link
          className="text-xl font-bold mb-2 hover:text-blue-700 transition-all duration-300 ease-in-out"
          href={`/product/${product.slug}`}
          passHref
        >
          <h3>{product.title}</h3>
        </Link>
        <p className="font-bold">${product.price}</p>
      </div>
    </div>
  );
};
