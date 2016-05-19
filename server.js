var express = require('express');
var app = express();
var t0 = new Date();
var port = process.env.PORT||3000;

app.get('/', function (req, res) {
    res.send('Hello World! from server started at '+t0);
});

app.get('/mars', function (req, res) {
    res.send('Hello from Mars at '+new Date()+' ! from server started at '+t0);
});

app.get('/venus', function (req, res) {
    res.send('Hello from venus at '+new Date()+' ! from server started at '+t0);
});

app.listen(port, function () {
    console.log('Example app listening on port '+port);
});