import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
  --caribbeanGreen: #17c390;
  --floralWhite: #fef9ef;
  --redSalsa: #fe4d53;
}

* {
  color: ${(props) => props.theme.fontColor};
  transition: all .6s ease-in;
  box-sizing: border-box
}

body {
  margin: 0;
  font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.bg};
  transition: all .6s ease-in;
  scroll-behavior: smooth;
}
`;
