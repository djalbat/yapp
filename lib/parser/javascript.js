"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamGrammarUtilities = require("occam-grammar-utilities");

var _occamParsers = require("occam-parsers");

var _rules = require("../utilities/rules");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var bnf = "\n\n    document                   ::=  ( preamble ( statement | error )* ) | ( statement | error )+ ;\n\n\n\n    preamble                   ::=  ( \"\\\"use strict\\\"\" | \"'use strict'\" ) \";\" ;\n\n\n\n    statement                  ::=  class\n\n                                 |  function \n\n                                 |  generator \n\n                                 |  \"export\"? ( ( \"var\" var ( \",\" var )* ) \n    \n                                              | ( \"let\" let ( \",\" let )* ) \n                                              \n                                              | ( \"const\" const ( \",\" const )* ) \n                                              \n                                              ) \";\" \n\n                                 |  \"export\" \"default\" expression \";\"\n                                 \n                                 |  \"export\" \"default\"? ( class | function | generator )\n\n                                 |  \"export\" \"default\" ( anonymousClass | anonymousFunction | anonymousGenerator )\n                                 \n                                 |  \"export\" ( ( \"export\" \"{\" names \"}\" ( \"from\" [string-literal] )? ) \n                                 \n                                             | ( \"export\" \"const\" \"{\" fields \"}\" \"=\" expression )\n                                             \n                                             | ( \"export\" \"{\" \"default\" \"}\" \"from\" [string-literal] )\n                                             \n                                             | ( \"export\" \"*\" ( \"as\" name )? \"from\" [string-literal] )\n                                             \n                                             ) \";\"\n\n                                 |  \"import\" ( [string-literal]\n                                             \n                                             | ( name \"from\" [string-literal] ) \n                                             \n                                             | ( \"{\" names \"}\" \"from\" [string-literal] ) \n                                 \n                                             | ( \"*\" \"as\" name \"from\" [string-literal] ) \n                                             \n                                             ) \";\"\n\n                                 |  label \":\" statement\n\n                                 |  \"{\" statement \"}\"\n\n                                 |  \"break\" \";\"  \n\n                                 |  \"continue\" \";\" \n\n                                 |  \"if\" \"(\" expression \")\" statement ( \"else\" statement )? \n\n                                 |  \"switch\" \"(\" expression \")\" \"{\" case* defaultCase? \"}\" \n\n                                 |  \"return\" expression? \";\" \n\n                                 |  \"throw\" expression \";\" \n\n                                 |  \"delete\" expression \";\" \n\n                                 |  expression! \";\"\n\n                                 |  try ( ( catch* finally ) | catch+ ) \n\n                                 |  \"do\" statement \"while\" \"(\" expression \")\" \";\" \n\n                                 |  \"for\" \"(\" initialiser ( \";\" expression )? ( \";\" expression )? \")\" statement \n\n                                 |  \"for\" \"(\" variable \"in\" expression \")\" statement \n\n                                 |  \"for\" \"await\"? \"(\" variable \"of\" expression \")\" statement \n\n                                 |  \"while\" \"(\" expression \")\" statement \n\n                                 |  \"debugger\" \";\"?\n\n                                 ;\n\n\n\n    class                      ::=  \"class\" name classBody ;\n\n    function                   ::=  \"async\"? \"function\" name functionBody ;\n\n    generator                  ::=  \"async\"? \"function\" <NO_WHITESPACE>\"*\" name functionBody ;\n\n    anonymousClass             ::=  \"class\" classBody ;\n\n    anonymousFunction          ::=  \"async\"? \"function\" functionBody ;\n\n    anonymousGenerator         ::=  \"async\"? \"function\" <NO_WHITESPACE>\"*\" functionBody ;\n\n    constructor                ::=  \"constructor\" functionBody ;\n\n    method                     ::=  \"static\"? name functionBody ;\n\n    field                      ::=  \"static\"? name \"=\" expression \";\" ;\n\n\n\n    classBody                  ::=  ( \"extends\" name )? \"{\" ( constructor | method | field )* \"}\" ;\n\n    functionBody               ::=  \"(\" arguments? \")\" \"{\" statement* \"}\" ;\n\n\n\n    case                       ::=  \"case\" expression \":\" statement* ( \"break\" \";\" )? ;\n\n    defaultCase                ::=  \"default\" \":\" statement* ( \"break\" \";\" )? ;\n\n    try                        ::=  \"try\" \"{\" statement+ \"}\" ;\n\n    catch                      ::=  \"catch\" \"(\" argument \")\" \"{\" statement+ \"}\" ;\n\n    finally                    ::=  \"finally\" \"{\" statement+ \"}\" ;\n\n    initialiser                ::=  expression | \"var\" var ( \",\" var )* | \"let\" let ( \",\" let )* ;\n\n\n\n    var                        ::=  variable ( \"=\" expression )? | destructure \"=\" expression ;\n\n    let                        ::=  variable ( \"=\" expression )? | destructure \"=\" expression;\n\n    const                      ::=  ( variable | destructure ) \"=\" expression ;\n\n    destructure                ::=  \"[\" variable ( \"=\" expression )? ( \",\" variable ( \"=\" expression )? )* \"]\" \n\n                                 |  \"{\" variable ( \"=\" expression )? ( \",\" variable ( \"=\" expression )? )* \"}\"\n\n                                 ; \n\n\n\n    expression                 ::=  jsx\n    \n                                 |  json\n    \n                                 |  arrowFunction\n\n                                 |  templateLiteral\n\n                                 |  anonymousFunction\n\n                                 |  \"(\" expression \")\"\n\n                                 |  \"{\" ( property ( \",\" property )* )? \"}\"\n\n                                 |  \"[\" ( expression ( \",\" expression )* \",\"? )? \"]\"\n\n                                 |  \"typeof\" ( expression | ( \"(\" expression \")\") ) \n\n                                 |  \"void\" ( expression | ( \"(\" expression \")\") ) \n\n                                 |  \"new\" name<NO_WHITESPACE>\"(\" expressions? \")\"\n\n                                 |  [operator]<NO_WHITESPACE>expression \n\n                                 |  expression<NO_WHITESPACE>( ( \".\"<NO_WHITESPACE>name ) \n                                                             \n                                                             | ( \"[\" expressions \"]\" ) \n                                                             \n                                                             | ( \"(\" expressions? \")\" ) \n                                                             \n                                                             | templateLiteral \n                                                             \n                                                             | [operator] \n                                 \n                                                             )   \n\n                                 |  expression ( ( [operator] expression ) \n                                 \n                                               | ( \"?\" expression \":\" expression ) \n                                               \n                                               | ( \"instanceof\" expression ) \n                                               \n                                               | ( \"in\" expression ) \n                                               \n                                               ) \n\n                                 |  [number]\n\n                                 |  variable \n \n                                 |  primitive \n \n                                 |  importMeta \n\n                                 |  [string-literal]\n\n                                 |  \"super\" | \"this\" | \"true\" | \"false\" | \"null\" | \"undefined\"\n\n                                 ;\n\n\n\n    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( \"{\" expression? \"}\" ) | string )* jsxEndTag ;\n\n    jsxCompleteTag             ::=  \"<\"<NO_WHITESPACE>name jsxAttribute* \"/>\" ;\n\n    jsxStartTag                ::=  \"<\"<NO_WHITESPACE>name jsxAttribute* \">\" ;\n\n    jsxEndTag                  ::=  \"</\"<NO_WHITESPACE>name \">\" ;\n\n    jsxAttribute               ::=  name ( <NO_WHITESPACE>\"=\" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>\"{\" expression \"}\" ) ) )? ;\n\n\n\n    json                       ::=  jsonArray | jsonObject ;\n\n    jsonArray                  ::=  \"[\" ( jsonElement ( \",\" jsonElement )* )? \"]\" ;\n\n    jsonObject                 ::=  \"{\" ( [string-literal] \":\" jsonElement ( \",\" [string-literal] \":\" jsonElement )* )? \"}\" ;\n    \n    jsonElement                ::=  json | [string-literal] | [number] | \"true\" | \"false\" | \"null\" ;\n    \n\n\n    arrowFunction              ::=  ( argument | ( \"(\" arguments? \")\" ) ) \"=>\" ( expression | ( \"{\" statement* \"}\" ) ) ; \n\n    templateLiteral            ::=  \"`\" ( ( \"${\" expression? \"}\" ) | string )* \"`\" ; \n\n\n\n    string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n    property                   ::=  ( ( ( name | [string-literal] ) \":\" expression ) | variable ) ;\n\n    importMeta                 ::=  \"import\"<NO_WHITESPACE>\".\"<NO_WHITESPACE>\"meta\" ;\n\n\n\n    expressions                ::=  expression ( \",\" expression )* ;\n\n    arguments                  ::=  argument ( \",\" argument )* ;\n\n    fields                     ::=  name ( \":\" name )? ( \",\" name ( \":\" name )? )* ;\n\n    names                      ::=  name ( \"as\" name )? ( \",\" name ( \"as\" name )? )* ;\n\n\n\n    argument                   ::=  [identifier] ;\n\n    variable                   ::=  [identifier] ;\n\n    label                      ::=  [identifier] ; \n\n    name                       ::=  [identifier] ; \n\n\n\n    error                      ::=  . ;\n\n";

var JavaScriptParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(JavaScriptParser, _CommonParser);

  var _super = _createSuper(JavaScriptParser);

  function JavaScriptParser() {
    _classCallCheck(this, JavaScriptParser);

    return _super.apply(this, arguments);
  }

  _createClass(JavaScriptParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          javascriptParser = JavaScriptParser.fromRules(rules);
      return javascriptParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      var ruleMap = (0, _rules.ruleMapFromRules)(rules);
      var startRule = (0, _rules.startRuleFromRules)(rules);
      startRule = (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
      var javascriptParser = new JavaScriptParser(startRule, ruleMap);
      return javascriptParser;
    }
  }]);

  return JavaScriptParser;
}(_occamParsers.CommonParser);

exports["default"] = JavaScriptParser;

_defineProperty(JavaScriptParser, "bnf", bnf);