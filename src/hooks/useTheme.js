import { Context } from "../context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(Context);
