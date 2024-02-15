export const revalidate = 60;
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    gender: Gender;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: Readonly<Props>) {
  const { gender } = params;

  const page = searchParams.page ? Number(searchParams.page) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender,
  });

  const labels: Record<Gender, string> = {
    men: "For Men",
    women: "For Women",
    kids: "For Kids",
    unisex: "For Everyone",
  };

  if (!labels[gender]) {
    return notFound();
  }

  return (
    <>
      <Title subtitle={`Products ${labels[gender]}`} className="mb-2">
        {labels[gender]}
      </Title>

      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
