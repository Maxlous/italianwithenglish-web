
const AnswerCounter = ({ correctAnswer, wrongAnswer, answerSum, averageSuccess }) => {
    return (
        <section className="mt-5">
            <div className="d-flex justify-content-between mb-3">
                <h5>Correct: {correctAnswer}</h5>
                <h5>Wrong: {wrongAnswer}</h5>
                <h5>Total : {answerSum}</h5>
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
