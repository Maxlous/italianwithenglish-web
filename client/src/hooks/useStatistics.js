import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useStatistics = (localStorageKey) => {
  const INITIAL_STATE = {
    correctAnswer: 0,
    wrongAnswer: 0,
    answerSum: 0,
    average: 0,
  };
  const [storage, setStorage] = useLocalStorage(localStorageKey, INITIAL_STATE);
  const [statistics, setStatistics] = useState(storage);
  //this helper state is created to trigger useEffect call so we can access to up to date version of statistics state for calculating average
  const [helper, setHelper] = useState(false);

  useEffect(() => {
    setStatistics({
      ...statistics,
      average: percentage(
        statistics.answerSum,
        statistics.correctAnswer,
        statistics.wrongAnswer
      ),
    });
    setStorage(statistics);
    //eslint-disable-next-line
  }, [helper]);

  const percentage = (total, correct, wrong) => {
    if (correct === 0) {
      return 0;
    } else if (wrong === 0) {
      return 100;
    } else {
      return Math.round((100 * correct) / total);
    }
  };

  const handleStats = (param) => {
    if (param === "reset") {
      setStatistics({
        ...statistics,
        correctAnswer: 0,
        wrongAnswer: 0,
        answerSum: 0,
      });
      setHelper(!helper);
    }
    if (param === "true") {
      setStatistics({
        ...statistics,
        correctAnswer: statistics.correctAnswer + 1,
        answerSum: statistics.answerSum + 1,
      });
      setHelper(!helper);
    }
    if (param === "false") {
      setStatistics({
        ...statistics,
        wrongAnswer: statistics.wrongAnswer + 1,
        answerSum: statistics.answerSum + 1,
      });
      setHelper(!helper);
    }
  };

  return [statistics, handleStats];
};
