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
      var _this = this;

      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"].fromContent(content);
        }, tokens, node);
        this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, function (content) {
          return _jsx["default"].fromContent(content);
        }, tokens, node);
        var functionNodes = functionNonTerminalNodeQuery.execute(node);
        functionNodes.forEach(function (functionNode) {
          var argumentNames = _this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, function (content) {
            return _argument["default"].fromContent(content);
          }, tokens, functionNode);

          _this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, function (content) {
            var variableName = content,
                ///
            argumentNamesIncludesVariableName = argumentNames.includes(variableName),
                Token = argumentNamesIncludesVariableName ? _argument["default"] : _variable["default"],
                token = Token.fromContent(content);
            return token;
          }, tokens, functionNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJmcm9tQ29udGVudCIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJKU1hUb2tlbiIsImZ1bmN0aW9uTm9kZXMiLCJleGVjdXRlIiwiZm9yRWFjaCIsImZ1bmN0aW9uTm9kZSIsImFyZ3VtZW50TmFtZXMiLCJBcmd1bWVudFRva2VuIiwidmFyaWFibGVOYW1lIiwiYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJUb2tlbiIsIlZhcmlhYmxlVG9rZW4iLCJ0b2tlbiIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUEvQjtBQUFBLElBQ01DLHVCQUF1QixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixPQUFyQixDQURoQztBQUFBLElBRU1FLHlCQUF5QixHQUFHSCxnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUZsQztBQUFBLElBR01HLHlCQUF5QixHQUFHSixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUhsQztBQUFBLElBSU1JLDRCQUE0QixHQUFHTCxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUpyQzs7SUFNcUJLLG1COzs7Ozs7Ozs7Ozs7OzRCQUNYQyxNLEVBQVFDLEksRUFBTTtBQUFBOztBQUNwQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLQyxvQ0FBTCxDQUEwQ1Ysc0JBQTFDLEVBQWtFLFVBQUNXLE9BQUQ7QUFBQSxpQkFBYUMsa0JBQVdDLFdBQVgsQ0FBdUJGLE9BQXZCLENBQWI7QUFBQSxTQUFsRSxFQUFnSEgsTUFBaEgsRUFBd0hDLElBQXhIO0FBRUEsYUFBS0ssd0NBQUwsQ0FBOENYLHVCQUE5QyxFQUF1RSxVQUFDUSxPQUFEO0FBQUEsaUJBQWFJLGdCQUFTRixXQUFULENBQXFCRixPQUFyQixDQUFiO0FBQUEsU0FBdkUsRUFBbUhILE1BQW5ILEVBQTJIQyxJQUEzSDtBQUVBLFlBQU1PLGFBQWEsR0FBR1YsNEJBQTRCLENBQUNXLE9BQTdCLENBQXFDUixJQUFyQyxDQUF0QjtBQUVBTyxRQUFBQSxhQUFhLENBQUNFLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QyxjQUFNQyxhQUFhLEdBQUcsS0FBSSxDQUFDVixvQ0FBTCxDQUEwQ04seUJBQTFDLEVBQXFFLFVBQUNPLE9BQUQ7QUFBQSxtQkFBYVUscUJBQWNSLFdBQWQsQ0FBMEJGLE9BQTFCLENBQWI7QUFBQSxXQUFyRSxFQUFzSEgsTUFBdEgsRUFBOEhXLFlBQTlILENBQXRCOztBQUVBLFVBQUEsS0FBSSxDQUFDVCxvQ0FBTCxDQUEwQ0wseUJBQTFDLEVBQXFFLFVBQUNNLE9BQUQsRUFBYTtBQUNoRixnQkFBTVcsWUFBWSxHQUFHWCxPQUFyQjtBQUFBLGdCQUE4QjtBQUN4QlksWUFBQUEsaUNBQWlDLEdBQUdILGFBQWEsQ0FBQ0ksUUFBZCxDQUF1QkYsWUFBdkIsQ0FEMUM7QUFBQSxnQkFFTUcsS0FBSyxHQUFJRixpQ0FBRCxHQUNFRixvQkFERixHQUVJSyxvQkFKbEI7QUFBQSxnQkFLTUMsS0FBSyxHQUFHRixLQUFLLENBQUNaLFdBQU4sQ0FBa0JGLE9BQWxCLENBTGQ7QUFPQSxtQkFBT2dCLEtBQVA7QUFDRCxXQVRELEVBU0duQixNQVRILEVBU1dXLFlBVFg7QUFVRCxTQWJEO0FBY0Q7QUFDRjs7O2tDQUVvQjtBQUFFLGFBQU9TLHNCQUFVQyxXQUFWLENBQXNCdEIsbUJBQXRCLENBQVA7QUFBb0Q7Ozs7RUExQjVCcUIscUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IE1ldGhvZFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9tZXRob2RcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gRXJyb3JUb2tlbi5mcm9tQ29udGVudChjb250ZW50KSwgdG9rZW5zLCBub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gSlNYVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCksIHRva2Vucywgbm9kZSk7XG5cbiAgICAgIGNvbnN0IGZ1bmN0aW9uTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIGZ1bmN0aW9uTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50KSwgdG9rZW5zLCBmdW5jdGlvbk5vZGUpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIFRva2VuID0gKGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBBcmd1bWVudFRva2VuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpYWJsZVRva2VuLFxuICAgICAgICAgICAgICAgIHRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0sIHRva2VucywgZnVuY3Rpb25Ob2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl19