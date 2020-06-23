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
    jsxTagTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/@*"),
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"),
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//functionBody|arrowFunction"),
    jsxTagAttributeTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/@*"),
    jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"),
    variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//var|let|const/variable/@*"),
    templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"),
    templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"),
    destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//const/destructure/variable/@*");

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
            functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
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
          }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsInRva2VucyIsIm5vZGUiLCJqc3hOb25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FEaEM7QUFBQSxJQUVNRSx1QkFBdUIsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsMkNBQXJCLENBRmhDO0FBQUEsSUFHTUcseUJBQXlCLEdBQUdKLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSGxDO0FBQUEsSUFJTUkseUJBQXlCLEdBQUdMLGdCQUFNQyxjQUFOLENBQXFCLGVBQXJCLENBSmxDO0FBQUEsSUFLTUssMkJBQTJCLEdBQUdOLGdCQUFNQyxjQUFOLENBQXFCLGdEQUFyQixDQUxwQztBQUFBLElBTU1NLDRCQUE0QixHQUFHUCxnQkFBTUMsY0FBTixDQUFxQiw4QkFBckIsQ0FOckM7QUFBQSxJQU9NTyxnQ0FBZ0MsR0FBR1IsZ0JBQU1DLGNBQU4sQ0FBcUIsbUJBQXJCLENBUHpDO0FBQUEsSUFRTVEsb0NBQW9DLEdBQUdULGdCQUFNQyxjQUFOLENBQXFCLHdCQUFyQixDQVI3QztBQUFBLElBU01TLG9DQUFvQyxHQUFHVixnQkFBTUMsY0FBTixDQUFxQiw2QkFBckIsQ0FUN0M7QUFBQSxJQVVNVSxzQ0FBc0MsR0FBR1gsZ0JBQU1DLGNBQU4sQ0FBcUIsNkJBQXJCLENBVi9DO0FBQUEsSUFXTVcseUNBQXlDLEdBQUdaLGdCQUFNQyxjQUFOLENBQXFCLDhCQUFyQixDQVhsRDtBQUFBLElBWU1ZLDZDQUE2QyxHQUFHYixnQkFBTUMsY0FBTixDQUFxQixpQ0FBckIsQ0Fa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IHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeFwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcblxuaW1wb3J0IHsgVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeENvbXBsZXRlVGFnfGpzeFN0YXJ0VGFnfGpzeEVuZFRhZy9AKlwiKSxcbiAgICAgIGFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeENvbXBsZXRlVGFnfGpzeFN0YXJ0VGFnfGpzeEVuZFRhZy9uYW1lL0AqXCIpLFxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvbkJvZHl8YXJyb3dGdW5jdGlvblwiKSxcbiAgICAgIGpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9AKlwiKSxcbiAgICAgIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvbmFtZS9AKlwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJ8bGV0fGNvbnN0L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL3N0cmluZy9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9AZGVsaW1pdGVyXCIpLFxuICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2NvbnN0L2Rlc3RydWN0dXJlL3ZhcmlhYmxlL0AqXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50LCB0eXBlKSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50LCB0eXBlKSA9PiAoY29udGVudCA9PT0gVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCkgPyBTdHJpbmdUb2tlbiA6IG51bGwsIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAganN4Tm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChqc3hOb25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gSlNYVG9rZW4sIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCwgdHlwZSkgPT4gVmFyaWFibGVUb2tlbiwgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IHtcbiAgICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gVmFyaWFibGVUb2tlbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBUb2tlbjtcbiAgICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==