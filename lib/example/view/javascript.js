"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _javascript = _interopRequireDefault(require("../../interpreter/javascript"));

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

    _defineProperty(_assertThisInitialized(_this), "Interpreter", _javascript["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSmF2YVNjcmlwdFZpZXciLCJKYXZhU2NyaXB0SW50ZXJwcmV0ZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBQ0xDLHNCOzs7Ozs7OztFQUQ0QkMsZ0I7Ozs7Z0JBQXZCRixjLHVCQTRCUTtBQUN6QkcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFHNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEphdmFTY3JpcHRJbnRlcnByZXRlciBmcm9tIFwiLi4vLi4vaW50ZXJwcmV0ZXIvamF2YXNjcmlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0VmlldyBleHRlbmRzIFZpZXcge1xuICBJbnRlcnByZXRlciA9IEphdmFTY3JpcHRJbnRlcnByZXRlcjtcblxuICBpbml0aWFsQ29udGVudCA9IGBcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5mdW5jdGlvbiBzaW1wbGVBcHAoc2VsZWN0b3IpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KHNlbGVjdG9yKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKHNpbXBsZUFwcClcXGBcblxuICBjb2xvcjogIzMzMztcblxuXFxgO1xuYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImphdmFzY3JpcHRcIlxuICB9O1xufTtcbiJdfQ==