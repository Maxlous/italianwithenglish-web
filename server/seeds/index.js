const words = require("./words");
const Sentence = require("../models/sentence");
const Word = require("../models/word");
const sentences = require("./sentences");
const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/italian", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("database connected!")
});

const seedDB = async () => {
    await Sentence.deleteMany({});
    for (let i = 0; i < sentences.length; i++){
        const sentenceData = new Sentence({
            italian : sentences[i].italian,
            english: sentences[i].english
        });
        await sentenceData.save();
    };
    await Word.deleteMany({});
    for (let i = 0; i < words.length;i++){
        const wordData = new Word({
            italian: words[i].italian,
            english: words[i].english,
        });
        await wordData.save();
    };
    
};

seedDB().then(() => {
    mongoose.connection.close()
})


