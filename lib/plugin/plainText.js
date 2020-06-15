"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _plugin = _interopRequireDefault(require("../plugin"));

var _plainText = _interopRequireDefault(require("../lexer/plainText"));

var _plainText2 = _interopRequireDefault(require("../parser/plainText"));

var _plainText3 = _interopRequireDefault(require("../processor/plainText"));

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

var PlainTextPlugin = /*#__PURE__*/function (_Plugin) {
  _inherits(PlainTextPlugin, _Plugin);

  var _super = _createSuper(PlainTextPlugin);

  function PlainTextPlugin() {
    var _this;

    _classCallCheck(this, PlainTextPlugin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.PlainText_LANGUAGE);

    return _this;
  }

  _createClass(PlainTextPlugin, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      return _plugin["default"].fromNothing(PlainTextPlugin);
    }
  }]);

  return PlainTextPlugin;
}(_plugin["default"]);

exports["default"] = PlainTextPlugin;

_defineProperty(PlainTextPlugin, "Lexer", _plainText["default"]);

_defineProperty(PlainTextPlugin, "Parser", _plainText2["default"]);

_defineProperty(PlainTextPlugin, "Processor", _plainText3["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWluVGV4dC5qcyJdLCJuYW1lcyI6WyJQbGFpblRleHRQbHVnaW4iLCJQbGFpblRleHRfTEFOR1VBR0UiLCJQbHVnaW4iLCJmcm9tTm90aGluZyIsIlBsYWluVGV4dExleGVyIiwiUGxhaW5UZXh0UGFyc2VyIiwiUGxhaW5UZXh0UHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyw2Qjs7Ozs7OztrQ0FRVTtBQUFFLGFBQU9DLG1CQUFPQyxXQUFQLENBQW1CSCxlQUFuQixDQUFQO0FBQTZDOzs7O0VBVHpCRSxrQjs7OztnQkFBeEJGLGUsV0FHSkkscUI7O2dCQUhJSixlLFlBS0hLLHNCOztnQkFMR0wsZSxlQU9BTSxzQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBQbGFpblRleHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IFBsYWluVGV4dF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IFBsYWluVGV4dF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBQbGFpblRleHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBQbGFpblRleHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKFBsYWluVGV4dFBsdWdpbik7IH1cbn1cbiJdfQ==