import { Title } from "@/components";
import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title>Shipping Address</Title>

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Name(s)</span>
            <input
              placeholder="John"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Lastname</span>
            <input
              placeholder="Doe"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address</span>
            <input
              placeholder="1234 Main St."
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address 2 (optional)</span>
            <input
              placeholder="Apartment, studio, or floor"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Zip Code</span>
            <input
              placeholder="12345-6789"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input
              placeholder="New York"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
              defaultValue={"US"}
            >
              <option value="MX">Mexico</option>
              <option value="US">United States</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Phone</span>
            <input
              placeholder="(123) 456-7890"
              type="text"
              className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <Link
              href="/checkout"
              className="btn-primary flex w-full sm:w-1/2 justify-center "
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
