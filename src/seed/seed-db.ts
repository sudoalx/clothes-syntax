import prisma from "../lib/prisma";
import { initialData } from "./seed";
import { countries } from "./seed-countries";

async function main() {
  // 1. Delete all previous data

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();

  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Delete countries data
  await prisma.country.deleteMany();
  // Create countries
  await prisma.country.createMany({
    data: countries,
  });

  // Get the initial data
  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  // 2. Seed categories
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map; // { "categoryName": "categoryId" }
  }, {} as Record<string, string>);

  // 3. Seed products
  products.forEach(async (product) => {
    const { images, title, type, ...prod } = product; // Extract images, title, type to avoid passing them to the product directly
    const dbProduct = await prisma.product.create({
      data: {
        ...prod, // Spread the rest of the product data
        name: title, // Rename title to name
        categoryId: categoriesMap[type], // Map the category name to the category id
      },
    });

    // 4. Seed product images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed executed!");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
