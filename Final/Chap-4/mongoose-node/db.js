const mongoose = require('mongoose')
const URL = "mongodb://localhost:27017/feedback-final-test"

const conn = mongoose.connect(URL)

module.exports = conn