import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <HeaderElement className="mb-3">
      <Nav>
        <StyledLink className="mx-5" id="header-exercises" to="exercises">
          Exercises
        </StyledLink>
        <StyledLink className="mx-5" id="header-italian-with-english" to="/">
          Italian with English
        </StyledLink>
        <StyledLink className="mx-5" id="header-contact" to="/contact">
          Contact
        </StyledLink>
      </Nav>
      <ToggleTheme />
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  background: rgb(0, 0, 0, 0.1);
  height: 3rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  font-weight: 800;
  font-size: 1.4rem;
  padding: 0.1em;
  margin: 0.3em;
  &:hover {
    color: ${(props) => props.theme.fontColor};
  }
  &:after {
    content: "";
    display: block;
    border-bottom: ${(props) => {
      if (props.id === "header-exercises")
        return "5px solid var(--caribbeanGreen)";
      else if (props.id === "header-italian-with-english")
        return "5px solid var(--floralWhite)";
      else return "5px solid var(--redSalsa)";
    }};
    width: 0;
    -webkit-transition: 0.8s ease;
    transition: 0.8s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;
