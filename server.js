/**************************************************************************************
 ***								NODE JS SERVER									***
 **************************************************************************************/
 
// require needed services
var express = require('express');
var app = express();
var path = require('path');
var antlr = require('./antlrjs/antlr.js');
require('jsdom-global')();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var editor = require('quill');
var MutationObserver = require('mutation-observer');
var dom;
var quill;

// get the html file
app.get('/',function(req, res) {
	var lang = req.acceptsLanguages('fr','en');
	var html_file;
	if (lang === 'fr') {
		html_file = '/interface/interface_fr.html';
	}else{
		html_file = '/interface/interface_en.html';
	}
	res.sendFile(path.join(__dirname + html_file));
	dom = JSDOM.fromFile('.' + html_file)
		.then(dom => {
			console.log(dom.serialize());
			console.log(dom.window.document.getElementById("editor"));
			console.log(MutationObserver);
			var container = dom.window.document.getElementById('editor');
			quill = new editor(container);
			/*, {
			  modules: {
				toolbar: [	
				  [{ header: [1, 2, false] }],
				  ['bold', 'italic', 'underline'],
				  ['image']
				]
			  },
			  theme: 'snow'
			});*/
		});
	// console.log(dom.window.document.getElementById("editor"));
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

// getting the text from the Quill editor
