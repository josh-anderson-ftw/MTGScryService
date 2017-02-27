const mtg = require('mtgsdk')
var express = require('express')
var app = express()

app.get('/cards/:gathererID', function (req, res) {
    mtg.card.find(req.params['gathererID'])
    .then(result => {
        res.send(result.card) // "Black Lotus"
    })
})

app.listen(process.env.PORT || 3000)
