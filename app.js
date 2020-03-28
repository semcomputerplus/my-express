var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;

var app = express();


app.use(function(req,res,next){
    console.log('Aktualny czas: ', Date.now());
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('Hello');
});

app.get('/o-nas', function(req,res){
    res.send('O nas');
});

app.listen(port);
console.log('Serwer działa na porcie: ' + port);

module.exports = app;