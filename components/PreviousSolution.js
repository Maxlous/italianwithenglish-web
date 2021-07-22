import { AiOutlineRollback } from "react-icons/ai";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Flag = dynamic(() => import("react-flagpack"), { ssr: false });

const PreviousSolution = ({ italian, english, prevAnswerEffect }) => {
  return (
    <Container status={prevAnswerEffect}>
      <H6>
        <AiOutlineRollback size="1.3em" /> <u>Previous Solution</u>
      </H6>
      <Divider>
        <Flag code="IT" /> <Text>{italian ? italian : "Italian Solution"}</Text>
      </Divider>
      <Divider>
        <Flag code="GB-UKM" />{" "}
        <Text>{english ? english : "English Solution"}</Text>
      </Divider>
    </Container>
  );
};

export default PreviousSolution;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 3px solid
    ${(props) => {
      if (props.status === "correct-answer") {
        return "var(--caribbeanGreen)";
      } else if (props.status === "wrong-answer") {
        return "var(--redSalsa)";
      } else {
        return "#007bff";
      }
    }};
  padding-left: 1em;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Divider = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin-left: 1rem;
`;

const H6 = styled.h6`
  text-align: center;
`;
