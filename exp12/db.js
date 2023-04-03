const mongoose = require('mongoose')
const URL = "mongodb+srv://salmanadh5s3:AAVzGx5j7NYD2kFe@cluster0.vtaex1u.mongodb.net/?retryWrites=true&w=majority"

const conn = mongoose.connect(URL)

module.exports = conn