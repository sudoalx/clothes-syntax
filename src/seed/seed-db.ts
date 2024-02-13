import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // 1. Delete all previous data
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  const { categories } = initialData;

  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  console.log("Seed executed!");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
