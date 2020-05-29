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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

    _defineProperty(_assertThisInitialized(_this), "OverlayTokenMap", {
      "//error/@*": _error["default"],
      "//method/@*": _method["default"]
    });

    return _this;
  }

  _createClass(JavaScriptModel, [{
    key: "overlayTokens",
    value: function overlayTokens() {
      _get(_getPrototypeOf(JavaScriptModel.prototype), "overlayTokens", this).call(this);

      var node = this.getNode(),
          tokens = this.getTokens();
      this.overlayJSXNOdes(node, tokens);
      this.overlayFunctionNodes(node, tokens);
    }
  }, {
    key: "overlayJSXNOdes",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZnVuY3Rpb25RdWVyeSIsImFyZ3VtZW50UXVlcnkiLCJ2YXJpYWJsZVF1ZXJ5IiwiSmF2YVNjcmlwdE1vZGVsIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIkVycm9yT3ZlcmxheVRva2VuIiwiTWV0aG9kT3ZlcmxheVRva2VuIiwibm9kZSIsImdldE5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJvdmVybGF5SlNYTk9kZXMiLCJvdmVybGF5RnVuY3Rpb25Ob2RlcyIsImpzeE5vZGVzIiwiZXhlY3V0ZSIsImZvckVhY2giLCJqc3hOb2RlIiwianN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RKU1hUb2tlbiIsImxhc3RKU1hUb2tlbiIsImZpcnN0SlNYVG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0SlNYVG9rZW5JbmRleCIsImpzeFRva2VuSW5kZXgiLCJqc3hUb2tlbiIsIm92ZXJsYWlkVG9rZW4iLCJvdmVybGF5VG9rZW5JbmRleCIsImpzeE92ZXJsYXlUb2tlbiIsIkpTWE92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwib3ZlcmxheVRva2VuTWFwIiwiZnVuY3Rpb25Ob2RlcyIsImZ1bmN0aW9uTm9kZSIsImFyZ3VtZW50Tm9kZXMiLCJ2YXJpYWJsZU5vZGVzIiwiYXJndW1lbnROYW1lcyIsIm92ZXJsYXlBcmd1bWVudE5vZGVzIiwib3ZlcmxheVZhcmlhYmxlTm9kZXMiLCJhcmd1bWVudFRlcm1pbmFsTm9kZXMiLCJtYXAiLCJhcmd1bWVudFRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJhcmd1bWVudE5hbWUiLCJvdmVybGFpZFRva2VuSW5kZXgiLCJhcmd1bWVudE92ZXJsYXlUb2tlbiIsIkFyZ3VtZW50T3ZlcmxheVRva2VuIiwidmFyaWFibGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVUZXJtaW5hbE5vZGUiLCJuYW1lIiwidmFyaWFibGVPdmVybGF5VG9rZW4iLCJpbmNsdWRlcyIsIlZhcmlhYmxlT3ZlcmxheVRva2VuIiwiamF2YVNjcmlwdExleGVyIiwiSmF2YVNjcmlwdExleGVyIiwiZnJvbU5vdGhpbmciLCJqYXZhU2NyaXB0UGFyc2VyIiwiSmF2YVNjcmlwdFBhcnNlciIsImxleGVyIiwicGFyc2VyIiwiamF2YVNjcmlwdE1vZGVsIiwiTW9kZWwiLCJmcm9tTGV4ZXJBbmRQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQUFqQjtBQUFBLElBQ01DLGFBQWEsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FEdEI7QUFBQSxJQUVNRSxhQUFhLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBRnRCO0FBQUEsSUFHTUcsYUFBYSxHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUh0Qjs7SUFLcUJJLGU7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQ1JDLDhCOztzRUFFTztBQUNoQixvQkFBY0MsaUJBREU7QUFFaEIscUJBQWVDO0FBRkMsSzs7Ozs7OztvQ0FLRjtBQUNkOztBQUVBLFVBQU1DLElBQUksR0FBRyxLQUFLQyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxNQUFNLEdBQUcsS0FBS0MsU0FBTCxFQURmO0FBR0EsV0FBS0MsZUFBTCxDQUFxQkosSUFBckIsRUFBMkJFLE1BQTNCO0FBRUEsV0FB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LGlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNb2RlbCBmcm9tIFwiLi4vbW9kZWxcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEpTWE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9qc3hcIjtcbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuaW1wb3J0IE1ldGhvZE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9tZXRob2RcIjtcbmltcG9ydCBBcmd1bWVudE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9hcmd1bWVudFwiO1xuaW1wb3J0IFZhcmlhYmxlT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGpzeFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGZ1bmN0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlbixcbiAgICBcIi8vbWV0aG9kL0AqXCI6IE1ldGhvZE92ZXJsYXlUb2tlblxuICB9O1xuXG4gIG92ZXJsYXlUb2tlbnMoKSB7XG4gICAgc3VwZXIub3ZlcmxheVRva2VucygpO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCk7XG5cbiAgICB0aGlzLm92ZXJsYXlKU1hOT2Rlcyhub2RlLCB0b2tlbnMpO1xuXG4gICAgdGhpcy5vdmVybGF5RnVuY3Rpb25Ob2Rlcyhub2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgb3ZlcmxheUpTWE5PZGVzKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGpzeE5vZGVzID0ganN4UXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIGpzeE5vZGVzLmZvckVhY2goKGpzeE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBqc3hOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgZmlyc3RKU1hUb2tlbiA9IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgbGFzdEpTWFRva2VuID0ganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuLFxuICAgICAgICAgICAgZmlyc3RKU1hUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RKU1hUb2tlbiksXG4gICAgICAgICAgICBsYXN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RKU1hUb2tlbik7XG5cbiAgICAgIGZvciAobGV0IGpzeFRva2VuSW5kZXggPSBmaXJzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXggPD0gbGFzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXgrKykge1xuICAgICAgICBjb25zdCBqc3hUb2tlbiA9IHRva2Vuc1tqc3hUb2tlbkluZGV4XSxcbiAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IGpzeFRva2VuLCAvLy9cbiAgICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBqc3hUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGpzeE92ZXJsYXlUb2tlbiA9IEpTWE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBqc3hPdmVybGF5VG9rZW47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdmVybGF5RnVuY3Rpb25Ob2Rlcyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBmdW5jdGlvbk5vZGVzID0gZnVuY3Rpb25RdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgZnVuY3Rpb25Ob2Rlcy5mb3JFYWNoKChmdW5jdGlvbk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGFyZ3VtZW50Tm9kZXMgPSBhcmd1bWVudFF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZVF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25Ob2RlKSxcbiAgICAgICAgICAgIGFyZ3VtZW50TmFtZXMgPSB0aGlzLm92ZXJsYXlBcmd1bWVudE5vZGVzKGFyZ3VtZW50Tm9kZXMsIHRva2Vucyk7XG5cbiAgICAgIHRoaXMub3ZlcmxheVZhcmlhYmxlTm9kZXModmFyaWFibGVOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJsYXlBcmd1bWVudE5vZGVzKGFyZ3VtZW50VGVybWluYWxOb2RlcywgdG9rZW5zKSB7XG4gICAgY29uc3QgYXJndW1lbnROYW1lcyA9IGFyZ3VtZW50VGVybWluYWxOb2Rlcy5tYXAoKGFyZ3VtZW50VGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gYXJndW1lbnRUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgYXJndW1lbnROYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSwgLy8vXG4gICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgYXJndW1lbnRPdmVybGF5VG9rZW4gPSBBcmd1bWVudE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gYXJndW1lbnRPdmVybGF5VG9rZW47XG5cbiAgICAgIHJldHVybiBhcmd1bWVudE5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJndW1lbnROYW1lcztcbiAgfVxuXG4gIG92ZXJsYXlWYXJpYWJsZU5vZGVzKHZhcmlhYmxlVGVybWluYWxOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKSB7XG4gICAgdmFyaWFibGVUZXJtaW5hbE5vZGVzLmZvckVhY2goKHZhcmlhYmxlVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdmFyaWFibGVUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlT3ZlcmxheVRva2VuID0gKGFyZ3VtZW50TmFtZXMuaW5jbHVkZXMobmFtZSkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSB2YXJpYWJsZU92ZXJsYXlUb2tlbjtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBqYXZhU2NyaXB0TGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBqYXZhU2NyaXB0UGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxleGVyID0gamF2YVNjcmlwdExleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gamF2YVNjcmlwdFBhcnNlciwgIC8vL1xuICAgICAgICAgIGphdmFTY3JpcHRNb2RlbCA9IE1vZGVsLmZyb21MZXhlckFuZFBhcnNlcihKYXZhU2NyaXB0TW9kZWwsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgcmV0dXJuIGphdmFTY3JpcHRNb2RlbDtcbiAgfVxufVxuIl19