interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  return (
    <div className="my-5">
      <p className="text-gray-500 mb-5">Quantity</p>
      <div className="flex items-center gap-3 mb-5">
        <button className="text-gray-500 border border-gray-300 px-3 py-1">
          -
        </button>
        <span className="text-gray-500">1</span>
        <button className="text-gray-500 border border-gray-300 px-3 py-1">
          +
        </button>
      </div>
    </div>
  );
};
