"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("../model"));

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

var JavaScriptModel = /*#__PURE__*/function (_Model) {
  _inherits(JavaScriptModel, _Model);

  var _super = _createSuper(JavaScriptModel);

  function JavaScriptModel() {
    var _this;

    _classCallCheck(this, JavaScriptModel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    return _this;
  }

  _createClass(JavaScriptModel, [{
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
      javaScriptModel = _model["default"].fromLexerAndParser(JavaScriptModel, lexer, parser);

      return javaScriptModel;
    }
  }]);

  return JavaScriptModel;
}(_model["default"]);

exports["default"] = JavaScriptModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibWV0aG9kUXVlcnkiLCJmdW5jdGlvblF1ZXJ5IiwiYXJndW1lbnRRdWVyeSIsInZhcmlhYmxlUXVlcnkiLCJKYXZhU2NyaXB0TW9kZWwiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwibm9kZSIsImdldE5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJqc3hOb2RlcyIsImV4ZWN1dGUiLCJmdW5jdGlvbk5vZGVzIiwicG9zdFByb2Nlc3NKU1hOT2RlcyIsInBvc3RQcm9jZXNzRnVuY3Rpb25Ob2RlcyIsImZvckVhY2giLCJqc3hOb2RlIiwianN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RKU1hUb2tlbiIsImxhc3RKU1hUb2tlbiIsImZpcnN0SlNYVG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0SlNYVG9rZW5JbmRleCIsImpzeFRva2VuSW5kZXgiLCJqc3hUb2tlbiIsIm92ZXJsYWlkVG9rZW4iLCJvdmVybGF5VG9rZW5JbmRleCIsImpzeE92ZXJsYXlUb2tlbiIsIkpTWE92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwib3ZlcmxheVRva2VuTWFwIiwiZnVuY3Rpb25UZXJtaW5hbE5vZGVzIiwiZnVuY3Rpb25UZXJtaW5hbE5vZGUiLCJtZXRob2ROb2RlcyIsImFyZ3VtZW50Tm9kZXMiLCJ2YXJpYWJsZU5vZGVzIiwiYXJndW1lbnROYW1lcyIsInBvc3RQcm9jZXNzQXJndW1lbnROb2RlcyIsInBvc3RQcm9jZXNzTWV0aG9kTm9kZXMiLCJwb3N0UHJvY2Vzc1ZhcmlhYmxlTm9kZXMiLCJtZXRob2RUZXJtaW5hbE5vZGVzIiwibWV0aG9kVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuSW5kZXgiLCJtZXRob2RPdmVybGF5VG9rZW4iLCJNZXRob2RPdmVybGF5VG9rZW4iLCJhcmd1bWVudFRlcm1pbmFsTm9kZXMiLCJtYXAiLCJhcmd1bWVudFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXJndW1lbnROYW1lIiwiYXJndW1lbnRPdmVybGF5VG9rZW4iLCJBcmd1bWVudE92ZXJsYXlUb2tlbiIsInZhcmlhYmxlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlVGVybWluYWxOb2RlIiwibmFtZSIsInZhcmlhYmxlT3ZlcmxheVRva2VuIiwiaW5jbHVkZXMiLCJWYXJpYWJsZU92ZXJsYXlUb2tlbiIsImphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsImZyb21Ob3RoaW5nIiwiamF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhlciIsInBhcnNlciIsImphdmFTY3JpcHRNb2RlbCIsIk1vZGVsIiwiZnJvbUxleGVyQW5kUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQUFqQjtBQUFBLElBQ01DLFdBQVcsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsYUFBckIsQ0FEcEI7QUFBQSxJQUVNRSxhQUFhLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBRnRCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUh0QjtBQUFBLElBSU1JLGFBQWEsR0FBR0wsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FKdEI7O0lBTXFCSyxlOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyw4Qjs7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WUFFTU0sSUFBSSxHQUFHUCxPQUZiO0FBQUEsWUFFc0I7QUFDaEJ6QixRQUFBQSxhQUFhLEdBQUdpQixnQkFIdEI7QUFBQSxZQUd3QztBQUNsQ0UsUUFBQUEsa0JBQWtCLEdBQUd2QyxNQUFNLENBQUNnQixPQUFQLENBQWVJLGFBQWYsQ0FKM0I7QUFBQSxZQUkwRDtBQUNwREMsUUFBQUEsaUJBQWlCLEdBQUdrQixrQkFMMUI7QUFBQSxZQUsrQztBQUN6Q2MsUUFBQUEsb0JBQW9CLEdBQUl0QixhQUFhLENBQUN1QixRQUFkLENBQXVCRixJQUF2QixDQUFELEdBQ0dILHFCQUFxQnpCLGlCQUFyQixDQUF1Q0osYUFBdkMsQ0FESCxHQUVLbUMscUJBQXFCL0IsaUJBQXJCLENBQXVDSixhQUF2QyxDQVJsQztBQVVBLFFBQUEsTUFBSSxDQUFDSyxlQUFMLENBQXFCSixpQkFBckIsSUFBMENnQyxvQkFBMUM7QUFDRCxPQVpEO0FBYUQ7OztrQ0FFb0I7QUFDbkIsVUFBTUcsZUFBZSxHQUFHQyx1QkFBZ0JDLFdBQWhCLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdDLHdCQUFpQkYsV0FBakIsRUFEekI7QUFBQSxVQUVNRyxLQUFLLEdBQUdMLGVBRmQ7QUFBQSxVQUVnQztBQUMxQk0sTUFBQUEsTUFBTSxHQUFHSCxnQkFIZjtBQUFBLFVBR2tDO0FBQzVCSSxNQUFBQSxlQUFlLEdBQUdDLGtCQUFNQyxrQkFBTixDQUF5QnJFLGVBQXpCLEVBQTBDaUUsS0FBMUMsRUFBaURDLE1BQWpELENBSnhCOztBQU1BLGFBQU9DLGVBQVA7QUFDRDs7OztFQXJHMENDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vbW9kZWxcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEpTWE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9qc3hcIjtcbmltcG9ydCBNZXRob2RPdmVybGF5VG9rZW4gZnJvbSBcIi4uL3Rva2VuL292ZXJsYXkvbWV0aG9kXCI7XG5pbXBvcnQgQXJndW1lbnRPdmVybGF5VG9rZW4gZnJvbSBcIi4uL3Rva2VuL292ZXJsYXkvYXJndW1lbnRcIjtcbmltcG9ydCBWYXJpYWJsZU92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBKQVZBU0NSSVBUX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBqc3hRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBtZXRob2RRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9tZXRob2QvQCpcIiksXG4gICAgICBmdW5jdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Z1bmN0aW9uXCIpLFxuICAgICAgYXJndW1lbnRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9hcmd1bWVudC9AKlwiKSxcbiAgICAgIHZhcmlhYmxlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyaWFibGUvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFO1xuXG4gIHBvc3RQcm9jZXNzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIGpzeE5vZGVzID0ganN4UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBmdW5jdGlvbk5vZGVzID0gZnVuY3Rpb25RdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgdGhpcy5wb3N0UHJvY2Vzc0pTWE5PZGVzKGpzeE5vZGVzLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5wb3N0UHJvY2Vzc0Z1bmN0aW9uTm9kZXMoZnVuY3Rpb25Ob2RlcywgdG9rZW5zKTtcbiAgfVxuXG4gIHBvc3RQcm9jZXNzSlNYTk9kZXMoanN4Tm9kZXMsIHRva2Vucykge1xuICAgIGpzeE5vZGVzLmZvckVhY2goKGpzeE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBqc3hOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgZmlyc3RKU1hUb2tlbiA9IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgbGFzdEpTWFRva2VuID0ganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuLFxuICAgICAgICAgICAgZmlyc3RKU1hUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RKU1hUb2tlbiksXG4gICAgICAgICAgICBsYXN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RKU1hUb2tlbik7XG5cbiAgICAgIGZvciAobGV0IGpzeFRva2VuSW5kZXggPSBmaXJzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXggPD0gbGFzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXgrKykge1xuICAgICAgICBjb25zdCBqc3hUb2tlbiA9IHRva2Vuc1tqc3hUb2tlbkluZGV4XSxcbiAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IGpzeFRva2VuLCAvLy9cbiAgICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBqc3hUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGpzeE92ZXJsYXlUb2tlbiA9IEpTWE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBqc3hPdmVybGF5VG9rZW47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwb3N0UHJvY2Vzc0Z1bmN0aW9uTm9kZXMoZnVuY3Rpb25UZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgICBmdW5jdGlvblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGhvZE5vZGVzID0gbWV0aG9kUXVlcnkuZXhlY3V0ZShmdW5jdGlvblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgICBhcmd1bWVudE5vZGVzID0gYXJndW1lbnRRdWVyeS5leGVjdXRlKGZ1bmN0aW9uVGVybWluYWxOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZVF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgICAgYXJndW1lbnROYW1lcyA9IHRoaXMucG9zdFByb2Nlc3NBcmd1bWVudE5vZGVzKGFyZ3VtZW50Tm9kZXMsIHRva2Vucyk7XG5cbiAgICAgIHRoaXMucG9zdFByb2Nlc3NNZXRob2ROb2RlcyhtZXRob2ROb2RlcywgdG9rZW5zKTtcblxuICAgICAgdGhpcy5wb3N0UHJvY2Vzc1ZhcmlhYmxlTm9kZXModmFyaWFibGVOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBvc3RQcm9jZXNzTWV0aG9kTm9kZXMobWV0aG9kVGVybWluYWxOb2RlcywgdG9rZW5zKSB7XG4gICAgbWV0aG9kVGVybWluYWxOb2Rlcy5mb3JFYWNoKChtZXRob2RUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBtZXRob2RUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgIG1ldGhvZE92ZXJsYXlUb2tlbiA9IE1ldGhvZE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gbWV0aG9kT3ZlcmxheVRva2VuO1xuICAgIH0pO1xuICB9XG5cbiAgcG9zdFByb2Nlc3NBcmd1bWVudE5vZGVzKGFyZ3VtZW50VGVybWluYWxOb2RlcywgdG9rZW5zKSB7XG4gICAgY29uc3QgYXJndW1lbnROYW1lcyA9IGFyZ3VtZW50VGVybWluYWxOb2Rlcy5tYXAoKGFyZ3VtZW50VGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gYXJndW1lbnRUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgYXJndW1lbnROYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSwgLy8vXG4gICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgYXJndW1lbnRPdmVybGF5VG9rZW4gPSBBcmd1bWVudE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gYXJndW1lbnRPdmVybGF5VG9rZW47XG5cbiAgICAgIHJldHVybiBhcmd1bWVudE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJndW1lbnROYW1lcztcbiAgfVxuXG4gIHBvc3RQcm9jZXNzVmFyaWFibGVOb2Rlcyh2YXJpYWJsZVRlcm1pbmFsTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucykge1xuICAgIHZhcmlhYmxlVGVybWluYWxOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHZhcmlhYmxlVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU92ZXJsYXlUb2tlbiA9IChhcmd1bWVudE5hbWVzLmluY2x1ZGVzKG5hbWUpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZU92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gdmFyaWFibGVPdmVybGF5VG9rZW47XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgamF2YVNjcmlwdExleGVyID0gSmF2YVNjcmlwdExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgamF2YVNjcmlwdFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsZXhlciA9IGphdmFTY3JpcHRMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGphdmFTY3JpcHRQYXJzZXIsICAvLy9cbiAgICAgICAgICBqYXZhU2NyaXB0TW9kZWwgPSBNb2RlbC5mcm9tTGV4ZXJBbmRQYXJzZXIoSmF2YVNjcmlwdE1vZGVsLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBqYXZhU2NyaXB0TW9kZWw7XG4gIH1cbn1cbiJdfQ==