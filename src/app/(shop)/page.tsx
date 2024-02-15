export const revalidate = 60;
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: number;
  };
}

export const metadata: Metadata = {
  title: "Shop | Clothes Syntax",
  description: "A clothing store for developers;",
  openGraph: {
    type: "website",
    url: "https://clothes-syntax.vercel.app/",
    title: "Shop | Clothes Syntax",
    description: "A clothing store for developers;",
    images: [],
  },
};
export default async function ShopPage({ searchParams }: Readonly<Props>) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
  });
  if (products.length === 0) redirect("/");

  return (
    <>
      <Title subtitle="All products" className="mb-2">
        Shop
      </Title>
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
