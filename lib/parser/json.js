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

var bnf = "\n\n    document                   ::=  json error* | error+ ;\n\n\n    json                       ::=  array | object ;\n\n\n    array                      ::=  \"[\" ( element ( \",\" element )* )? \"]\" ;\n\n\n    object                     ::=  \"{\" ( [string-literal] \":\" element ( \",\" [string-literal] \":\" element )* )? \"}\" ;\n\n    \n    element                    ::=  json |  [string-literal] | [number] | \"true\" | \"false\" | \"null\" ;\n\n\n    error                      ::=  . ;\n\n";

var JSONParser = /*#__PURE__*/function (_CommonParser) {
  _inherits(JSONParser, _CommonParser);

  var _super = _createSuper(JSONParser);

  function JSONParser() {
    _classCallCheck(this, JSONParser);

    return _super.apply(this, arguments);
  }

  _createClass(JSONParser, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          jsonParser = JSONParser.fromRules(rules);
      return jsonParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      var startRule = (0, _rules.startRuleFromRules)(rules),
          ruleMap = (0, _rules.ruleMapFromRules)(rules);
      (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
      var jsonParser = new JSONParser(startRule, ruleMap);
      return jsonParser;
    }
  }]);

  return JSONParser;
}(_occamParsers.CommonParser);

exports["default"] = JSONParser;

_defineProperty(JSONParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwiSlNPTlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImpzb25QYXJzZXIiLCJmcm9tUnVsZXMiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcsK2ZBQVQ7O0lBcUJxQkMsVTs7Ozs7Ozs7Ozs7OztrQ0FHRTtBQUNuQixVQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkgsR0FBdkIsQ0FBZjtBQUFBLFVBQ01JLEtBQUssR0FBR04sU0FBUyxDQUFDTyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksVUFBVSxHQUFHTCxVQUFVLENBQUNNLFNBQVgsQ0FBcUJILEtBQXJCLENBRm5CO0FBSUEsYUFBT0UsVUFBUDtBQUNEOzs7OEJBRWdCRixLLEVBQU87QUFDdEIsVUFBTUksU0FBUyxHQUFHLCtCQUFtQkosS0FBbkIsQ0FBbEI7QUFBQSxVQUNNSyxPQUFPLEdBQUcsNkJBQWlCTCxLQUFqQixDQURoQjtBQUdBLHlEQUF1QkksU0FBdkIsRUFBa0NDLE9BQWxDO0FBRUEsVUFBTUgsVUFBVSxHQUFHLElBQUlMLFVBQUosQ0FBZU8sU0FBZixFQUEwQkMsT0FBMUIsQ0FBbkI7QUFFQSxhQUFPSCxVQUFQO0FBQ0Q7Ozs7RUFwQnFDSSwwQjs7OztnQkFBbkJULFUsU0FDTkQsRyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICBqc29uIGVycm9yKiB8IGVycm9yKyA7XG5cblxuICAgIGpzb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgYXJyYXkgfCBvYmplY3QgO1xuXG5cbiAgICBhcnJheSAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggZWxlbWVudCAoIFwiLFwiIGVsZW1lbnQgKSogKT8gXCJdXCIgO1xuXG5cbiAgICBvYmplY3QgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwie1wiICggW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICggXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICkqICk/IFwifVwiIDtcblxuICAgIFxuICAgIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAganNvbiB8ICBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBqc29uUGFyc2VyID0gSlNPTlBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIGpzb25QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7XG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBqc29uUGFyc2VyID0gbmV3IEpTT05QYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHJldHVybiBqc29uUGFyc2VyO1xuICB9XG59XG4iXX0=