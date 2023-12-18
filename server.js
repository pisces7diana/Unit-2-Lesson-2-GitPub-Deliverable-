const express = require('express');

const app = express();

const drinks = require('./models/drinks.js');

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('index.ejs', {drinks})
})

app.get('/drinks/:id', (req, res) => {
    const drinks = req.params.id
    res.send (req.params.id)
})









const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})