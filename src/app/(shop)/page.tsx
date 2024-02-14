import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: number;
  };
}

export default async function ShopPage({ searchParams }: Readonly<Props>) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });
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
