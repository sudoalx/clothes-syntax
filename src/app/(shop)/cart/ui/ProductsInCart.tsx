  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <LoadingSkeleton />;
  }
const LoadingSkeleton = () => {
  return (
    // Skeleton loader while loading
    <div className="animate-pulse flex flex-col gap-5 mt-5">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col">
                <span className="bg-gray-300 w-40 h-5 mb-2 rounded-md"></span>
                <span className="bg-gray-300 w-20 h-5 rounded-md"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-300 w-12 h-5 mb-2 rounded-md"></div>
              <div className="bg-gray-300 w-16 h-5 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
