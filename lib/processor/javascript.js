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
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    varDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//varDeclaration//variable[0]/@*"),
    letDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//letDeclaration//variable[0]/@*"),
    namedFunctionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function"),
    arrowFunctionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//constDeclaration//arrowFunction"),
    constDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//constDeclaration//variable[0]/@*"),
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
        var namedFunctionNonTerminalNodes = namedFunctionNonTerminalNodeQuery.execute(node),
            arrowFunctionNonTerminalNodes = arrowFunctionNonTerminalNodeQuery.execute(node),
            functionNonTerminalNodes = [].concat(_toConsumableArray(namedFunctionNonTerminalNodes), _toConsumableArray(arrowFunctionNonTerminalNodes));
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _error["default"];
        }, errorTerminalNodeQuery);
        this.replaceNonTerminalNodesSignificantTokens(tokens, node, function (content, type) {
          return type === _constants.VARIABLE_TYPE ? null : _jsx["default"];
        }, jsxNonTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _string["default"];
        }, templateLiteralStringTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return content === _constants.TEMPLATE_LITERAL_DELIMITER_CONTENT ? _string["default"] : null;
        }, templateLiteralDelimiterTerminalNodeQuery);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsImxldERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJuYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkiLCJhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkiLCJjb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsInRva2VucyIsIm5vZGUiLCJuYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJWQVJJQUJMRV9UWVBFIiwiSlNYVG9rZW4iLCJTdHJpbmdUb2tlbiIsIlRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQiLCJmb3JFYWNoIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsImFyZ3VtZW50TmFtZXMiLCJBcmd1bWVudFRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUEvQjtBQUFBLElBQ01DLHVCQUF1QixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQURoQztBQUFBLElBRU1FLHlCQUF5QixHQUFHSCxnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUZsQztBQUFBLElBR01HLHlCQUF5QixHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUhsQztBQUFBLElBSU1JLCtCQUErQixHQUFHTCxnQkFBTUMsY0FBTixDQUFxQixrQ0FBckIsQ0FKeEM7QUFBQSxJQUtNSywrQkFBK0IsR0FBR04sZ0JBQU1DLGNBQU4sQ0FBcUIsa0NBQXJCLENBTHhDO0FBQUEsSUFNTU0saUNBQWlDLEdBQUdQLGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBTjFDO0FBQUEsSUFPTU8saUNBQWlDLEdBQUdSLGdCQUFNQyxjQUFOLENBQXFCLG1DQUFyQixDQVAxQztBQUFBLElBUU1RLGlDQUFpQyxHQUFHVCxnQkFBTUMsY0FBTixDQUFxQixvQ0FBckIsQ0FSMUM7QUFBQSxJQVNNUyxzQ0FBc0MsR0FBR1YsZ0JBQU1DLGNBQU4sQ0FBcUIsNkJBQXJCLENBVC9DO0FBQUEsSUFVTVUseUNBQXlDLEdBQUdYLGdCQUFNQyxjQUFOLENBQXFCLDhCQUFyQixDQVZsRDtBQUFBLElBV01XLDZDQUE2QyxHQUFHWixnQkFBTUMsY0FBTixDQUFx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Q29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFZBUklBQkxFX1RZUEUsIFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIHZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyRGVjbGFyYXRpb24vL3ZhcmlhYmxlWzBdL0AqXCIpLFxuICAgICAgbGV0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9sZXREZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICBuYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vYXJyb3dGdW5jdGlvblwiKSxcbiAgICAgIGNvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb25zdERlY2xhcmF0aW9uLy92YXJpYWJsZVswXS9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9zdHJpbmcvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvQGRlbGltaXRlclwiKSxcbiAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb25zdERlY2xhcmF0aW9uLy9kZXN0cnVjdHVyZS92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFByb2Nlc3NvciBleHRlbmRzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5hbWVkRnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gbmFtZWRGdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBhcnJvd0Z1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGFycm93RnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gW1xuICAgICAgICAgICAgICAuLi5uYW1lZEZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyxcbiAgICAgICAgICAgICAgLi4uYXJyb3dGdW5jdGlvbk5vblRlcm1pbmFsTm9kZXNcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gKHR5cGUgPT09IFZBUklBQkxFX1RZUEUpID8gbnVsbCA6IEpTWFRva2VuLCBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSwgKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gU3RyaW5nVG9rZW4sIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gKGNvbnRlbnQgPT09IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQpID8gU3RyaW5nVG9rZW4gOiBudWxsLCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IFZhcmlhYmxlVG9rZW4sIHZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksIGxldERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksIGNvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSwgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgICAgYXJndW1lbnROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50LCB0eXBlKSA9PiBBcmd1bWVudFRva2VuLCBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBWYXJpYWJsZVRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IEFyZ3VtZW50VG9rZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgICB9LCB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl19