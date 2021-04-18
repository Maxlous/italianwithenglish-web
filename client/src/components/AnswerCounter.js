import "../styles/AnswerCounter.css";
import { GiCheckMark } from "react-icons/gi"
import { FaTimes, FaSpinner } from "react-icons/fa"
const AnswerCounter = ({ correctAnswer, wrongAnswer, answerSum, averageSuccess, pbColor }) => {

    let progressbarBackground = {};

    if (pbColor === "correct-answer") {
        progressbarBackground = "#99d98c"
    }

    if (pbColor === "wrong-answer") {
        progressbarBackground = "#ff6b6b"
    }

    return (
        <section className="mt-5 sec">
            <div className="stats mb-3">
                <p><GiCheckMark /> Correct: {correctAnswer}</p>
                <p className="ms-5"><FaTimes /> Wrong: {wrongAnswer}</p>
                <p className="ms-5"><FaSpinner /> Total : {answerSum}</p>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar"
                    style={{ width: `${averageSuccess}%`, backgroundColor: `${progressbarBackground}` }} aria-valuenow={averageSuccess}
                    aria-valuemin="0" aria-valuemax="100">{averageSuccess} %
                </div>
            </div>
        </section >
    )
}

export default AnswerCounter
