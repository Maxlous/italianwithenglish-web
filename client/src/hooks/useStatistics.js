import { useState, useEffect } from "react";

export const useStatistics = () => {
  const [statistics, setStatistics] = useState({
    answer: false,
    correctAnswer: 0,
    wrongAnswer: 0,
    answerSum: 0,
    average: 0,
  });

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
    if (param) {
      setStatistics({
        ...statistics,
        correctAnswer: statistics.correctAnswer + 1,
        answerSum: statistics.answerSum + 1,
        answer: !statistics.answer,
      });
      setHelper(!helper);
    } else {
      setStatistics({
        ...statistics,
        wrongAnswer: statistics.wrongAnswer + 1,
        answerSum: statistics.answerSum + 1,
        answer: !statistics.answerSum,
      });
      setHelper(!helper);
    }
  };

  return [statistics, handleStats];
};
