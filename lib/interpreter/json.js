"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interpreter = _interopRequireDefault(require("../interpreter"));

var _json = _interopRequireDefault(require("../lexer/json"));

var _json2 = _interopRequireDefault(require("../parser/json"));

var _json3 = _interopRequireDefault(require("../processor/json"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSONInterpreter = /*#__PURE__*/function (_Interpreter) {
  _inherits(JSONInterpreter, _Interpreter);

  var _super = _createSuper(JSONInterpreter);

  function JSONInterpreter() {
    var _this;

    _classCallCheck(this, JSONInterpreter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JSON_LANGUAGE);

    return _this;
  }

  _createClass(JSONInterpreter, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      return _interpreter["default"].fromNothing(JSONInterpreter);
    }
  }]);

  return JSONInterpreter;
}(_interpreter["default"]);

exports["default"] = JSONInterpreter;

_defineProperty(JSONInterpreter, "Lexer", _json["default"]);

_defineProperty(JSONInterpreter, "Parser", _json2["default"]);

_defineProperty(JSONInterpreter, "Processor", _json3["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiSlNPTkludGVycHJldGVyIiwiSlNPTl9MQU5HVUFHRSIsIkludGVycHJldGVyIiwiZnJvbU5vdGhpbmciLCJKU09OTGV4ZXIiLCJKU09OUGFyc2VyIiwiSlNPTlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7OzsrREFDUkMsd0I7Ozs7Ozs7a0NBUVU7QUFBRSxhQUFPQyx3QkFBWUMsV0FBWixDQUF3QkgsZUFBeEIsQ0FBUDtBQUFrRDs7OztFQVQ5QkUsdUI7Ozs7Z0JBQXhCRixlLFdBR0pJLGdCOztnQkFISUosZSxZQUtISyxpQjs7Z0JBTEdMLGUsZUFPQU0saUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEludGVycHJldGVyIGZyb20gXCIuLi9pbnRlcnByZXRlclwiO1xuaW1wb3J0IEpTT05MZXhlciBmcm9tIFwiLi4vbGV4ZXIvanNvblwiO1xuaW1wb3J0IEpTT05QYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qc29uXCI7XG5pbXBvcnQgSlNPTlByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yL2pzb25cIjtcblxuaW1wb3J0IHsgSlNPTl9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OSW50ZXJwcmV0ZXIgZXh0ZW5kcyBJbnRlcnByZXRlciB7XG4gIGxhbmd1YWdlID0gSlNPTl9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKU09OTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEpTT05QYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEpTT05Qcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSW50ZXJwcmV0ZXIuZnJvbU5vdGhpbmcoSlNPTkludGVycHJldGVyKTsgfVxufVxuIl19