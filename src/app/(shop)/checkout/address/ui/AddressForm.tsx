"use client";
import Link from "next/link";

export const AddressForm = () => {
  return (
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

      {/* Save details checkbox */}
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="save-details"
          >
            <input
              type="checkbox"
              id="save-details"
              name="save-details"
              className="before:content [''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label htmlFor="save-details" className="text-sm ml-2">
            Save this information for next time
          </label>
        </div>
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
  );
};
