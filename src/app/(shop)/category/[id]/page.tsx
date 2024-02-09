import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;
interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "For Men",
    women: "For Women",
    kids: "For Kids",
    unisex: "For Everyone",
  };

  return (
    <>
      <Title subtitle={`Products ${labels[id]}`} className="mb-2">
        {labels[id]}
      </Title>
      <ProductGrid products={products} />
    </>
  );
}
