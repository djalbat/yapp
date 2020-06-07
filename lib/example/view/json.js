"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _view = _interopRequireDefault(require("../view"));

var _json = _interopRequireDefault(require("../../interpreter/json"));

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

var JSONView = /*#__PURE__*/function (_View) {
  _inherits(JSONView, _View);

  var _super = _createSuper(JSONView);

  function JSONView() {
    var _this;

    _classCallCheck(this, JSONView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Interpreter", _json["default"]);

    _defineProperty(_assertThisInitialized(_this), "initialContent", "{  \n  \"type\": \"book\",\n  \"title\": \"Look to Windward\",\n  \"author\": \"Look to Windward\",\n  \"stores\" : [{\n    \"identifier\": 123\n  }],\n  \"details\" : {\n    \"in-print\": true,\n    \"stock-count\": 123\n  }\n}");

    return _this;
  }

  return JSONView;
}(_view["default"]);

exports["default"] = JSONView;

_defineProperty(JSONView, "defaultProperties", {
  className: "json"
});

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiSlNPTlZpZXciLCJKU09OSW50ZXJwcmV0ZXIiLCJWaWV3IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBQ0xDLGdCOzs7Ozs7OztFQURzQkMsZ0I7Ozs7Z0JBQWpCRixRLHVCQWdCUTtBQUN6QkcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFHNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEpTT05JbnRlcnByZXRlciBmcm9tIFwiLi4vLi4vaW50ZXJwcmV0ZXIvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OVmlldyBleHRlbmRzIFZpZXcge1xuICBJbnRlcnByZXRlciA9IEpTT05JbnRlcnByZXRlcjtcblxuICBpbml0aWFsQ29udGVudCA9IGB7ICBcbiAgXCJ0eXBlXCI6IFwiYm9va1wiLFxuICBcInRpdGxlXCI6IFwiTG9vayB0byBXaW5kd2FyZFwiLFxuICBcImF1dGhvclwiOiBcIkxvb2sgdG8gV2luZHdhcmRcIixcbiAgXCJzdG9yZXNcIiA6IFt7XG4gICAgXCJpZGVudGlmaWVyXCI6IDEyM1xuICB9XSxcbiAgXCJkZXRhaWxzXCIgOiB7XG4gICAgXCJpbi1wcmludFwiOiB0cnVlLFxuICAgIFwic3RvY2stY291bnRcIjogMTIzXG4gIH1cbn1gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwianNvblwiXG4gIH07XG59O1xuIl19