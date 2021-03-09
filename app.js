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
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    res.render("home")
})

app.get("/exercises", async (req,res) => {
    const words = await Word.find({});
    
    const randomIntWord = function () {
        return Math.floor(Math.random() * words.length);
        };

    const correctWord = randomIntWord();

    const wordA = () =>{
        let num = randomIntWord();
        while (num === correctWord){
            num = randomIntWord(); 
        };
        return num
    }
    const w1 = wordA();

    const wordB = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1){
            num = randomIntWord(); 
        };
        return num
    }
    const w2 = wordB();

    const wordC = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1 || num === w2){
            num = randomIntWord(); 
        };
        return num
    }
    const w3 = wordC();

    const wordD = () =>{
        let num = randomIntWord();
        while (num === correctWord || num === w1 || num === w2 || num ===w3){
            num = randomIntWord(); 
        };
        return num
    }
    const w4 = wordD();

    const randomPlaceArr = [correctWord, w1, w2, w3, w4];

    const getRandomPlace = function () {
        return Math.floor(Math.random() * randomPlaceArr.length);
        };

    const place1 = () => {
        return getRandomPlace();
    };
    const place11 = place1();

    const place2 = () => {
        let num = getRandomPlace();
        while (num === place11){
            num = getRandomPlace();
        }
        return num
    }
    const place22 = place2();

    const place3 = () => {
        let num = getRandomPlace();
        while (num === place11 || num === place22){
            num = getRandomPlace();
        }
        return num
    }
    const place33 = place3();

    const place4 = () => {
        let num = getRandomPlace();
        while (num === place11 || num=== place22 || num===place33){
            num = getRandomPlace();
        }
        return num
    }
    const place44 = place4();

    const place5 = () => {
        let num = getRandomPlace();
        while (num === place11 || num ===place22 || num===place33 || num ===place44){
            num = getRandomPlace();
        }
        return num
    }
    const place55 = place5();

    res.render("exercises", {randomPlaceArr, getRandomPlace, 
                        place11, place22,place33,place44,place55,
                        words,
                        correctWord, w1, w2, w3, w4})
})

app.get("/contact", async (req,res) => {
    res.render("contact")
})



app.listen(5500, () => {
    console.log("I'm listening in port 5500")
});