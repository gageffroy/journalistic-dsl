// require needed services
var express = require('express');
var app = express();
var path = require('path');

// get the html file
app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname + '/interface/interface.html'));
});

// after the html, the navigator sends a request for the css
app.get('/interface.css',function(req, res) {
	res.sendFile(path.join(__dirname + '/interface/interface.css'));
});

// after the html, the navigator sends a request for the css
app.get('/script.js',function(req, res) {
	res.sendFile(path.join(__dirname + '/interface/script.js'));
});

// launching the server
app.listen(8080);
console.log("Listening on port 8080...");