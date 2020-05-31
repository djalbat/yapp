"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _overlay = _interopRequireDefault(require("../../token/overlay"));

var _tokenTypes = require("../../tokenTypes");

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

var type = _tokenTypes.ERROR_TOKEN_TYPE; ///

var ErrorOverlayToken = /*#__PURE__*/function (_OverlayToken) {
  _inherits(ErrorOverlayToken, _OverlayToken);

  var _super = _createSuper(ErrorOverlayToken);

  function ErrorOverlayToken() {
    _classCallCheck(this, ErrorOverlayToken);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorOverlayToken, null, [{
    key: "fromOverlaidToken",
    value: function fromOverlaidToken(overlaidToken) {
      var content = overlaidToken.getContent(),
          errorToken = _overlay["default"].fromContentTypeAndOverlaidToken(ErrorOverlayToken, content, type, overlaidToken);

      return errorToken;
    }
  }]);

  return ErrorOverlayToken;
}(_overlay["default"]);

exports["default"] = ErrorOverlayToken;

_defineProperty(ErrorOverlayToken, "type", type);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbInR5cGUiLCJFUlJPUl9UT0tFTl9UWVBFIiwiRXJyb3JPdmVybGF5VG9rZW4iLCJvdmVybGFpZFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJlcnJvclRva2VuIiwiT3ZlcmxheVRva2VuIiwiZnJvbUNvbnRlbnRUeXBlQW5kT3ZlcmxhaWRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsNEJBQWIsQyxDQUFnQzs7SUFFWEMsaUI7Ozs7Ozs7Ozs7Ozs7c0NBR01DLGEsRUFBZTtBQUN0QyxVQUFNQyxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsVUFBZCxFQUFoQjtBQUFBLFVBQ01DLFVBQVUsR0FBR0Msb0JBQWFDLCtCQUFiLENBQTZDTixpQkFBN0MsRUFBZ0VFLE9BQWhFLEVBQXlFSixJQUF6RSxFQUErRUcsYUFBL0UsQ0FEbkI7O0FBR0EsYUFBT0csVUFBUDtBQUNEOzs7O0VBUjRDQyxtQjs7OztnQkFBMUJMLGlCLFVBQ0xGLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vb3ZlcmxheVwiO1xuXG5pbXBvcnQgeyBFUlJPUl9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuY29uc3QgdHlwZSA9IEVSUk9SX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JPdmVybGF5VG9rZW4gZXh0ZW5kcyBPdmVybGF5VG9rZW4ge1xuICBzdGF0aWMgdHlwZSA9IHR5cGU7XG5cbiAgc3RhdGljIGZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pIHtcbiAgICBjb25zdCBjb250ZW50ID0gb3ZlcmxhaWRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgZXJyb3JUb2tlbiA9IE92ZXJsYXlUb2tlbi5mcm9tQ29udGVudFR5cGVBbmRPdmVybGFpZFRva2VuKEVycm9yT3ZlcmxheVRva2VuLCBjb250ZW50LCB0eXBlLCBvdmVybGFpZFRva2VuKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG4iXX0=