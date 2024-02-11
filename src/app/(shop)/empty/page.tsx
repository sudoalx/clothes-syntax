import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-14rem)] md:text-4xl">
      <IoCartOutline size={120} className="mx-5" />
      <div className="flex flex-col">
        <h1 className="font-semibold">Your cart is empty</h1>
        <Link href={"/"} className="text-blue-500 hover:underline mt-2">
          Return to shop
        </Link>
      </div>
    </div>
  );
}
