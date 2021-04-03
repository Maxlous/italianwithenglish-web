import { useState } from 'react'
import ExpressionTest from '../components/ExpressionTest'
import WordTest from '../components/WordTest'

const Exercises = () => {

    const [path, setPath] = useState("");
    const [displayPathDecision, setDisplayPathDecision] = useState(true)

    const changePath = () => {
        setDisplayPathDecision(!displayPathDecision)
        setPath("")
    }

    const pathHandler = (e) => {
        e.target.id === "wordsPath" ? setPath("word") : setPath("expression")
        setDisplayPathDecision(!displayPathDecision)
    }

    return (
        <>
        {displayPathDecision ? (
        <div className="mt-5 align-self-center">
            <div className="row">
                <h1 className="text-center">What would you like to study?</h1>
            </div>
            <div className="mt-5 row">
                <div className="col-sm">
                    <h2 className="text-center mb-5">Go with words..</h2>
                    <div className="d-flex justify-content-center">
                        <button id="wordsPath" onClick={pathHandler}>GO!</button>
                    </div>
                </div>
                <div className="col-sm">
                    <h2 className="text-center mb-5">Go with expressions..</h2>
                    <div className="d-flex justify-content-center">
                        <button id="expressionsPath" onClick={pathHandler}>GO!</button>
                    </div>
                </div>
            </div>
        </div>) : (
            <button onClick={changePath}>Change Path!</button>
        )}
        
       
            <article>
                {path === "word" ? (
                    <WordTest />
                    ) : (<p>beni yoksay</p>)
                }  
                {path === "expression" ? (
                    <ExpressionTest />
                    ) : (<p>beni yoksay</p>)
                }    
                    
            </article>
        </>
    )
}

export default Exercises
