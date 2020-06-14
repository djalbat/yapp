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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          rules = bnfParser.rulesFromTokens(tokens);
      (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules);
      var jsonParser = new JSONParser(rules);
      return jsonParser;
    }
  }, {
    key: "fromRules",
    value: function fromRules(rules) {
      return new JSONParser(rules);
    }
  }]);

  return JSONParser;
}(_occamParsers.CommonParser);

exports["default"] = JSONParser;

_defineProperty(JSONParser, "bnf", bnf);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwiSlNPTlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImpzb25QYXJzZXIiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0FBR0EsSUFBTUcsR0FBRywrZkFBVDs7SUFxQnFCQyxVOzs7Ozs7Ozs7Ozs7O2tDQUdFO0FBQ25CLFVBQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCSCxHQUF2QixDQUFmO0FBQUEsVUFDTUksS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQVYsQ0FBMEJILE1BQTFCLENBRGQ7QUFHQSx5REFBdUJFLEtBQXZCO0FBRUEsVUFBTUUsVUFBVSxHQUFHLElBQUlMLFVBQUosQ0FBZUcsS0FBZixDQUFuQjtBQUVBLGFBQU9FLFVBQVA7QUFDRDs7OzhCQUVnQkYsSyxFQUFPO0FBQUUsYUFBTyxJQUFJSCxVQUFKLENBQWVHLEtBQWYsQ0FBUDtBQUErQjs7OztFQWRuQkcsMEI7Ozs7Z0JBQW5CTixVLFNBQ05ELEciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gZXJyb3IqIHwgZXJyb3IrIDtcblxuXG4gICAganNvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcnJheSB8IG9iamVjdCA7XG5cblxuICAgIGFycmF5ICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgKCBlbGVtZW50ICggXCIsXCIgZWxlbWVudCApKiApPyBcIl1cIiA7XG5cblxuICAgIG9iamVjdCAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJ7XCIgKCBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKCBcIixcIiBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKSogKT8gXCJ9XCIgO1xuXG4gICAgXG4gICAgZWxlbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBqc29uIHwgIFtzdHJpbmctbGl0ZXJhbF0gfCBbbnVtYmVyXSB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgO1xuXG5cbiAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICBjb25zdCBqc29uUGFyc2VyID0gbmV3IEpTT05QYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGpzb25QYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBuZXcgSlNPTlBhcnNlcihydWxlcyk7IH1cbn1cbiJdfQ==