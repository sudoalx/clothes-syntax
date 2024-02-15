export const revalidate = 60 * 60 * 24 * 7; // 1 week
import { getProductBySlug } from "@/actions";
import {
  ProductMobileSildeshow,
  ProductSildeshow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";

import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 items-center">
        {/* Slideshow */}
        <ProductSildeshow
          className="hidden md:block"
          images={product.images}
          title={product.name}
        />
        {/* Mobile slideshow */}
        <ProductMobileSildeshow
          className="block md:hidden"
          images={product.images}
          title={product.name}
        />
      </div>

      <div className="px-5">
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.name}
        </h1>
        <p className="text-gray-500 text-lg mb-5">${product.price}</p>
        {/* Size selector */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        {/* Qty selector */}
        <p className="text-gray-500 mb-5">Quantity</p>
        <QuantitySelector quantity={1} />
        {/* Add to cart */}
        <button className="btn-primary my-5">Add to cart</button>
        {/* Description */}
        <h2 className="font-bold text-sm">Description</h2>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
