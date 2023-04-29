import { createContext, useState } from "react";

export const Context = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const contextData = {
    theme,
    setTheme,
  };

  return (
    <>
      <Context.Provider value={contextData}>{children}</Context.Provider>
    </>
  );
}

export default ThemeContext;
