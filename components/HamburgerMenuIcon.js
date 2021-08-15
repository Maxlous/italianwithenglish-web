import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";

const HamburgerMenuIcon = ({ handleMobileNav }) => {
  const { theme } = useContext(ThemeContext);

  return theme === "dark" ? (
    <StyledNavIcon
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#000000"
      viewBox="0 0 256 256"
      onClick={handleMobileNav}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </StyledNavIcon>
  ) : (
    <StyledNavIcon
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#000000"
      viewBox="0 0 256 256"
      onClick={handleMobileNav}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </StyledNavIcon>
  );
};

export default HamburgerMenuIcon;

const StyledNavIcon = styled.svg`
  cursor: pointer;
`;
