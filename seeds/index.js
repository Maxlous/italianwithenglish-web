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




