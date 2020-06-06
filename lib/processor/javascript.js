"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _processor = _interopRequireDefault(require("../processor"));

var _jsx = _interopRequireDefault(require("../token/significant/jsx"));

var _error = _interopRequireDefault(require("../token/significant/error"));

var _method = _interopRequireDefault(require("../token/significant/method"));

var _variable = _interopRequireDefault(require("../token/significant/variable"));

var _argument = _interopRequireDefault(require("../token/significant/argument"));

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

var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"),
    jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"),
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function");

var JavaScriptProcessor = /*#__PURE__*/function (_Processor) {
  _inherits(JavaScriptProcessor, _Processor);

  var _super = _createSuper(JavaScriptProcessor);

  function JavaScriptProcessor() {
    _classCallCheck(this, JavaScriptProcessor);

    return _super.apply(this, arguments);
  }

  _createClass(JavaScriptProcessor, [{
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, _error["default"], tokens, node);
        this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, _jsx["default"], tokens, node);
      }
    } // overlayJSXNOdes(node, tokens) {
    //   const jsxNodes = jsxNonTerminalNodeQuery.execute(node);
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
    //   const functionNodes = functionNonTerminalNodeQuery.execute(node);
    //
    //   functionNodes.forEach((functionNode) => {
    //     const argumentNodes = argumentTerminalNodeQuery.execute(functionNode),
    //           variableNodes = variableTerminalNodeQuery.execute(functionNode),
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

  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _processor["default"].fromNothing(JavaScriptProcessor);
    }
  }]);

  return JavaScriptProcessor;
}(_processor["default"]);

exports["default"] = JavaScriptProcessor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJKU1hUb2tlbiIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUEvQjtBQUFBLElBQ01DLHVCQUF1QixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQURoQztBQUFBLElBRU1FLHlCQUF5QixHQUFHSCxnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUZsQztBQUFBLElBR01HLHlCQUF5QixHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUhsQztBQUFBLElBSU1JLDRCQUE0QixHQUFHTCxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUpyQzs7SUFNcUJLLG1COzs7Ozs7Ozs7Ozs7OzRCQUNYQyxNLEVBQVFDLEksRUFBTTtBQUNwQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLQyxvQ0FBTCxDQUEwQ1Ysc0JBQTFDLEVBQWtFVyxpQkFBbEUsRUFBOEVILE1BQTlFLEVBQXNGQyxJQUF0RjtBQUVBLGFBQUtHLHdDQUFMLENBQThDVCx1QkFBOUMsRUFBdUVVLGVBQXZFLEVBQWlGTCxNQUFqRixFQUF5RkMsSUFBekY7QUFDRDtBQUNGLEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztrQ0FFcUI7QUFBRSxhQUFPSyxzQkFBVUMsV0FBVixDQUFzQlIsbUJBQXRCLENBQVA7QUFBb0Q7Ozs7RUE3RTVCTyxxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeFwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgTWV0aG9kVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L21ldGhvZFwiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFByb2Nlc3NvciBleHRlbmRzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKGVycm9yVGVybWluYWxOb2RlUXVlcnksIEVycm9yVG9rZW4sIHRva2Vucywgbm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyhqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSwgSlNYVG9rZW4sIHRva2Vucywgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcmxheUpTWE5PZGVzKG5vZGUsIHRva2Vucykge1xuICAvLyAgIGNvbnN0IGpzeE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcbiAgLy9cbiAgLy8gICBqc3hOb2Rlcy5mb3JFYWNoKChqc3hOb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGZpcnN0SlNYVG9rZW4gPSBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIGxhc3RKU1hUb2tlbiA9IGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbixcbiAgLy8gICAgICAgICAgIGZpcnN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0SlNYVG9rZW4pLFxuICAvLyAgICAgICAgICAgbGFzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0SlNYVG9rZW4pO1xuICAvL1xuICAvLyAgICAgZm9yIChsZXQganN4VG9rZW5JbmRleCA9IGZpcnN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCA8PSBsYXN0SlNYVG9rZW5JbmRleDsganN4VG9rZW5JbmRleCsrKSB7XG4gIC8vICAgICAgIGNvbnN0IGpzeFRva2VuID0gdG9rZW5zW2pzeFRva2VuSW5kZXhdLFxuICAvLyAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0ganN4VG9rZW4sIC8vL1xuICAvLyAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IGpzeFRva2VuSW5kZXgsICAvLy9cbiAgLy8gICAgICAgICAgICAganN4T3ZlcmxheVRva2VuID0gSlNYT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuICAvL1xuICAvLyAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBqc3hPdmVybGF5VG9rZW47XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBvdmVybGF5RnVuY3Rpb25Ob2Rlcyhub2RlLCB0b2tlbnMpIHtcbiAgLy8gICBjb25zdCBmdW5jdGlvbk5vZGVzID0gZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuICAvL1xuICAvLyAgIGZ1bmN0aW9uTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBhcmd1bWVudE5vZGVzID0gYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gIC8vICAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKGZ1bmN0aW9uTm9kZSksXG4gIC8vICAgICAgICAgICBhcmd1bWVudE5hbWVzID0gdGhpcy5vdmVybGF5QXJndW1lbnROb2Rlcyhhcmd1bWVudE5vZGVzLCB0b2tlbnMpO1xuICAvL1xuICAvLyAgICAgdGhpcy5vdmVybGF5VmFyaWFibGVOb2Rlcyh2YXJpYWJsZU5vZGVzLCBhcmd1bWVudE5hbWVzLCB0b2tlbnMpO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gb3ZlcmxheUFyZ3VtZW50Tm9kZXMoYXJndW1lbnRUZXJtaW5hbE5vZGVzLCB0b2tlbnMpIHtcbiAgLy8gICBjb25zdCBhcmd1bWVudE5hbWVzID0gYXJndW1lbnRUZXJtaW5hbE5vZGVzLm1hcCgoYXJndW1lbnRUZXJtaW5hbE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBhcmd1bWVudFRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gIC8vICAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gIC8vICAgICAgICAgICBhcmd1bWVudE5hbWUgPSBjb250ZW50LCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAvLyAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgLy8gICAgICAgICAgIGFyZ3VtZW50T3ZlcmxheVRva2VuID0gQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG4gIC8vXG4gIC8vICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBhcmd1bWVudE92ZXJsYXlUb2tlbjtcbiAgLy9cbiAgLy8gICAgIHJldHVybiBhcmd1bWVudE5hbWU7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGFyZ3VtZW50TmFtZXM7XG4gIC8vIH1cblxuICAvLyBvdmVybGF5VmFyaWFibGVOb2Rlcyh2YXJpYWJsZVRlcm1pbmFsTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucykge1xuICAvLyAgIHZhcmlhYmxlVGVybWluYWxOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHZhcmlhYmxlVGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICAgIG5hbWUgPSBjb250ZW50LCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLCAvLy9cbiAgLy8gICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gIC8vICAgICAgICAgICB2YXJpYWJsZU92ZXJsYXlUb2tlbiA9IChhcmd1bWVudE5hbWVzLmluY2x1ZGVzKG5hbWUpKSA/XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZ3VtZW50T3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pIDpcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZU92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IHZhcmlhYmxlT3ZlcmxheVRva2VuO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXX0=