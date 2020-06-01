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

var _error = _interopRequireDefault(require("../token/overlay/error"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var jsxQuery = _occamDom.Query.fromExpression("//jsx"),
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
    key: "overlayJSXNOdes",
    // OverlayTokenMap = {
    //   "//error/@*": ErrorOverlayToken,
    //   "//method/@*": MethodOverlayToken
    // };
    //
    // overlayTokens() {
    //   super.overlayTokens();
    //
    //   const node = this.getNode(),
    //         tokens = this.getTokens();
    //
    //   this.overlayJSXNOdes(node, tokens);
    //
    //   this.overlayFunctionNodes(node, tokens);
    // }
    value: function overlayJSXNOdes(node, tokens) {
      var _this2 = this;

      var jsxNodes = jsxQuery.execute(node);
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
    key: "overlayFunctionNodes",
    value: function overlayFunctionNodes(node, tokens) {
      var _this3 = this;

      var functionNodes = functionQuery.execute(node);
      functionNodes.forEach(function (functionNode) {
        var argumentNodes = argumentQuery.execute(functionNode),
            variableNodes = variableQuery.execute(functionNode),
            argumentNames = _this3.overlayArgumentNodes(argumentNodes, tokens);

        _this3.overlayVariableNodes(variableNodes, argumentNames, tokens);
      });
    }
  }, {
    key: "overlayArgumentNodes",
    value: function overlayArgumentNodes(argumentTerminalNodes, tokens) {
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
    key: "overlayVariableNodes",
    value: function overlayVariableNodes(variableTerminalNodes, argumentNames, tokens) {
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
      javaScriptModel = _model["default"].fromLexerAndParser(JavaScriptModel, lexer, parser);

      return javaScriptModel;
    }
  }]);

  return JavaScriptModel;
}(_model["default"]);

exports["default"] = JavaScriptModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZnVuY3Rpb25RdWVyeSIsImFyZ3VtZW50UXVlcnkiLCJ2YXJpYWJsZVF1ZXJ5IiwiSmF2YVNjcmlwdE1vZGVsIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIm5vZGUiLCJ0b2tlbnMiLCJqc3hOb2RlcyIsImV4ZWN1dGUiLCJmb3JFYWNoIiwianN4Tm9kZSIsImpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0SlNYVG9rZW4iLCJsYXN0SlNYVG9rZW4iLCJmaXJzdEpTWFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdEpTWFRva2VuSW5kZXgiLCJqc3hUb2tlbkluZGV4IiwianN4VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxheVRva2VuSW5kZXgiLCJqc3hPdmVybGF5VG9rZW4iLCJKU1hPdmVybGF5VG9rZW4iLCJmcm9tT3ZlcmxhaWRUb2tlbiIsIm92ZXJsYXlUb2tlbk1hcCIsImZ1bmN0aW9uTm9kZXMiLCJmdW5jdGlvbk5vZGUiLCJhcmd1bWVudE5vZGVzIiwidmFyaWFibGVOb2RlcyIsImFyZ3VtZW50TmFtZXMiLCJvdmVybGF5QXJndW1lbnROb2RlcyIsIm92ZXJsYXlWYXJpYWJsZU5vZGVzIiwiYXJndW1lbnRUZXJtaW5hbE5vZGVzIiwibWFwIiwiYXJndW1lbnRUZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiYXJndW1lbnROYW1lIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiYXJndW1lbnRPdmVybGF5VG9rZW4iLCJBcmd1bWVudE92ZXJsYXlUb2tlbiIsInZhcmlhYmxlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlVGVybWluYWxOb2RlIiwibmFtZSIsInZhcmlhYmxlT3ZlcmxheVRva2VuIiwiaW5jbHVkZXMiLCJWYXJpYWJsZU92ZXJsYXlUb2tlbiIsImphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsImZyb21Ob3RoaW5nIiwiamF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhlciIsInBhcnNlciIsImphdmFTY3JpcHRNb2RlbCIsIk1vZGVsIiwiZnJvbUxleGVyQW5kUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQUFqQjtBQUFBLElBQ01DLGFBQWEsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FEdEI7QUFBQSxJQUVNRSxhQUFhLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBRnRCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUh0Qjs7SUFLcUJJLGU7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQ1JDLDhCOzs7Ozs7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO29DQUVnQkMsSSxFQUFNQyxNLEVBQVE7QUFBQTs7QUFDNUIsVUFBTUMsUUFBUSxHQUFHVixRQUFRLENBQUNXLE9BQVQsQ0FBaUJILElBQWpCLENBQWpCO0FBRUFFLE1BQUFBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQWE7QUFDNUIsWUFBTUMsNEJBQTRCLEdBQUdELE9BQU8sQ0FBQ0Usd0JBQVIsRUFBckM7QUFBQSxZQUNNQywyQkFBMkIsR0FBR0gsT0FBTyxD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Z0JBSHRCO0FBQUEsWUFHd0M7QUFDbENLLFFBQUFBLGtCQUFrQixHQUFHckMsTUFBTSxDQUFDWSxPQUFQLENBQWVJLGFBQWYsQ0FKM0I7QUFBQSxZQUkwRDtBQUNwREMsUUFBQUEsaUJBQWlCLEdBQUdvQixrQkFMMUI7QUFBQSxZQUsrQztBQUN6Q00sUUFBQUEsb0JBQW9CLEdBQUlqQixhQUFhLENBQUNrQixRQUFkLENBQXVCRixJQUF2QixDQUFELEdBQ0dILHFCQUFxQm5CLGlCQUFyQixDQUF1Q0osYUFBdkMsQ0FESCxHQUVLNkIscUJBQXFCekIsaUJBQXJCLENBQXVDSixhQUF2QyxDQVJsQztBQVVBLFFBQUEsTUFBSSxDQUFDSyxlQUFMLENBQXFCSixpQkFBckIsSUFBMEMwQixvQkFBMUM7QUFDRCxPQVpEO0FBYUQ7OztrQ0FFb0I7QUFDbkIsVUFBTUcsZUFBZSxHQUFHQyx1QkFBZ0JDLFdBQWhCLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdDLHdCQUFpQkYsV0FBakIsRUFEekI7QUFBQSxVQUVNRyxLQUFLLEdBQUdMLGVBRmQ7QUFBQSxVQUVnQztBQUMxQk0sTUFBQUEsTUFBTSxHQUFHSCxnQkFIZjtBQUFBLFVBR2tDO0FBQzVCSSxNQUFBQSxlQUFlLEdBQUdDLGtCQUFNQyxrQkFBTixDQUF5QjFELGVBQXpCLEVBQTBDc0QsS0FBMUMsRUFBaURDLE1BQWpELENBSnhCOztBQU1BLGFBQU9DLGVBQVA7QUFDRDs7OztFQS9GMENDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vbW9kZWxcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEpTWE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9qc3hcIjtcbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuaW1wb3J0IE1ldGhvZE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9tZXRob2RcIjtcbmltcG9ydCBBcmd1bWVudE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9hcmd1bWVudFwiO1xuaW1wb3J0IFZhcmlhYmxlT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGpzeFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGZ1bmN0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgLy8gT3ZlcmxheVRva2VuTWFwID0ge1xuICAvLyAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlbixcbiAgLy8gICBcIi8vbWV0aG9kL0AqXCI6IE1ldGhvZE92ZXJsYXlUb2tlblxuICAvLyB9O1xuICAvL1xuICAvLyBvdmVybGF5VG9rZW5zKCkge1xuICAvLyAgIHN1cGVyLm92ZXJsYXlUb2tlbnMoKTtcbiAgLy9cbiAgLy8gICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gIC8vICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcbiAgLy9cbiAgLy8gICB0aGlzLm92ZXJsYXlKU1hOT2Rlcyhub2RlLCB0b2tlbnMpO1xuICAvL1xuICAvLyAgIHRoaXMub3ZlcmxheUZ1bmN0aW9uTm9kZXMobm9kZSwgdG9rZW5zKTtcbiAgLy8gfVxuXG4gIG92ZXJsYXlKU1hOT2Rlcyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBqc3hOb2RlcyA9IGpzeFF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBqc3hOb2Rlcy5mb3JFYWNoKChqc3hOb2RlKSA9PiB7XG4gICAgICBjb25zdCBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW4gPSBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIGxhc3RKU1hUb2tlbiA9IGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbixcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0SlNYVG9rZW4pLFxuICAgICAgICAgICAgbGFzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0SlNYVG9rZW4pO1xuXG4gICAgICBmb3IgKGxldCBqc3hUb2tlbkluZGV4ID0gZmlyc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4IDw9IGxhc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QganN4VG9rZW4gPSB0b2tlbnNbanN4VG9rZW5JbmRleF0sXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBqc3hUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0ganN4VG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBqc3hPdmVybGF5VG9rZW4gPSBKU1hPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0ganN4T3ZlcmxheVRva2VuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcmxheUZ1bmN0aW9uTm9kZXMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Ob2RlcyA9IGZ1bmN0aW9uUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIGZ1bmN0aW9uTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5vZGVzID0gYXJndW1lbnRRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gICAgICAgICAgICBhcmd1bWVudE5hbWVzID0gdGhpcy5vdmVybGF5QXJndW1lbnROb2Rlcyhhcmd1bWVudE5vZGVzLCB0b2tlbnMpO1xuXG4gICAgICB0aGlzLm92ZXJsYXlWYXJpYWJsZU5vZGVzKHZhcmlhYmxlTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucyk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVybGF5QXJndW1lbnROb2Rlcyhhcmd1bWVudFRlcm1pbmFsTm9kZXMsIHRva2Vucykge1xuICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSBhcmd1bWVudFRlcm1pbmFsTm9kZXMubWFwKChhcmd1bWVudFRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IGFyZ3VtZW50VGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIGFyZ3VtZW50TmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGFyZ3VtZW50T3ZlcmxheVRva2VuID0gQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IGFyZ3VtZW50T3ZlcmxheVRva2VuO1xuXG4gICAgICByZXR1cm4gYXJndW1lbnROYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50TmFtZXM7XG4gIH1cblxuICBvdmVybGF5VmFyaWFibGVOb2Rlcyh2YXJpYWJsZVRlcm1pbmFsTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucykge1xuICAgIHZhcmlhYmxlVGVybWluYWxOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHZhcmlhYmxlVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZU92ZXJsYXlUb2tlbiA9IChhcmd1bWVudE5hbWVzLmluY2x1ZGVzKG5hbWUpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZU92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gdmFyaWFibGVPdmVybGF5VG9rZW47XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgamF2YVNjcmlwdExleGVyID0gSmF2YVNjcmlwdExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgamF2YVNjcmlwdFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsZXhlciA9IGphdmFTY3JpcHRMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGphdmFTY3JpcHRQYXJzZXIsICAvLy9cbiAgICAgICAgICBqYXZhU2NyaXB0TW9kZWwgPSBNb2RlbC5mcm9tTGV4ZXJBbmRQYXJzZXIoSmF2YVNjcmlwdE1vZGVsLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBqYXZhU2NyaXB0TW9kZWw7XG4gIH1cbn1cbiJdfQ==