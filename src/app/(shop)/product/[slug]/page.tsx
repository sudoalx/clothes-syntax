import { ProductSildeshow, QuantitySelector, Title } from "@/components";
import { SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 items-center">
        <ProductSildeshow images={product.images} title={product.title} />
      </div>

      <div className="px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-gray-500 text-lg mb-5">${product.price}</p>
        {/* Size selector */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        {/* Qty selector */}
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
