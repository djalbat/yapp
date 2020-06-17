"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _occamGrammarUtilities = require("occam-grammar-utilities");

var _occamParsers = require("occam-parsers");

var _rules = require("../utilities/rules");

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

var bnf = "\n\n    document                   ::=  xml error* | error+ ;\n\n\n    xml                        ::=  ( preamble element* ) | element+ ;\n\n\n    preamble                   ::=  \"<?\"<NO_WHITESPACE>\"xml\" attribute* \"?>\" ;\n\n\n    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;\n\n\n    comment                    ::=  \"<!--\" text* \"-->\" ;\n\n\n    completeTag                ::=  \"<\"<NO_WHITESPACE>name attribute* \"/>\" ;\n\n\n    startTag                   ::=  \"<\"<NO_WHITESPACE>name attribute* \">\" ;\n\n\n    endTag                     ::=  \"</\"<NO_WHITESPACE>name \">\" ;\n    \n\n    attribute                  ::=  [identifier]<NO_WHITESPACE>\"=\"<NO_WHITESPACE>[string-literal] ;\n\n\n    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n    \n    \n    name                       ::=  [identifier] ;\n\n\n    error                      ::=  . ;\n\n";

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
          rules = bnfParser.rulesFromTokens(tokens),
          xmlParser = XMLParser.fromRules(rules);
      return xmlParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      var startRule = (0, _rules.startRuleFromRules)(rules),
          ruleMap = (0, _rules.ruleMapFromRules)(rules);
      (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
      var xmlParser = new XMLParser(startRule, ruleMap);
      return xmlParser;
    }
  }]);

  return XMLParser;
}(_occamParsers.CommonParser);

exports["default"] = XMLParser;

_defineProperty(XMLParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJibmYiLCJYTUxQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJ4bWxQYXJzZXIiLCJmcm9tUnVsZXMiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcsKzlCQUFUOztJQXVDcUJDLFM7Ozs7Ozs7Ozs7Ozs7a0NBR0U7QUFDbkIsVUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJILEdBQXZCLENBQWY7QUFBQSxVQUNNSSxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sZUFBVixDQUEwQkgsTUFBMUIsQ0FEZDtBQUFBLFVBRU1JLFNBQVMsR0FBR0wsU0FBUyxDQUFDTSxTQUFWLENBQW9CSCxLQUFwQixDQUZsQjtBQUlBLGFBQU9FLFNBQVA7QUFDRDs7OzhCQUVnQkYsSyxFQUFPO0FBQ3RCLFVBQU1JLFNBQVMsR0FBRywrQkFBbUJKLEtBQW5CLENBQWxCO0FBQUEsVUFDTUssT0FBTyxHQUFHLDZCQUFpQkwsS0FBakIsQ0FEaEI7QUFHQSx5REFBdUJJLFNBQXZCLEVBQWtDQyxPQUFsQztBQUVBLFVBQU1ILFNBQVMsR0FBRyxJQUFJTCxTQUFKLENBQWNPLFNBQWQsRUFBeUJDLE9BQXpCLENBQWxCO0FBRUEsYUFBT0gsU0FBUDtBQUNEOzs7O0VBcEJvQ0ksMEI7Ozs7Z0JBQWxCVCxTLFNBQ05ELEciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgeG1sIGVycm9yKiB8IGVycm9yKyA7XG5cblxuICAgIHhtbCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBwcmVhbWJsZSBlbGVtZW50KiApIHwgZWxlbWVudCsgO1xuXG5cbiAgICBwcmVhbWJsZSAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPD9cIjxOT19XSElURVNQQUNFPlwieG1sXCIgYXR0cmlidXRlKiBcIj8+XCIgO1xuXG5cbiAgICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGNvbW1lbnQgfCBjb21wbGV0ZVRhZyB8IHN0YXJ0VGFnICggZWxlbWVudCB8IHRleHQgKSogZW5kVGFnIDtcblxuXG4gICAgY29tbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwhLS1cIiB0ZXh0KiBcIi0tPlwiIDtcblxuXG4gICAgY29tcGxldGVUYWcgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgICBzdGFydFRhZyAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBhdHRyaWJ1dGUqIFwiPlwiIDtcblxuXG4gICAgZW5kVGFnICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcbiAgICBcblxuICAgIGF0dHJpYnV0ZSAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdPE5PX1dISVRFU1BBQ0U+XCI9XCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdIDtcblxuXG4gICAgdGV4dCAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF18IFticm9rZW4tc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgICBcbiAgICBcbiAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cblxuICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICB4bWxQYXJzZXIgPSBYTUxQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiB4bWxQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7XG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCB4bWxQYXJzZXIgPSBuZXcgWE1MUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4geG1sUGFyc2VyO1xuICB9XG59XG4iXX0=