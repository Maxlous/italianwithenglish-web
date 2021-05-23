import { useState, useRef } from "react";
import words from "../assets/Words";
import AnswerCounter from "./AnswerCounter";
import PreviousSolution from "./PreviousSolution";
import Flag from "react-flagpack";
import styled from "styled-components";
import { useStatistics } from "../hooks/useStatistics";
import { useMultipleChoice } from "../hooks/useMultipleChoice";

const WordTest = () => {
  const correctAnswerContainer = useRef(null);
  const [italian, setItalian] = useState("");
  const [english, setEnglish] = useState("");
  const [prevAnswerEffect, setPrevAnswerEffect] = useState("");

  const [stats, setStats] = useStatistics("wordResults");
  const {
    question,
    firstOption,
    secondOption,
    thirdOption,
    fourthOption,
    fifthOption,
  } = useMultipleChoice(words);

  const correctEnglishValue = (italianVal) => {
    let willBeReturned = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].italian === italianVal) {
        willBeReturned = words[i].english;
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
      <div>
        <h4>Choose the correct translation for given word!</h4>
        <div>
          <Flag code="IT" />
          <h5 ref={correctAnswerContainer}>{question}</h5>
        </div>
        <Button onClick={handleAnswer}>{firstOption}</Button>
        <Button onClick={handleAnswer}>{secondOption}</Button>
        <Button onClick={handleAnswer}>{thirdOption}</Button>
        <Button onClick={handleAnswer}>{fourthOption}</Button>
        <Button onClick={handleAnswer}>{fifthOption}</Button>
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

export default WordTest;

const Button = styled.button`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  background-image: linear-gradient(
    to right top,
    #17c390,
    var(--floralWhite),
    #fef9ef,
    var(--floralWhite),
    #fe6d73
  );
  cursor: pointer;
  border-radius: 1.5rem;
  padding: 0.5em 2em;
  transition: all 0.3s ease;
  outline: none;
  border: none;
  color: black;
  &:hover {
    color: #000;
    transform: translateY(8%);
    border-radius: 15px;
  }
`;
