import { useEffect, useState, useRef } from "react"
import words from "../constantWords"
import AnswerCounter from "./AnswerCounter";

const WordTest = () => {

    const [answer, setAnswer] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [answerSum, setAnswerSum] = useState(0);

    const correctAnswerContainer = useRef(null);

    useEffect(() => {
        correctWord = randomIntWord();
        w1 = wordA();
        w2 = wordB();
        w3 = wordC();
        w4 = wordD();
        place1word = place1W();
        place2word = place2W();
        place3word = place3W();
        place4word = place4W();
        place5word = place5W();
    }, [answer])

     const randomIntWord = function () {
          return Math.floor(Math.random() * words.length);
      };

     let correctWord = randomIntWord();

     const wordA = () =>{
          let num = randomIntWord();
          while (num === correctWord){
              num = randomIntWord(); 
          };
          return num
      }

      let w1 = wordA();
          
      const wordB = () =>{
          let num = randomIntWord();
          while (num === correctWord || num === w1){
              num = randomIntWord(); 
          };
          return num
      }

      let w2 = wordB();
      
      const wordC = () =>{
          let num = randomIntWord();
          while (num === correctWord || num === w1 || num === w2){
              num = randomIntWord(); 
          };
          return num
      }

        let w3 = wordC();
      
      const wordD = () =>{
          let num = randomIntWord();
          while (num === correctWord || num === w1 || num === w2 || num ===w3){
              num = randomIntWord(); 
          };
          return num
      }

        let w4 = wordD();

     const randomPlaceArrForWords = [correctWord, w1, w2, w3, w4];
  
     const getRandomPlaceForWords = function () {
          return Math.floor(Math.random() * randomPlaceArrForWords.length);
     };
      
     const place1W = () => {
          return getRandomPlaceForWords();
     };

     let place1word = place1W();

     const place2W = () => {
          let num = getRandomPlaceForWords();
          while (num === place1word){
              num = getRandomPlaceForWords();
          }
          return num
     }

     let place2word = place2W();

     const place3W = () => {
          let num = getRandomPlaceForWords();
          while (num === place1word || num === place2word){
              num = getRandomPlaceForWords();
          }
          return num
     }

     let place3word = place3W();

     const place4W = () => {
          let num = getRandomPlaceForWords();
          while (num === place1word || num=== place2word || num===place3word){
              num = getRandomPlaceForWords();
          }
          return num
     }

     let place4word = place4W();
      
     const place5W = () => {
          let num = getRandomPlaceForWords();
          while (num === place1word || num ===place2word || num===place3word || num ===place4word){
              num = getRandomPlaceForWords();
          }
          return num
     }
     
     let place5word = place5W();

     const correctEnglishValue = (italianVal) => {
        let willBeReturned = "";
        for(let i = 0; i < words.length; i++){
            if(words[i].italian === italianVal){
                willBeReturned = words[i].english
            }
        }
        return willBeReturned;
     }

     const handleAnswer = (e) => {
         let correctItalianValue = correctAnswerContainer.current.innerText;
         if (e.target.innerText === correctEnglishValue(correctItalianValue)){
             setCorrectAnswer(correctAnswer + 1)
             setAnswerSum(answerSum + 1)
             setAnswer(!answer)
         } else {
             setWrongAnswer(wrongAnswer + 1)
             setAnswerSum(answerSum + 1)
             setAnswer(!answer)
         }
     }

    return (
        <>
            <h1>test</h1>
            <h4>Choose the correct translation for given word!</h4>
            <h5 ref={correctAnswerContainer}>
                 {words[correctWord].italian}
            </h5>

            <button onClick={handleAnswer}>
                 {words[randomPlaceArrForWords[place1word]].english}
            </button><br></br>

            <button onClick={handleAnswer}>
                 {words[randomPlaceArrForWords[place2word]].english}
            </button>

            <button onClick={handleAnswer}>
                 {words[randomPlaceArrForWords[place3word]].english}
            </button>

            <button onClick={handleAnswer}>
                 {words[randomPlaceArrForWords[place4word]].english}
            </button>

            <button onClick={handleAnswer}>
                 {words[randomPlaceArrForWords[place5word]].english}
            </button>

            <h5>Correct Answer: {correctAnswer}</h5>
            <h5>Wrong Answer: {wrongAnswer}</h5>
            <h5>Total Answer : {answerSum}</h5>
            <AnswerCounter />
    </>
    )
}

export default WordTest
