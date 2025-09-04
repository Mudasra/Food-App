const ShimmerUI = () => {
  const shimmerCount = 8;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-[15%]">
      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div
          className="p-4 bg-white rounded-lg shadow-md animate-pulse"
          key={index}
        >
          <div className="flex flex-col space-y-4">
            <div className="h-40 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-1/3 bg-gray-300 rounded"></div> 
            <div className="h-4 w-3/4 bg-gray-300 rounded"></div> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
