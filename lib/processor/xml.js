"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _processor = _interopRequireDefault(require("../processor"));

var _name = _interopRequireDefault(require("../token/significant/name"));

var _error = _interopRequireDefault(require("../token/significant/error"));

var _comment = _interopRequireDefault(require("../token/significant/comment"));

var _attribute = _interopRequireDefault(require("../token/significant/attribute"));

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

var nameTerminalNodeQuery = _occamDom.Query.fromExpression("//name/@*"),
    errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"),
    attributeTerminalNodeQuery = _occamDom.Query.fromExpression("//attribute/@identifier"),
    commentNonTerminalNodeQuery = _occamDom.Query.fromExpression("//comment");

var XMLProcessor = /*#__PURE__*/function (_Processor) {
  _inherits(XMLProcessor, _Processor);

  var _super = _createSuper(XMLProcessor);

  function XMLProcessor() {
    _classCallCheck(this, XMLProcessor);

    return _super.apply(this, arguments);
  }

  _createClass(XMLProcessor, [{
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _error["default"];
        }, errorTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _name["default"];
        }, nameTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
          return _attribute["default"];
        }, attributeTerminalNodeQuery);
        this.replaceNonTerminalNodesSignificantTokens(tokens, node, function (content, type) {
          return _comment["default"];
        }, commentNonTerminalNodeQuery);
      }
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _processor["default"].fromNothing(XMLProcessor);
    }
  }]);

  return XMLProcessor;
}(_processor["default"]);

exports["default"] = XMLProcessor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsImF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiWE1MUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsIk5hbWVUb2tlbiIsIkF0dHJpYnV0ZVRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsIkNvbW1lbnRUb2tlbiIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixXQUFyQixDQUE5QjtBQUFBLElBQ01DLHNCQUFzQixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUQvQjtBQUFBLElBRU1FLDBCQUEwQixHQUFHSCxnQkFBTUMsY0FBTixDQUFxQix5QkFBckIsQ0FGbkM7QUFBQSxJQUdNRywyQkFBMkIsR0FBR0osZ0JBQU1DLGNBQU4sQ0FBcUIsV0FBckIsQ0FIcEM7O0lBS3FCSSxZOzs7Ozs7Ozs7Ozs7OzRCQUNYQyxNLEVBQVFDLEksRUFBTTtBQUNwQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLQyxvQ0FBTCxDQUEwQ0YsTUFBMUMsRUFBa0RDLElBQWxELEVBQXdELFVBQUNFLE9BQUQsRUFBVUMsSUFBVjtBQUFBLGlCQUFtQkMsaUJBQW5CO0FBQUEsU0FBeEQsRUFBdUZULHNCQUF2RjtBQUVBLGFBQUtNLG9DQUFMLENBQTBDRixNQUExQyxFQUFrREMsSUFBbEQsRUFBd0QsVUFBQ0UsT0FBRCxFQUFVQyxJQUFWO0FBQUEsaUJBQW1CRSxnQkFBbkI7QUFBQSxTQUF4RCxFQUFzRmIscUJBQXRGO0FBRUEsYUFBS1Msb0NBQUwsQ0FBMENGLE1BQTFDLEVBQWtEQyxJQUFsRCxFQUF3RCxVQUFDRSxPQUFELEVBQVVDLElBQVY7QUFBQSxpQkFBbUJHLHFCQUFuQjtBQUFBLFNBQXhELEVBQTJGViwwQkFBM0Y7QUFFQSxhQUFLVyx3Q0FBTCxDQUE4Q1IsTUFBOUMsRUFBc0RDLElBQXRELEVBQTRELFVBQUNFLE9BQUQsRUFBVUMsSUFBVjtBQUFBLGlCQUFtQkssbUJBQW5CO0FBQUEsU0FBNUQsRUFBNkZYLDJCQUE3RjtBQUNEO0FBQ0Y7OztrQ0FFb0I7QUFBRSxhQUFPWSxzQkFBVUMsV0FBVixDQUFzQlosWUFBdEIsQ0FBUDtBQUE2Qzs7OztFQWI1QlcscUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IE5hbWVUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvbmFtZVwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9jb21tZW50XCI7XG5pbXBvcnQgQXR0cmlidXRlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2F0dHJpYnV0ZVwiO1xuXG5jb25zdCBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vbmFtZS9AKlwiKSxcbiAgICAgIGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBhdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9hdHRyaWJ1dGUvQGlkZW50aWZpZXJcIiksXG4gICAgICBjb21tZW50Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29tbWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWE1MUHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IE5hbWVUb2tlbiwgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gQXR0cmlidXRlVG9rZW4sIGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKHRva2Vucywgbm9kZSwgKGNvbnRlbnQsIHR5cGUpID0+IENvbW1lbnRUb2tlbiwgY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoWE1MUHJvY2Vzc29yKTsgfVxufVxuIl19