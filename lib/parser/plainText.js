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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      var ruleMap = (0, _rules.ruleMapFromRules)(rules);
      var startRule = (0, _rules.startRuleFromRules)(rules);
      startRule = (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
      var plainTextParser = new PlainTextParser(startRule, ruleMap);
      return plainTextParser;
    }
  }]);

  return PlainTextParser;
}(_occamParsers.CommonParser);

exports["default"] = PlainTextParser;

_defineProperty(PlainTextParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWluVGV4dC5qcyJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJibmYiLCJQbGFpblRleHRQYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwbGFpblRleHRQYXJzZXIiLCJmcm9tUnVsZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcscURBQVQ7O0lBTXFCQyxlOzs7Ozs7Ozs7Ozs7O2tDQUdFO0FBQ25CLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCSCxHQUF2QixDQUFmO0FBQUEsVUFDTUksS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFBQSxVQUVNSSxlQUFlLEdBQUdMLGVBQWUsQ0FBQ00sU0FBaEIsQ0FBMEJILEtBQTFCLENBRnhCO0FBSUEsYUFBT0UsZUFBUDtBQUNEOzs7OEJBRWdCRixLLEVBQU87QUFDdEIsVUFBTUksT0FBTyxHQUFHLDZCQUFpQkosS0FBakIsQ0FBaEI7QUFFQSxVQUFJSyxTQUFTLEdBQUcsK0JBQW1CTCxLQUFuQixDQUFoQjtBQUVBSyxNQUFBQSxTQUFTLEdBQUcsbURBQXVCQSxTQUF2QixFQUFrQ0QsT0FBbEMsQ0FBWjtBQUVBLFVBQU1GLGVBQWUsR0FBRyxJQUFJTCxlQUFKLENBQW9CUSxTQUFwQixFQUErQkQsT0FBL0IsQ0FBeEI7QUFFQSxhQUFPRixlQUFQO0FBQ0Q7Ozs7RUFyQjBDSSwwQjs7OztnQkFBeEJULGUsU0FDTkQsRyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAuKyA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBwbGFpblRleHRQYXJzZXIgPSBQbGFpblRleHRQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBwbGFpblRleHRQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBwbGFpblRleHRQYXJzZXIgPSBuZXcgUGxhaW5UZXh0UGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0UGFyc2VyO1xuICB9XG59XG4iXX0=