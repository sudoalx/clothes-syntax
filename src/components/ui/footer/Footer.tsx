import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex gap-6 w-full justify-center text-xs mb-10">
      <Link
        href={"/"}
        className={`${titleFont.className} antialiased font-bold`}
      >
        Clothes | Syntax {new Date().getFullYear()} &copy;
      </Link>
      <Link href={"/privacy"}>Privacy policy</Link>
      <Link href={"/terms"}>Terms of service</Link>
    </footer>
  );
};
