import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes.js";
import { GlobalStyles } from "../styles/GlobalStyles.js";

export const ItalianContext = createContext();

const Italian = ({ children }) => {
  const [wor, setWords] = useState({});

  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem("theme");
    return themeStorage ? JSON.parse(themeStorage) : "dark";
  });

  // const fetchWords = async () => {
  //     try {
  //         const data = await axios.get("http://localhost:3001/exercises");
  //         const send = data.json()
  //         setWords(send);
  //         console.log(send)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  const fetchWords = async () => {
    const data = await axios("http://localhost:3001/exercises");
    setWords(data);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <ItalianContext.Provider
      value={{
        wor,
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ItalianContext.Provider>
  );
};

export default Italian;
