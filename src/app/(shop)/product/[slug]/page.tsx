export const revalidate = 60 * 60 * 24 * 7; // 1 week
import { getProductBySlug } from "@/actions";
import {
  ProductMobileSildeshow,
  ProductSildeshow,
  StockLabel,
} from "@/components";

import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.name ?? "Product not found",
    description: product?.description ?? "Product not found",
    openGraph: {
      type: "website",
      url: `https://clothes-syntax.vercel.app/product/${slug}`,
      title: product?.name ?? "Product not found",
      description: product?.description ?? "Product not found",
      images: [
        `https://clothes-syntax.vercel.app/products/${product?.images[1]}`,
      ],
    },
  };
}

export default async function ProductPage({ params }: Readonly<Props>) {
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

        {/* Add to cart */}
        <AddToCart product={product} />

        {/* Description */}
        <h2 className="font-bold text-sm">Description</h2>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
