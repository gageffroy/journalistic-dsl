const http = require('http');
const antlr4 = require('antlr4/index');
const JDSLLexer = require('./JournalisticDSLLexer');
const JDSLParser = require('./JournalisticDSLParser');
const HtmlJDSLListener = require('./HtmlJDSLListener').HtmlJournalisticDSLListener;

function compile (input, res) {
	var chars = new antlr4.InputStream(input);
	var lexer = new JDSLLexer.JournalisticDSLLexer(chars);
	var tokens = new antlr4.CommonTokenStream(lexer);
	var parser = new JDSLParser.JournalisticDSLParser(tokens);
	parser.buildParseTrees = true;
	var tree = parser.tag();
	var htmlJDSL = new HtmlJDSLListener(res);
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlJDSL, tree);
}