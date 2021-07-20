import { useState, useRef } from "react";
import expressions from "../../../assets/Expressions";
import AnswerCounter from "../../../components/AnswerCounter";
import PreviousSolution from "../../../components/PreviousSolution";
import ChangePathButton from "../../../components/ChangePathButton";
import TestButton from "../../../components/TestButton";
import { useStatistics } from "../../../hooks/useStatistics";
import { useMultipleChoice } from "../../../hooks/useMultipleChoice";
import Flag from "react-flagpack";
import styled from "styled-components";
import ResetStats from "../../../components/ResetStats";

const ExpressionTest = () => {
  const correctAnswerContainer = useRef(null);
  const [italian, setItalian] = useState("");
  const [english, setEnglish] = useState("");
  const [prevAnswerEffect, setPrevAnswerEffect] = useState("");

  const [stats, setStats] = useStatistics("expressionResults");
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
      setStats("true");
      setPrevAnswerEffect("correct-answer");
    } else {
      setStats("false");
      setPrevAnswerEffect("wrong-answer");
    }
  };

  const handleReset = () => {
    setStats("reset");
  };

  return (
    <Main>
      <Article>
        <H4>
          Choose the correct translation for given <span>expression!</span>
        </H4>
        <Question>
          <Flag code="IT" />
          <H5 ref={correctAnswerContainer}>{question}</H5>
        </Question>
        <ButtonsContainer>
          <TestButton handleAnswer={handleAnswer} value={firstOption} />
          <TestButton handleAnswer={handleAnswer} value={secondOption} />
          <TestButton handleAnswer={handleAnswer} value={thirdOption} />
          <TestButton handleAnswer={handleAnswer} value={fourthOption} />
          <TestButton handleAnswer={handleAnswer} value={fifthOption} />
        </ButtonsContainer>
      </Article>
      <Section>
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
        <ResetStats handleReset={handleReset} />
        <ChangePathButton />
      </Section>
    </Main>
  );
};

export default ExpressionTest;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-height: 720px) {
    font-size: 0.7rem;
  }
`;

const Article = styled.article`
  margin-block: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media screen and (max-height: 720px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  & button {
    margin-bottom: 1rem;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
`;

const H4 = styled.h4`
  text-align: center;
  margin-bottom: 3rem;
  @media screen and (max-height: 720px) {
    margin-bottom: 1rem;
  }
`;

const H5 = styled.h5`
  margin-left: 1rem;
  margin-bottom: 2rem;
`;
