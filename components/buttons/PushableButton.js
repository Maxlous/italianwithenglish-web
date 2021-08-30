import styled from "styled-components";
import { useRouter } from "next/router";

const Button = ({ path = null, children, ...props }) => {
  const router = useRouter();
  const pathHandler = () => {
    router.push(`/exercises/${path}`);
  };

  return (
    <Pushable {...props} onClick={path && pathHandler}>
      <Shadow></Shadow>
      <Edge></Edge>
      <Front>{children}</Front>
    </Pushable>
  );
};

export default Button;

/* for 3D button the credit is belong to Josh Comeau https://www.joshwcomeau.com/animation/3d-button/ */

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: var(--redSalsa);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 9px 21px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--floralWhite);
  background: var(--redSalsa);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Pushable = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  &:hover {
    filter: brightness(110%);
  }
  &:hover ${Front} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
