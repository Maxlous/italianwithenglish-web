import { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes.js";
import { GlobalStyles } from "../styles/GlobalStyles.js";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const themeStorage = localStorage.getItem("theme");
      return themeStorage ? JSON.parse(themeStorage) : "dark";
    }
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProviderSC theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProviderSC>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
