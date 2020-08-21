"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _plugin = _interopRequireDefault(require("../plugin"));

var _xml = _interopRequireDefault(require("../lexer/xml"));

var _xml2 = _interopRequireDefault(require("../parser/xml"));

var _xml3 = _interopRequireDefault(require("../processor/xml"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XMLPlugin = /*#__PURE__*/function (_Plugin) {
  _inherits(XMLPlugin, _Plugin);

  var _super = _createSuper(XMLPlugin);

  function XMLPlugin() {
    var _this;

    _classCallCheck(this, XMLPlugin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.XML_LANGUAGE);

    return _this;
  }

  _createClass(XMLPlugin, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      return _plugin["default"].fromNothing(XMLPlugin);
    }
  }]);

  return XMLPlugin;
}(_plugin["default"]);

exports["default"] = XMLPlugin;

_defineProperty(XMLPlugin, "Lexer", _xml["default"]);

_defineProperty(XMLPlugin, "Parser", _xml2["default"]);

_defineProperty(XMLPlugin, "Processor", _xml3["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJYTUxQbHVnaW4iLCJYTUxfTEFOR1VBR0UiLCJQbHVnaW4iLCJmcm9tTm90aGluZyIsIlhNTExleGVyIiwiWE1MUGFyc2VyIiwiWE1MUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyx1Qjs7Ozs7OztrQ0FRVTtBQUFFLGFBQU9DLG1CQUFPQyxXQUFQLENBQW1CSCxTQUFuQixDQUFQO0FBQXVDOzs7O0VBVHpCRSxrQjs7OztnQkFBbEJGLFMsV0FHSkksZTs7Z0JBSElKLFMsWUFLSEssZ0I7O2dCQUxHTCxTLGVBT0FNLGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFhNTExleGVyIGZyb20gXCIuLi9sZXhlci94bWxcIjtcbmltcG9ydCBYTUxQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci94bWxcIjtcbmltcG9ydCBYTUxQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci94bWxcIjtcblxuaW1wb3J0IHsgWE1MX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gWE1MX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IFhNTExleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBYTUxQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IFhNTFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoWE1MUGx1Z2luKTsgfVxufVxuIl19