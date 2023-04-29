import React from "react";

import BrandLogo from "./ui/BrandLogo";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";

const Header = () => {
  const { theme } = useTheme();

  return (
    <>
      <header className="bg-red-400 flex h-32 items-center justify-between mm:px-5 md:px-12 lg:px-40">
        <div className="header-left">
          {theme === "dark" ? (
            <BrandLogo fill={"#fff"} width={100} />
          ) : (
            <BrandLogo fill={"#000"} width={100} />
          )}
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
