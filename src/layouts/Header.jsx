import React, { useEffect, useRef } from "react";

import BrandLogo from "../components/ui/BrandLogo";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher";

import { gsap } from "gsap";

const Header = () => {
  const { theme } = useTheme();

  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power4.out" });
  }, []);

  return (
    <>
    
      <header
        ref={headerRef}
        className="flex h-32 items-center justify-between mm:px-5 md:px-12 lg:px-32"
      >
        <div className="header-left flex items-center">
          {theme === "dark" ? (
            <BrandLogo fill={"#fff"} width={100} className="mm:w-20 sm:w-auto"/>
          ) : (
            <BrandLogo fill={"#000"} width={100} className="mm:w-20 sm:w-auto"/>
          )}

          <LanguageSwitcher />
        </div>

        <div className="header-right flex items-center">
          <ThemeSwitcher />

          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
