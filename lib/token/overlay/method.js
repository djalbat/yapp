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

var type = _tokenTypes.METHOD_TOKEN_TYPE; ///

var MethodOverlayToken = /*#__PURE__*/function (_OverlayToken) {
  _inherits(MethodOverlayToken, _OverlayToken);

  var _super = _createSuper(MethodOverlayToken);

  function MethodOverlayToken() {
    _classCallCheck(this, MethodOverlayToken);

    return _super.apply(this, arguments);
  }

  _createClass(MethodOverlayToken, null, [{
    key: "fromOverlaidToken",
    value: function fromOverlaidToken(overlaidToken) {
      var content = overlaidToken.getContent(),
          methodToken = _overlay["default"].fromContentTypeAndOverlaidToken(MethodOverlayToken, content, type, overlaidToken);

      return methodToken;
    }
  }]);

  return MethodOverlayToken;
}(_overlay["default"]);

exports["default"] = MethodOverlayToken;

_defineProperty(MethodOverlayToken, "type", type);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZC5qcyJdLCJuYW1lcyI6WyJ0eXBlIiwiTUVUSE9EX1RPS0VOX1RZUEUiLCJNZXRob2RPdmVybGF5VG9rZW4iLCJvdmVybGFpZFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtZXRob2RUb2tlbiIsIk92ZXJsYXlUb2tlbiIsImZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDZCQUFiLEMsQ0FBaUM7O0lBRVpDLGtCOzs7Ozs7Ozs7Ozs7O3NDQUdNQyxhLEVBQWU7QUFDdEMsVUFBTUMsT0FBTyxHQUFHRCxhQUFhLENBQUNFLFVBQWQsRUFBaEI7QUFBQSxVQUNNQyxXQUFXLEdBQUdDLG9CQUFhQywrQkFBYixDQUE2Q04sa0JBQTdDLEVBQWlFRSxPQUFqRSxFQUEwRUosSUFBMUUsRUFBZ0ZHLGFBQWhGLENBRHBCOztBQUdBLGFBQU9HLFdBQVA7QUFDRDs7OztFQVI2Q0MsbUI7Ozs7Z0JBQTNCTCxrQixVQUNMRixJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPdmVybGF5VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL292ZXJsYXlcIjtcblxuaW1wb3J0IHsgTUVUSE9EX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gTUVUSE9EX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0aG9kT3ZlcmxheVRva2VuIGV4dGVuZHMgT3ZlcmxheVRva2VuIHtcbiAgc3RhdGljIHR5cGUgPSB0eXBlO1xuXG4gIHN0YXRpYyBmcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IG92ZXJsYWlkVG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1ldGhvZFRva2VuID0gT3ZlcmxheVRva2VuLmZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4oTWV0aG9kT3ZlcmxheVRva2VuLCBjb250ZW50LCB0eXBlLCBvdmVybGFpZFRva2VuKTtcblxuICAgIHJldHVybiBtZXRob2RUb2tlbjtcbiAgfVxufVxuIl19