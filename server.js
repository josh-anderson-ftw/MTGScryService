const mtg = require('mtgsdk')
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Having trouble? Check the readme @ https://github.com/nosrednAhsoJ/MTGScryService.')
})

app.get('/cards/:gathererID', function (req, res) {
    mtg.card.find(req.params['gathererID'])
    .then(result => {
        res.send(result.card)
    })
})

app.get('/cards/:gathererID/image', function (req, res) {
    mtg.card.find(req.params['gathererID'])
    .then(result => {
        res.send('<img src="' + result.card.imageUrl + '">')
    })
})

app.listen(process.env.PORT || 3000)
