import type { Size } from "@/interfaces";
import { clsx } from "clsx";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];

  onSelectSize: (size: Size) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSelectSize,
}: Props) => {
  return (
    <div className="my-5">
      <p className="text-gray-500 mb-5">Size</p>

      <div className="flex gap-3 mb-5">
        {availableSizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelectSize(size)}
            className={clsx("border border-gray-300 px-3 py-1", {
              "text-white bg-blue-600": selectedSize === size,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
