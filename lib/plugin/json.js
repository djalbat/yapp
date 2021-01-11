"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _plugin = _interopRequireDefault(require("../plugin"));

var _json = _interopRequireDefault(require("../lexer/json"));

var _json2 = _interopRequireDefault(require("../parser/json"));

var _json3 = _interopRequireDefault(require("../processor/json"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSONPlugin = /*#__PURE__*/function (_Plugin) {
  _inherits(JSONPlugin, _Plugin);

  var _super = _createSuper(JSONPlugin);

  function JSONPlugin() {
    var _this;

    _classCallCheck(this, JSONPlugin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JSON_LANGUAGE);

    return _this;
  }

  _createClass(JSONPlugin, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      return _plugin["default"].fromNothing(JSONPlugin);
    }
  }]);

  return JSONPlugin;
}(_plugin["default"]);

exports["default"] = JSONPlugin;

_defineProperty(JSONPlugin, "Lexer", _json["default"]);

_defineProperty(JSONPlugin, "Parser", _json2["default"]);

_defineProperty(JSONPlugin, "Processor", _json3["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiSlNPTlBsdWdpbiIsIkpTT05fTEFOR1VBR0UiLCJQbHVnaW4iLCJmcm9tTm90aGluZyIsIkpTT05MZXhlciIsIkpTT05QYXJzZXIiLCJKU09OUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyx3Qjs7Ozs7OztrQ0FRVTtBQUFFLGFBQU9DLG1CQUFPQyxXQUFQLENBQW1CSCxVQUFuQixDQUFQO0FBQXdDOzs7O0VBVHpCRSxrQjs7OztnQkFBbkJGLFUsV0FHSkksZ0I7O2dCQUhJSixVLFlBS0hLLGlCOztnQkFMR0wsVSxlQU9BTSxpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBKU09OTGV4ZXIgZnJvbSBcIi4uL2xleGVyL2pzb25cIjtcbmltcG9ydCBKU09OUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvanNvblwiO1xuaW1wb3J0IEpTT05Qcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9qc29uXCI7XG5cbmltcG9ydCB7IEpTT05fTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gSlNPTl9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKU09OTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEpTT05QYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEpTT05Qcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKEpTT05QbHVnaW4pOyB9XG59XG4iXX0=