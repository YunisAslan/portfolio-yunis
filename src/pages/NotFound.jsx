import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="not-foun flex h-[65vh] items-center justify-center">
        <span
          className="flex items-center pr-2 text-4xl font-semibold text-taxonomyBlack
         dark:border-gray-100 dark:text-white"
        >
          404
        </span>

        <h2 className="relative flex items-center bg-gradient-main bg-clip-text pl-2 text-2xl font-semibold text-transparent dark:text-white">
          <div className="absolute left-0 h-14 border-l border-taxonomyBlack dark:border-white"></div>
          This page could not be found.
        </h2>
      </div>
    </>
  );
};

export default NotFound;
