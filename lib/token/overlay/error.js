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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

  _createClass(ErrorOverlayToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(ErrorOverlayToken.prototype), "clone", this).call(this, ErrorOverlayToken, startPosition, endPosition);
    }
  }], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbInR5cGUiLCJFUlJPUl9UT0tFTl9UWVBFIiwiRXJyb3JPdmVybGF5VG9rZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJvdmVybGFpZFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJlcnJvclRva2VuIiwiT3ZlcmxheVRva2VuIiwiZnJvbUNvbnRlbnRUeXBlQW5kT3ZlcmxhaWRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDRCQUFiLEMsQ0FBZ0M7O0lBRVhDLGlCOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxhLEVBQWVDLFcsRUFBYTtBQUFFLDBGQUFtQkYsaUJBQW5CLEVBQXNDQyxhQUF0QyxFQUFxREMsV0FBckQ7QUFBb0U7OztzQ0FJL0VDLGEsRUFBZTtBQUN0QyxVQUFNQyxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsVUFBZCxFQUFoQjtBQUFBLFVBQ01DLFVBQVUsR0FBR0Msb0JBQWFDLCtCQUFiLENBQTZDUixpQkFBN0MsRUFBZ0VJLE9BQWhFLEVBQXlFTixJQUF6RSxFQUErRUssYUFBL0UsQ0FEbkI7O0FBR0EsYUFBT0csVUFBUDtBQUNEOzs7O0VBVjRDQyxtQjs7OztnQkFBMUJQLGlCLFVBR0xGLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE92ZXJsYXlUb2tlbiBmcm9tIFwiLi4vLi4vdG9rZW4vb3ZlcmxheVwiO1xuXG5pbXBvcnQgeyBFUlJPUl9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuY29uc3QgdHlwZSA9IEVSUk9SX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JPdmVybGF5VG9rZW4gZXh0ZW5kcyBPdmVybGF5VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRXJyb3JPdmVybGF5VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyB0eXBlID0gdHlwZTtcblxuICBzdGF0aWMgZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbikge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBvdmVybGFpZFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBlcnJvclRva2VuID0gT3ZlcmxheVRva2VuLmZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4oRXJyb3JPdmVybGF5VG9rZW4sIGNvbnRlbnQsIHR5cGUsIG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgcmV0dXJuIGVycm9yVG9rZW47XG4gIH1cbn1cbiJdfQ==