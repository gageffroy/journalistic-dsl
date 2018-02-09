// Generated from JournalisticDSL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by JournalisticDSLParser.
function JournalisticDSLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JournalisticDSLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JournalisticDSLListener.prototype.constructor = JournalisticDSLListener;

// Enter a parse tree produced by JournalisticDSLParser#text.
JournalisticDSLListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by JournalisticDSLParser#text.
JournalisticDSLListener.prototype.exitText = function(ctx) {
};


// Enter a parse tree produced by JournalisticDSLParser#tag.
JournalisticDSLListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by JournalisticDSLParser#tag.
JournalisticDSLListener.prototype.exitTag = function(ctx) {
};



exports.JournalisticDSLListener = JournalisticDSLListener;