import React from "react";

const Loading = ({ count = 8 }) => {
  return (
    <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
    {Array(count)
      .fill()
      .map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-[300px] bg-gray-300 rounded-lg"></div>
          <div className="p-4">
            <div className="w-[80%] h-6 bg-gray-300 rounded-lg mb-4"></div>
            <div className="w-[60%] h-6 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
  </div>
  );
};

export default Loading;
