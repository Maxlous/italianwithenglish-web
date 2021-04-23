import { GiCheckMark } from "react-icons/gi"
import { FaTimes, FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const AnswerCounter = ({ correctAnswer, wrongAnswer, answerSum, averageSuccess, pbColor }) => {

    let progressbarBackground = {};

    if (pbColor === "correct-answer") {
        progressbarBackground = "#17C390"
    }

    if (pbColor === "wrong-answer") {
        progressbarBackground = "#FE4D53"
    }

    return (
        <Section>
            <Stats>
                <p><GiCheckMark /> Correct: {correctAnswer}</p>
                <p className="ms-5"><FaTimes /> Wrong: {wrongAnswer}</p>
                <p className="ms-5"><FaSpinner /> Total : {answerSum}</p>
            </Stats>
            <div className="progress" style={{ width: "50em", alignSelf: "center" }}>
                <div className="progress-bar progress-bar-striped" role="progressbar"
                    style={{ width: `${averageSuccess}%`, backgroundColor: `${progressbarBackground}` }} aria-valuenow={averageSuccess}
                    aria-valuemin="0" aria-valuemax="100">{averageSuccess} %
                </div>
            </div>
        </Section >
    )
}

export default AnswerCounter

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4rem;
    `
const Stats = styled.div`
    align-self: center;
    display: flex;
    margin-bottom: 2rem;    
    `
