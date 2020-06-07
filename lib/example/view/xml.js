"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _xml = _interopRequireDefault(require("../../interpreter/xml"));

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

var XMLView = /*#__PURE__*/function (_View) {
  _inherits(XMLView, _View);

  var _super = _createSuper(XMLView);

  function XMLView() {
    var _this;

    _classCallCheck(this, XMLView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Interpreter", _xml["default"]);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Look to Windard by Iain M. Banks -->\n<book>\n  <name>\n    Look to Windward\n  </name>\n  <author>\n    Iain M. Banks\n  </author>\n  <language>\n    English\n  </language>\n  <genre>\n    Science fiction\n  </genre>\n</book>");

    return _this;
  }

  return XMLView;
}(_view["default"]);

exports["default"] = XMLView;

_defineProperty(XMLView, "defaultProperties", {
  className: "xml"
});

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJYTUxWaWV3IiwiWE1MSW50ZXJwcmV0ZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7a0VBQ0xDLGU7Ozs7Ozs7O0VBRHFCQyxnQjs7OztnQkFBaEJGLE8sdUJBb0JRO0FBQ3pCRyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztBQUc1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgWE1MSW50ZXJwcmV0ZXIgZnJvbSBcIi4uLy4uL2ludGVycHJldGVyL3htbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxWaWV3IGV4dGVuZHMgVmlldyB7XG4gIEludGVycHJldGVyID0gWE1MSW50ZXJwcmV0ZXI7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48IS0tIExvb2sgdG8gV2luZGFyZCBieSBJYWluIE0uIEJhbmtzIC0tPlxuPGJvb2s+XG4gIDxuYW1lPlxuICAgIExvb2sgdG8gV2luZHdhcmRcbiAgPC9uYW1lPlxuICA8YXV0aG9yPlxuICAgIElhaW4gTS4gQmFua3NcbiAgPC9hdXRob3I+XG4gIDxsYW5ndWFnZT5cbiAgICBFbmdsaXNoXG4gIDwvbGFuZ3VhZ2U+XG4gIDxnZW5yZT5cbiAgICBTY2llbmNlIGZpY3Rpb25cbiAgPC9nZW5yZT5cbjwvYm9vaz5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieG1sXCJcbiAgfTtcbn07XG4iXX0=