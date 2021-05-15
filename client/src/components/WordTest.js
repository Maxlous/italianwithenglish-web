import { useEffect, useState, useRef } from "react";
import words from "../constantWords";
import AnswerCounter from "./AnswerCounter";
import PreviousSolution from "./PreviousSolution";
import Flag from "react-flagpack";
import styled from "styled-components";
import { useStatistics } from "../hooks/useStatistics";

const WordTest = () => {
  const correctAnswerContainer = useRef(null);
  const [italian, setItalian] = useState("");
  const [english, setEnglish] = useState("");
  const [prevAnswerEffect, setPrevAnswerEffect] = useState("");
  const [stats, setStats] = useStatistics();
  useEffect(() => {
    // eslint-disable-next-line
    correctWord = randomIntWord();
    // eslint-disable-next-line
    w1 = wordA();
    // eslint-disable-next-line
    w2 = wordB();
    // eslint-disable-next-line
    w3 = wordC();
    // eslint-disable-next-line
    w4 = wordD();
    // eslint-disable-next-line
    place1word = place1W();
    // eslint-disable-next-line
    place2word = place2W();
    // eslint-disable-next-line
    place3word = place3W();
    // eslint-disable-next-line
    place4word = place4W();
    // eslint-disable-next-line
    place5word = place5W();
  }, [stats.answer]);

  const randomIntWord = function () {
    return Math.floor(Math.random() * words.length);
  };

  let correctWord = randomIntWord();

  const wordA = () => {
    let num = randomIntWord();
    while (num === correctWord) {
      num = randomIntWord();
    }
    return num;
  };

  let w1 = wordA();

  const wordB = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1) {
      num = randomIntWord();
    }
    return num;
  };

  let w2 = wordB();

  const wordC = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1 || num === w2) {
      num = randomIntWord();
    }
    return num;
  };

  let w3 = wordC();

  const wordD = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1 || num === w2 || num === w3) {
      num = randomIntWord();
    }
    return num;
  };

  let w4 = wordD();

  const randomPlaceArrForWords = [correctWord, w1, w2, w3, w4];

  const getRandomPlaceForWords = function () {
    return Math.floor(Math.random() * randomPlaceArrForWords.length);
  };

  const place1W = () => {
    return getRandomPlaceForWords();
  };

  let place1word = place1W();

  const place2W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place2word = place2W();

  const place3W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word || num === place2word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place3word = place3W();

  const place4W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word || num === place2word || num === place3word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place4word = place4W();

  const place5W = () => {
    let num = getRandomPlaceForWords();
    while (
      num === place1word ||
      num === place2word ||
      num === place3word ||
      num === place4word
    ) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place5word = place5W();

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
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-center mb-5">
          Choose the correct translation for given word!
        </h4>
        <div className="d-flex flex-row">
          <Flag code="IT" />
          <h5 className="text-center mb-4 ms-2" ref={correctAnswerContainer}>
            {words[correctWord].italian}
          </h5>
        </div>
        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {words[randomPlaceArrForWords[place1word]].english}
        </Button>
        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {words[randomPlaceArrForWords[place2word]].english}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {words[randomPlaceArrForWords[place3word]].english}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {words[randomPlaceArrForWords[place4word]].english}
        </Button>

        <Button className="mb-4 custom-btn btn-test" onClick={handleAnswer}>
          {words[randomPlaceArrForWords[place5word]].english}
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

export default WordTest;

const Button = styled.button`
  background-color: transparent;
  border-radius: 1.5em;
  padding: 0.5em 2em 0.5em 2em;
`;
