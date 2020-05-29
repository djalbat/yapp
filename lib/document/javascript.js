"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _document = _interopRequireDefault(require("../document"));

var _javascript = _interopRequireDefault(require("../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../parser/javascript"));

var _occamDom = require("occam-dom");

var _jsx = _interopRequireDefault(require("../token/overlay/jsx"));

var _argument = _interopRequireDefault(require("../token/overlay/argument"));

var _variable = _interopRequireDefault(require("../token/overlay/variable"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var jsxQuery = _occamDom.Query.fromExpression("//jsx"),
    functionQuery = _occamDom.Query.fromExpression("//function"),
    argumentQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableQuery = _occamDom.Query.fromExpression("//variable/@*");

var JavaScriptDocument = /*#__PURE__*/function (_Document) {
  _inherits(JavaScriptDocument, _Document);

  var _super = _createSuper(JavaScriptDocument);

  function JavaScriptDocument() {
    var _this;

    _classCallCheck(this, JavaScriptDocument);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    return _this;
  }

  _createClass(JavaScriptDocument, [{
    key: "postProcess",
    value: function postProcess() {
      var node = this.getNode(),
          tokens = this.getTokens(),
          jsxNodes = jsxQuery.execute(node),
          functionNodes = functionQuery.execute(node);
      this.postProcessJSXNOdes(jsxNodes, tokens);
      this.postProcessFunctionNodes(functionNodes, tokens);
    }
  }, {
    key: "postProcessJSXNOdes",
    value: function postProcessJSXNOdes(jsxNodes, tokens) {
      var _this2 = this;

      jsxNodes.forEach(function (jsxNode) {
        var jsxNodeFirstSignificantToken = jsxNode.getFirstSignificantToken(),
            jsxNodeLastSignificantToken = jsxNode.getLastSignificantToken(),
            firstJSXToken = jsxNodeFirstSignificantToken,
            ///
        lastJSXToken = jsxNodeLastSignificantToken,
            firstJSXTokenIndex = tokens.indexOf(firstJSXToken),
            lastJSXTokenIndex = tokens.indexOf(lastJSXToken);

        for (var jsxTokenIndex = firstJSXTokenIndex; jsxTokenIndex <= lastJSXTokenIndex; jsxTokenIndex++) {
          var jsxToken = tokens[jsxTokenIndex],
              overlaidToken = jsxToken,
              ///
          overlayTokenIndex = jsxTokenIndex,
              ///
          jsxOverlayToken = _jsx["default"].fromOverlaidToken(overlaidToken);

          _this2.overlayTokenMap[overlayTokenIndex] = jsxOverlayToken;
        }
      });
    }
  }, {
    key: "postProcessFunctionNodes",
    value: function postProcessFunctionNodes(functionTerminalNodes, tokens) {
      var _this3 = this;

      functionTerminalNodes.forEach(function (functionTerminalNode) {
        var argumentNodes = argumentQuery.execute(functionTerminalNode),
            argumentNames = _this3.postProcessArgumentNodes(argumentNodes, tokens),
            variableNodes = variableQuery.execute(functionTerminalNode);

        _this3.postProcessVariableNodes(variableNodes, argumentNames, tokens);
      });
    }
  }, {
    key: "postProcessArgumentNodes",
    value: function postProcessArgumentNodes(argumentTerminalNodes, tokens) {
      var _this4 = this;

      var argumentNames = argumentTerminalNodes.map(function (argumentTerminalNode) {
        var significantToken = argumentTerminalNode.getSignificantToken(),
            content = significantToken.getContent(),
            argumentName = content,
            ///
        overlaidToken = significantToken,
            ///
        overlaidTokenIndex = tokens.indexOf(overlaidToken),
            ///
        overlayTokenIndex = overlaidTokenIndex,
            ///
        argumentOverlayToken = _argument["default"].fromOverlaidToken(overlaidToken);

        _this4.overlayTokenMap[overlayTokenIndex] = argumentOverlayToken;
        return argumentName;
      });
      return argumentNames;
    }
  }, {
    key: "postProcessVariableNodes",
    value: function postProcessVariableNodes(variableTerminalNodes, argumentNames, tokens) {
      var _this5 = this;

      variableTerminalNodes.forEach(function (variableTerminalNode) {
        var significantToken = variableTerminalNode.getSignificantToken(),
            content = significantToken.getContent(),
            name = content,
            ///
        overlaidToken = significantToken,
            ///
        overlaidTokenIndex = tokens.indexOf(overlaidToken),
            ///
        overlayTokenIndex = overlaidTokenIndex,
            ///
        variableOverlayToken = argumentNames.includes(name) ? _argument["default"].fromOverlaidToken(overlaidToken) : _variable["default"].fromOverlaidToken(overlaidToken);
        _this5.overlayTokenMap[overlayTokenIndex] = variableOverlayToken;
      });
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var javaScriptLexer = _javascript["default"].fromNothing(),
          javaScriptParser = _javascript2["default"].fromNothing(),
          lexer = javaScriptLexer,
          ///
      parser = javaScriptParser,
          ///
      javaScriptDocument = _document["default"].fromLexerAndParser(JavaScriptDocument, lexer, parser);

      return javaScriptDocument;
    }
  }]);

  return JavaScriptDocument;
}(_document["default"]);

exports["default"] = JavaScriptDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZnVuY3Rpb25RdWVyeSIsImFyZ3VtZW50UXVlcnkiLCJ2YXJpYWJsZVF1ZXJ5IiwiSmF2YVNjcmlwdERvY3VtZW50IiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIm5vZGUiLCJnZXROb2RlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwianN4Tm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob2RlcyIsInBvc3RQcm9jZXNzSlNYTk9kZXMiLCJwb3N0UHJvY2Vzc0Z1bmN0aW9uTm9kZXMiLCJmb3JFYWNoIiwianN4Tm9kZSIsImpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0SlNYVG9rZW4iLCJsYXN0SlNYVG9rZW4iLCJmaXJzdEpTWFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdEpTWFRva2VuSW5kZXgiLCJqc3hUb2tlbkluZGV4IiwianN4VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxheVRva2VuSW5kZXgiLCJqc3hPdmVybGF5VG9rZW4iLCJKU1hPdmVybGF5VG9rZW4iLCJmcm9tT3ZlcmxhaWRUb2tlbiIsIm92ZXJsYXlUb2tlbk1hcCIsImZ1bmN0aW9uVGVybWluYWxOb2RlcyIsImZ1bmN0aW9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROb2RlcyIsImFyZ3VtZW50TmFtZXMiLCJwb3N0UHJvY2Vzc0FyZ3VtZW50Tm9kZXMiLCJ2YXJpYWJsZU5vZGVzIiwicG9zdFByb2Nlc3NWYXJpYWJsZU5vZGVzIiwiYXJndW1lbnRUZXJtaW5hbE5vZGVzIiwibWFwIiwiYXJndW1lbnRUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXJndW1lbnROYW1lIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiYXJndW1lbnRPdmVybGF5VG9rZW4iLCJBcmd1bWVudE92ZXJsYXlUb2tlbiIsInZhcmlhYmxlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlVGVybWluYWxOb2RlIiwibmFtZSIsInZhcmlhYmxlT3ZlcmxheVRva2VuIiwiaW5jbHVkZXMiLCJWYXJpYWJsZU92ZXJsYXlUb2tlbiIsImphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsImZyb21Ob3RoaW5nIiwiamF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhlciIsInBhcnNlciIsImphdmFTY3JpcHREb2N1bWVudCIsIkRvY3VtZW50IiwiZnJvbUxleGVyQW5kUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQUFqQjtBQUFBLElBQ01DLGFBQWEsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FEdEI7QUFBQSxJQUVNRSxhQUFhLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBRnRCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUh0Qjs7SUFLcUJJLGtCOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyw4Qjs7Ozs7OztrQ0FFRztBQUNaLFVBQU1DLElBQUksR0FBRyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxNQUFNLEdBQUcsS0FBS0MsU0FBTCxFQURmO0FBQUEsVUFFTUMsUUFBUSxHQUFHWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJMLElBQWpCLENBRmpCO0FBQUEsVUFHTU0sYUFBYSxHQUFHWCxhQUFhLENBQUNVLE9BQWQsQ0FBc0JM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IjtcblxuaW1wb3J0IERvY3VtZW50IGZyb20gXCIuLi9kb2N1bWVudFwiO1xuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgSlNYT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2pzeFwiO1xuaW1wb3J0IEFyZ3VtZW50T3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2FyZ3VtZW50XCI7XG5pbXBvcnQgVmFyaWFibGVPdmVybGF5VG9rZW4gZnJvbSBcIi4uL3Rva2VuL292ZXJsYXkvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QganN4UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAgZnVuY3Rpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvblwiKSxcbiAgICAgIGFyZ3VtZW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRTtcblxuICBwb3N0UHJvY2VzcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBqc3hOb2RlcyA9IGpzeFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgZnVuY3Rpb25Ob2RlcyA9IGZ1bmN0aW9uUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHRoaXMucG9zdFByb2Nlc3NKU1hOT2Rlcyhqc3hOb2RlcywgdG9rZW5zKTtcblxuICAgIHRoaXMucG9zdFByb2Nlc3NGdW5jdGlvbk5vZGVzKGZ1bmN0aW9uTm9kZXMsIHRva2Vucyk7XG4gIH1cblxuICBwb3N0UHJvY2Vzc0pTWE5PZGVzKGpzeE5vZGVzLCB0b2tlbnMpIHtcbiAgICBqc3hOb2Rlcy5mb3JFYWNoKChqc3hOb2RlKSA9PiB7XG4gICAgICBjb25zdCBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW4gPSBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIGxhc3RKU1hUb2tlbiA9IGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbixcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0SlNYVG9rZW4pLFxuICAgICAgICAgICAgbGFzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0SlNYVG9rZW4pO1xuXG4gICAgICBmb3IgKGxldCBqc3hUb2tlbkluZGV4ID0gZmlyc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4IDw9IGxhc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QganN4VG9rZW4gPSB0b2tlbnNbanN4VG9rZW5JbmRleF0sXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBqc3hUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0ganN4VG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBqc3hPdmVybGF5VG9rZW4gPSBKU1hPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0ganN4T3ZlcmxheVRva2VuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NGdW5jdGlvbk5vZGVzKGZ1bmN0aW9uVGVybWluYWxOb2RlcywgdG9rZW5zKSB7XG4gICAgZnVuY3Rpb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGVzID0gYXJndW1lbnRRdWVyeS5leGVjdXRlKGZ1bmN0aW9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICAgIGFyZ3VtZW50TmFtZXMgPSB0aGlzLnBvc3RQcm9jZXNzQXJndW1lbnROb2Rlcyhhcmd1bWVudE5vZGVzLCB0b2tlbnMpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlUXVlcnkuZXhlY3V0ZShmdW5jdGlvblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIHRoaXMucG9zdFByb2Nlc3NWYXJpYWJsZU5vZGVzKHZhcmlhYmxlTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucyk7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0UHJvY2Vzc0FyZ3VtZW50Tm9kZXMoYXJndW1lbnRUZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgICBjb25zdCBhcmd1bWVudE5hbWVzID0gYXJndW1lbnRUZXJtaW5hbE5vZGVzLm1hcCgoYXJndW1lbnRUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBhcmd1bWVudFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBhcmd1bWVudE5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE92ZXJsYXlUb2tlbiA9IEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBhcmd1bWVudE92ZXJsYXlUb2tlbjtcblxuICAgICAgcmV0dXJuIGFyZ3VtZW50TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcmd1bWVudE5hbWVzO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NWYXJpYWJsZU5vZGVzKHZhcmlhYmxlVGVybWluYWxOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKSB7XG4gICAgdmFyaWFibGVUZXJtaW5hbE5vZGVzLmZvckVhY2goKHZhcmlhYmxlVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdmFyaWFibGVUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlT3ZlcmxheVRva2VuID0gKGFyZ3VtZW50TmFtZXMuaW5jbHVkZXMobmFtZSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSB2YXJpYWJsZU92ZXJsYXlUb2tlbjtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBqYXZhU2NyaXB0TGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBqYXZhU2NyaXB0UGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxleGVyID0gamF2YVNjcmlwdExleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gamF2YVNjcmlwdFBhcnNlciwgIC8vL1xuICAgICAgICAgIGphdmFTY3JpcHREb2N1bWVudCA9IERvY3VtZW50LmZyb21MZXhlckFuZFBhcnNlcihKYXZhU2NyaXB0RG9jdW1lbnQsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgcmV0dXJuIGphdmFTY3JpcHREb2N1bWVudDtcbiAgfVxufVxuIl19