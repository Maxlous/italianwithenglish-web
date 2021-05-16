import { createContext, useState } from "react";
// import axios from "axios";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes.js";
import { GlobalStyles } from "../styles/GlobalStyles.js";

export const ItalianContext = createContext();

const Italian = ({ children }) => {
  // const [wordsArray, setWordsArray] = useState([]);
  // const [expressionsArray, setExpressionsArray] = useState([]);
  const [theme, setTheme] = useState(() => {
    const themeStorage = localStorage.getItem("theme");
    return themeStorage ? JSON.parse(themeStorage) : "dark";
  });

  // const fetchWords = async () => {
  //   const data = await axios("http://localhost:3001/exercises");
  //   setWordsArray(data.data[0]);
  //   setExpressionsArray(data.data[1]);
  // };

  // useEffect(() => {
  //   fetchWords();
  // }, []);

  return (
    <ItalianContext.Provider
      value={{
        // wordsArray,
        // expressionsArray,
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
