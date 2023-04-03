const express = require('express')
const conn = require('./db')
const app = express()
const Feedback = require('./feedback')

app.use(express.json())

app.get('/', (req, res) => {
    return res.send("HI")
})

app.post('/feed', async (req, res) => {
    try {
        console.log(req.body)
        const feeds = new Feedback(req.body);
        await feeds.save()
        return res.send("Inserted")
    }
    catch (err) {
        if (err.toString().includes('E11000')) {
            return res.send("Email Already Exsist")
        }
        console.log(err)
        return res.send("Error in feedback")
    }

})

app.get('/feed', async (req, res) => {
    try {
        const allFeed = await Feedback.find();
        return res.json({
            "Feedbacks": allFeed
        })
    }
    catch (err) {
        console.log(err)
        return res.send("Error in getting feedbacks")
    }
})

app.put('/feed', async (req, res) => {
    try {
        const { _id } = req.body;
        const { name, feed, gender } = req.body;
        await Feedback.findByIdAndUpdate(_id, {
            name, feed, gender
        })
        return res.send("Feed Updated")
    }
    catch (err) {
        console.log(err)
        return res.send("Error in Update")
    }
})

app.delete('/feed', async (req, res) => {
    try {
        const { _id } = req.body;
        await Feedback.findByIdAndDelete(_id);
        return res.send("Feed Deleted");
    }
    catch (err) {
        console.log(err)
        return res.send("Error in Feed Delete")
    }
})
app.listen(5000, () => {
    conn.then(() => {
        console.log("connected to DB")
    }).catch((err) => {
        console.log("Error DB", err)
    })
    console.log("http://localhost:5000/")
})