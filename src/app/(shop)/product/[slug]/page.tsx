import { Title } from "@/components";
import { SizeSelector } from "@/components/product/size-selector/SizeSelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 items-center">
        <Title>{product.title}</Title>
        <Image
          src={`/products/${product.images[0]}`}
          alt={product.title}
          width={800}
          height={800}
          layout="responsive"
        />
      </div>

      <div className="px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-gray-500 text-lg mb-5">{product.price}</p>
        {/* Size selector */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        {/* Qty selector */}
        <p className="text-gray-500 mb-5">Quantity</p>
        <div className="flex items-center gap-3 mb-5">
          <button className="text-gray-500 border border-gray-300 px-3 py-1">
            -
          </button>
          <span className="text-gray-500">1</span>
          <button className="text-gray-500 border border-gray-300 px-3 py-1">
            +
          </button>
        </div>
        {/* Add to cart */}
        <button className="btn-primary my-5">Add to cart</button>
        {/* Description */}
        <h2 className="font-bold text-sm">Description</h2>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
