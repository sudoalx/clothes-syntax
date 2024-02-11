import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <IoCartOutline size={80} className="text-6xl  mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold">Your cart is empty</h1>
        <Link href={"/"} className="text-blue-500 hover:underline mt-2">
          Return to shop
        </Link>
      </div>
    </div>
  );
}
