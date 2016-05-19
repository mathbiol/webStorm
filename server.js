var express = require('express');
var app = express();
var t0 = new Date()

app.get('/', function (req, res) {
    res.send('Hello World! from server started at '+t0);
});

app.get('/mars', function (req, res) {
    res.send('Hello from Mars at '+new Date()+' ! from server started at '+t0);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});