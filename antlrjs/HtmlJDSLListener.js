const antlr4 = require('antlr4/index');
const JDSLLexer = require('./JournalisticDSLLexer');
const JDSLParser = require('./JournalisticDSLPaser');
var JDSLListener = require('./JournalisticDSLListener').JournalisticDSLListener;

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
HtmlJDSLListener.prototype.enterTag = function(ctx) {
	this.Res.write("<li>" + ctx.getText() + "</li>");
};