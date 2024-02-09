import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function ShopPage() {
  return (
    <>
      <Title subtitle="All products" className="mb-2">
        Shop
      </Title>
      <ProductGrid products={products} />
    </>
  );
}
