import { useContext } from "react";
import { ItalianContext } from "../context/ItalianContext";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ItalianContext);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return <button onClick={themeToggler}>ToggleTheme</button>;
};

export default ToggleTheme;
