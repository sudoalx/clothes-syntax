import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: number;
  };
}

export default async function ShopPage({ searchParams }: Readonly<Props>) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products } = await getPaginatedProductsWithImages({ page });

  return (
    <>
      <Title subtitle="All products" className="mb-2">
        Shop
      </Title>
      <ProductGrid products={products} />
    </>
  );
}
