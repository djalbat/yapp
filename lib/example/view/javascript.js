"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _javascript = _interopRequireDefault(require("../../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../../parser/javascript"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JavaScriptView = /*#__PURE__*/function (_View) {
  _inherits(JavaScriptView, _View);

  var _super = _createSuper(JavaScriptView);

  function JavaScriptView() {
    var _this;

    _classCallCheck(this, JavaScriptView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _javascript["default"]);

    _defineProperty(_assertThisInitialized(_this), "Parser", _javascript2["default"]);

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "\"use strict\";\n\nimport \"juxtapose\";\n");

    return _this;
  }

  return JavaScriptView;
}(_view["default"]);

exports["default"] = JavaScriptView;

_defineProperty(JavaScriptView, "defaultProperties", {
  className: "javascript"
});

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSmF2YVNjcmlwdFZpZXciLCJKYXZhU2NyaXB0TGV4ZXIiLCJKYXZhU2NyaXB0UGFyc2VyIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIlZpZXciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDWEMsc0I7OzZEQUVDQyx1Qjs7K0RBRUVDLDhCOzs7Ozs7OztFQUwrQkMsZ0I7Ozs7Z0JBQXZCSixjLHVCQVlRO0FBQ3pCSyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztBQUc1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgSmF2YVNjcmlwdExleGVyIGZyb20gXCIuLi8uLi9sZXhlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFBhcnNlciBmcm9tIFwiLi4vLi4vcGFyc2VyL2phdmFzY3JpcHRcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7XG5cbiAgUGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlcjtcblxuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImphdmFzY3JpcHRcIlxuICB9O1xufTtcbiJdfQ==