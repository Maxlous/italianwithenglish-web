import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import useTheme from "@/hooks/useTheme";
import { lightTheme } from "../styles/themes";

const Header = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState("hamburger-icon");
  const [showUserDashboardMenu, setShowUserDashboardMenu] = useState(false);
  const { user, logout } = useAuth();
  const { theme } = useTheme();

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
        {typeof window !== "undefined" && window.innerWidth >= 480 ? (
          <>
            <LettersContainer>
              <StyledLetterI>I</StyledLetterI> <StyledLetterW>w</StyledLetterW>{" "}
              <StyledLetterE>E</StyledLetterE>
            </LettersContainer>
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
            <AccountSection>
              {!user ? (
                <>
                  <Link href="/account/login" passHref>
                    <StyledLink account>Login</StyledLink>
                  </Link>
                  <Link href="/account/register" passHref>
                    <StyledLink account>Register</StyledLink>
                  </Link>
                </>
              ) : (
                <>
                  <GiPlagueDoctorProfile
                    size="2em"
                    style={{
                      background:
                        theme === "dark" ? lightTheme.fontColor : lightTheme.bg,
                      borderRadius: 30,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setShowUserDashboardMenu(!showUserDashboardMenu)
                    }
                  />
                </>
              )}
            </AccountSection>
          </>
        ) : (
          <>
            <GiPlagueDoctorProfile
              size="2em"
              style={{
                background:
                  theme === "dark" ? lightTheme.fontColor : lightTheme.bg,
                borderRadius: 30,
                cursor: "pointer",
              }}
              onClick={() => setShowUserDashboardMenu(!showUserDashboardMenu)}
            />
            <Link href="/exercises" passHref>
              <ExercisesLink>
                <LettersContainer>
                  <StyledLetterI>I</StyledLetterI>{" "}
                  <StyledLetterW>w</StyledLetterW>{" "}
                  <StyledLetterE>E</StyledLetterE>
                </LettersContainer>
              </ExercisesLink>
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
      {showUserDashboardMenu && (
        <UserDashboardMenu>
          {!user ? (
            <>
              <Link href="/account/login" passHref>
                <StyledLink account>Login</StyledLink>
              </Link>
              <Link href="/account/register" passHref>
                <StyledLink account>Register</StyledLink>
              </Link>
            </>
          ) : (
            <>
              <Link href="/account/dashboard" passHref>
                <StyledLink account>Dashboard</StyledLink>
              </Link>
              <ToggleTheme />
              <Logout
                onClick={() => {
                  setShowUserDashboardMenu(false);
                  logout();
                }}
              >
                <StyledLink account>Logout</StyledLink>
              </Logout>
            </>
          )}
        </UserDashboardMenu>
      )}
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
  font-size: ${(props) => {
    if (props.account) return "1rem";
    return "1.4rem";
  }};
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
      else if (props.account) return `3px solid ${props.theme.navLink}`;
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

const LettersContainer = styled.div`
  margin-left: 0.5rem;
  pointer-events: none;
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

const AccountSection = styled.div`
  padding: 10px;
`;

const UserDashboardMenu = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  height: 15vh;
  width: 10vw;
  right: 0;
  background: ${(props) => props.theme.headerBackground};
  border-end-start-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 30vw;
    left: 0;
    border-end-start-radius: 0px;
    border-end-end-radius: 10px;
  }
`;

const Logout = styled.button`
  border: none;
  background: none;
`;

const ExercisesLink = styled.a`
  text-decoration: none;
`;
