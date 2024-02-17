import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { SignUpForm } from "./ui/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <Link
        href="/"
        className="text-blue-500 hover:underline flex gap-1 items-center"
      >
        <IoIosArrowBack className="inline-block" />
        Back to homepage
      </Link>
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Sign Up</h1>

      <div className="flex flex-col">
        <SignUpForm />
        {/* divisor line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">OR</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/login" className="btn-secondary text-center">
          Login
        </Link>
      </div>
    </div>
  );
}
