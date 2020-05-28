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

var bnf = "\n\n\n\n    document                   ::= preamble? ( statement | error )* ;\n\n    preamble                   ::= ( \"\\\"use strict\\\"\" | \"'use strict'\" ) \";\" ;\n\n    statement                  ::= importStatement ;\n\n    importStatement            ::= \"import\" [string-literal] \";\" ;\n\n    error                      ::=  . ;\n\n\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiYm5mIiwiSmF2YVNjcmlwdFBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsImphdmFzY3JpcHRQYXJzZXIiLCJmcm9tQk5GIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0Msc0JBQVNDLFdBQVQsRUFBakI7QUFBQSxJQUNNQyxTQUFTLEdBQUdDLHdCQUFVRixXQUFWLEVBRGxCOztBQUdBLElBQU1HLEdBQUcsbVdBQVQ7O0lBa0JxQkMsZ0I7Ozs7Ozs7Ozs7Ozs7NEJBR0pELEcsRUFBSztBQUNsQixVQUFNRSxNQUFNLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkgsR0FBdkIsQ0FBZjtBQUFBLFVBQ01JLEtBQUssR0FBR04sU0FBUyxDQUFDTyxlQUFWLENBQTBCSCxNQUExQixDQURkO0FBQUEsVUFFTUksZ0JBQWdCLEdBQUcsSUFBSUwsZ0JBQUosQ0FBcUJHLEtBQXJCLENBRnpCO0FBSUEsYUFBT0UsZ0JBQVA7QUFDRDs7O2tDQUVvQjtBQUFFLGFBQU9MLGdCQUFnQixDQUFDTSxPQUFqQixDQUF5QlAsR0FBekIsQ0FBUDtBQUF1Qzs7OztFQVhsQlEsMEI7Ozs7Z0JBQXpCUCxnQixTQUNORCxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG5cblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSBwcmVhbWJsZT8gKCBzdGF0ZW1lbnQgfCBlcnJvciApKiA7XG5cbiAgICBwcmVhbWJsZSAgICAgICAgICAgICAgICAgICA6Oj0gKCBcIlxcXFxcInVzZSBzdHJpY3RcXFxcXCJcIiB8IFwiJ3VzZSBzdHJpY3QnXCIgKSBcIjtcIiA7XG5cbiAgICBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICA6Oj0gaW1wb3J0U3RhdGVtZW50IDtcblxuICAgIGltcG9ydFN0YXRlbWVudCAgICAgICAgICAgIDo6PSBcImltcG9ydFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI7XCIgO1xuXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBqYXZhc2NyaXB0UGFyc2VyID0gbmV3IEphdmFTY3JpcHRQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGphdmFzY3JpcHRQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBKYXZhU2NyaXB0UGFyc2VyLmZyb21CTkYoYm5mKTsgfVxufVxuIl19