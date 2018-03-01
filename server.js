/**************************************************************************************
 ***								NODE JS SERVER									***
 **************************************************************************************/
 
// require needed services
var express = require('express');
var app = express();
var path = require('path');

// get the html file
app.get('/',function(req, res) {
	var lang = req.acceptsLanguages('fr','en');
	if (lang === 'fr') {
		res.sendFile(path.join(__dirname + '/interface/interface_fr.html'));
	}else{
		res.sendFile(path.join(__dirname + '/interface/interface_en.html'));
	}
});

// after the html, the navigator sends a request for the css
app.get('/interface.css',function(req, res) {
	res.sendFile(path.join(__dirname + '/interface/interface.css'));
});

// after the css, the navigator sends a request for the js
app.get('/script.js',function(req, res) {
	res.sendFile(path.join(__dirname + '/interface/script.js'));
});

// launching the server
app.listen(8080);
console.log("Listening on port 8080...");



/**************************************************************************************
 ***								 ANTLR CODE  									***
 **************************************************************************************/

// require needed services
var antlr = require('./antlrjs/antlr.js');
require('jsdom-global')();
var quill = require('quill');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = JSDOM.fromFile("./interface/interface_fr.html").then(dom => {
	console.log(document.getElementById('#editor'));
	var quillEditor = new quill(document.getElementById('#editor'), {
		  modules: {
			toolbar: [
			  [{ header: [1, 2, false] }],
			  ['bold', 'italic', 'underline'],
			  ['image']
			]
		  },
		  theme: 'snow'
	});
});

// getting the text from the Quill editor
