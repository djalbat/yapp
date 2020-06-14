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
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function"),
    variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//varDeclaration|letDeclaration|constDeclaration//variable[0]/@*"),
    templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"),
    templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter");

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
        var functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"];
        }, tokens, node);
        this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, function (content) {
          return _jsx["default"];
        }, tokens, node);
        this.replaceTerminalNodesSignificantToken(templateLiteralStringTerminalNodeQuery, function (content) {
          return _string["default"];
        }, tokens, node);
        this.replaceTerminalNodesSignificantToken(templateLiteralDelimiterTerminalNodeQuery, function (content) {
          var Token = null;

          if (content === _constants.TEMPLATE_LITERAL_DELIMITER_CONTENT) {
            Token = _string["default"]; ///
          }

          return Token;
        }, tokens, node);
        functionNonTerminalNodes.forEach(function (functionNonTerminalNode) {
          var constNames = _this.replaceTerminalNodesSignificantToken(variableDeclarationTerminalNodeQuery, function (content) {
            return _variable["default"];
          }, tokens, functionNonTerminalNode),
              argumentNames = _this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, function (content) {
            return _argument["default"];
          }, tokens, functionNonTerminalNode);

          _this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, function (content) {
            var Token = null;
            var variableName = content,
                ///
            constNamesIncludesVariableName = constNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

            if (false) {///
            } else if (constNamesIncludesVariableName) {
              Token = _variable["default"];
            } else if (argumentNamesIncludesVariableName) {
              Token = _argument["default"];
            }

            return Token;
          }, tokens, functionNonTerminalNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJKYXZhU2NyaXB0UHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJKU1hUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVG9rZW4iLCJURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUl9DT05URU5UIiwiZm9yRWFjaCIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiY29uc3ROYW1lcyIsIlZhcmlhYmxlVG9rZW4iLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsInZhcmlhYmxlTmFtZSIsImNvbnN0TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImluY2x1ZGVzIiwiYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QztBQUM1Q1gsY0FBQUEsS0FBSyxHQUFHTyxvQkFBUjtBQUNEOztBQUVELG1CQUFPUCxLQUFQO0FBQ0QsV0FoQkQsRUFnQkdWLE1BaEJILEVBZ0JXYSx1QkFoQlg7QUFpQkQsU0FyQkQ7QUFzQkQ7QUFDRjs7O2tDQUVvQjtBQUFFLGFBQU9TLHNCQUFVQyxXQUFWLENBQXNCeEIsbUJBQXRCLENBQVA7QUFBb0Q7Ozs7RUE5QzVCdUIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyRGVjbGFyYXRpb258bGV0RGVjbGFyYXRpb258Y29uc3REZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKGVycm9yVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBFcnJvclRva2VuLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMoanN4Tm9uVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBKU1hUb2tlbiwgdG9rZW5zLCBub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBTdHJpbmdUb2tlbiwgdG9rZW5zLCBub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiB7XG4gICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQpIHtcbiAgICAgICAgICBUb2tlbiA9IFN0cmluZ1Rva2VuOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICB9LCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3ROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSwgKGNvbnRlbnQpID0+IFZhcmlhYmxlVG9rZW4sIHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpLFxuICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4oYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSwgKGNvbnRlbnQpID0+IEFyZ3VtZW50VG9rZW4sIHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGNvbnN0TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3ROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXX0=