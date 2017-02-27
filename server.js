const mtg = require('mtgsdk')
var express = require('express')
var app = express()

app.get('/cards/:gathererID', function (req, res) {
    mtg.card.find(req.params['gathererID'])
    .then(result => {
        res.send(result.card) // "Black Lotus"
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
