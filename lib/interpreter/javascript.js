"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interpreter = _interopRequireDefault(require("../interpreter"));

var _javascript = _interopRequireDefault(require("../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../parser/javascript"));

var _javascript3 = _interopRequireDefault(require("../processor/javascript"));

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

var JavaScriptInterpreter = /*#__PURE__*/function (_Interpreter) {
  _inherits(JavaScriptInterpreter, _Interpreter);

  var _super = _createSuper(JavaScriptInterpreter);

  function JavaScriptInterpreter() {
    var _this;

    _classCallCheck(this, JavaScriptInterpreter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    return _this;
  }

  _createClass(JavaScriptInterpreter, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      return _interpreter["default"].fromLexerParserAndProcessor(JavaScriptInterpreter, _javascript["default"], _javascript2["default"], _javascript3["default"]);
    }
  }]);

  return JavaScriptInterpreter;
}(_interpreter["default"]);

exports["default"] = JavaScriptInterpreter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiSmF2YVNjcmlwdEludGVycHJldGVyIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIkludGVycHJldGVyIiwiZnJvbUxleGVyUGFyc2VyQW5kUHJvY2Vzc29yIiwiSmF2YVNjcmlwdExleGVyIiwiSmF2YVNjcmlwdFBhcnNlciIsIkphdmFTY3JpcHRQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7Ozs7Ozs7Ozs7Ozs7OytEQUNSQyw4Qjs7Ozs7OztrQ0FFVTtBQUFFLGFBQU9DLHdCQUFZQywyQkFBWixDQUF3Q0gscUJBQXhDLEVBQStESSxzQkFBL0QsRUFBZ0ZDLHVCQUFoRixFQUFrR0MsdUJBQWxHLENBQVA7QUFBZ0k7Ozs7RUFIdEdKLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnRlcnByZXRlciBmcm9tIFwiLi4vaW50ZXJwcmV0ZXJcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdEludGVycHJldGVyIGV4dGVuZHMgSW50ZXJwcmV0ZXIge1xuICBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0U7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSW50ZXJwcmV0ZXIuZnJvbUxleGVyUGFyc2VyQW5kUHJvY2Vzc29yKEphdmFTY3JpcHRJbnRlcnByZXRlciwgSmF2YVNjcmlwdExleGVyLCBKYXZhU2NyaXB0UGFyc2VyLCBKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl19