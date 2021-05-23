import { useState } from "react";
import ExpressionTest from "../components/ExpressionTest";
import WordTest from "../components/WordTest";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import styled, { keyframes } from "styled-components";
import WhiteLogo from "../components/WhiteLogo";

const Exercises = () => {
  const [path, setPath] = useState("");
  const [displayPathDecision, setDisplayPathDecision] = useState(true);

  const changePath = () => {
    setDisplayPathDecision(!displayPathDecision);
    setPath("");
  };

  const pathHandler = (e) => {
    e.target.parentElement.id === "wordsPath"
      ? setPath("word")
      : setPath("expression");
    setDisplayPathDecision((displayPathDecision) => !displayPathDecision);
  };

  return (
    <>
      <article>
        {path === "word" ? <WordTest /> : <Ignore />}
        {path === "expression" ? <ExpressionTest /> : <Ignore />}
      </article>

      {displayPathDecision ? (
        <>
          <Wrapper>
            <div>
              <h1>What would you like to study?</h1>
            </div>
            <div>
              <div>
                <StyledH2>Go with words..</StyledH2>

                <Indicator>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Indicator>

                <Pushable id="wordsPath" onClick={pathHandler}>
                  <Shadow></Shadow>
                  <Edge></Edge>
                  <Front>GO</Front>
                </Pushable>
              </div>
              <div>
                <StyledH2>Go with expressions..</StyledH2>

                <Indicator>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Indicator>

                <Pushable id="expressionsPath" onClick={pathHandler}>
                  <Shadow></Shadow>
                  <Edge></Edge>
                  <Front>GO</Front>
                </Pushable>
              </div>
            </div>
          </Wrapper>
          <WhiteLogo />
        </>
      ) : (
        <PathChanger onClick={changePath}>
          {" "}
          <CgArrowsExchangeAlt size="1.5em" /> Change Path!
        </PathChanger>
      )}
    </>
  );
};

export default Exercises;

const Ignore = styled.p`
  display: none;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 25vh;
  width: 68%;
`;

const PathChanger = styled.button`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.fontColor};
  font-weight: 800;
  border: 3px solid ${(props) => props.theme.fontColor};
  transition: 1s;
  &:hover {
    border-radius: 1em;
    color: ${(props) => props.theme.fontColor};
  }
`;

const StyledH2 = styled.h2`
  text-decoration: underline var(--caribbeanGreen);
  text-decoration-thickness: 8px;
  text-underline-offset: 5px;
`;

/* the arrow effect is belong to ramachandra https://codepen.io/pullagantiramachandra/pen/XxPZZE  */
const animation = keyframes`
  0% {
    border-color: var(--redSalsa);
    transform: translate(0, 0);
  }
  20% {
    border-color: var(--redSalsa);
    transform: translate(15px, 15px);
  }
  100% {
    border-color: var(--redSalsa);
  }`;
const Indicator = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  & span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid var(--redSalsa);
    border-right: 3px solid var(--redSalsa);
    animation: 1s ${animation} linear infinite;
  }
  & span:nth-child(1) {
    top: -30px;
    left: -30px;
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    top: -15px;
    left: -15px;
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    top: 0;
    left: 0;
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    top: 15px;
    left: 15px;
    animation-delay: 0.6s;
  }
  & span:nth-child(5) {
    top: 30px;
    left: 30px;
    animation-delay: 0.8s;
  }
`;
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
