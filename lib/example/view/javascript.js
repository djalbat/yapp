"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _javascript = _interopRequireDefault(require("../../plugin/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    _defineProperty(_assertThisInitialized(_this), "Plugin", _javascript["default"]);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "\"use strict\";\n\nimport \"juxtapose\";\n\nimport { Body } from \"easy\";\n\nfunction simpleApp(selector) {\n  const body = new Body(selector);\n\n  body.mount(\n\n    <p>\n      A simple application.\n    </p>\n\n  );\n}\n\nexport default withStyle(simpleApp)`\n\n  color: #333;\n\n`;\n");

    return _this;
  }

  return JavaScriptView;
}(_view["default"]);

exports["default"] = JavaScriptView;

_defineProperty(JavaScriptView, "defaultProperties", {
  className: "javascript"
});

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSmF2YVNjcmlwdFZpZXciLCJKYXZhU2NyaXB0UGx1Z2luIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7Ozs7OzZEQUNWQyxzQjs7Ozs7Ozs7RUFEaUNDLGdCOzs7O2dCQUF2QkYsYyx1QkE0QlE7QUFDekJHLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O0FBRzVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuLi92aWV3XCI7XG5cbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0VmlldyBleHRlbmRzIFZpZXcge1xuICBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmZ1bmN0aW9uIHNpbXBsZUFwcChzZWxlY3Rvcikge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoc2VsZWN0b3IpO1xuXG4gIGJvZHkubW91bnQoXG5cbiAgICA8cD5cbiAgICAgIEEgc2ltcGxlIGFwcGxpY2F0aW9uLlxuICAgIDwvcD5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoc2ltcGxlQXBwKVxcYFxuXG4gIGNvbG9yOiAjMzMzO1xuXG5cXGA7XG5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiamF2YXNjcmlwdFwiXG4gIH07XG59O1xuIl19