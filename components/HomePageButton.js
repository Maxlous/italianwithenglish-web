import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  return <StyledLink to="./exercises">Start your journey</StyledLink>;
};

export default Button;

const StyledLink = styled(Link)`
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 10px;
  border-style: solid;
  transform: transition;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  width: 15rem;
  align-self: center;
  &:hover {
    transition: 0.5s ease;
    border-color: var(--floralWhite) var(--redSalsa) var(--floralWhite)
      var(--caribbeanGreen);
    color: ${(props) => props.theme.fontColor};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
    width: 12rem;
  }
`;
