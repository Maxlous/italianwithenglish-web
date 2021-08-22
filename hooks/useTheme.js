import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  if (theme === "undefined" || setTheme === "undefined") {
    throw new Error("useTheme must be called within ThemeProvider");
  }
  return { theme, setTheme };
};

export default useTheme;
