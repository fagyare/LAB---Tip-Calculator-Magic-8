const express = require('express')

const app = express()

const PORT = 9090 

let phrases = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
let reply = Math.floor(Math.random() * phrases.length)
console.log(reply)

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
} )

app.get('/greeting/:index', (req, res) => {
    res.send(`Hello ${req.params.index}, it's so great to see you`)
} )

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(typeof req.params.total)
    console.log(req.params.tipPercentage)
    let tip = (Number(req.params.total) * Number(req.params.tipPercentage))/100 
    res.send(`<h1>Your tip is ${tip}</h1>`)
    // res.send({tip})
} )

// Magic route 
app.get('/magic/:question', (req, res) => {
    let array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let reply = Math.floor(Math.random()*array.length)
    console.log(reply)
    res.send(`<h1> ${req.params.question}? <br> The fortune reads: ${array[reply]} </h1>`)
});




app.listen(PORT, () => {
    console.log("Listening on port 9090")
})