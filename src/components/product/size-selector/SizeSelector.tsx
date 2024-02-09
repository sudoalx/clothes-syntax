import type { Size } from "@/interfaces";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <p className="text-gray-500 mb-5">Size</p>

      <div className="flex gap-3 mb-5">
        {availableSizes.map((size) => (
          <button
            key={size}
            className="text-gray-500 border border-gray-300 px-3 py-1"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
