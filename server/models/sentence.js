const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
    italian: String,
    english: String,
});

module.exports = mongoose.model("Sentence", sentenceSchema);