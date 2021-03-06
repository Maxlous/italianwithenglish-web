const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const Sentence = require("./models/sentence");
const Word = require("./models/word");

mongoose.connect('mongodb://localhost:27017/italian', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database Succesfully Connected!")
})

const app = express();
app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
    const sentences = await Sentence.find({});
    const words = await Word.find({});
    const randomIntSentence = function () {
        return Math.floor(Math.random() * sentences.length + 1);
        };
    const correctSentence = randomIntSentence();
    const sentenceA = () =>{
        let num = randomIntSentence();
        while (num === correctSentence){
            num = randomIntSentence(); 
        };
        return num
    }
    const sentenceB = () =>{
        let num = randomIntSentence();
        while (num === correctSentence || num === sentenceA){
            num = randomIntSentence(); 
        };
        return num
    }
    const sentenceC = () =>{
        let num = randomIntSentence();
        while (num === correctSentence || num === sentenceA || num === sentenceB){
            num = randomIntSentence(); 
        };
        return num
    }
    const sentenceD = () =>{
        let num = randomIntSentence();
        while (num === correctSentence || num === sentenceA || num === sentenceB || num ===sentenceC){
            num = randomIntSentence(); 
        };
        return num
    };

    const randomIntWord = function () {
        return Math.floor(Math.random() * words.length + 1);
        };
    const correctWord = randomIntWord();
    const wordA = () =>{
        let num = randomIntWord();
        while (num === correctWord){
            num = randomIntWord(); 
        };
        return num
    }
    const wordB = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === wordA){
            num = randomIntWord(); 
        };
        return num
    }
    const wordC = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === wordA || num ===wordB){
            num = randomIntWord(); 
        };
        return num
    }
    const wordD = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === wordA || num === wordB || num ===wordC){
            num = randomIntWord(); 
        };
        return num
    }
    res.render("home", {sentences, words, correctSentence, correctWord, wordA, wordB, wordC, wordD, sentenceA, sentenceB, sentenceC, sentenceD})
})

















app.listen(5500, () => {
    console.log("I'm listening in port 5500")
});