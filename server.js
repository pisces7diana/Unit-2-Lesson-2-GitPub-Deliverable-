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
    const id = req.params.id
    const drink = drinks[id]
    // res.send(drink)
    res.render("show.ejs", {drink})
})









const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})