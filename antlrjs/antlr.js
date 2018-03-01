const antlr4 = require('antlr4/index');
const JDSLLexer = require('./JournalisticDSLLexer.js');
const JDSLParser = require('./JournalisticDSLParser.js');
const HtmlJDSLListener = require('./HtmlJDSLListener.js').HtmlJournalisticDSLListener;

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

module.export = {
	compile: compile 
}