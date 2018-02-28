const antlr4 = require('antlr4/index');
const JDSLLexer = require('./JournalisticDSLLexer.js');
const JDSLParser = require('./JournalisticDSLParser.js');
var JDSLListener = require('./JournalisticDSLListener.js').JournalisticDSLListener;

HtmlJDSLListener = function(res) {
	this.Res = res;
	Res.write("<ul>");
	JDSLListener.call(this);	// Inherit default listener
	Res.write("</ul>");
	return this;
};

// Inherit default listener
HtmlJDSLListener.prototype = Object.create(JDSLListener.prototype);
HtmlJDSLListener.prototype.constructor = HtmlJDSLListener;

// Override default listener behavior

// Behavior when encountering a tag
HtmlJDSLListener.prototype.enterTag = function(ctx) {
	this.Res.write("<li>");
};
HtmlJDSLListener.prototype.exitTag = function(ctx) {
	this.Res.write(ctx.ELEMENT().getText());
	this.Res.write("</li>");
};

// Behavior when encountering an element (nothing to do)
HtmlJDSLListener.prototype.enterElement = function(ctx) {}
HtmlJDSLListener.prototype.exitElement = function(ctx) {}

// Behavior when encountering a text (nothing to do)
HtmlJDSLListener.prototype.enterText = function(ctx) {}
HtmlJDSLListener.prototype.exitText = function(ctx) {}

exports.HtmlJDSLListener = HtmlJDSLListener;