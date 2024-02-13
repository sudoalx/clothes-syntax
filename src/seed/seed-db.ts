import { initialData } from "@/seed/seed";

async function main() {
  console.log(initialData);
  console.log("Seed executed");
}

(() => {
  main();
})();
