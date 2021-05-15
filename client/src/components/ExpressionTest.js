import { useState, useRef } from "react";
import expressions from "../constantExpressions";
import AnswerCounter from "./AnswerCounter";
import PreviousSolution from "./PreviousSolution";
import Flag from "react-flagpack";
import styled from "styled-components";
import { useStatistics } from "../hooks/useStatistics";
import { useMultipleChoice } from "../hooks/useMultipleChoice";

const ExpressionTest = () => {
  const correctAnswerContainer = useRef(null);
  const [italian, setItalian] = useState("");
  const [english, setEnglish] = useState("");
  const [prevAnswerEffect, setPrevAnswerEffect] = useState("");

  const [stats, setStats] = useStatistics();
  const {
    question,
    firstOption,
    secondOption,
    thirdOption,
    fourthOption,
    fifthOption,
  } = useMultipleChoice(expressions);

  const correctEnglishValue = (italianVal) => {
    let willBeReturned = "";
    for (let i = 0; i < expressions.length; i++) {
      if (expressions[i].italian === italianVal) {
        willBeReturned = expressions[i].english;
      }
    }
    return willBeReturned;
  };

  const handleAnswer = (e) => {
    let correctItalianValue = correctAnswerContainer.current.innerText;
    setItalian(correctItalianValue);
    setEnglish(correctEnglishValue(correctItalianValue));
    if (e.target.innerText === correctEnglishValue(correctItalianValue)) {
      setStats(true);
      setPrevAnswerEffect("correct-answer");
    } else {
      setStats(false);
      setPrevAnswerEffect("wrong-answer");
    }
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-center mb-5 white-text">
          Choose the correct translation for given word!
        </h4>
        <div className="d-flex flex-row">
          <Flag code="IT" />
          <h5 className="text-center ms-2 mb-4" ref={correctAnswerContainer}>
            {question}
          </h5>
        </div>
        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {firstOption}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {secondOption}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {thirdOption}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {fourthOption}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {fifthOption}
        </Button>
      </div>
      <PreviousSolution
        italian={italian}
        english={english}
        prevAnswerEffect={prevAnswerEffect}
      />
      <AnswerCounter
        correctAnswer={stats.correctAnswer}
        wrongAnswer={stats.wrongAnswer}
        answerSum={stats.answerSum}
        averageSuccess={stats.average}
        pbColor={prevAnswerEffect}
      />
    </>
  );
};

export default ExpressionTest;

const Button = styled.button`
  background-color: transparent;
  border-radius: 1.5em;
  padding: 0.5em 2em 0.5em 2em;
`;
