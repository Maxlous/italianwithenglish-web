import { useState, useEffect, useRef } from "react";
import { updateDB, updateLocalStorage } from "../utils/updateStats";
import { getLocalStorage, getDB } from "../utils/getStats";

export const useStatistics = (key, token, user) => {
  const INITIAL_STATE = {
    correctAnswer: 0,
    wrongAnswer: 0,
    answerSum: 0,
    average: 0,
  };
  const firstRender = useRef(0);
  const [statistics, setStatistics] = useState(INITIAL_STATE);

  useEffect(() => {
    if (!user) {
      const storage = getLocalStorage(key);
      storage?.answerSum && setStatistics(storage);
    } else {
      (async function () {
        const parsedStats = await getDB(key, token);
        parsedStats?.answerSum && setStatistics(parsedStats);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, user]);

  useEffect(() => {
    if (firstRender.current === 0 || firstRender.current === 1) {
      firstRender.current++;
      return;
    }
    !user
      ? updateLocalStorage(key, statistics)
      : updateDB(token, statistics, key, user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statistics]);
  // console.log(statistics);

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
      setStatistics(INITIAL_STATE);
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
