import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function ShopPage() {
  const { products } = await getPaginatedProductsWithImages();
  return (
    <>
      <Title subtitle="All products" className="mb-2">
        Shop
      </Title>
      <ProductGrid products={products} />
    </>
  );
}
