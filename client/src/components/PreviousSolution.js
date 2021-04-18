import Flag from "react-flagpack"
import { AiOutlineRollback } from "react-icons/ai";

const PreviousSolution = ({ italian, english, prevAnswerEffect }) => {

    let style = {};

    if (prevAnswerEffect === "correct-answer") {
        style = {
            borderLeft: "3px solid #99d98c",
            padding: "1em"
        }
    }

    if (prevAnswerEffect === "wrong-answer") {
        style = {
            borderLeft: "3px solid #ff6b6b",
            padding: "1em"
        }
    }


    return (
        <section style={style}>
            <h6 className="mb-2"><AiOutlineRollback size="1.3em" /> <u>Previous Solution</u></h6>
            <Flag code="IT" /> { italian}<br />
            <Flag code="GB-UKM" /> { english}
        </section >
    )
}

export default PreviousSolution
