// Generated from JournalisticDSL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JournalisticDSLListener = require('./JournalisticDSLListener').JournalisticDSLListener;
var grammarFileName = "JournalisticDSL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011\u0015\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002\f\n\u0002",
    "\r\u0002\u000e\u0002\r\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0003\u0003",
    "\u0002\u0005\u000e\u0002\u0017\u0002\u000b\u0003\u0002\u0002\u0002\u0004",
    "\u000f\u0003\u0002\u0002\u0002\u0006\f\u0005\u0004\u0003\u0002\u0007",
    "\f\u0007\u0010\u0002\u0002\b\f\u0007\u000f\u0002\u0002\t\f\u0007\u0003",
    "\u0002\u0002\n\f\u0007\u0011\u0002\u0002\u000b\u0006\u0003\u0002\u0002",
    "\u0002\u000b\u0007\u0003\u0002\u0002\u0002\u000b\b\u0003\u0002\u0002",
    "\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\n\u0003\u0002\u0002\u0002",
    "\f\r\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\r\u000e",
    "\u0003\u0002\u0002\u0002\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010",
    "\t\u0002\u0002\u0002\u0010\u0011\u0007\u0004\u0002\u0002\u0011\u0012",
    "\u0005\u0002\u0002\u0002\u0012\u0013\u0007\u0004\u0002\u0002\u0013\u0005",
    "\u0003\u0002\u0002\u0002\u0004\u000b\r"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", "'\u00A7'" ];

var symbolicNames = [ null, null, null, "ARTICLE", "INFO", "WHAT", "WHO", 
                      "WHERE", "WHEN", "WHY", "AUTHOR", "TITLE", "SOURCE", 
                      "TEXT", "WORD", "ENDOFLINE" ];

var ruleNames =  [ "text", "tag" ];

function JournalisticDSLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JournalisticDSLParser.prototype = Object.create(antlr4.Parser.prototype);
JournalisticDSLParser.prototype.constructor = JournalisticDSLParser;

Object.defineProperty(JournalisticDSLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JournalisticDSLParser.EOF = antlr4.Token.EOF;
JournalisticDSLParser.T__0 = 1;
JournalisticDSLParser.T__1 = 2;
JournalisticDSLParser.ARTICLE = 3;
JournalisticDSLParser.INFO = 4;
JournalisticDSLParser.WHAT = 5;
JournalisticDSLParser.WHO = 6;
JournalisticDSLParser.WHERE = 7;
JournalisticDSLParser.WHEN = 8;
JournalisticDSLParser.WHY = 9;
JournalisticDSLParser.AUTHOR = 10;
JournalisticDSLParser.TITLE = 11;
JournalisticDSLParser.SOURCE = 12;
JournalisticDSLParser.TEXT = 13;
JournalisticDSLParser.WORD = 14;
JournalisticDSLParser.ENDOFLINE = 15;

JournalisticDSLParser.RULE_text = 0;
JournalisticDSLParser.RULE_tag = 1;

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JournalisticDSLParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagContext);
    } else {
        return this.getTypedRuleContext(TagContext,i);
    }
};

TextContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JournalisticDSLParser.WORD);
    } else {
        return this.getToken(JournalisticDSLParser.WORD, i);
    }
};


TextContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JournalisticDSLParser.TEXT);
    } else {
        return this.getToken(JournalisticDSLParser.TEXT, i);
    }
};


TextContext.prototype.ENDOFLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JournalisticDSLParser.ENDOFLINE);
    } else {
        return this.getToken(JournalisticDSLParser.ENDOFLINE, i);
    }
};


TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof JournalisticDSLListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof JournalisticDSLListener ) {
        listener.exitText(this);
	}
};




JournalisticDSLParser.TextContext = TextContext;

JournalisticDSLParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JournalisticDSLParser.RULE_text);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 9;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case JournalisticDSLParser.ARTICLE:
            case JournalisticDSLParser.INFO:
            case JournalisticDSLParser.WHAT:
            case JournalisticDSLParser.WHO:
            case JournalisticDSLParser.WHERE:
            case JournalisticDSLParser.WHEN:
            case JournalisticDSLParser.WHY:
            case JournalisticDSLParser.AUTHOR:
            case JournalisticDSLParser.TITLE:
            case JournalisticDSLParser.SOURCE:
                this.state = 4;
                this.tag();
                break;
            case JournalisticDSLParser.WORD:
                this.state = 5;
                this.match(JournalisticDSLParser.WORD);
                break;
            case JournalisticDSLParser.TEXT:
                this.state = 6;
                this.match(JournalisticDSLParser.TEXT);
                break;
            case JournalisticDSLParser.T__0:
                this.state = 7;
                this.match(JournalisticDSLParser.T__0);
                break;
            case JournalisticDSLParser.ENDOFLINE:
                this.state = 8;
                this.match(JournalisticDSLParser.ENDOFLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JournalisticDSLParser.T__0) | (1 << JournalisticDSLParser.ARTICLE) | (1 << JournalisticDSLParser.INFO) | (1 << JournalisticDSLParser.WHAT) | (1 << JournalisticDSLParser.WHO) | (1 << JournalisticDSLParser.WHERE) | (1 << JournalisticDSLParser.WHEN) | (1 << JournalisticDSLParser.WHY) | (1 << JournalisticDSLParser.AUTHOR) | (1 << JournalisticDSLParser.TITLE) | (1 << JournalisticDSLParser.SOURCE) | (1 << JournalisticDSLParser.TEXT) | (1 << JournalisticDSLParser.WORD) | (1 << JournalisticDSLParser.ENDOFLINE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JournalisticDSLParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

TagContext.prototype.WHAT = function() {
    return this.getToken(JournalisticDSLParser.WHAT, 0);
};

TagContext.prototype.WHO = function() {
    return this.getToken(JournalisticDSLParser.WHO, 0);
};

TagContext.prototype.WHERE = function() {
    return this.getToken(JournalisticDSLParser.WHERE, 0);
};

TagContext.prototype.WHEN = function() {
    return this.getToken(JournalisticDSLParser.WHEN, 0);
};

TagContext.prototype.WHY = function() {
    return this.getToken(JournalisticDSLParser.WHY, 0);
};

TagContext.prototype.INFO = function() {
    return this.getToken(JournalisticDSLParser.INFO, 0);
};

TagContext.prototype.ARTICLE = function() {
    return this.getToken(JournalisticDSLParser.ARTICLE, 0);
};

TagContext.prototype.AUTHOR = function() {
    return this.getToken(JournalisticDSLParser.AUTHOR, 0);
};

TagContext.prototype.TITLE = function() {
    return this.getToken(JournalisticDSLParser.TITLE, 0);
};

TagContext.prototype.SOURCE = function() {
    return this.getToken(JournalisticDSLParser.SOURCE, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof JournalisticDSLListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof JournalisticDSLListener ) {
        listener.exitTag(this);
	}
};




JournalisticDSLParser.TagContext = TagContext;

JournalisticDSLParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JournalisticDSLParser.RULE_tag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JournalisticDSLParser.ARTICLE) | (1 << JournalisticDSLParser.INFO) | (1 << JournalisticDSLParser.WHAT) | (1 << JournalisticDSLParser.WHO) | (1 << JournalisticDSLParser.WHERE) | (1 << JournalisticDSLParser.WHEN) | (1 << JournalisticDSLParser.WHY) | (1 << JournalisticDSLParser.AUTHOR) | (1 << JournalisticDSLParser.TITLE) | (1 << JournalisticDSLParser.SOURCE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 14;
        this.match(JournalisticDSLParser.T__1);
        this.state = 15;
        this.text();
        this.state = 16;
        this.match(JournalisticDSLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.JournalisticDSLParser = JournalisticDSLParser;
