"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

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

var stringLiteralType = _occamLexers.types.stringLiteralType;
var type = stringLiteralType; ///

var StringToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  var _super = _createSuper(StringToken);

  function StringToken() {
    _classCallCheck(this, StringToken);

    return _super.apply(this, arguments);
  }

  _createClass(StringToken, null, [{
    key: "fromContent",
    value: function fromContent(content) {
      return _occamLexers.SignificantToken.fromContentAndType(StringToken, content, type);
    }
  }]);

  return StringToken;
}(_occamLexers.SignificantToken);

exports["default"] = StringToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5qcyJdLCJuYW1lcyI6WyJzdHJpbmdMaXRlcmFsVHlwZSIsInR5cGVzIiwidHlwZSIsIlN0cmluZ1Rva2VuIiwiY29udGVudCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxpQixHQUFzQkMsa0IsQ0FBdEJELGlCO0FBRVIsSUFBTUUsSUFBSSxHQUFHRixpQkFBYixDLENBQWdDOztJQUVYRyxXOzs7Ozs7Ozs7Ozs7O2dDQUNBQyxPLEVBQVM7QUFBRSxhQUFPQyw4QkFBaUJDLGtCQUFqQixDQUFvQ0gsV0FBcEMsRUFBaURDLE9BQWpELEVBQTBERixJQUExRCxDQUFQO0FBQXlFOzs7O0VBRGhFRyw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuLCB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuY29uc3QgeyBzdHJpbmdMaXRlcmFsVHlwZSB9ID0gdHlwZXM7XG5cbmNvbnN0IHR5cGUgPSBzdHJpbmdMaXRlcmFsVHlwZTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShTdHJpbmdUb2tlbiwgY29udGVudCwgdHlwZSk7IH1cbn1cbiJdfQ==