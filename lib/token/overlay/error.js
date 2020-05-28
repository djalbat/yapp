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

var ErrorToken = /*#__PURE__*/function (_OverlayToken) {
  _inherits(ErrorToken, _OverlayToken);

  var _super = _createSuper(ErrorToken);

  function ErrorToken() {
    _classCallCheck(this, ErrorToken);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorToken, [{
    key: "clone",
    value: function clone(startPosition, endPosition) {
      return _get(_getPrototypeOf(ErrorToken.prototype), "clone", this).call(this, ErrorToken, startPosition, endPosition);
    }
  }], [{
    key: "fromOverlaidToken",
    value: function fromOverlaidToken(overlaidToken) {
      var content = overlaidToken.getContent(),
          errorToken = _overlay["default"].fromContentTypeAndOverlaidToken(ErrorToken, content, type, overlaidToken);

      return errorToken;
    }
  }]);

  return ErrorToken;
}(_overlay["default"]);

exports["default"] = ErrorToken;

_defineProperty(ErrorToken, "type", type);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbInR5cGUiLCJFUlJPUl9UT0tFTl9UWVBFIiwiRXJyb3JUb2tlbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm92ZXJsYWlkVG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImVycm9yVG9rZW4iLCJPdmVybGF5VG9rZW4iLCJmcm9tQ29udGVudFR5cGVBbmRPdmVybGFpZFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsNEJBQWIsQyxDQUFnQzs7SUFFWEMsVTs7Ozs7Ozs7Ozs7OzswQkFDYkMsYSxFQUFlQyxXLEVBQWE7QUFBRSxtRkFBbUJGLFVBQW5CLEVBQStCQyxhQUEvQixFQUE4Q0MsV0FBOUM7QUFBNkQ7OztzQ0FJeEVDLGEsRUFBZTtBQUN0QyxVQUFNQyxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsVUFBZCxFQUFoQjtBQUFBLFVBQ01DLFVBQVUsR0FBR0Msb0JBQWFDLCtCQUFiLENBQTZDUixVQUE3QyxFQUF5REksT0FBekQsRUFBa0VOLElBQWxFLEVBQXdFSyxhQUF4RSxDQURuQjs7QUFHQSxhQUFPRyxVQUFQO0FBQ0Q7Ozs7RUFWcUNDLG1COzs7O2dCQUFuQlAsVSxVQUdMRixJIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPdmVybGF5VG9rZW4gZnJvbSBcIi4uLy4uL3Rva2VuL292ZXJsYXlcIjtcblxuaW1wb3J0IHsgRVJST1JfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmNvbnN0IHR5cGUgPSBFUlJPUl9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBPdmVybGF5VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoRXJyb3JUb2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyB9XG5cbiAgc3RhdGljIHR5cGUgPSB0eXBlO1xuXG4gIHN0YXRpYyBmcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IG92ZXJsYWlkVG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGVycm9yVG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbUNvbnRlbnRUeXBlQW5kT3ZlcmxhaWRUb2tlbihFcnJvclRva2VuLCBjb250ZW50LCB0eXBlLCBvdmVybGFpZFRva2VuKTtcblxuICAgIHJldHVybiBlcnJvclRva2VuO1xuICB9XG59XG4iXX0=