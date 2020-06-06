"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _processor = _interopRequireDefault(require("../processor"));

var _jsx = _interopRequireDefault(require("../token/significant/jsx"));

var _error = _interopRequireDefault(require("../token/significant/error"));

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
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//function"),
    constVariableTerminalNodeQuery = _occamDom.Query.fromExpression("//constDeclaration//variable[0]/@*");

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
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"];
        }, tokens, node);
        this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, function (content) {
          return _jsx["default"];
        }, tokens, node);
        var functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
        functionNonTerminalNodes.forEach(function (functionNonTerminalNode) {
          var argumentNames = _this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, function (content) {
            return _argument["default"];
          }, tokens, functionNonTerminalNode),
              constNames = _this.replaceTerminalNodesSignificantToken(constVariableTerminalNodeQuery, function (content) {
            return _variable["default"];
          }, tokens, functionNonTerminalNode);

          _this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, function (content) {
            var Token;
            var variableName = content,
                ///
            constNamesIncludesVariableName = constNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

            if (false) {///
            } else if (constNamesIncludesVariableName) {
              Token = _variable["default"];
            } else if (argumentNamesIncludesVariableName) {
              Token = _argument["default"];
            } else {
              Token = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImNvbnN0VmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiSlNYVG9rZW4iLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZm9yRWFjaCIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJjb25zdE5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwiY29uc3ROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7QUFBQSxJQUNNQyx1QkFBdUIsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FEaEM7QUFBQSxJQUVNRSx5QkFBeUIsR0FBR0gsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FGbEM7QUFBQSxJQUdNRyx5QkFBeUIsR0FBR0osZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FIbEM7QUFBQSxJQUlNSSw0QkFBNEIsR0FBR0wsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FKckM7QUFBQSxJQUtNSyw4QkFBOEIsR0FBR04sZ0JBQU1DLGNBQU4sQ0FBcUIsb0NBQXJCLENBTHZDOztJQU9xQk0sbUI7Ozs7Ozs7Ozs7Ozs7NEJBQ1hDLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtDLG9DQUFMLENBQTBDWCxzQkFBMUMsRUFBa0UsVUFBQ1ksT0FBRDtBQUFBLGlCQUFhQyxpQkFBYjtBQUFBLFNBQWxFLEVBQTJGSixNQUEzRixFQUFtR0MsSUFBbkc7QUFFQSxhQUFLSSx3Q0FBTCxDQUE4Q1gsdUJBQTlDLEVBQXVFLFVBQUNTLE9BQUQ7QUFBQSxpQkFBYUcsZUFBYjtBQUFBLFNBQXZFLEVBQThGTixNQUE5RixFQUFzR0MsSUFBdEc7QUFFQSxZQUFNTSx3QkFBd0IsR0FBR1YsNEJBQTRCLENBQUNXLE9BQTdCLENBQXFDUCxJQUFyQyxDQUFqQztBQUVBTSxRQUFBQSx3QkFBd0IsQ0FBQ0UsT0FBekIsQ0FBaUMsVUFBQ0MsdUJBQUQsRUFBNkI7QUFDNUQsY0FBTUMsYUFBYSxHQUFHLEtBQUksQ0FBQ1Qsb0NBQUwsQ0FBMENQLHlCQUExQyxFQUFxRSxVQUFDUSxPQUFEO0FBQUEsbUJBQWFTLG9CQUFiO0FBQUEsV0FBckUsRUFBaUdaLE1BQWpHLEVBQXlHVSx1QkFBekcsQ0FBdEI7QUFBQSxjQUNNRyxVQUFVLEdBQUcsS0FBSSxDQUFDWCxvQ0FBTCxDQUEwQ0osOEJBQTFDLEVBQTBFLFVBQUNLLE9BQUQ7QUFBQSxtQkFBYVcsb0JBQWI7QUFBQSxXQUExRSxFQUFzR2QsTUFBdEcsRUFBOEdVLHVCQUE5RyxDQURuQjs7QUFHQSxVQUFBLEtBQUksQ0FBQ1Isb0NBQUwsQ0FBMENOLHlCQUExQyxFQUFxRSxVQUFDTyxPQUFELEVBQWE7QUFDaEYsZ0JBQUlZLEtBQUo7QUFFQSxnQkFBTUMsWUFBWSxHQUFHYixPQUFyQjtBQUFBLGdCQUE4QjtBQUN4QmMsWUFBQUEsOEJBQThCLEdBQUdKLFVBQVUsQ0FBQ0ssUUFBWCxDQUFvQkYsWUFBcEIsQ0FEdkM7QUFBQSxnQkFFTUcsaUNBQWlDLEdBQUdSLGFBQWEsQ0FBQ08sUUFBZCxDQUF1QkYsWUFBdkIsQ0FGMUM7O0FBSUEsZ0JBQUksS0FBSixFQUFXLENBQ1Q7QUFDRCxhQUZELE1BRU8sSUFBSUMsOEJBQUosRUFBb0M7QUFDekNGLGNBQUFBLEtBQUssR0FBR0Qsb0JBQVI7QUFDRCxhQUZNLE1BRUEsSUFBSUssaUNBQUosRUFBdUM7QUFDNUNKLGNBQUFBLEtBQUssR0FBR0gsb0JBQVI7QUFDRCxhQUZNLE1BRUE7QUFDTEcsY0FBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDs7QUFFRCxtQkFBT0EsS0FBUDtBQUNELFdBbEJELEVBa0JHZixNQWxCSCxFQWtCV1UsdUJBbEJYO0FBbUJELFNBdkJEO0FBd0JEO0FBQ0Y7OztrQ0FFb0I7QUFBRSxhQUFPVSxzQkFBVUMsV0FBVixDQUFzQnRCLG1CQUF0QixDQUFQO0FBQW9EOzs7O0VBcEM1QnFCLHFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBKU1hUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvanN4XCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIiksXG4gICAgICBjb25zdFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3REZWNsYXJhdGlvbi8vdmFyaWFibGVbMF0vQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgdG9rZW5zLCBub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gSlNYVG9rZW4sIHRva2Vucywgbm9kZSk7XG5cbiAgICAgIGNvbnN0IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgdG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSksXG4gICAgICAgICAgICAgIGNvbnN0TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihjb25zdFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBWYXJpYWJsZVRva2VuLCB0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbjtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIGNvbnN0TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGNvbnN0TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29uc3ROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9rZW4gPSBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBUb2tlbjtcbiAgICAgICAgfSwgdG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==