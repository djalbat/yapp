"use strict";

import YappLexer from "../lexer/yapp";

const entries = [
  {
    "delimiter": "^(?:`|\\$\\{|<\\/|\\/>)"
  },
  {
    "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
  },
  {
    "special": "^(?:;|:|,|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\:|\\\\`)"
  },
  {
    "operator": "^(?:&=|>>>=|>>=|<<=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\-=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|\\^|\\|\\||\\||\\+\\+|\\-\\-|\\*\\*|\\+|\\-|\\*|\\/)"
  },
  {
    "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)\\b"
  },
  {
    "identifier": "^[a-zA-Z]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class JavaScriptLexer extends YappLexer {
  static entries = entries;

  static RegularExpressionToken = null;

  static fromNothing() { return YappLexer.fromEntries(JavaScriptLexer, entries); }

  static fromRules(rules) { return YappLexer.fromRules(JavaScriptLexer, rules); }

  static fromEntries(entries) { return YappLexer.fromEntries(JavaScriptLexer, entries); }
}
