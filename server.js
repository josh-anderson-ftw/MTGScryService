var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
const mtg = require('mtgsdk')

//Setup static route
app.use('/StreamView', function(req, res){
    res.sendFile(__dirname + '/StreamView/index.html');
});

app.get('/', function (req, res) {
    res.send('Having trouble? Check the readme @ https://github.com/nosrednAhsoJ/MTGScryService.')
})

app.get('/cards/:cardID', function(req, res){
    mtg.card.find(req.params['cardID'])
    .then(result => {
        cardHTML = result.card.imageUrl.replace('&amp;','&');
        io.emit('send_picture', cardHTML);
        res.send(cardHTML);
    })
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
