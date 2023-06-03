import React, { useEffect } from "react";
import Button from "../components/ui/Button";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <Button onClick={handleTheme} variant="ghost">
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </Button>
    </>
  );
};

export default ThemeSwitcher;
