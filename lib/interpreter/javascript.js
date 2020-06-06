"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interpreter = _interopRequireDefault(require("../interpreter"));

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

var JavaScriptInterpreter = /*#__PURE__*/function (_Interpreter) {
  _inherits(JavaScriptInterpreter, _Interpreter);

  var _super = _createSuper(JavaScriptInterpreter);

  function JavaScriptInterpreter() {
    var _this;

    _classCallCheck(this, JavaScriptInterpreter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    return _this;
  }

  _createClass(JavaScriptInterpreter, null, [{
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
      return _interpreter["default"].fromLexerParserAndProcessor(JavaScriptInterpreter, _javascript["default"], _javascript2["default"], _javascript3["default"]);
    }
  }]);

  return JavaScriptInterpreter;
}(_interpreter["default"]);

exports["default"] = JavaScriptInterpreter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZnVuY3Rpb25RdWVyeSIsImFyZ3VtZW50UXVlcnkiLCJ2YXJpYWJsZVF1ZXJ5IiwiSmF2YVNjcmlwdEludGVycHJldGVyIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIkludGVycHJldGVyIiwiZnJvbUxleGVyUGFyc2VyQW5kUHJvY2Vzc29yIiwiSmF2YVNjcmlwdExleGVyIiwiSmF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLE9BQXJCLENBQWpCO0FBQUEsSUFDTUMsYUFBYSxHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUR0QjtBQUFBLElBRU1FLGFBQWEsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FGdEI7QUFBQSxJQUdNRyxhQUFhLEdBQUdKLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSHRCOztJQUtxQkkscUI7Ozs7Ozs7Ozs7Ozs7Ozs7K0RBQ1JDLDhCOzs7Ozs7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7a0NBRXFCO0FBQUUsYUFBT0Msd0JBQVlDLDJCQUFaLENBQXdDSCxxQkFBeEMsRUFBK0RJLHNCQUEvRCxFQUFnRkMsdUJBQWhGLEVBQWtHQyx1QkFBbEcsQ0FBUDtBQUFnSTs7OztFQXZGdEdKLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnRlcnByZXRlciBmcm9tIFwiLi4vaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgSlNYT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2pzeFwiO1xuaW1wb3J0IEVycm9yT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2Vycm9yXCI7XG5pbXBvcnQgTWV0aG9kT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L21ldGhvZFwiO1xuaW1wb3J0IEFyZ3VtZW50T3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2FyZ3VtZW50XCI7XG5pbXBvcnQgVmFyaWFibGVPdmVybGF5VG9rZW4gZnJvbSBcIi4uL3Rva2VuL292ZXJsYXkvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QganN4UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAgZnVuY3Rpb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvblwiKSxcbiAgICAgIGFyZ3VtZW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0SW50ZXJwcmV0ZXIgZXh0ZW5kcyBJbnRlcnByZXRlciB7XG4gIGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRTtcblxuICAvLyBPdmVybGF5VG9rZW5NYXAgPSB7XG4gIC8vICAgXCIvL2Vycm9yL0AqXCI6IEVycm9yT3ZlcmxheVRva2VuLFxuICAvLyAgIFwiLy9tZXRob2QvQCpcIjogTWV0aG9kT3ZlcmxheVRva2VuXG4gIC8vIH07XG4gIC8vXG4gIC8vIG92ZXJsYXlUb2tlbnMoKSB7XG4gIC8vICAgc3VwZXIub3ZlcmxheVRva2VucygpO1xuICAvL1xuICAvLyAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgLy8gICAgICAgICB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpO1xuICAvL1xuICAvLyAgIHRoaXMub3ZlcmxheUpTWE5PZGVzKG5vZGUsIHRva2Vucyk7XG4gIC8vXG4gIC8vICAgdGhpcy5vdmVybGF5RnVuY3Rpb25Ob2Rlcyhub2RlLCB0b2tlbnMpO1xuICAvLyB9XG5cbiAgLy8gb3ZlcmxheUpTWE5PZGVzKG5vZGUsIHRva2Vucykge1xuICAvLyAgIGNvbnN0IGpzeE5vZGVzID0ganN4UXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgLy9cbiAgLy8gICBqc3hOb2Rlcy5mb3JFYWNoKChqc3hOb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGZpcnN0SlNYVG9rZW4gPSBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIGxhc3RKU1hUb2tlbiA9IGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbixcbiAgLy8gICAgICAgICAgIGZpcnN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0SlNYVG9rZW4pLFxuICAvLyAgICAgICAgICAgbGFzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0SlNYVG9rZW4pO1xuICAvL1xuICAvLyAgICAgZm9yIChsZXQganN4VG9rZW5JbmRleCA9IGZpcnN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCA8PSBsYXN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCsrKSB7XG4gIC8vICAgICAgIGNvbnN0IGpzeFRva2VuID0gdG9rZW5zW2pzeFRva2VuSW5kZXhdLFxuICAvLyAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0ganN4VG9rZW4sIC8vL1xuICAvLyAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IGpzeFRva2VuSW5kZXgsICAvLy9cbiAgLy8gICAgICAgICAgICAganN4T3ZlcmxheVRva2VuID0gSlNYT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBqc3hPdmVybGF5VG9rZW47XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBvdmVybGF5RnVuY3Rpb25Ob2Rlcyhub2RlLCB0b2tlbnMpIHtcbiAgLy8gICBjb25zdCBmdW5jdGlvbk5vZGVzID0gZnVuY3Rpb25RdWVyeS5leGVjdXRlKG5vZGUpO1xuICAvL1xuICAvLyAgIGZ1bmN0aW9uTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBhcmd1bWVudE5vZGVzID0gYXJndW1lbnRRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gIC8vICAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gIC8vICAgICAgICAgICBhcmd1bWVudE5hbWVzID0gdGhpcy5vdmVybGF5QXJndW1lbnROb2Rlcyhhcmd1bWVudE5vZGVzLCB0b2tlbnMpO1xuICAvL1xuICAvLyAgICAgdGhpcy5vdmVybGF5VmFyaWFibGVOb2Rlcyh2YXJpYWJsZU5vZGVzLCBhcmd1bWVudE5hbWVzLCB0b2tlbnMpO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gb3ZlcmxheUFyZ3VtZW50Tm9kZXMoYXJndW1lbnRUZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgLy8gICBjb25zdCBhcmd1bWVudE5hbWVzID0gYXJndW1lbnRUZXJtaW5hbE5vZGVzLm1hcCgoYXJndW1lbnRUZXJtaW5hbE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBhcmd1bWVudFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gIC8vICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gIC8vICAgICAgICAgICBhcmd1bWVudE5hbWUgPSBjb250ZW50LCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAvLyAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgLy8gICAgICAgICAgIGFyZ3VtZW50T3ZlcmxheVRva2VuID0gQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG4gIC8vXG4gIC8vICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBhcmd1bWVudE92ZXJsYXlUb2tlbjtcbiAgLy9cbiAgLy8gICAgIHJldHVybiBhcmd1bWVudE5hbWU7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGFyZ3VtZW50TmFtZXM7XG4gIC8vIH1cblxuICAvLyBvdmVybGF5VmFyaWFibGVOb2Rlcyh2YXJpYWJsZVRlcm1pbmFsTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucykge1xuICAvLyAgIHZhcmlhYmxlVGVybWluYWxOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHZhcmlhYmxlVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICAgIG5hbWUgPSBjb250ZW50LCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gIC8vICAgICAgICAgICB2YXJpYWJsZU92ZXJsYXlUb2tlbiA9IChhcmd1bWVudE5hbWVzLmluY2x1ZGVzKG5hbWUpKSA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pIDpcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZU92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IHZhcmlhYmxlT3ZlcmxheVRva2VuO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSW50ZXJwcmV0ZXIuZnJvbUxleGVyUGFyc2VyQW5kUHJvY2Vzc29yKEphdmFTY3JpcHRJbnRlcnByZXRlciwgSmF2YVNjcmlwdExleGVyLCBKYXZhU2NyaXB0UGFyc2VyLCBKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl19