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

var _method = _interopRequireDefault(require("../token/overlay/method"));

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
    methodQuery = _occamDom.Query.fromExpression("//method/@*"),
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
        var methodNodes = methodQuery.execute(functionTerminalNode),
            argumentNodes = argumentQuery.execute(functionTerminalNode),
            variableNodes = variableQuery.execute(functionTerminalNode),
            argumentNames = _this3.postProcessArgumentNodes(argumentNodes, tokens);

        _this3.postProcessMethodNodes(methodNodes, tokens);

        _this3.postProcessVariableNodes(variableNodes, argumentNames, tokens);
      });
    }
  }, {
    key: "postProcessMethodNodes",
    value: function postProcessMethodNodes(methodTerminalNodes, tokens) {
      var _this4 = this;

      methodTerminalNodes.forEach(function (methodTerminalNode) {
        var significantToken = methodTerminalNode.getSignificantToken(),
            overlaidToken = significantToken,
            ///
        overlaidTokenIndex = tokens.indexOf(overlaidToken),
            ///
        overlayTokenIndex = overlaidTokenIndex,
            ///
        methodOverlayToken = _method["default"].fromOverlaidToken(overlaidToken);

        _this4.overlayTokenMap[overlayTokenIndex] = methodOverlayToken;
      });
    }
  }, {
    key: "postProcessArgumentNodes",
    value: function postProcessArgumentNodes(argumentTerminalNodes, tokens) {
      var _this5 = this;

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

        _this5.overlayTokenMap[overlayTokenIndex] = argumentOverlayToken;
        return argumentName;
      });
      return argumentNames;
    }
  }, {
    key: "postProcessVariableNodes",
    value: function postProcessVariableNodes(variableTerminalNodes, argumentNames, tokens) {
      var _this6 = this;

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
        _this6.overlayTokenMap[overlayTokenIndex] = variableOverlayToken;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibWV0aG9kUXVlcnkiLCJmdW5jdGlvblF1ZXJ5IiwiYXJndW1lbnRRdWVyeSIsInZhcmlhYmxlUXVlcnkiLCJKYXZhU2NyaXB0RG9jdW1lbnQiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwibm9kZSIsImdldE5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJqc3hOb2RlcyIsImV4ZWN1dGUiLCJmdW5jdGlvbk5vZGVzIiwicG9zdFByb2Nlc3NKU1hOT2RlcyIsInBvc3RQcm9jZXNzRnVuY3Rpb25Ob2RlcyIsImZvckVhY2giLCJqc3hOb2RlIiwianN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RKU1hUb2tlbiIsImxhc3RKU1hUb2tlbiIsImZpcnN0SlNYVG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0SlNYVG9rZW5JbmRleCIsImpzeFRva2VuSW5kZXgiLCJqc3hUb2tlbiIsIm92ZXJsYWlkVG9rZW4iLCJvdmVybGF5VG9rZW5JbmRleCIsImpzeE92ZXJsYXlUb2tlbiIsIkpTWE92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwib3ZlcmxheVRva2VuTWFwIiwiZnVuY3Rpb25UZXJtaW5hbE5vZGVzIiwiZnVuY3Rpb25UZXJtaW5hbE5vZGUiLCJtZXRob2ROb2RlcyIsImFyZ3VtZW50Tm9kZXMiLCJ2YXJpYWJsZU5vZGVzIiwiYXJndW1lbnROYW1lcyIsInBvc3RQcm9jZXNzQXJndW1lbnROb2RlcyIsInBvc3RQcm9jZXNzTWV0aG9kTm9kZXMiLCJwb3N0UHJvY2Vzc1ZhcmlhYmxlTm9kZXMiLCJtZXRob2RUZXJtaW5hbE5vZGVzIiwibWV0aG9kVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuSW5kZXgiLCJtZXRob2RPdmVybGF5VG9rZW4iLCJNZXRob2RPdmVybGF5VG9rZW4iLCJhcmd1bWVudFRlcm1pbmFsTm9kZXMiLCJtYXAiLCJhcmd1bWVudFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXJndW1lbnROYW1lIiwiYXJndW1lbnRPdmVybGF5VG9rZW4iLCJBcmd1bWVudE92ZXJsYXlUb2tlbiIsInZhcmlhYmxlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlVGVybWluYWxOb2RlIiwibmFtZSIsInZhcmlhYmxlT3ZlcmxheVRva2VuIiwiaW5jbHVkZXMiLCJWYXJpYWJsZU92ZXJsYXlUb2tlbiIsImphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsImZyb21Ob3RoaW5nIiwiamF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhlciIsInBhcnNlciIsImphdmFTY3JpcHREb2N1bWVudCIsIkRvY3VtZW50IiwiZnJvbUxleGVyQW5kUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQUFqQjtBQUFBLElBQ01DLFdBQVcsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsYUFBckIsQ0FEcEI7QUFBQSxJQUVNRSxhQUFhLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBRnRCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUh0QjtBQUFBLElBSU1JLGFBQWEsR0FBR0wsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FKdEI7O0lBTXFCSyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozsr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QURoQjtBQUFBLFlBRU1NLElBQUksR0FBR1AsT0FGYjtBQUFBLFlBRXNCO0FBQ2hCekIsUUFBQUEsYUFBYSxHQUFHaUIsZ0JBSHRCO0FBQUEsWUFHd0M7QUFDbENFLFFBQUFBLGtCQUFrQixHQUFHdkMsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlSSxhQUFmLENBSjNCO0FBQUEsWUFJMEQ7QUFDcERDLFFBQUFBLGlCQUFpQixHQUFHa0Isa0JBTDFCO0FBQUEsWUFLK0M7QUFDekNjLFFBQUFBLG9CQUFvQixHQUFJdEIsYUFBYSxDQUFDdUIsUUFBZCxDQUF1QkYsSUFBdkIsQ0FBRCxHQUNHSCxxQkFBcUJ6QixpQkFBckIsQ0FBdUNKLGFBQXZDLENBREgsR0FFS21DLHFCQUFxQi9CLGlCQUFyQixDQUF1Q0osYUFBdkMsQ0FSbEM7QUFVQSxRQUFBLE1BQUksQ0FBQ0ssZUFBTCxDQUFxQkosaUJBQXJCLElBQTBDZ0Msb0JBQTFDO0FBQ0QsT0FaRDtBQWFEOzs7a0NBRW9CO0FBQ25CLFVBQU1HLGVBQWUsR0FBR0MsdUJBQWdCQyxXQUFoQixFQUF4QjtBQUFBLFVBQ01DLGdCQUFnQixHQUFHQyx3QkFBaUJGLFdBQWpCLEVBRHpCO0FBQUEsVUFFTUcsS0FBSyxHQUFHTCxlQUZkO0FBQUEsVUFFZ0M7QUFDMUJNLE1BQUFBLE1BQU0sR0FBR0gsZ0JBSGY7QUFBQSxVQUdrQztBQUM1QkksTUFBQUEsa0JBQWtCLEdBQUdDLHFCQUFTQyxrQkFBVCxDQUE0QnJFLGtCQUE1QixFQUFnRGlFLEtBQWhELEVBQXVEQyxNQUF2RCxDQUozQjs7QUFNQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBckc2Q0Msb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERvY3VtZW50IGZyb20gXCIuLi9kb2N1bWVudFwiO1xuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgSlNYT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2pzeFwiO1xuaW1wb3J0IE1ldGhvZE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9tZXRob2RcIjtcbmltcG9ydCBBcmd1bWVudE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9hcmd1bWVudFwiO1xuaW1wb3J0IFZhcmlhYmxlT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGpzeFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIG1ldGhvZFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL21ldGhvZC9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdERvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgcG9zdFByb2Nlc3MoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAganN4Tm9kZXMgPSBqc3hRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGZ1bmN0aW9uTm9kZXMgPSBmdW5jdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICB0aGlzLnBvc3RQcm9jZXNzSlNYTk9kZXMoanN4Tm9kZXMsIHRva2Vucyk7XG5cbiAgICB0aGlzLnBvc3RQcm9jZXNzRnVuY3Rpb25Ob2RlcyhmdW5jdGlvbk5vZGVzLCB0b2tlbnMpO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NKU1hOT2Rlcyhqc3hOb2RlcywgdG9rZW5zKSB7XG4gICAganN4Tm9kZXMuZm9yRWFjaCgoanN4Tm9kZSkgPT4ge1xuICAgICAgY29uc3QganN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBqc3hOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBmaXJzdEpTWFRva2VuID0ganN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICBsYXN0SlNYVG9rZW4gPSBqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4sXG4gICAgICAgICAgICBmaXJzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdEpTWFRva2VuKSxcbiAgICAgICAgICAgIGxhc3RKU1hUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdEpTWFRva2VuKTtcblxuICAgICAgZm9yIChsZXQganN4VG9rZW5JbmRleCA9IGZpcnN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCA8PSBsYXN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGpzeFRva2VuID0gdG9rZW5zW2pzeFRva2VuSW5kZXhdLFxuICAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0ganN4VG9rZW4sIC8vL1xuICAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IGpzeFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgICAganN4T3ZlcmxheVRva2VuID0gSlNYT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IGpzeE92ZXJsYXlUb2tlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHBvc3RQcm9jZXNzRnVuY3Rpb25Ob2RlcyhmdW5jdGlvblRlcm1pbmFsTm9kZXMsIHRva2Vucykge1xuICAgIGZ1bmN0aW9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChmdW5jdGlvblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgbWV0aG9kTm9kZXMgPSBtZXRob2RRdWVyeS5leGVjdXRlKGZ1bmN0aW9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICAgIGFyZ3VtZW50Tm9kZXMgPSBhcmd1bWVudFF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlUXVlcnkuZXhlY3V0ZShmdW5jdGlvblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgICBhcmd1bWVudE5hbWVzID0gdGhpcy5wb3N0UHJvY2Vzc0FyZ3VtZW50Tm9kZXMoYXJndW1lbnROb2RlcywgdG9rZW5zKTtcblxuICAgICAgdGhpcy5wb3N0UHJvY2Vzc01ldGhvZE5vZGVzKG1ldGhvZE5vZGVzLCB0b2tlbnMpO1xuXG4gICAgICB0aGlzLnBvc3RQcm9jZXNzVmFyaWFibGVOb2Rlcyh2YXJpYWJsZU5vZGVzLCBhcmd1bWVudE5hbWVzLCB0b2tlbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NNZXRob2ROb2RlcyhtZXRob2RUZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgICBtZXRob2RUZXJtaW5hbE5vZGVzLmZvckVhY2goKG1ldGhvZFRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG1ldGhvZFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSwgLy8vXG4gICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgbWV0aG9kT3ZlcmxheVRva2VuID0gTWV0aG9kT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBtZXRob2RPdmVybGF5VG9rZW47XG4gICAgfSk7XG4gIH1cblxuICBwb3N0UHJvY2Vzc0FyZ3VtZW50Tm9kZXMoYXJndW1lbnRUZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgICBjb25zdCBhcmd1bWVudE5hbWVzID0gYXJndW1lbnRUZXJtaW5hbE5vZGVzLm1hcCgoYXJndW1lbnRUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBhcmd1bWVudFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBhcmd1bWVudE5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBhcmd1bWVudE92ZXJsYXlUb2tlbiA9IEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBhcmd1bWVudE92ZXJsYXlUb2tlbjtcblxuICAgICAgcmV0dXJuIGFyZ3VtZW50TmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcmd1bWVudE5hbWVzO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NWYXJpYWJsZU5vZGVzKHZhcmlhYmxlVGVybWluYWxOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKSB7XG4gICAgdmFyaWFibGVUZXJtaW5hbE5vZGVzLmZvckVhY2goKHZhcmlhYmxlVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdmFyaWFibGVUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlT3ZlcmxheVRva2VuID0gKGFyZ3VtZW50TmFtZXMuaW5jbHVkZXMobmFtZSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSB2YXJpYWJsZU92ZXJsYXlUb2tlbjtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBqYXZhU2NyaXB0TGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBqYXZhU2NyaXB0UGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxleGVyID0gamF2YVNjcmlwdExleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gamF2YVNjcmlwdFBhcnNlciwgIC8vL1xuICAgICAgICAgIGphdmFTY3JpcHREb2N1bWVudCA9IERvY3VtZW50LmZyb21MZXhlckFuZFBhcnNlcihKYXZhU2NyaXB0RG9jdW1lbnQsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgcmV0dXJuIGphdmFTY3JpcHREb2N1bWVudDtcbiAgfVxufVxuIl19