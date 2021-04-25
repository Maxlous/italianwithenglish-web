import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ItalianContext = createContext();

const Italian = ({ children }) => {

    const [wor, setWords] = useState({});

    // const fetchWords = async () => {
    //     try {
    //         const data = await axios.get("http://localhost:3001/exercises");
    //         const send = data.json()
    //         setWords(send);
    //         console.log(send)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }    

    const fetchWords = async () => {
        const data = await axios("http://localhost:3001/exercises");
        setWords(data);
    }

    useEffect(() => {
        fetchWords();        
    }, [])

    

    // const randomIntSentence = function () {
    //     return Math.floor(Math.random() * sentences.length); 
    // };

    return (
        <ItalianContext.Provider value={{
            wor,           
            }}>
        {children}
        </ItalianContext.Provider>
    )
}

export default Italian;

