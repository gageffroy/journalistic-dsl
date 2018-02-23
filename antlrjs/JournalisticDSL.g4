grammar JournalisticDSL;

/*
 * Parser rules
 */
text	: (tag | WORD | TEXT | ' ' | ENDOFLINE)+;
tag 	: (WHAT|WHO|WHERE|WHEN|WHY|INFO|ARTICLE|AUTHOR|TITLE)'§'text'§';

/*
 * Lexer rules
 */

/* fragments to be able to use both upper and lowercase */
fragment A		: ('A'|'a');
fragment B		: ('B'|'b');
fragment C		: ('C'|'c');
fragment D		: ('D'|'d');
fragment E		: ('E'|'e');
fragment F		: ('F'|'f');
fragment G		: ('G'|'g');
fragment H		: ('H'|'h');
fragment I		: ('I'|'i');
fragment J		: ('J'|'j');
fragment K		: ('K'|'k');
fragment L		: ('L'|'l');
fragment M		: ('M'|'m');
fragment N		: ('N'|'n');
fragment O		: ('O'|'o');
fragment P		: ('P'|'p');
fragment Q		: ('Q'|'q');
fragment R		: ('R'|'r');
fragment S		: ('S'|'s');
fragment T		: ('T'|'t');
fragment U		: ('U'|'u');
fragment V		: ('V'|'v');
fragment W		: ('W'|'w');
fragment X		: ('X'|'x');
fragment Y		: ('Y'|'y');
fragment Z		: ('Z'|'z');

// To detect words
fragment UPPERCASE	: [A-Z];
fragment LOWERCASE	: [a-z];
fragment DIGIT	: [0-9];
fragment ACCENT		: ('á'|'Á'|'à'|'À'|'â'|'Â'|'ä'|'Ä'|'å'|'Å'|'ã'|'Ã'|'ç'|'Ç'|'é'|'É'|'è'|'È'|'ê'|'Ê'|'ë'|'Ë'|'í'|'Í'|'ì'|'Ì'|'ï'|'Ï'|'ñ'|'Ñ'|'ó'|'Ó'|'ò'|'Ò'|'ô'|'Ô'|'ö'|'Ö'|'õ'|'Õ'|'š'|'Š'|'ú'|'Ú'|'ù'|'Ù'|'û'|'Û'|'ü'|'Ü'|'ý'|'Ý'|'ÿ'|'Ÿ'|'ž'|'Ž');
fragment PUNCT		: ('-'|'_' | '\''|'\\'|','|'.'|';'|'('|')'|'!'|'¡'|'?'|'¿');
fragment SYMBOL	: ('&' | '{' | '}');

/* Keywords of the language */
ARTICLE	: '¬' A R T I C L E;

INFO	: '¬' I N F O;

WHAT	: W '¬' S U B J E C T;

WHO		: W '¬' W H O;

WHERE	: W '¬' W H E R E;

WHEN	: W '¬' W H E N;

WHY		: W '¬' W H Y;

AUTHOR	: '¬' A U T H O R;

TITLE	: '¬' T I T L E;

/* Normal text (everything that is not {}) */
TEXT	: ~[{}];

WORD	: (UPPERCASE | LOWERCASE | DIGIT | ACCENT | PUNCT | ' ')+;

ENDOFLINE : ('\n' | '\r\n');