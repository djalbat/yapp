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

var bnf = "\n\n    document                   ::=  .+ ;\n\n";

var PlainTextParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(PlainTextParser, _CommonParser);

  var _super = _createSuper(PlainTextParser);

  function PlainTextParser() {
    _classCallCheck(this, PlainTextParser);

    return _super.apply(this, arguments);
  }

  _createClass(PlainTextParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainTextParser = PlainTextParser.fromRules(rules);
      return plainTextParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      var startRule = (0, _rules.startRuleFromRules)(rules),
          ruleMap = (0, _rules.ruleMapFromRules)(rules);
      (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
      var plainTextParser = new PlainTextParser(startRule, ruleMap);
      return plainTextParser;
    }
  }]);

  return PlainTextParser;
}(_occamParsers.CommonParser);

exports["default"] = PlainTextParser;

_defineProperty(PlainTextParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWluVGV4dC5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJibmYiLCJQbGFpblRleHRQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwbGFpblRleHRQYXJzZXIiLCJmcm9tUnVsZXMiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcscURBQVQ7O0lBTXFCQyxlOzs7Ozs7Ozs7Ozs7O2tDQUdFO0FBQ25CLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCSCxHQUF2QixDQUFmO0FBQUEsVUFDTUksS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxlQUFlLEdBQUdMLGVBQWUsQ0FBQ00sU0FBaEIsQ0FBMEJILEtBQTFCLENBRnhCO0FBSUEsYUFBT0UsZUFBUDtBQUNEOzs7OEJBRWdCRixLLEVBQU87QUFDdEIsVUFBTUksU0FBUyxHQUFHLCtCQUFtQkosS0FBbkIsQ0FBbEI7QUFBQSxVQUNNSyxPQUFPLEdBQUcsNkJBQWlCTCxLQUFqQixDQURoQjtBQUdBLHlEQUF1QkksU0FBdkIsRUFBa0NDLE9BQWxDO0FBRUEsVUFBTUgsZUFBZSxHQUFHLElBQUlMLGVBQUosQ0FBb0JPLFNBQXBCLEVBQStCQyxPQUEvQixDQUF4QjtBQUVBLGFBQU9ILGVBQVA7QUFDRDs7OztFQXBCMENJLDBCOzs7O2dCQUF4QlQsZSxTQUNORCxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICA6Oj0gIC4rIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHBsYWluVGV4dFBhcnNlciA9IFBsYWluVGV4dFBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIGNvbnN0IHBsYWluVGV4dFBhcnNlciA9IG5ldyBQbGFpblRleHRQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHJldHVybiBwbGFpblRleHRQYXJzZXI7XG4gIH1cbn1cbiJdfQ==