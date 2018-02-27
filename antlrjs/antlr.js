const antlr4 = require('antlr4/index');
const JDSLLexer = require('./JournalisticDSLLexer');
const JDSLParser = require('./JournalisticDSLParser');

function compile (input) {
	var chars = new antlr4.>InputStream(input);
	var lexer = new JDSLLexer.JournalisticDSLLexer(chars);