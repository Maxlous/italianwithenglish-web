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


app.get("/api", (req, res) => {
    res.json({message: "Hello from server"})
})

app.get("/exercises", async (req,res) => {
    const words = await Word.find({});
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`I'm listening on ${PORT} `)
});