import { useState } from "react";
import ExpressionTest from "../components/ExpressionTest";
import WordTest from "../components/WordTest";
import "../styles/Exercises.css";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import styled from "styled-components";

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
      <article className="d-flex flex-column">
        {path === "word" ? <WordTest /> : <Ignore />}
        {path === "expression" ? <ExpressionTest /> : <Ignore />}
      </article>

      {displayPathDecision ? (
        <Wrapper>
          <div className="row mb-5">
            <h1 className="text-center h1-style">
              What would you like to study?
            </h1>
          </div>
          <div className="mt-5 row">
            <div className="col-sm">
              <h2 className="text-center mb-5 go-text">Go with words..</h2>
              <div className="d-flex align-items-center justify-content-center">
                <div className="indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <button
                className="mt-5 pushable"
                id="wordsPath"
                onClick={pathHandler}
              >
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">GO</span>
              </button>
            </div>
            <div className="col-sm">
              <h2 className="text-center mb-5 go-text">
                Go with expressions..
              </h2>
              <div className="d-flex align-items-center justify-content-center">
                <div className="indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <button
                className="mt-5 pushable"
                id="expressionsPath"
                onClick={pathHandler}
              >
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">GO</span>
              </button>
            </div>
          </div>
        </Wrapper>
      ) : (
        <PathChanger className="btn" onClick={changePath}>
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
  color: ${(props) => props.theme.fontColor}
  font-weight: 800;
  border: 3px solid ${(props) => props.theme.fontColor};
  transition: 1s;
  &:hover {
    border-radius: 1em;
    color: #ddd;
  }
`;
