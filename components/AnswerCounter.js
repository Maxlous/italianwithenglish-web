import { GiCheckMark } from "react-icons/gi";
import { FaTimes, FaSpinner } from "react-icons/fa";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const AnswerCounter = ({
  correctAnswer,
  wrongAnswer,
  answerSum,
  averageSuccess,
  pbColor,
}) => {
  return (
    <Section>
      <Stats>
        <Divider>
          <GiCheckMark />
          <Text>Correct: {correctAnswer}</Text>
        </Divider>
        <Divider>
          <FaTimes /> <Text>Wrong: {wrongAnswer}</Text>
        </Divider>
        <Divider>
          <FaSpinner /> <Text>Total : {answerSum}</Text>
        </Divider>
      </Stats>
      <ProgressBar pbColor={pbColor} averageSuccess={averageSuccess} />
    </Section>
  );
};

export default AnswerCounter;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
  @media screen and (max-height: 720px) {
    margin-top: 2rem;
  }
`;
const Stats = styled.div`
  width: 50em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  padding-left: 0.3rem;
`;
