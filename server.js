var express = require('express'); // for listening
var app = express();
var t0 = new Date();
var port = process.env.PORT||3000;
var request = require("request");  //for calling

app.get('/', function (req, res) {
    res.send('Hello World! from server started at '+t0);
});

app.get('/mars', function (req, res) {
    res.send('Hello from Mars at '+new Date()+' ! from server started at '+t0);
});

app.get('/venus', function (req, res) {
    res.send('Hello from Venus at '+new Date()+' ! from server started at '+t0);
});

app.get('/mercury', function (req, res) {
    res.send('Hello from Mercury at '+new Date()+' ! from server started at '+t0);
});

app.get('/jupiter', function (req, res) {
    res.send('Hello from Jupiter at '+new Date()+' ! from server started at '+t0);
});

app.get('/redcap', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*"); // CORS
    // can you connect to redcap?
    var options = { method: 'POST',
        url: 'https://redcap.stonybrookmedicine.edu/redcap/api/',
        headers:
        { 'content-type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache' },
        form:
        { content: 'metadata',
            token: process.env.redcapAPIkey,
            format: 'json' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        //console.log(body);
        res.send(body)

    });
    
    //res.send('Hello from Jupiter at '+new Date()+' ! from server started at '+t0);
});

app.listen(port, function () {
    console.log('listening on port '+port+' since '+t0);
});



/*

--- server ---

 var request = require("request");

 var options = { method: 'POST',
 url: 'https://redcap.stonybrookmedicine.edu/redcap/api/',
 headers:
 { 'content-type': 'application/x-www-form-urlencoded',
 'cache-control': 'no-cache' },
 form:
 { content: 'metadata',
 token: process.env.redcapAPIkey,
 format: 'json' } };

 request(options, function (error, response, body) {
 if (error) throw new Error(error);

 console.log(body);
 });

--- client ---

 var data = "content=metadata&token="+redcapAPIkey+"&format=json";

 var xhr = new XMLHttpRequest();
 xhr.withCredentials = true;

 xhr.addEventListener("readystatechange", function () {
 if (this.readyState === 4) {
 console.log(this.responseText);
 }
 });

 xhr.open("POST", "https://redcap.stonybrookmedicine.edu/redcap/api/");
 xhr.setRequestHeader("cache-control", "no-cache");
 xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

 xhr.send(data);

 */