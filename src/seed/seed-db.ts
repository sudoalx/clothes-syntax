import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  // 1. Delete all previous data
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  console.log("Seed executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
