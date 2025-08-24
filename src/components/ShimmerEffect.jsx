import React from "react";

function ShimmerEffect({dark}) {
  const mapped = Array.from({ length: 12 });

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-800':''} py-8 px-4 animate-pulse`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mapped.map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-300" />

            <div className={`p-4 space-y-3 ${dark ? 'bg-gray-500':''}`}>
              {/* Title Placeholder */}
              <div className="h-4 bg-white rounded w-3/4"></div>

              {/* Description Placeholder */}
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>

              {/* Price + Rating Placeholder */}
              <div className="flex justify-between items-center mt-4">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <div className="h-4 bg-gray-300 rounded w-10"></div>
              </div>

              {/* Button Placeholder */}
              <div className="h-10 bg-gray-300 rounded-lg w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerEffect;
