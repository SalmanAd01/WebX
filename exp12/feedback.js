const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    feed:{
        type: String,
        required:true,
    },
    gender:{
        type: String,
        required:true,
    }
})

const Feedback = mongoose.model('feedback',FeedbackSchema);

module.exports = Feedback;