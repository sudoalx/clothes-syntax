import { Title } from "@/components";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  const allowedCategories = ["men", "women", "kids"];
  if (!allowedCategories.includes(id)) {
    return notFound();
  }

  const name = id.charAt(0).toUpperCase() + id.slice(1);
  return (
    <div>
      <Title subtitle={`Products for ${name}`} className="mb-2">
        {name}
      </Title>
    </div>
  );
}
