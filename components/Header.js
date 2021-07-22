import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState("hamburger-icon");

  const handleMobileNav = () => {
    const mobileNav = document.querySelector("#mobileNav");
    const panelStyles = window.getComputedStyle(mobileNav);
    if (panelStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
      mobileNav.style.clipPath = "circle(100% at 50% 50%)";
      setMobileNavIcon("close-icon");
    } else {
      mobileNav.style.clipPath = "circle(0% at 100% 0%)";
      setMobileNavIcon("hamburger-icon");
    }
  };

  return (
    <HeaderElement>
      <Nav>
        <ToggleTheme />
        {typeof window !== "undefined" && window.innerWidth >= 480 ? (
          <>
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
            <LettersContainer>
              <StyledLetterI>I</StyledLetterI> <StyledLetterW>w</StyledLetterW>{" "}
              <StyledLetterE>E</StyledLetterE>
            </LettersContainer>
          </>
        ) : (
          <>
            <Link href="/" passHref>
              <MobileHomePageLink>Italian with English</MobileHomePageLink>
            </Link>
            {mobileNavIcon === "hamburger-icon" ? (
              <HamburgerMenuIcon handleMobileNav={handleMobileNav} />
            ) : (
              <CloseMenuIcon handleMobileNav={handleMobileNav} />
            )}
          </>
        )}
      </Nav>
      <MobileNav />
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  background: ${(props) => props.theme.headerBackground};
  height: 5vh;
  @media screen and (max-height: 740px) {
    height: 10vh;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  @media screen and (max-height: 740px) {
    height: 10vh;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.navLink};
  font-weight: 800;
  font-size: 1.4rem;
  &:hover {
    color: ${(props) => props.theme.navLink};
  }
  &:after {
    content: "";
    display: block;
    border-bottom: ${(props) => {
      if (props.id === "header-exercises")
        return "5px solid var(--caribbeanGreen)";
      else if (props.id === "header-italian-with-english")
        return "5px solid #DDDDDD";
      else return "5px solid var(--redSalsa)";
    }};
    width: 0;
    -webkit-transition: 0.8s ease;
    transition: 0.8s ease;
  }
  &:hover:after {
    width: 100%;
  }
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`;

const MobileHomePageLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.navLink};
  font-weight: 800;
  font-size: 1.4rem;
`;

const LettersContainer = styled.div`
  margin-right: 0.5rem;
`;

const StyledLetterI = styled.span`
  text-decoration: none;
  color: var(--caribbeanGreen);
  font-weight: 800;
  font-size: 1.5rem;
`;

const StyledLetterW = styled.span`
  text-decoration: none;
  color: ${(props) => props.theme.navLink};
  font-weight: 800;
  font-size: 1.4rem;
`;

const StyledLetterE = styled.span`
  text-decoration: none;
  color: var(--redSalsa);
  font-weight: 800;
  font-size: 1.5rem;
`;
