import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileNav = () => {
  return (
    <MobileNavContainer id="mobileNav">
      <StyledLink id="header-exercises" to="exercises">
        Exercises
      </StyledLink>
      <StyledLink id="header-italian-with-english" to="/">
        Italian with English
      </StyledLink>
      <StyledLink id="header-contact" to="/contact">
        Contact
      </StyledLink>
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.navLink};
  font-size: 1.5rem;
  &:hover {
    color: ${(props) => props.theme.navLink};
  }
`;
