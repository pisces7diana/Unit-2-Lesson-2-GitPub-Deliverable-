const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
})








const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})