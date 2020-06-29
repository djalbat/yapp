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

    _defineProperty(_assertThisInitialized(_this), "initialContent", "function getEmailAddress(selector) {\n  var emailAddress;\n  \n  return ({\n    emailAddress\n  });  \n}");

    return _this;
  }

  return JavaScriptView;
}(_view["default"]);

exports["default"] = JavaScriptView;

_defineProperty(JavaScriptView, "defaultProperties", {
  className: "javascript"
});

;
/*
"use strict";

import "juxtapose";

import withStyle from "easy-with-style"; ///

import { Body } from "easy";

function simpleApplication(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApplication)`

  color: #333;

`;
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSmF2YVNjcmlwdFZpZXciLCJKYXZhU2NyaXB0UGx1Z2luIiwiVmlldyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7Ozs7OzZEQUNWQyxzQjs7Ozs7Ozs7RUFEaUNDLGdCOzs7O2dCQUF2QkYsYyx1QkFXUTtBQUN6QkcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFHNUI7QUFFRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgSmF2YVNjcmlwdFBsdWdpbiBmcm9tIFwiLi4vLi4vcGx1Z2luL2phdmFzY3JpcHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgUGx1Z2luID0gSmF2YVNjcmlwdFBsdWdpbjtcblxuICBpbml0aWFsQ29udGVudCA9IGBmdW5jdGlvbiBnZXRFbWFpbEFkZHJlc3Moc2VsZWN0b3IpIHtcbiAgdmFyIGVtYWlsQWRkcmVzcztcbiAgXG4gIHJldHVybiAoe1xuICAgIGVtYWlsQWRkcmVzc1xuICB9KTsgIFxufWA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJqYXZhc2NyaXB0XCJcbiAgfTtcbn07XG5cbi8qXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmZ1bmN0aW9uIHNpbXBsZUFwcGxpY2F0aW9uKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keShzZWxlY3Rvcik7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShzaW1wbGVBcHBsaWNhdGlvbilgXG5cbiAgY29sb3I6ICMzMzM7XG5cbmA7XG4qLyJdfQ==