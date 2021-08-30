import useTheme from "@/hooks/useTheme";
import styled from "styled-components";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const themeToggler = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  };

  return (
    <>
      {theme === "dark" ? (
        <StyledThemeChanger
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#000000"
          viewBox="0 0 256 256"
          onClick={themeToggler}
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
            fill="none"
            stroke="#282c36"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>
        </StyledThemeChanger>
      ) : (
        <StyledThemeChanger
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#fff"
          viewBox="0 0 256 256"
          onClick={themeToggler}
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="128"
            r="60"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></circle>
          <line
            x1="128"
            y1="36"
            x2="128"
            y2="16"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="62.94618"
            y1="62.94618"
            x2="48.80404"
            y2="48.80404"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="36"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="62.94618"
            y1="193.05382"
            x2="48.80404"
            y2="207.19596"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="128"
            y1="220"
            x2="128"
            y2="240"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="193.05382"
            y1="193.05382"
            x2="207.19596"
            y2="207.19596"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="220"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="193.05382"
            y1="62.94618"
            x2="207.19596"
            y2="48.80404"
            fill="none"
            stroke="#fef9ef"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
        </StyledThemeChanger>
      )}
    </>
  );
};

const StyledThemeChanger = styled.svg`
  cursor: pointer;
`;

export default ToggleTheme;
