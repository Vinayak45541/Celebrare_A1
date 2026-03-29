const LoadingSkeleton = () => {

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="h-6 w-40 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-8 w-24 bg-gray-300 animate-pulse rounded"></div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="h-10 bg-gray-300 animate-pulse rounded"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {Array(6).fill(0).map((_, index) => (
          <div
            key={index}
            className="h-32 bg-gray-300 animate-pulse rounded-xl"
          />
        ))}
      </div>

    </div>

  );

};

export default LoadingSkeleton;