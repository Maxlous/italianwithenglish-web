import { createContext, useState } from "react"
import axios from "axios"

export const ItalianContext = createContext();

const Italian = ({ children }) => {

    const randomIntWord = function () {
        return Math.floor(Math.random() * words.length);
    };

    const randomIntSentence = function () {
        return Math.floor(Math.random() * sentences.length); 
    };

    const wordA = () =>{
        let num = randomIntWord();
        while (num === correctWord){
            num = randomIntWord(); 
        };
        return num
    }
        
    const wordB = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1){
            num = randomIntWord(); 
        };
        return num
    }
    
    const wordC = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1 || num === w2){
            num = randomIntWord(); 
        };
        return num
    }
    
    const wordD = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1 || num === w2 || num ===w3){
            num = randomIntWord(); 
        };
        return num
    }

    const getRandomPlaceForWords = function () {
        return Math.floor(Math.random() * randomPlaceArrForWords.length);
        };
    
    const place1W = () => {
        return getRandomPlaceForWords();
    };
    
    const place2W = () => {
        let num = getRandomPlaceForWords();
        while (num === place1word){
            num = getRandomPlaceForWords();
        }
        return num
    }
    
    const place3W = () => {
        let num = getRandomPlaceForWords();
        while (num === place1word || num === place2word){
            num = getRandomPlaceForWords();
        }
        return num
    }
    
    const place4W = () => {
        let num = getRandomPlaceForWords();
        while (num === place1word || num=== place2word || num===place3word){
            num = getRandomPlaceForWords();
        }
        return num
    }
    
    const place5W = () => {
        let num = getRandomPlaceForWords();
        while (num === place1word || num ===place2word || num===place3word || num ===place4word){
            num = getRandomPlaceForWords();
        }
        return num
    }

    return (
        <ItalianContext.Provider value={{
            getRandomPlaceForWords, randomIntWord, randomIntSentence,
            wordA, wordB, wordC, wordD,           
            place1W, place2W, place3W, place4W, place5W,
        }}>
        {children}
        </ItalianContext.Provider>
    )
}

export default Italian;

