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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"),
    jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"),
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function"),
    varDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//varDeclaration//variable[0]/@*"),
    letDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//letDeclaration//variable[0]/@*"),
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
        var functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsInZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJsZXREZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJWQVJJQUJMRV9UWVBFIiwiSlNYVG9rZW4iLCJTdHJpbmdUb2tlbiIsIlRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQiLCJmb3JFYWNoIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsImFyZ3VtZW50TmFtZXMiLCJBcmd1bWVudFRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJ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RzVCLHlCQUE3RyxDQUR0Qjs7QUFHQSxVQUFBLEtBQUksQ0FBQ2Msb0NBQUwsQ0FBMENKLE1BQTFDLEVBQWtEYyx1QkFBbEQsRUFBMkUsVUFBQ1QsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQzVGLGdCQUFJYSxLQUFLLEdBQUcsSUFBWjtBQUVBLGdCQUFNQyxZQUFZLEdBQUdmLE9BQXJCO0FBQUEsZ0JBQThCO0FBQ3hCZ0IsWUFBQUEsaUNBQWlDLEdBQUdOLGFBQWEsQ0FBQ08sUUFBZCxDQUF1QkYsWUFBdkIsQ0FEMUM7QUFBQSxnQkFFTUcsaUNBQWlDLEdBQUdOLGFBQWEsQ0FBQ0ssUUFBZCxDQUF1QkYsWUFBdkIsQ0FGMUM7O0FBSUEsZ0JBQUksS0FBSixFQUFXLENBQ1Q7QUFDRCxhQUZELE1BRU8sSUFBSUMsaUNBQUosRUFBdUM7QUFDNUNGLGNBQUFBLEtBQUssR0FBR0gsb0JBQVI7QUFDRCxhQUZNLE1BRUEsSUFBSU8saUNBQUosRUFBdUM7QUFDNUNKLGNBQUFBLEtBQUssR0FBR0Qsb0JBQVI7QUFDRDs7QUFFRCxtQkFBT0MsS0FBUDtBQUNELFdBaEJELEVBZ0JHNUIseUJBaEJIO0FBaUJELFNBckJEO0FBc0JEO0FBQ0Y7OztrQ0FFb0I7QUFBRSxhQUFPaUMsc0JBQVVDLFdBQVYsQ0FBc0IxQixtQkFBdEIsQ0FBUDtBQUFvRDs7OztFQXRDNUJ5QixxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeFwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcblxuaW1wb3J0IHsgVkFSSUFCTEVfVFlQRSwgVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvblwiKSxcbiAgICAgIHZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyRGVjbGFyYXRpb24vL3ZhcmlhYmxlWzBdL0AqXCIpLFxuICAgICAgbGV0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9sZXREZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICBjb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gKHR5cGUgPT09IFZBUklBQkxFX1RZUEUpID8gbnVsbCA6IEpTWFRva2VuLCBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSwgKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gU3RyaW5nVG9rZW4sIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gKGNvbnRlbnQgPT09IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQpID8gU3RyaW5nVG9rZW4gOiBudWxsLCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IFZhcmlhYmxlVG9rZW4sIHZhckRlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksIGxldERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksIGNvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSwgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgICAgYXJndW1lbnROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50LCB0eXBlKSA9PiBBcmd1bWVudFRva2VuLCBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBWYXJpYWJsZVRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IEFyZ3VtZW50VG9rZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgICB9LCB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl19