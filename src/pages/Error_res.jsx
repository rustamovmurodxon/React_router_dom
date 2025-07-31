import React from "react";

const Error_res = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white">
      <h1 className="text-4xl font-semibold mb-4">Page not found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Uh oh, we cant seem to find the page youre looking for.
        Try going back to the previous page or see our{" "}
        <a
          href="https://github.com/rustamovmurodxon/UseEffect_life_cycle"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help Center
        </a>{" "}
        for more information.
      </p>
      <button
        onClick={handleRefresh}
        className="border border-blue-500 text-blue-600 font-medium px-4 py-2 rounded hover:bg-blue-50 transition"
      >
        Go to your feed (Refresh)
      </button>
    </div>
  );
};

export default Error_res;
