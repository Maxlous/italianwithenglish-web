import { useState, useEffect } from "react";
import updateLocalStorage from "../utils/updateLocalStorage";
import updateDB from "../utils/updateDB";
import useAuth from "./useAuth";

export const useStatistics = (localStorageKey, token) => {
  const INITIAL_STATE = {
    correctAnswer: 0,
    wrongAnswer: 0,
    answerSum: 0,
    average: 0,
  };

  const { user } = useAuth();

  const [statistics, setStatistics] = useState(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem(localStorageKey);
      return storage ? JSON.parse(storage) : INITIAL_STATE;
    } else {
      return {};
    }
  });

  useEffect(() => {
    !user
      ? updateLocalStorage(localStorageKey, statistics)
      : updateDB(token, statistics);
  });

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
        average: 0,
      });
    }
    if (param === "true") {
      setStatistics({
        ...statistics,
        correctAnswer: statistics.correctAnswer + 1,
        answerSum: statistics.answerSum + 1,
        average: percentage(
          statistics.answerSum + 1,
          statistics.correctAnswer + 1,
          statistics.wrongAnswer
        ),
      });
    }
    if (param === "false") {
      setStatistics({
        ...statistics,
        wrongAnswer: statistics.wrongAnswer + 1,
        answerSum: statistics.answerSum + 1,
        average: percentage(
          statistics.answerSum + 1,
          statistics.correctAnswer,
          statistics.wrongAnswer + 1
        ),
      });
    }
  };

  return [statistics, handleStats];
};
