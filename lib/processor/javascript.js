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
          _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function (content, type) {
            return _jsx["default"];
          }, jsxTagTerminalNodeQuery, jsxTagNameTerminalNodeQuery, jsxTagAttributeTerminalNodeQuery, jsxTagAttributeNameTerminalNodeQuery);
        });
        functionNonTerminalNodes.forEach(function (functionNonTerminalNode) {
          var variableNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content, type) {
            return _variable["default"];
          }, varDeclarationTerminalNodeQuery, letDeclarationTerminalNodeQuery, constDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery),
              argumentNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content, type) {
            return _argument["default"];
          }, argumentTerminalNodeQuery);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwibGV0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwibmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYW5vbnltb3VzRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJKYXZhU2NyaXB0UHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwidmFyaWFibGVOYW1lcyIsIlZhcmlhYmxlVG9rZW4iLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FEaEM7QUFBQSxJQUVNRSx1QkFBdUIsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsMkNBQXJCLENBRmhDO0FBQUEsSUFHTUcseUJBQXlCLEdBQUdKLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSGxDO0FBQUEsSUFJTUkseUJBQXlCLEdBQUdMLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSmxDO0FBQUEsSUFLTUssMkJBQTJCLEdBQUdOLGdCQUFNQyxjQUFOLENBQXFCLGdEQUFyQixDQUxwQztBQUFBLElBTU1NLCtCQUErQixHQUFHUCxnQkFBTUMsY0FBTixDQUFxQixrQ0FBckIsQ0FOeEM7QUFBQSxJQU9NTywrQkFBK0IsR0FBR1IsZ0JBQU1DLGNBQU4sQ0FBcUIsa0NBQXJCLENBUHhDO0FBQUEsSUFRTVEsZ0NB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Q1IsTUFBMUMsRUFBa0RpQix1QkFBbEQsRUFBMkUsVUFBQ1IsT0FBRCxFQUFVQyxJQUFWO0FBQUEsbUJBQW1CVyxvQkFBbkI7QUFBQSxXQUEzRSxFQUE2R3BDLHlCQUE3RyxDQUR0Qjs7QUFHQSxVQUFBLEtBQUksQ0FBQ3VCLG9DQUFMLENBQTBDUixNQUExQyxFQUFrRGlCLHVCQUFsRCxFQUEyRSxVQUFDUixPQUFELEVBQVVDLElBQVYsRUFBbUI7QUFDNUYsZ0JBQUlZLEtBQUssR0FBRyxJQUFaO0FBRUEsZ0JBQU1DLFlBQVksR0FBR2QsT0FBckI7QUFBQSxnQkFBOEI7QUFDeEJlLFlBQUFBLGlDQUFpQyxHQUFHTixhQUFhLENBQUNPLFFBQWQsQ0FBdUJGLFlBQXZCLENBRDFDO0FBQUEsZ0JBRU1HLGlDQUFpQyxHQUFHTixhQUFhLENBQUNLLFFBQWQsQ0FBdUJGLFlBQXZCLENBRjFDOztBQUlBLGdCQUFJLEtBQUosRUFBVyxDQUNUO0FBQ0QsYUFGRCxNQUVPLElBQUlDLGlDQUFKLEVBQXVDO0FBQzVDRixjQUFBQSxLQUFLLEdBQUdILG9CQUFSO0FBQ0QsYUFGTSxNQUVBLElBQUlPLGlDQUFKLEVBQXVDO0FBQzVDSixjQUFBQSxLQUFLLEdBQUdELG9CQUFSO0FBQ0Q7O0FBRUQsbUJBQU9DLEtBQVA7QUFDRCxXQWhCRCxFQWdCR3BDLHlCQWhCSDtBQWlCRCxTQXJCRDtBQXNCRDtBQUNGOzs7a0NBRW9CO0FBQUUsYUFBT3lDLHNCQUFVQyxXQUFWLENBQXNCN0IsbUJBQXRCLENBQVA7QUFBb0Q7Ozs7RUFoRDVCNEIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFZBUklBQkxFX1RZUEUsIFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvQCpcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIHZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyRGVjbGFyYXRpb24vL3ZhcmlhYmxlWzBdL0AqXCIpLFxuICAgICAgbGV0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9sZXREZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvQCpcIiksXG4gICAgICBuYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJyb3dGdW5jdGlvblwiKSxcbiAgICAgIGNvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb25zdERlY2xhcmF0aW9uLy92YXJpYWJsZVswXS9AKlwiKSxcbiAgICAgIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvbmFtZS9AKlwiKSxcbiAgICAgIGFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYW5vbnltb3VzRnVuY3Rpb25cIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIG5hbWVkRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gbmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGFycm93RnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgICAgYW5vbnltb3VzRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gYW5vbnltb3VzRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5uYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyxcbiAgICAgICAgICAgICAgLi4uYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMsXG4gICAgICAgICAgICAgIC4uLmFub255bW91c0Z1bmN0aW9uTm9uVGVybWluYWxOb2Rlc1xuICAgICAgICAgICAgXTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IFN0cmluZ1Rva2VuLCB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IChjb250ZW50ID09PSBURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUl9DT05URU5UKSA/IFN0cmluZ1Rva2VuIDogbnVsbCwgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IEpTWFRva2VuLCBqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSwganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5LCBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSwganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50LCB0eXBlKSA9PiBWYXJpYWJsZVRva2VuLCB2YXJEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LCBsZXREZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LCBjb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSksXG4gICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IHtcbiAgICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gVmFyaWFibGVUb2tlbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBUb2tlbjtcbiAgICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==