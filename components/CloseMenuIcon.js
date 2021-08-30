import useTheme from "@/hooks/useTheme";
import styled from "styled-components";

const CloseMenuIcon = ({ handleMobileNav }) => {
  const { theme } = useTheme();

  return theme === "dark" ? (
    <StyledNavIcon
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#000"
      viewBox="0 0 256 256"
      onClick={handleMobileNav}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        stroke="var(--caribbeanGreen)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        stroke="var(--redSalsa)"
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
      fill="#000"
      viewBox="0 0 256 256"
      onClick={handleMobileNav}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        stroke="var(--caribbeanGreen)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        stroke="var(--redSalsa)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </StyledNavIcon>
  );
};
export default CloseMenuIcon;

const StyledNavIcon = styled.svg`
  cursor: pointer;
`;
