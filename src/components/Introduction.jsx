import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";

const Introduction = () => {
  const { theme } = useTheme();

  return (
    <>
      <section className="introduction flex flex-col items-center mm:mt-32 lg:mt-24">
        <h2 className="bg-gradient-main bg-clip-text font-bold text-transparent dark:text-white mm:text-5xl lg:text-7xl">
          Hi, I'm Yunis.
        </h2>

        <span className="flex items-center bg-gradient-main bg-clip-text pt-2 text-[1.1rem] font-semibold text-transparent dark:text-white">
          <HiOutlineLocationMarker
            className="mr-1 text-2xl dark:!text-white"
            style={{
              stroke:
                theme === "dark"
                  ? "url(#dark-gradient)"
                  : "url(#light-gradient)",
            }}
            // come in GradientIcons
          />
          Baku
        </span>
        <p className="mt-3 max-w-xl bg-gradient-main bg-clip-text text-center text-lg text-transparent dark:text-white mm:px-12 md:px-6">
          Currently, I'm engaged in the development of the frontend of websites
          using modern technologies.
        </p>
      </section>
    </>
  );
};

export default Introduction;
