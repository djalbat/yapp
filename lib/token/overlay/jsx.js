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

var type = _tokenTypes.JSX_TOKEN_TYPE; ///

var JSXOverlayToken = /*#__PURE__*/function (_OverlayToken) {
  _inherits(JSXOverlayToken, _OverlayToken);

  var _super = _createSuper(JSXOverlayToken);

  function JSXOverlayToken() {
    _classCallCheck(this, JSXOverlayToken);

    return _super.apply(this, arguments);
  }

  _createClass(JSXOverlayToken, null, [{
    key: "fromOverlaidToken",
    value: function fromOverlaidToken(overlaidToken) {
      var content = overlaidToken.getContent(),
          jsxToken = _overlay["default"].fromContentTypeAndOverlaidToken(JSXOverlayToken, content, type, overlaidToken);

      return jsxToken;
    }
  }]);

  return JSXOverlayToken;
}(_overlay["default"]);

exports["default"] = JSXOverlayToken;

_defineProperty(JSXOverlayToken, "type", type);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzeC5qcyJdLCJuYW1lcyI6WyJ0eXBlIiwiSlNYX1RPS0VOX1RZUEUiLCJKU1hPdmVybGF5VG9rZW4iLCJvdmVybGFpZFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJqc3hUb2tlbiIsIk92ZXJsYXlUb2tlbiIsImZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLDBCQUFiLEMsQ0FBOEI7O0lBRVRDLGU7Ozs7Ozs7Ozs7Ozs7c0NBR01DLGEsRUFBZTtBQUN0QyxVQUFNQyxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsVUFBZCxFQUFoQjtBQUFBLFVBQ01DLFFBQVEsR0FBR0Msb0JBQWFDLCtCQUFiLENBQTZDTixlQUE3QyxFQUE4REUsT0FBOUQsRUFBdUVKLElBQXZFLEVBQTZFRyxhQUE3RSxDQURqQjs7QUFHQSxhQUFPRyxRQUFQO0FBQ0Q7Ozs7RUFSMENDLG1COzs7O2dCQUF4QkwsZSxVQUNMRixJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPdmVybGF5VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL292ZXJsYXlcIjtcblxuaW1wb3J0IHsgSlNYX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gSlNYX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNYT3ZlcmxheVRva2VuIGV4dGVuZHMgT3ZlcmxheVRva2VuIHtcbiAgc3RhdGljIHR5cGUgPSB0eXBlO1xuXG4gIHN0YXRpYyBmcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IG92ZXJsYWlkVG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGpzeFRva2VuID0gT3ZlcmxheVRva2VuLmZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4oSlNYT3ZlcmxheVRva2VuLCBjb250ZW50LCB0eXBlLCBvdmVybGFpZFRva2VuKTtcblxuICAgIHJldHVybiBqc3hUb2tlbjtcbiAgfVxufVxuIl19