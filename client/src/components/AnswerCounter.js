import "../styles/AnswerCounter.css"
const AnswerCounter = ({ correctAnswer, wrongAnswer, answerSum, averageSuccess }) => {
    return (
        <section className="mt-5 sec">
            <div className="stats mb-3">
                <p>Correct: {correctAnswer}</p>
                <p className="ms-5">Wrong: {wrongAnswer}</p>
                <p className="ms-5">Total : {answerSum}</p>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-dark" role="progressbar"
                    style={{ width: `${averageSuccess}%` }} aria-valuenow={averageSuccess}
                    aria-valuemin="0" aria-valuemax="100">{averageSuccess} %
                </div>
            </div>
        </section>
    )
}

export default AnswerCounter
