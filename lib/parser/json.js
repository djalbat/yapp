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

var bnf = "\n\n    document                   ::=  json error* | error+ ;\n\n\n    json                       ::=  jsonArray | jsonObject ;\n\n    jsonArray                  ::=  \"[\" ( jsonElement ( \",\" jsonElement )* )? \"]\" ;\n\n    jsonObject                 ::=  \"{\" ( [string-literal] \":\" jsonElement ( \",\" [string-literal] \":\" jsonElement )* )? \"}\" ;\n    \n    jsonElement                ::=  json |  [string-literal] | [number] | \"true\" | \"false\" | \"null\" ;\n\n\n    error                      ::=  . ;\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwiSlNPTlBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImpzb25QYXJzZXIiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxzQkFBU0MsV0FBVCxFQUFqQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Msd0JBQVVGLFdBQVYsRUFEbEI7O0FBR0EsSUFBTUcsR0FBRyxpaEJBQVQ7O0lBa0JxQkMsVTs7Ozs7Ozs7Ozs7OztrQ0FHRTtBQUNuQixVQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkgsR0FBdkIsQ0FBZjtBQUFBLFVBQ01JLEtBQUssR0FBR04sU0FBUyxDQUFDTyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBR0EseURBQXVCRSxLQUF2QjtBQUVBLFVBQU1FLFVBQVUsR0FBRyxJQUFJTCxVQUFKLENBQWVHLEtBQWYsQ0FBbkI7QUFFQSxhQUFPRSxVQUFQO0FBQ0Q7Ozs4QkFFZ0JGLEssRUFBTztBQUFFLGFBQU8sSUFBSUgsVUFBSixDQUFlRyxLQUFmLENBQVA7QUFBK0I7Ozs7RUFkbkJHLDBCOzs7O2dCQUFuQk4sVSxTQUNORCxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICBqc29uIGVycm9yKiB8IGVycm9yKyA7XG5cblxuICAgIGpzb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAganNvbkFycmF5IHwganNvbk9iamVjdCA7XG5cbiAgICBqc29uQXJyYXkgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICgganNvbkVsZW1lbnQgKCBcIixcIiBqc29uRWxlbWVudCApKiApPyBcIl1cIiA7XG5cbiAgICBqc29uT2JqZWN0ICAgICAgICAgICAgICAgICA6Oj0gIFwie1wiICggW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uRWxlbWVudCAoIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbkVsZW1lbnQgKSogKT8gXCJ9XCIgO1xuICAgIFxuICAgIGpzb25FbGVtZW50ICAgICAgICAgICAgICAgIDo6PSAganNvbiB8ICBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgY29uc3QganNvblBhcnNlciA9IG5ldyBKU09OUGFyc2VyKHJ1bGVzKTtcblxuICAgIHJldHVybiBqc29uUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gbmV3IEpTT05QYXJzZXIocnVsZXMpOyB9XG59XG4iXX0=