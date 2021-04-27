import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
  --caribbeanGreen: #17c390;
  --floralWhite: #fef9ef;
  --redSalsa: #fe4d53;
}

* {
  color: ${(props) => props.theme.fontColor}
}

body {
  margin: 0;
  font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.bg}
  /* background-image: linear-gradient(
    to right top,
    #e6f2ec,
    #e8f5f3,
    #edf7f9,
    #f3f9fc,
    #f9fbfe,
    #f8f9fd,
    #f8f6fb,
    #f8f4f9,
    #f5ecf2,
    #f4e3ea,
    #f2dbdf
  ); */
}
`;
