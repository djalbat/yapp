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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"];
        }, tokens, node);
        this.replaceTerminalNodesSignificantToken(nameTerminalNodeQuery, function (content) {
          return _name["default"];
        }, tokens, node);
        this.replaceTerminalNodesSignificantToken(attributeTerminalNodeQuery, function (content) {
          return _attribute["default"];
        }, tokens, node);
        this.replaceNonTerminalNodesSignificantTokens(commentNonTerminalNodeQuery, function (content) {
          return _comment["default"];
        }, tokens, node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsImF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiWE1MUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwiTmFtZVRva2VuIiwiQXR0cmlidXRlVG9rZW4iLCJyZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zIiwiQ29tbWVudFRva2VuIiwiUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLFdBQXJCLENBQTlCO0FBQUEsSUFDTUMsc0JBQXNCLEdBQUdGLGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBRC9CO0FBQUEsSUFFTUUsMEJBQTBCLEdBQUdILGdCQUFNQyxjQUFOLENBQXFCLHlCQUFyQixDQUZuQztBQUFBLElBR01HLDJCQUEyQixHQUFHSixnQkFBTUMsY0FBTixDQUFxQixXQUFyQixDQUhwQzs7SUFLcUJJLFk7Ozs7Ozs7Ozs7Ozs7NEJBQ1hDLE0sRUFBUUMsSSxFQUFNO0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtDLG9DQUFMLENBQTBDTixzQkFBMUMsRUFBa0UsVUFBQ08sT0FBRDtBQUFBLGlCQUFhQyxpQkFBYjtBQUFBLFNBQWxFLEVBQTJGSixNQUEzRixFQUFtR0MsSUFBbkc7QUFFQSxhQUFLQyxvQ0FBTCxDQUEwQ1QscUJBQTFDLEVBQWlFLFVBQUNVLE9BQUQ7QUFBQSxpQkFBYUUsZ0JBQWI7QUFBQSxTQUFqRSxFQUF5RkwsTUFBekYsRUFBaUdDLElBQWpHO0FBRUEsYUFBS0Msb0NBQUwsQ0FBMENMLDBCQUExQyxFQUFzRSxVQUFDTSxPQUFEO0FBQUEsaUJBQWFHLHFCQUFiO0FBQUEsU0FBdEUsRUFBbUdOLE1BQW5HLEVBQTJHQyxJQUEzRztBQUVBLGFBQUtNLHdDQUFMLENBQThDVCwyQkFBOUMsRUFBMkUsVUFBQ0ssT0FBRDtBQUFBLGlCQUFhSyxtQkFBYjtBQUFBLFNBQTNFLEVBQXNHUixNQUF0RyxFQUE4R0MsSUFBOUc7QUFDRDtBQUNGOzs7a0NBRW9CO0FBQUUsYUFBT1Esc0JBQVVDLFdBQVYsQ0FBc0JYLFlBQXRCLENBQVA7QUFBNkM7Ozs7RUFiNUJVLHFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBOYW1lVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L25hbWVcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IENvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudFwiO1xuaW1wb3J0IEF0dHJpYnV0ZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hdHRyaWJ1dGVcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL25hbWUvQCpcIiksXG4gICAgICBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXR0cmlidXRlL0BpZGVudGlmaWVyXCIpLFxuICAgICAgY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2NvbW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFByb2Nlc3NvciBleHRlbmRzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKGVycm9yVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBFcnJvclRva2VuLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihuYW1lVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBOYW1lVG9rZW4sIHRva2Vucywgbm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gQXR0cmlidXRlVG9rZW4sIHRva2Vucywgbm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyhjb21tZW50Tm9uVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBDb21tZW50VG9rZW4sIHRva2Vucywgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKFhNTFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==