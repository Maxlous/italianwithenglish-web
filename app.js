const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.get("/", (req, res) => {
    res.render("home")
})

















app.listen(5500, () => {
    console.log("I'm listening in port 5500")
});