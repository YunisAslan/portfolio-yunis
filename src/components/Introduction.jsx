import React, { useRef, useEffect } from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

import { gsap } from "gsap";
import SplitType from "split-type";
import Particles from "./ui/Particles";

const Introduction = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const splitTextRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(splitTextRef.current);

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <>
      <section className="introduction flex flex-col items-center mm:mt-32 lg:mt-24">
        
        <Particles />

        <h2
          ref={splitTextRef}
          id="split-text"
          className="clip-split bg-gradient-main bg-clip-text font-bold text-transparent dark:text-white 
          mm:text-5xl sm:text-6xl lg:text-7xl -z-10 text-center px-5"
        >
          {t("introduction.title")}
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
          {t("introduction.location")}
        </span>
        <p className="mt-3 max-w-xl bg-gradient-main bg-clip-text text-center text-lg text-transparent dark:text-white mm:px-12 md:px-6">
          {t("introduction.detail")}
        </p>
      </section>
    </>
  );
};

export default Introduction;
