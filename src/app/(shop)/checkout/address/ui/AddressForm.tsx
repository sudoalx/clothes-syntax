"use client";
import type { Country } from "@/interfaces";
import clsx from "clsx";
import { useForm } from "react-hook-form";

interface AddressFormInput {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zipCode: string;
  city: string;
  country: string;
  phone: string;
  saveDetails?: boolean;
}

interface AddressFormProps {
  countries: Country[];
}

export const AddressForm = ({ countries }: AddressFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<AddressFormInput>({
    defaultValues: {
      // TODO: get default values from the user's profile
    },
  });

  const onSubmit = (data: AddressFormInput) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col mb-2">
        <label htmlFor="name">Name(s)</label>
        <input
          id="name"
          placeholder="John"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("firstName", { required: true })}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          placeholder="Doe"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("lastName", { required: true })}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="1234 Main St."
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("address", { required: true })}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="address2">Address 2 (optional)</label>
        <input
          id="address2"
          placeholder="Apartment, studio, or floor"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("address2")}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          placeholder="12345-6789"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("zipCode", { required: true })}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="city">City</label>
        <input
          id="city"
          placeholder="New York"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("city", { required: true })}
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("country", { required: true })}
          defaultValue={"US"}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          placeholder="(123) 456-7890"
          type="text"
          className="p-2 border rounded-md bg-gray-200 transition-all duration-300"
          {...register("phone", { required: true })}
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
              className="before:content [''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              {...register("saveDetails")}
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
          <label htmlFor="save-details" className="text-sm">
            Save this information for next time
          </label>
        </div>
      </div>

      <div className="flex justify-end mb-2 sm:mt-10">
        <button
          disabled={!isValid}
          type="submit"
          className={clsx(
            "btn-primary",
            "flex",
            "w-full",
            "sm:w-1/2",
            "justify-center",
            {
              "pointer-events-none": !isValid,
              "opacity-50": !isValid,
            }
          )}
        >
          Next
        </button>
      </div>
    </form>
  );
};
