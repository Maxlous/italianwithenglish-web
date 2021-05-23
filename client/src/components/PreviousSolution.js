import Flag from "react-flagpack";
import { AiOutlineRollback } from "react-icons/ai";

const PreviousSolution = ({ italian, english, prevAnswerEffect }) => {
  let style = {};

  if (prevAnswerEffect === "correct-answer") {
    style = {
      borderLeft: "3px solid var(--caribbeanGreen)",
      padding: "1em",
    };
  }

  if (prevAnswerEffect === "wrong-answer") {
    style = {
      borderLeft: "3px solid var(--redSalsa)",
      padding: "1em",
    };
  }

  return (
    <section style={style}>
      <h6>
        <AiOutlineRollback size="1.3em" /> <u>Previous Solution</u>
      </h6>
      <Flag code="IT" /> {italian}
      <br />
      <Flag code="GB-UKM" /> {english}
    </section>
  );
};

export default PreviousSolution;
