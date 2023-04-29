import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="not-found flex h-[65vh] items-center justify-center">
        <span
          className="flex h-10 items-center border-r-2 border-black pr-2 text-3xl font-bold
         dark:border-gray-100 dark:text-gray-100"
        >
          404
        </span>
        <h2 className="pl-2 text-2xl text-gray-500">
          This page could not be found.
        </h2>
      </div>
    </>
  );
};

export default NotFound;
