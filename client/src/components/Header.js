import ToggleTheme from "./ToggleTheme";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderElement>
      <Nav>
        <ToggleTheme />
        <StyledLink id="header-exercises" to="exercises">
          Exercises
        </StyledLink>
        <StyledLink id="header-italian-with-english" to="/">
          Italian with English
        </StyledLink>
        <StyledLink id="header-contact" to="/contact">
          Contact
        </StyledLink>
        {window.innerWidth >= 640 ? (
          <Link to="/">
            <Logo src="./images/blackLogo.PNG" alt="black logo" />
          </Link>
        ) : (
          <NavIcon />
        )}
      </Nav>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  background: ${(props) => props.theme.headerBackground};
  height: 5vh;

  @media screen and (max-height: 570px) {
    height: 10vh;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  @media screen and (max-height: 570px) {
    height: 10vh;
  }
`;

const StyledLink = styled(Link)`
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

const Logo = styled.img`
  cursor: pointer;
  width: 3rem;
`;
