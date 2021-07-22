import Link from "next/link";
import styled from "styled-components";

const MobileNav = () => {
  return (
    <MobileNavContainer id="mobileNav">
      <Link href="/exercises" passHref>
        <StyledLink id="header-exercises">Exercises</StyledLink>
      </Link>
      <Link href="/" passHref>
        <StyledLink id="header-italian-with-english">
          Italian with English
        </StyledLink>
      </Link>
      <Link href="/contact" passHref>
        <StyledLink id="header-contact">Contact</StyledLink>
      </Link>
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  height: 50vh;
  width: 100vw;
  clip-path: circle(0% at 100% 0%);
  z-index: 1;
  background: ${(props) => props.theme.headerBackground};
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.navLink};
  font-size: 1.5rem;
  &:hover {
    color: ${(props) => props.theme.navLink};
  }
`;
