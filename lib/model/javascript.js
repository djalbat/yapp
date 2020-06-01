"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _model = _interopRequireDefault(require("../model"));

var _javascript = _interopRequireDefault(require("../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../parser/javascript"));

var _javascript3 = _interopRequireDefault(require("../processor/javascript"));

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

  _createClass(JavaScriptModel, null, [{
    key: "fromNothing",
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
    // overlayJSXNOdes(node, tokens) {
    //   const jsxNodes = jsxQuery.execute(node);
    //
    //   jsxNodes.forEach((jsxNode) => {
    //     const jsxNodeFirstSignificantToken = jsxNode.getFirstSignificantToken(),
    //           jsxNodeLastSignificantToken = jsxNode.getLastSignificantToken(),
    //           firstJSXToken = jsxNodeFirstSignificantToken, ///
    //           lastJSXToken = jsxNodeLastSignificantToken,
    //           firstJSXTokenIndex = tokens.indexOf(firstJSXToken),
    //           lastJSXTokenIndex = tokens.indexOf(lastJSXToken);
    //
    //     for (let jsxTokenIndex = firstJSXTokenIndex; jsxTokenIndex <= lastJSXTokenIndex; jsxTokenIndex++) {
    //       const jsxToken = tokens[jsxTokenIndex],
    //             overlaidToken = jsxToken, ///
    //             overlayTokenIndex = jsxTokenIndex,  ///
    //             jsxOverlayToken = JSXOverlayToken.fromOverlaidToken(overlaidToken);
    //
    //       this.overlayTokenMap[overlayTokenIndex] = jsxOverlayToken;
    //     }
    //   });
    // }
    // overlayFunctionNodes(node, tokens) {
    //   const functionNodes = functionQuery.execute(node);
    //
    //   functionNodes.forEach((functionNode) => {
    //     const argumentNodes = argumentQuery.execute(functionNode),
    //           variableNodes = variableQuery.execute(functionNode),
    //           argumentNames = this.overlayArgumentNodes(argumentNodes, tokens);
    //
    //     this.overlayVariableNodes(variableNodes, argumentNames, tokens);
    //   });
    // }
    // overlayArgumentNodes(argumentTerminalNodes, tokens) {
    //   const argumentNames = argumentTerminalNodes.map((argumentTerminalNode) => {
    //     const significantToken = argumentTerminalNode.getSignificantToken(),
    //           content = significantToken.getContent(),
    //           argumentName = content, ///
    //           overlaidToken = significantToken, ///
    //           overlaidTokenIndex = tokens.indexOf(overlaidToken),
    //           overlayTokenIndex = overlaidTokenIndex,  ///
    //           argumentOverlayToken = ArgumentOverlayToken.fromOverlaidToken(overlaidToken);
    //
    //     this.overlayTokenMap[overlayTokenIndex] = argumentOverlayToken;
    //
    //     return argumentName;
    //   });
    //
    //   return argumentNames;
    // }
    // overlayVariableNodes(variableTerminalNodes, argumentNames, tokens) {
    //   variableTerminalNodes.forEach((variableTerminalNode) => {
    //     const significantToken = variableTerminalNode.getSignificantToken(),
    //           content = significantToken.getContent(),
    //           name = content, ///
    //           overlaidToken = significantToken, ///
    //           overlaidTokenIndex = tokens.indexOf(overlaidToken), ///
    //           overlayTokenIndex = overlaidTokenIndex,  ///
    //           variableOverlayToken = (argumentNames.includes(name)) ?
    //                                     ArgumentOverlayToken.fromOverlaidToken(overlaidToken) :
    //                                       VariableOverlayToken.fromOverlaidToken(overlaidToken);
    //
    //     this.overlayTokenMap[overlayTokenIndex] = variableOverlayToken;
    //   });
    // }
    value: function fromNothing() {
      var javaScriptLexer = _javascript["default"].fromNothing(),
          javaScriptParser = _javascript2["default"].fromNothing(),
          javaScriptProcessor = _javascript3["default"].fromNothing(),
          lexer = javaScriptLexer,
          ///
      parser = javaScriptParser,
          ///
      processor = javaScriptProcessor,
          ///
      javaScriptModel = _model["default"].fromLexerParserAndProcessor(JavaScriptModel, lexer, parser, processor);

      return javaScriptModel;
    }
  }]);

  return JavaScriptModel;
}(_model["default"]);

exports["default"] = JavaScriptModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZnVuY3Rpb25RdWVyeSIsImFyZ3VtZW50UXVlcnkiLCJ2YXJpYWJsZVF1ZXJ5IiwiSmF2YVNjcmlwdE1vZGVsIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsImphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsImZyb21Ob3RoaW5nIiwiamF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJqYXZhU2NyaXB0UHJvY2Vzc29yIiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsImxleGVyIiwicGFyc2VyIiwicHJvY2Vzc29yIiwiamF2YVNjcmlwdE1vZGVsIiwiTW9kZWwiLCJmcm9tTGV4ZXJQYXJzZXJBbmRQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLE9BQXJCLENBQWpCO0FBQUEsSUFDTUMsYUFBYSxHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUR0QjtBQUFBLElBRU1FLGFBQWEsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FGdEI7QUFBQSxJQUdNRyxhQUFhLEdBQUdKLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSHRCOztJQUtxQkksZTs7Ozs7Ozs7Ozs7Ozs7OzsrREFDUkMsOEI7Ozs7Ozs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtrQ0FFcUI7QUFDbkIsVUFBTUMsZUFBZSxHQUFHQyx1QkFBZ0JDLFdBQWhCLEVBQXhCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdDLHdCQUFpQkYsV0FBakIsRUFEekI7QUFBQSxVQUVNRyxtQkFBbUIsR0FBR0Msd0JBQW9CSixXQUFwQixFQUY1QjtBQUFBLFVBR01LLEtBQUssR0FBR1AsZUFIZDtBQUFBLFVBR2dDO0FBQzFCUSxNQUFBQSxNQUFNLEdBQUdMLGdCQUpmO0FBQUEsVUFJa0M7QUFDNUJNLE1BQUFBLFNBQVMsR0FBR0osbUJBTGxCO0FBQUEsVUFLd0M7QUFDbENLLE1BQUFBLGVBQWUsR0FBR0Msa0JBQU1DLDJCQUFOLENBQWtDZCxlQUFsQyxFQUFtRFMsS0FBbkQsRUFBMERDLE1BQTFELEVBQWtFQyxTQUFsRSxDQU54Qjs7QUFRQSxhQUFPQyxlQUFQO0FBQ0Q7Ozs7RUFqRzBDQyxpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4uL21vZGVsXCI7XG5pbXBvcnQgSmF2YVNjcmlwdExleGVyIGZyb20gXCIuLi9sZXhlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEpTWE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9qc3hcIjtcbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuaW1wb3J0IE1ldGhvZE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9tZXRob2RcIjtcbmltcG9ydCBBcmd1bWVudE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vdG9rZW4vb3ZlcmxheS9hcmd1bWVudFwiO1xuaW1wb3J0IFZhcmlhYmxlT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L3ZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGpzeFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGZ1bmN0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgLy8gT3ZlcmxheVRva2VuTWFwID0ge1xuICAvLyAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlbixcbiAgLy8gICBcIi8vbWV0aG9kL0AqXCI6IE1ldGhvZE92ZXJsYXlUb2tlblxuICAvLyB9O1xuICAvL1xuICAvLyBvdmVybGF5VG9rZW5zKCkge1xuICAvLyAgIHN1cGVyLm92ZXJsYXlUb2tlbnMoKTtcbiAgLy9cbiAgLy8gICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gIC8vICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKTtcbiAgLy9cbiAgLy8gICB0aGlzLm92ZXJsYXlKU1hOT2Rlcyhub2RlLCB0b2tlbnMpO1xuICAvL1xuICAvLyAgIHRoaXMub3ZlcmxheUZ1bmN0aW9uTm9kZXMobm9kZSwgdG9rZW5zKTtcbiAgLy8gfVxuXG4gIC8vIG92ZXJsYXlKU1hOT2Rlcyhub2RlLCB0b2tlbnMpIHtcbiAgLy8gICBjb25zdCBqc3hOb2RlcyA9IGpzeFF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG4gIC8vXG4gIC8vICAganN4Tm9kZXMuZm9yRWFjaCgoanN4Tm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3QganN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gIC8vICAgICAgICAgICBqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBqc3hOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gIC8vICAgICAgICAgICBmaXJzdEpTWFRva2VuID0ganN4Tm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gIC8vICAgICAgICAgICBsYXN0SlNYVG9rZW4gPSBqc3hOb2RlTGFzdFNpZ25pZmljYW50VG9rZW4sXG4gIC8vICAgICAgICAgICBmaXJzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdEpTWFRva2VuKSxcbiAgLy8gICAgICAgICAgIGxhc3RKU1hUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdEpTWFRva2VuKTtcbiAgLy9cbiAgLy8gICAgIGZvciAobGV0IGpzeFRva2VuSW5kZXggPSBmaXJzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXggPD0gbGFzdEpTWFRva2VuSW5kZXg7IGpzeFRva2VuSW5kZXgrKykge1xuICAvLyAgICAgICBjb25zdCBqc3hUb2tlbiA9IHRva2Vuc1tqc3hUb2tlbkluZGV4XSxcbiAgLy8gICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IGpzeFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBqc3hUb2tlbkluZGV4LCAgLy8vXG4gIC8vICAgICAgICAgICAgIGpzeE92ZXJsYXlUb2tlbiA9IEpTWE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcbiAgLy9cbiAgLy8gICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0ganN4T3ZlcmxheVRva2VuO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gb3ZlcmxheUZ1bmN0aW9uTm9kZXMobm9kZSwgdG9rZW5zKSB7XG4gIC8vICAgY29uc3QgZnVuY3Rpb25Ob2RlcyA9IGZ1bmN0aW9uUXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgLy9cbiAgLy8gICBmdW5jdGlvbk5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3QgYXJndW1lbnROb2RlcyA9IGFyZ3VtZW50UXVlcnkuZXhlY3V0ZShmdW5jdGlvbk5vZGUpLFxuICAvLyAgICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlUXVlcnkuZXhlY3V0ZShmdW5jdGlvbk5vZGUpLFxuICAvLyAgICAgICAgICAgYXJndW1lbnROYW1lcyA9IHRoaXMub3ZlcmxheUFyZ3VtZW50Tm9kZXMoYXJndW1lbnROb2RlcywgdG9rZW5zKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMub3ZlcmxheVZhcmlhYmxlTm9kZXModmFyaWFibGVOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIG92ZXJsYXlBcmd1bWVudE5vZGVzKGFyZ3VtZW50VGVybWluYWxOb2RlcywgdG9rZW5zKSB7XG4gIC8vICAgY29uc3QgYXJndW1lbnROYW1lcyA9IGFyZ3VtZW50VGVybWluYWxOb2Rlcy5tYXAoKGFyZ3VtZW50VGVybWluYWxOb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gYXJndW1lbnRUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAvLyAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAvLyAgICAgICAgICAgYXJndW1lbnROYW1lID0gY29udGVudCwgLy8vXG4gIC8vICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gIC8vICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSxcbiAgLy8gICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gIC8vICAgICAgICAgICBhcmd1bWVudE92ZXJsYXlUb2tlbiA9IEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuICAvL1xuICAvLyAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gYXJndW1lbnRPdmVybGF5VG9rZW47XG4gIC8vXG4gIC8vICAgICByZXR1cm4gYXJndW1lbnROYW1lO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBhcmd1bWVudE5hbWVzO1xuICAvLyB9XG5cbiAgLy8gb3ZlcmxheVZhcmlhYmxlTm9kZXModmFyaWFibGVUZXJtaW5hbE5vZGVzLCBhcmd1bWVudE5hbWVzLCB0b2tlbnMpIHtcbiAgLy8gICB2YXJpYWJsZVRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodmFyaWFibGVUZXJtaW5hbE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB2YXJpYWJsZVRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gIC8vICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gIC8vICAgICAgICAgICBuYW1lID0gY29udGVudCwgLy8vXG4gIC8vICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gIC8vICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSwgLy8vXG4gIC8vICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAvLyAgICAgICAgICAgdmFyaWFibGVPdmVybGF5VG9rZW4gPSAoYXJndW1lbnROYW1lcy5pbmNsdWRlcyhuYW1lKSkgP1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmd1bWVudE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKSA6XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFyaWFibGVPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG4gIC8vXG4gIC8vICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSB2YXJpYWJsZU92ZXJsYXlUb2tlbjtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBqYXZhU2NyaXB0TGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBqYXZhU2NyaXB0UGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGphdmFTY3JpcHRQcm9jZXNzb3IgPSBKYXZhU2NyaXB0UHJvY2Vzc29yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbGV4ZXIgPSBqYXZhU2NyaXB0TGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBqYXZhU2NyaXB0UGFyc2VyLCAgLy8vXG4gICAgICAgICAgcHJvY2Vzc29yID0gamF2YVNjcmlwdFByb2Nlc3NvciwgIC8vL1xuICAgICAgICAgIGphdmFTY3JpcHRNb2RlbCA9IE1vZGVsLmZyb21MZXhlclBhcnNlckFuZFByb2Nlc3NvcihKYXZhU2NyaXB0TW9kZWwsIGxleGVyLCBwYXJzZXIsIHByb2Nlc3Nvcik7XG5cbiAgICByZXR1cm4gamF2YVNjcmlwdE1vZGVsO1xuICB9XG59XG4iXX0=