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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OverlayToken = /*#__PURE__*/function (_SignificantToken) {
  _inherits(OverlayToken, _SignificantToken);

  var _super = _createSuper(OverlayToken);

  function OverlayToken(type, content, innerHTML, significant, overlaidToken) {
    var _this;

    _classCallCheck(this, OverlayToken);

    _this = _super.call(this, type, content, innerHTML, significant);
    _this.overlaidToken = overlaidToken;
    return _this;
  }

  _createClass(OverlayToken, [{
    key: "getOverlaidToken",
    value: function getOverlaidToken() {
      return this.overlaidToken;
    }
  }, {
    key: "isEqualTo",
    value: function isEqualTo(token) {
      var equalTo = token === this.overlaidToken; ///

      return equalTo;
    }
  }], [{
    key: "fromOverlaidToken",
    value: function fromOverlaidToken(Class, overlaidToken) {
      var type = Class.type,
          content = overlaidToken.getContent(),
          overlayToken = _occamLexers.SignificantToken.fromContentAndType(Class, content, type, overlaidToken);

      return overlayToken;
    }
  }, {
    key: "fromContentTypeAndOverlaidToken",
    value: function fromContentTypeAndOverlaidToken(Class, content, type, overlaidToken) {
      return _occamLexers.SignificantToken.fromContentAndType(Class, content, type, overlaidToken);
    }
  }]);

  return OverlayToken;
}(_occamLexers.SignificantToken);

exports["default"] = OverlayToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJsYXkuanMiXSwibmFtZXMiOlsiT3ZlcmxheVRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJzaWduaWZpY2FudCIsIm92ZXJsYWlkVG9rZW4iLCJ0b2tlbiIsImVxdWFsVG8iLCJDbGFzcyIsImdldENvbnRlbnQiLCJvdmVybGF5VG9rZW4iLCJTaWduaWZpY2FudFRva2VuIiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7O0FBQ25CLHdCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsU0FBM0IsRUFBc0NDLFdBQXRDLEVBQW1EQyxhQUFuRCxFQUFrRTtBQUFBOztBQUFBOztBQUNoRSw4QkFBTUosSUFBTixFQUFZQyxPQUFaLEVBQXFCQyxTQUFyQixFQUFnQ0MsV0FBaEM7QUFFQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUhnRTtBQUlqRTs7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQSxhQUFaO0FBQ0Q7Ozs4QkFFU0MsSyxFQUFPO0FBQ2YsVUFBTUMsT0FBTyxHQUFJRCxLQUFLLEtBQUssS0FBS0QsYUFBaEMsQ0FEZSxDQUNpQzs7QUFFaEQsYUFBT0UsT0FBUDtBQUNEOzs7c0NBRXdCQyxLLEVBQU9ILGEsRUFBZTtBQUN2QyxVQUFFSixJQUFGLEdBQVdPLEtBQVgsQ0FBRVAsSUFBRjtBQUFBLFVBQ0FDLE9BREEsR0FDVUcsYUFBYSxDQUFDSSxVQUFkLEVBRFY7QUFBQSxVQUVBQyxZQUZBLEdBRWVDLDhCQUFpQkMsa0JBQWpCLENBQW9DSixLQUFwQyxFQUEyQ04sT0FBM0MsRUFBb0RELElBQXBELEVBQTBESSxhQUExRCxDQUZmOztBQUlOLGFBQU9LLFlBQVA7QUFDRDs7O29EQUVzQ0YsSyxFQUFPTixPLEVBQVNELEksRUFBTUksYSxFQUFlO0FBQUUsYUFBT00sOEJBQWlCQyxrQkFBakIsQ0FBb0NKLEtBQXBDLEVBQTJDTixPQUEzQyxFQUFvREQsSUFBcEQsRUFBMERJLGFBQTFELENBQVA7QUFBa0Y7Ozs7RUF6QnhITSw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5VG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgY29udGVudCwgaW5uZXJIVE1MLCBzaWduaWZpY2FudCwgb3ZlcmxhaWRUb2tlbikge1xuICAgIHN1cGVyKHR5cGUsIGNvbnRlbnQsIGlubmVySFRNTCwgc2lnbmlmaWNhbnQpO1xuXG4gICAgdGhpcy5vdmVybGFpZFRva2VuID0gb3ZlcmxhaWRUb2tlbjtcbiAgfVxuXG4gIGdldE92ZXJsYWlkVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxhaWRUb2tlbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0b2tlbikge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodG9rZW4gPT09IHRoaXMub3ZlcmxhaWRUb2tlbik7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgZnJvbU92ZXJsYWlkVG9rZW4oQ2xhc3MsIG92ZXJsYWlkVG9rZW4pIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IENsYXNzLFxuICAgICAgICAgIGNvbnRlbnQgPSBvdmVybGFpZFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBvdmVybGF5VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShDbGFzcywgY29udGVudCwgdHlwZSwgb3ZlcmxhaWRUb2tlbik7XG5cbiAgICByZXR1cm4gb3ZlcmxheVRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50VHlwZUFuZE92ZXJsYWlkVG9rZW4oQ2xhc3MsIGNvbnRlbnQsIHR5cGUsIG92ZXJsYWlkVG9rZW4pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKENsYXNzLCBjb250ZW50LCB0eXBlLCBvdmVybGFpZFRva2VuKTsgfVxufVxuIl19