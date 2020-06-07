"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _xml = _interopRequireDefault(require("../../plugin/xml"));

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

    _defineProperty(_assertThisInitialized(_this), "Plugin", _xml["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhtbC5qcyJdLCJuYW1lcyI6WyJYTUxWaWV3IiwiWE1MUGx1Z2luIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7OzZEQUNWQyxlOzs7Ozs7OztFQUQwQkMsZ0I7Ozs7Z0JBQWhCRixPLHVCQW9CUTtBQUN6QkcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFHNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IFhNTFBsdWdpbiBmcm9tIFwiLi4vLi4vcGx1Z2luL3htbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxWaWV3IGV4dGVuZHMgVmlldyB7XG4gIFBsdWdpbiA9IFhNTFBsdWdpbjtcblxuICBpbml0aWFsQ29udGVudCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjwhLS0gTG9vayB0byBXaW5kYXJkIGJ5IElhaW4gTS4gQmFua3MgLS0+XG48Ym9vaz5cbiAgPG5hbWU+XG4gICAgTG9vayB0byBXaW5kd2FyZFxuICA8L25hbWU+XG4gIDxhdXRob3I+XG4gICAgSWFpbiBNLiBCYW5rc1xuICA8L2F1dGhvcj5cbiAgPGxhbmd1YWdlPlxuICAgIEVuZ2xpc2hcbiAgPC9sYW5ndWFnZT5cbiAgPGdlbnJlPlxuICAgIFNjaWVuY2UgZmljdGlvblxuICA8L2dlbnJlPlxuPC9ib29rPmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ4bWxcIlxuICB9O1xufTtcbiJdfQ==