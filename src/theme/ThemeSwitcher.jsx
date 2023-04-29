import React, { useEffect } from "react";
import Button from "../components/ui/Button";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <Button onClick={handleTheme} variant="ghost">
        {theme === "dark" ? <BsMoon /> : <BsSun />}
      </Button>
    </>
  );
};

export default ThemeSwitcher;
