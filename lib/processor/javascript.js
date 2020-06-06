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
        this.replaceNonTerminalNodesTokens(jsxNonTerminalNodeQuery, _jsx["default"], tokens, node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzVG9rZW5zIiwiSlNYVG9rZW4iLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FEaEM7QUFBQSxJQUVNRSx5QkFBeUIsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FGbEM7QUFBQSxJQUdNRyx5QkFBeUIsR0FBR0osZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FIbEM7QUFBQSxJQUlNSSw0QkFBNEIsR0FBR0wsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FKckM7O0lBTXFCSyxtQjs7Ozs7Ozs7Ozs7Ozs0QkFDWEMsTSxFQUFRQyxJLEVBQU07QUFDcEIsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsYUFBS0Msb0NBQUwsQ0FBMENWLHNCQUExQyxFQUFrRVcsaUJBQWxFLEVBQThFSCxNQUE5RSxFQUFzRkMsSUFBdEY7QUFFQSxhQUFLRyw2QkFBTCxDQUFtQ1QsdUJBQW5DLEVBQTREVSxlQUE1RCxFQUFzRUwsTUFBdEUsRUFBOEVDLElBQTlFO0FBQ0Q7QUFDRixLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7a0NBRXFCO0FBQUUsYUFBT0ssc0JBQVVDLFdBQVYsQ0FBc0JSLG1CQUF0QixDQUFQO0FBQW9EOzs7O0VBN0U1Qk8scUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IE1ldGhvZFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9tZXRob2RcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5LCBFcnJvclRva2VuLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzVG9rZW5zKGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LCBKU1hUb2tlbiwgdG9rZW5zLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICAvLyBvdmVybGF5SlNYTk9kZXMobm9kZSwgdG9rZW5zKSB7XG4gIC8vICAgY29uc3QganN4Tm9kZXMgPSBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuICAvL1xuICAvLyAgIGpzeE5vZGVzLmZvckVhY2goKGpzeE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBqc3hOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAvLyAgICAgICAgICAganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAvLyAgICAgICAgICAgZmlyc3RKU1hUb2tlbiA9IGpzeE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAvLyAgICAgICAgICAgbGFzdEpTWFRva2VuID0ganN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuLFxuICAvLyAgICAgICAgICAgZmlyc3RKU1hUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RKU1hUb2tlbiksXG4gIC8vICAgICAgICAgICBsYXN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RKU1hUb2tlbik7XG4gIC8vXG4gIC8vICAgICBmb3IgKGxldCBqc3hUb2tlbkluZGV4ID0gZmlyc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4IDw9IGxhc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4KyspIHtcbiAgLy8gICAgICAgY29uc3QganN4VG9rZW4gPSB0b2tlbnNbanN4VG9rZW5JbmRleF0sXG4gIC8vICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBqc3hUb2tlbiwgLy8vXG4gIC8vICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0ganN4VG9rZW5JbmRleCwgIC8vL1xuICAvLyAgICAgICAgICAgICBqc3hPdmVybGF5VG9rZW4gPSBKU1hPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG4gIC8vXG4gIC8vICAgICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IGpzeE92ZXJsYXlUb2tlbjtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIG92ZXJsYXlGdW5jdGlvbk5vZGVzKG5vZGUsIHRva2Vucykge1xuICAvLyAgIGNvbnN0IGZ1bmN0aW9uTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG4gIC8vXG4gIC8vICAgZnVuY3Rpb25Ob2Rlcy5mb3JFYWNoKChmdW5jdGlvbk5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGFyZ3VtZW50Tm9kZXMgPSBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25Ob2RlKSxcbiAgLy8gICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUoZnVuY3Rpb25Ob2RlKSxcbiAgLy8gICAgICAgICAgIGFyZ3VtZW50TmFtZXMgPSB0aGlzLm92ZXJsYXlBcmd1bWVudE5vZGVzKGFyZ3VtZW50Tm9kZXMsIHRva2Vucyk7XG4gIC8vXG4gIC8vICAgICB0aGlzLm92ZXJsYXlWYXJpYWJsZU5vZGVzKHZhcmlhYmxlTm9kZXMsIGFyZ3VtZW50TmFtZXMsIHRva2Vucyk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBvdmVybGF5QXJndW1lbnROb2Rlcyhhcmd1bWVudFRlcm1pbmFsTm9kZXMsIHRva2Vucykge1xuICAvLyAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSBhcmd1bWVudFRlcm1pbmFsTm9kZXMubWFwKChhcmd1bWVudFRlcm1pbmFsTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IGFyZ3VtZW50VGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgLy8gICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgLy8gICAgICAgICAgIGFyZ3VtZW50TmFtZSA9IGNvbnRlbnQsIC8vL1xuICAvLyAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAvLyAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksXG4gIC8vICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAvLyAgICAgICAgICAgYXJndW1lbnRPdmVybGF5VG9rZW4gPSBBcmd1bWVudE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcbiAgLy9cbiAgLy8gICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IGFyZ3VtZW50T3ZlcmxheVRva2VuO1xuICAvL1xuICAvLyAgICAgcmV0dXJuIGFyZ3VtZW50TmFtZTtcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gYXJndW1lbnROYW1lcztcbiAgLy8gfVxuXG4gIC8vIG92ZXJsYXlWYXJpYWJsZU5vZGVzKHZhcmlhYmxlVGVybWluYWxOb2RlcywgYXJndW1lbnROYW1lcywgdG9rZW5zKSB7XG4gIC8vICAgdmFyaWFibGVUZXJtaW5hbE5vZGVzLmZvckVhY2goKHZhcmlhYmxlVGVybWluYWxOb2RlKSA9PiB7XG4gIC8vICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdmFyaWFibGVUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAvLyAgICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAvLyAgICAgICAgICAgbmFtZSA9IGNvbnRlbnQsIC8vL1xuICAvLyAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAvLyAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksIC8vL1xuICAvLyAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgLy8gICAgICAgICAgIHZhcmlhYmxlT3ZlcmxheVRva2VuID0gKGFyZ3VtZW50TmFtZXMuaW5jbHVkZXMobmFtZSkpID9cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJndW1lbnRPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbikgOlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuICAvL1xuICAvLyAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gdmFyaWFibGVPdmVybGF5VG9rZW47XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==