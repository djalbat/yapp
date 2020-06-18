"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _processor = _interopRequireDefault(require("../processor"));

var _jsx = _interopRequireDefault(require("../token/significant/jsx"));

var _error = _interopRequireDefault(require("../token/significant/error"));

var _string = _interopRequireDefault(require("../token/significant/string"));

var _variable = _interopRequireDefault(require("../token/significant/variable"));

var _argument = _interopRequireDefault(require("../token/significant/argument"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"),
    jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"),
    jsxTagTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/@*"),
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"),
    varDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//varDeclaration//variable[0]/@*"),
    letDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//letDeclaration//variable[0]/@*"),
    jsxTagAttributeTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/@*"),
    namedFunctionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function"),
    arrowFunctionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//arrowFunction"),
    constDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//constDeclaration//variable[0]/@*"),
    jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"),
    anonymousFunctionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//anonymousFunction"),
    templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"),
    templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"),
    destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//constDeclaration//destructure/variable/@*");

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
      var _this = this;

      if (node !== null) {
        var jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node),
            namedFunctionNonTerminalNodes = namedFunctionNonTerminalNodeQuery.execute(node),
            arrowFunctionNonTerminalNodes = arrowFunctionNonTerminalNodeQuery.execute(node),
            anonymousFunctionNonTerminalNodes = anonymousFunctionNonTerminalNodeQuery.execute(node),
            functionNonTerminalNodes = [].concat(_toConsumableArray(namedFunctionNonTerminalNodes), _toConsumableArray(arrowFunctionNonTerminalNodes), _toConsumableArray(anonymousFunctionNonTerminalNodes));
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _error["default"];
        }, errorTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _string["default"];
        }, templateLiteralStringTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return content === _constants.TEMPLATE_LITERAL_DELIMITER_CONTENT ? _string["default"] : null;
        }, templateLiteralDelimiterTerminalNodeQuery);
        jsxNonTerminalNodes.forEach(function (jsxNonTerminalNode) {
          return _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function (content, type) {
            return _jsx["default"];
          }, jsxTagTerminalNodeQuery, jsxTagNameTerminalNodeQuery, jsxTagAttributeTerminalNodeQuery, jsxTagAttributeNameTerminalNodeQuery);
        });
        functionNonTerminalNodes.forEach(function (functionNonTerminalNode) {
          var argumentNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content, type) {
            return _argument["default"];
          }, argumentTerminalNodeQuery),
              variableNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content, type) {
            return _variable["default"];
          }, varDeclarationTerminalNodeQuery, letDeclarationTerminalNodeQuery, constDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);

          _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content, type) {
            var Token = null;
            var variableName = content,
                ///
            variableNamesIncludesVariableName = variableNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

            if (false) {///
            } else if (variableNamesIncludesVariableName) {
              Token = _variable["default"];
            } else if (argumentNamesIncludesVariableName) {
              Token = _argument["default"];
            }

            return Token;
          }, variableTerminalNodeQuery);
        });
      }
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _processor["default"].fromNothing(JavaScriptProcessor);
    }
  }]);

  return JavaScriptProcessor;
}(_processor["default"]);

exports["default"] = JavaScriptProcessor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwibGV0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwibmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYW5vbnltb3VzRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJKYXZhU2NyaXB0UHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FEaEM7QUFBQSxJQUVNRSx1QkFBdUIsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsMkNBQXJCLENBRmhDO0FBQUEsSUFHTUcseUJBQXlCLEdBQUdKLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSGxDO0FBQUEsSUFJTUkseUJBQXlCLEdBQUdMLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSmxDO0FBQUEsSUFLTUssMkJBQTJCLEdBQUdOLGdCQUFNQyxjQUFOLENBQXFCLGdEQUFyQixDQUxwQztBQUFBLElBTU1NLCtCQUErQixHQUFHUCxnQkFBTUMsY0FBTixDQUFxQixrQ0FBckIsQ0FOeEM7QUFBQSxJQU9NTywrQkFBK0IsR0FBR1IsZ0JBQU1DLGNBQU4sQ0FBcUIsa0NBQXJCLENBUHhDO0FBQUEsSUFRTVEsZ0NBQWdDLEdBQUdULGdCQUFNQyxjQUFOLENBQXFCLG1CQUFyQixDQVJ6QztBQUFBLElBU01TLGlDQUFpQyxHQUFHVixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQVQxQztBQUFBLElBVU1VLGlDQUFpQyxHQUFHWCxnQkFBTUMsY0FBTixDQUFxQixpQkFBckIsQ0FWMUM7QUFBQSxJQVdNVyxpQ0FBaUMsR0FBR1osZ0JBQU1DLGNBQU4sQ0FBcUIsb0NBQXJCLENBWDFDO0FBQUEsSUFZTVksb0NBQW9DLEdBQUdiLGdCQUFNQyxjQUFOLENBQXFCLHdCQUFyQixDQVo3QztBQUFBLElBYU1hLHFDQUFxQyxHQUFHZCxnQkFBTUMsY0FBTixDQUFxQixxQkFBckIsQ0FiOUM7QUFBQSxJQWNNYyxzQ0FBc0MsR0FBR2YsZ0JBQU1DLGNBQU4sQ0FBcUIsNkJBQXJCLENBZC9DO0FBQUEsSUFlTWUseUNBQXlDLEdBQUdoQixnQkFBTUMsY0FBTixDQUFxQiw4QkFBckIsQ0FmbEQ7QUFBQSxJQWdCTWdCLDZDQUE2QyxHQUFHakIsZ0JBQU1DLGNBQU4sQ0FBcUIsNkNBQXJCLENBaEJ0RDs7SUFrQnFCaUIsbUI7Ozs7Ozs7Ozs7Ozs7NEJBQ1hDLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1DLG1CQUFtQixHQUFHbkIsdUJBQXVCLENBQUNvQixPQUF4QixDQUFnQ0YsSUFBaEMsQ0FBNUI7QUFBQSxZQUNNRyw2QkFBNkIsR0FBR2IsaUNBQWlDLENBQUNZLE9BQWxDLENBQTBDRixJQUExQyxDQUR0QztBQUFBLFlBRU1JLDZCQUE2QixHQUFHYixpQ0FBaUMsQ0FBQ1csT0FBbEMsQ0FBMENGLElBQTFDLENBRnRDO0FBQUEsWUFHTUssaUNBQWlDLEdBQUdYLHFDQUFxQyxDQUFDUSxPQUF0QyxDQUE4Q0YsSUFBOUMsQ0FIMUM7QUFBQSxZQUlNTSx3QkFBd0IsZ0NBQ25CSCw2QkFEbUIsc0JBRW5CQyw2QkFGbUIsc0JBR25CQyxpQ0FIbUIsRUFKOUI7QUFVQSxhQUFLRSxvQ0FBTCxDQUEwQ1IsTUFBMUMsRUFBa0RDLElBQWxELEVBQXdELFVBQUNRLE9BQUQsRUFBVUMsSUFBVjtBQUFBLGlCQUFtQkMsaUJBQW5CO0FBQUEsU0FBeEQsRUFBdUYvQixzQkFBdkY7QUFFQSxhQUFLNEIsb0NBQUwsQ0FBMENSLE1BQTFDLEVBQWtEQyxJQUFsRCxFQUF3RCxVQUFDUSxPQUFELEVBQVVDLElBQVY7QUFBQSxpQkFBbUJFLGtCQUFuQjtBQUFBLFNBQXhELEVBQXdGaEIsc0NBQXhGO0FBRUEsYUFBS1ksb0NBQUwsQ0FBMENSLE1BQTFDLEVBQWtEQyxJQUFsRCxFQUF3RCxVQUFDUSxPQUFELEVBQVVDLElBQVY7QUFBQSxpQkFBb0JELE9BQU8sS0FBS0ksNkNBQWIsR0FBbURELGtCQUFuRCxHQUFpRSxJQUFwRjtBQUFBLFNBQXhELEVBQWtKZix5Q0FBbEo7QUFFQUssUUFBQUEsbUJBQW1CLENBQUNZLE9BQXBCLENBQTRCLFVBQUNDLGtCQUFEO0FBQUEsaUJBQXdCLEtBQUksQ0FBQ1Asb0NBQUwsQ0FBMENSLE1BQTFDLEVBQWtEZSxrQkFBbEQsRUFBc0UsVUFBQ04sT0FBRCxFQUFVQyxJQUFWO0FBQUEsbUJBQW1CTSxlQUFuQjtBQUFBLFdBQXRFLEVBQW1HaEMsdUJBQW5HLEVBQ21HRywyQkFEbkcsRUFFbUdHLGdDQUZuRyxFQUdtR0ksb0NBSG5HLENBQXhCO0FBQUEsU0FBNUI7QUFLQWEsUUFBQUEsd0JBQXdCLENBQUNPLE9BQXpCLENBQWlDLFVBQUNHLHVCQUFELEVBQTZCO0FBQzVELGNBQU1DLGFBQWEsR0FBRyxLQUFJLENBQUNWLG9DQUFMLENBQTBDUixNQUExQyxFQUFrRGlCLHVCQUFsRCxFQUEyRSxVQUFDUixPQUFELEVBQVVDLElBQVY7QUFBQSxtQkFBbUJTLG9CQUFuQjtBQUFBLFdBQTNFLEVBQTZHbEMseUJBQTdHLENBQXRCO0FBQUEsY0FDTW1DLGFBQWEsR0FBRyxLQUFJLENBQUNaLG9DQUFMLENBQTBDUixNQUExQyxFQUFrRGlCLHVCQUFsRCxFQUEyRSxVQUFDUixPQUFELEVBQVVDLElBQVY7QUFBQSxtQkFBbUJXLG9CQUFuQjtBQUFBLFdBQTNFLEVBQTZHakMsK0JBQTdHLEVBQzZHQywrQkFEN0csRUFFNkdJLGlDQUY3RyxFQUc2R0ssNkNBSDdHLENBRHRCOztBQU1BLFVBQUEsS0FBSSxDQUFDVSxvQ0FBTCxDQUEwQ1IsTUFBMUMsRUFBa0RpQix1QkFBbEQsRUFBMkUsVUFBQ1IsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQzVGLGdCQUFJWSxLQUFLLEdBQUcsSUFBWjtBQUVBLGdCQUFNQyxZQUFZLEdBQUdkLE9BQXJCO0FBQUEsZ0JBQThCO0FBQ3hCZSxZQUFBQSxpQ0FBaUMsR0FBR0osYUFBYSxDQUFDSyxRQUFkLENBQXVCRixZQUF2QixDQUQxQztBQUFBLGdCQUVNRyxpQ0FBaUMsR0FBR1IsYUFBYSxDQUFDTyxRQUFkLENBQXVCRixZQUF2QixDQUYxQzs7QUFJQSxnQkFBSSxLQUFKLEVBQVcsQ0FDVDtBQUNELGFBRkQsTUFFTyxJQUFJQyxpQ0FBSixFQUF1QztBQUM1Q0YsY0FBQUEsS0FBSyxHQUFHRCxvQkFBUjtBQUNELGFBRk0sTUFFQSxJQUFJSyxpQ0FBSixFQUF1QztBQUM1Q0osY0FBQUEsS0FBSyxHQUFHSCxvQkFBUjtBQUNEOztBQUVELG1CQUFPRyxLQUFQO0FBQ0QsV0FoQkQsRUFnQkdwQyx5QkFoQkg7QUFpQkQsU0F4QkQ7QUF5QkQ7QUFDRjs7O2tDQUVvQjtBQUFFLGFBQU95QyxzQkFBVUMsV0FBVixDQUFzQjdCLG1CQUF0QixDQUFQO0FBQW9EOzs7O0VBcEQ1QjRCLHFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBKU1hUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvanN4XCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcbmltcG9ydCBTdHJpbmdUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nXCI7XG5pbXBvcnQgVmFyaWFibGVUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvdmFyaWFibGVcIjtcbmltcG9ydCBBcmd1bWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hcmd1bWVudFwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9UWVBFLCBURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUl9DT05URU5UIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAganN4VGFnVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL0AqXCIpLFxuICAgICAgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9hcmd1bWVudC9AKlwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICB2YXJEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhckRlY2xhcmF0aW9uLy92YXJpYWJsZVswXS9AKlwiKSxcbiAgICAgIGxldERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vbGV0RGVjbGFyYXRpb24vL3ZhcmlhYmxlWzBdL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4QXR0cmlidXRlL0AqXCIpLFxuICAgICAgbmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Z1bmN0aW9uXCIpLFxuICAgICAgYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Fycm93RnVuY3Rpb25cIiksXG4gICAgICBjb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4QXR0cmlidXRlL25hbWUvQCpcIiksXG4gICAgICBhbm9ueW1vdXNGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Fub255bW91c0Z1bmN0aW9uXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL3N0cmluZy9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9AZGVsaW1pdGVyXCIpLFxuICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2NvbnN0RGVjbGFyYXRpb24vL2Rlc3RydWN0dXJlL3ZhcmlhYmxlL0AqXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBuYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IG5hbWVkRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgICAgYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IFtcbiAgICAgICAgICAgICAgLi4ubmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMsXG4gICAgICAgICAgICAgIC4uLmFycm93RnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLFxuICAgICAgICAgICAgICAuLi5hbm9ueW1vdXNGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50LCB0eXBlKSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50LCB0eXBlKSA9PiAoY29udGVudCA9PT0gVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCkgPyBTdHJpbmdUb2tlbiA6IG51bGwsIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAganN4Tm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChqc3hOb25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gSlNYVG9rZW4sIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gVmFyaWFibGVUb2tlbiwgdmFyRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXREZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50LCB0eXBlKSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXX0=