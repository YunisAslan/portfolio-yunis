import React from "react";

const Particles = () => {
  return (
    <>
      <div className="particles absolute">
        <div className="particle relative -z-10 rotate-[40deg] before:absolute before:bottom-28 before:left-20 before:h-7 before:w-7 before:rounded-md before:bg-gray-200 dark:before:bg-darkBorder/40"></div>

        <div className="particle relative -z-10 rotate-[54deg] before:absolute before:left-4 before:top-28 before:h-4 before:w-4 before:rounded-md before:bg-gray-200 dark:before:bg-darkBorder/60"></div>

        <div className="particle relative -z-10 rotate-[12deg] before:absolute before:bottom-4 before:right-28 before:h-5 before:w-5 before:rounded-md before:bg-gray-300 dark:before:bg-darkBorder/60"></div>

        <div className="particle relative -z-10 rotate-[24deg] before:absolute before:bottom-28 before:left-56 before:h-5 before:w-5 before:rounded-md before:bg-gray-200 dark:before:bg-darkBorder/50 mm:hidden md:flex"></div>

        <div className="particle relative -z-10 rotate-[20deg] before:absolute before:left-32 before:top-20 before:h-5 before:w-5 before:rounded-md before:bg-gray-300 dark:before:bg-darkBorder/50"></div>

        <div className="particle relative -z-10 rotate-[28deg] before:absolute before:right-64 before:top-44 before:h-6 before:w-6 before:rounded-md before:bg-gray-300 dark:before:bg-darkBorder/40 mm:hidden md:flex"></div>
      </div>
    </>
  );
};

export default Particles;
