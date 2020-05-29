"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamParsers = require("occam-parsers");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var bnf = "\n\n    document                   ::=  preamble? ( statement | function | error )* ;\n\n\n    preamble                   ::=  ( \"\\\"use strict\\\"\" | \"'use strict'\" ) \";\" ;\n\n\n    statement                  ::=  importStatement | exportStatement ;\n\n\n    importStatement            ::=  \"import\" ( ( term | bracketedTerm ) \"from\" )? [string-literal] \";\" ;\n\n\n    exportStatement            ::=  \"export\" \"default\" expression ;\n\n\n    expression                 ::=  term | object ;\n\n\n    function                   ::=  \"function\" name arguments \"{\" body? \"}\" ;\n\n\n    arguments                  ::=  \"(\" ( argument ( \",\" argument )* )? \")\";\n\n\n    argument                   ::=  term ;\n\n\n    body                       ::=  ( declaration | methodCall )+ ;\n\n\n    declaration                ::=  \"const\" name \"=\" expression \";\" ;\n\n\n    object                     ::=  name | \"new\" name<NO_WHITESPACE>arguments? ;\n\n\n    methodCall                 ::=  name \".\" name<NO_WHITESPACE>arguments? \";\" ;\n\n\n    bracketedTerm              ::=  \"{\" term \"}\";\n\n\n    term                       ::=  variable | name | jsx ;\n\n\n    jsx                        ::=  jsxCompleteTag | jsxStartTag jsxText jsxEndTag ;\n\n\n    jsxCompleteTag             ::=  \"<\"<NO_WHITESPACE>name jsxAttribute* \"/>\" ;\n\n\n    jsxStartTag                ::=  \"<\"<NO_WHITESPACE>name jsxAttribute* \">\" ;\n\n\n    jsxEndTag                  ::=  \"</\"<NO_WHITESPACE>name \">\" ;\n\n\n    jsxAttribute               ::=  jsxStandardAttribute | jsxBooleanAttribute ;\n\n\n    jsxStandardAttribute       ::=  name<NO_WHITESPACE>\"=\"<NO_WHITESPACE>[string-literal] ;\n\n\n    jsxBooleanAttribute        ::=  name ;\n\n\n    jsxText                    ::=  ( [special] | [keyword] | [identifier] | [unassigned] )+ ;\n\n\n    variable                   ::=  [identifier] ;\n\n\n    name                       ::=  [identifier] ; \n\n\n    error                      ::=  . ;\n\n";

var JavaScriptParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(JavaScriptParser, _CommonParser);

  var _super = _createSuper(JavaScriptParser);

  function JavaScriptParser() {
    _classCallCheck(this, JavaScriptParser);

    return _super.apply(this, arguments);
  }

  _createClass(JavaScriptParser, null, [{
    key: "fromBNF",
    value: function fromBNF(bnf) {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          javascriptParser = new JavaScriptParser(rules);
      return javascriptParser;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return JavaScriptParser.fromBNF(bnf);
    }
  }]);

  return JavaScriptParser;
}(_occamParsers.CommonParser);

exports["default"] = JavaScriptParser;

_defineProperty(JavaScriptParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwiSmF2YVNjcmlwdFBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImphdmFzY3JpcHRQYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcsOCtEQUFUOztJQWlGcUJDLGdCOzs7Ozs7Ozs7Ozs7OzRCQUdKRCxHLEVBQUs7QUFDbEIsVUFBTUUsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJILEdBQXZCLENBQWY7QUFBQSxVQUNNSSxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sZUFBVixDQUEwQkgsTUFBMUIsQ0FEZDtBQUFBLFVBRU1JLGdCQUFnQixHQUFHLElBQUlMLGdCQUFKLENBQXFCRyxLQUFyQixDQUZ6QjtBQUlBLGFBQU9FLGdCQUFQO0FBQ0Q7OztrQ0FFb0I7QUFBRSxhQUFPTCxnQkFBZ0IsQ0FBQ00sT0FBakIsQ0FBeUJQLEdBQXpCLENBQVA7QUFBdUM7Ozs7RUFYbEJRLDBCOzs7O2dCQUF6QlAsZ0IsU0FDTkQsRyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgcHJlYW1ibGU/ICggc3RhdGVtZW50IHwgZnVuY3Rpb24gfCBlcnJvciApKiA7XG5cblxuICAgIHByZWFtYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgKCBcIlxcXFxcInVzZSBzdHJpY3RcXFxcXCJcIiB8IFwiJ3VzZSBzdHJpY3QnXCIgKSBcIjtcIiA7XG5cblxuICAgIHN0YXRlbWVudCAgICAgICAgICAgICAgICAgIDo6PSAgaW1wb3J0U3RhdGVtZW50IHwgZXhwb3J0U3RhdGVtZW50IDtcblxuXG4gICAgaW1wb3J0U3RhdGVtZW50ICAgICAgICAgICAgOjo9ICBcImltcG9ydFwiICggKCB0ZXJtIHwgYnJhY2tldGVkVGVybSApIFwiZnJvbVwiICk/IFtzdHJpbmctbGl0ZXJhbF0gXCI7XCIgO1xuXG5cbiAgICBleHBvcnRTdGF0ZW1lbnQgICAgICAgICAgICA6Oj0gIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgZXhwcmVzc2lvbiA7XG5cblxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSAgdGVybSB8IG9iamVjdCA7XG5cblxuICAgIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgXCJmdW5jdGlvblwiIG5hbWUgYXJndW1lbnRzIFwie1wiIGJvZHk/IFwifVwiIDtcblxuXG4gICAgYXJndW1lbnRzICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogKT8gXCIpXCI7XG5cblxuICAgIGFyZ3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSA7XG5cblxuICAgIGJvZHkgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBkZWNsYXJhdGlvbiB8IG1ldGhvZENhbGwgKSsgO1xuXG5cbiAgICBkZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiY29uc3RcIiBuYW1lIFwiPVwiIGV4cHJlc3Npb24gXCI7XCIgO1xuXG5cbiAgICBvYmplY3QgICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgfCBcIm5ld1wiIG5hbWU8Tk9fV0hJVEVTUEFDRT5hcmd1bWVudHM/IDtcblxuXG4gICAgbWV0aG9kQ2FsbCAgICAgICAgICAgICAgICAgOjo9ICBuYW1lIFwiLlwiIG5hbWU8Tk9fV0hJVEVTUEFDRT5hcmd1bWVudHM/IFwiO1wiIDtcblxuXG4gICAgYnJhY2tldGVkVGVybSAgICAgICAgICAgICAgOjo9ICBcIntcIiB0ZXJtIFwifVwiO1xuXG5cbiAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHZhcmlhYmxlIHwgbmFtZSB8IGpzeCA7XG5cblxuICAgIGpzeCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAganN4Q29tcGxldGVUYWcgfCBqc3hTdGFydFRhZyBqc3hUZXh0IGpzeEVuZFRhZyA7XG5cblxuICAgIGpzeENvbXBsZXRlVGFnICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGpzeEF0dHJpYnV0ZSogXCIvPlwiIDtcblxuXG4gICAganN4U3RhcnRUYWcgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICAgIGpzeEVuZFRhZyAgICAgICAgICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG5cblxuICAgIGpzeEF0dHJpYnV0ZSAgICAgICAgICAgICAgIDo6PSAganN4U3RhbmRhcmRBdHRyaWJ1dGUgfCBqc3hCb29sZWFuQXR0cmlidXRlIDtcblxuXG4gICAganN4U3RhbmRhcmRBdHRyaWJ1dGUgICAgICAgOjo9ICBuYW1lPE5PX1dISVRFU1BBQ0U+XCI9XCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdIDtcblxuXG4gICAganN4Qm9vbGVhbkF0dHJpYnV0ZSAgICAgICAgOjo9ICBuYW1lIDtcblxuXG4gICAganN4VGV4dCAgICAgICAgICAgICAgICAgICAgOjo9ICAoIFtzcGVjaWFsXSB8IFtrZXl3b3JkXSB8IFtpZGVudGlmaWVyXSB8IFt1bmFzc2lnbmVkXSApKyA7XG5cblxuICAgIHZhcmlhYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gOyBcblxuXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGphdmFzY3JpcHRQYXJzZXIgPSBuZXcgSmF2YVNjcmlwdFBhcnNlcihydWxlcyk7XG5cbiAgICByZXR1cm4gamF2YXNjcmlwdFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIEphdmFTY3JpcHRQYXJzZXIuZnJvbUJORihibmYpOyB9XG59XG4iXX0=