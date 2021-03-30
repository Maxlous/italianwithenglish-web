const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    english: String,
    italian: String,
});

module.exports = mongoose.model("Word", wordSchema);