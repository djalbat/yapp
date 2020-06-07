"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamGrammarUtilities = require("occam-grammar-utilities");

var _occamParsers = require("occam-parsers");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var bnf = "\n\n    document                   ::=  ( preamble ( element | error )* ) | ( element | error )+ ;\n\n\n    preamble                   ::=  \"<?\"<NO_WHITESPACE>\"xml\" attribute* \"?>\" ;\n\n\n    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;\n\n\n    comment                    ::=  \"<!--\" text* \"-->\" ;\n\n\n    completeTag                ::=  \"<\"<NO_WHITESPACE>[identifier] attribute* \"/>\" ;\n\n\n    startTag                   ::=  \"<\"<NO_WHITESPACE>[identifier] attribute* \">\" ;\n\n\n    endTag                     ::=  \"</\"<NO_WHITESPACE>[identifier] \">\" ;\n    \n\n    attribute                  ::=  [identifier]<NO_WHITESPACE>\"=\"<NO_WHITESPACE>[string-literal] ;\n\n\n    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n\n    error                      ::=  . ;\n\n";

var XMLParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(XMLParser, _CommonParser);

  var _super = _createSuper(XMLParser);

  function XMLParser() {
    _classCallCheck(this, XMLParser);

    return _super.apply(this, arguments);
  }

  _createClass(XMLParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens);
      (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules);
      var xmlParser = new XMLParser(rules);
      return xmlParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return new XMLParser(rules);
    }
  }]);

  return XMLParser;
}(_occamParsers.CommonParser);

exports["default"] = XMLParser;

_defineProperty(XMLParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJibmYiLCJYTUxQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJ4bWxQYXJzZXIiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0FBR0EsSUFBTUcsR0FBRyxnNUJBQVQ7O0lBaUNxQkMsUzs7Ozs7Ozs7Ozs7OztrQ0FHRTtBQUNuQixVQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkgsR0FBdkIsQ0FBZjtBQUFBLFVBQ01JLEtBQUssR0FBR04sU0FBUyxDQUFDTyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBR0EseURBQXVCRSxLQUF2QjtBQUVBLFVBQU1FLFNBQVMsR0FBRyxJQUFJTCxTQUFKLENBQWNHLEtBQWQsQ0FBbEI7QUFFQSxhQUFPRSxTQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU8sSUFBSUgsU0FBSixDQUFjRyxLQUFkLENBQVA7QUFBOEI7Ozs7RUFkbkJHLDBCOzs7O2dCQUFsQk4sUyxTQUNORCxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAoIHByZWFtYmxlICggZWxlbWVudCB8IGVycm9yICkqICkgfCAoIGVsZW1lbnQgfCBlcnJvciApKyA7XG5cblxuICAgIHByZWFtYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICAgIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgY29tbWVudCB8IGNvbXBsZXRlVGFnIHwgc3RhcnRUYWcgKCBlbGVtZW50IHwgdGV4dCApKiBlbmRUYWcgO1xuXG5cbiAgICBjb21tZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPCEtLVwiIHRleHQqIFwiLS0+XCIgO1xuXG5cbiAgICBjb21wbGV0ZVRhZyAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+W2lkZW50aWZpZXJdIGF0dHJpYnV0ZSogXCIvPlwiIDtcblxuXG4gICAgc3RhcnRUYWcgICAgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPltpZGVudGlmaWVyXSBhdHRyaWJ1dGUqIFwiPlwiIDtcblxuXG4gICAgZW5kVGFnICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5baWRlbnRpZmllcl0gXCI+XCIgO1xuICAgIFxuXG4gICAgYXR0cmlidXRlICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl08Tk9fV0hJVEVTUEFDRT5cIj1cIjxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gO1xuXG5cbiAgICB0ZXh0ICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTtcblxuICAgIGNvbnN0IHhtbFBhcnNlciA9IG5ldyBYTUxQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIHhtbFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIG5ldyBYTUxQYXJzZXIocnVsZXMpOyB9XG59XG4iXX0=