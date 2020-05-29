"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _document = _interopRequireDefault(require("../document"));

var _javascript = _interopRequireDefault(require("../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../parser/javascript"));

var _occamDom = require("occam-dom");

var _jsx = _interopRequireDefault(require("../token/overlay/jsx"));

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

var jsxQuery = _occamDom.Query.fromExpression("//jsx");

var JavaScriptDocument = /*#__PURE__*/function (_Document) {
  _inherits(JavaScriptDocument, _Document);

  var _super = _createSuper(JavaScriptDocument);

  function JavaScriptDocument() {
    var _this;

    _classCallCheck(this, JavaScriptDocument);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);

    return _this;
  }

  _createClass(JavaScriptDocument, [{
    key: "postProcess",
    value: function postProcess() {
      var _this2 = this;

      var node = this.getNode(),
          tokens = this.getTokens(),
          jsxNodes = jsxQuery.execute(node);
      jsxNodes.forEach(function (jsxNode) {
        var jsxNodeFirstSignificantToken = jsxNode.getFirstSignificantToken(),
            jsxNodeLastSignificantToken = jsxNode.getLastSignificantToken(),
            firstJSXToken = jsxNodeFirstSignificantToken,
            ///
        lastJSXToken = jsxNodeLastSignificantToken,
            firstJSXTokenIndex = tokens.indexOf(firstJSXToken),
            lastJSXTokenIndex = tokens.indexOf(lastJSXToken);

        for (var jsxTokenIndex = firstJSXTokenIndex; jsxTokenIndex <= lastJSXTokenIndex; jsxTokenIndex++) {
          var jsxToken = tokens[jsxTokenIndex],
              overlaidToken = jsxToken,
              ///
          overlayTokenIndex = jsxTokenIndex,
              ///
          jsxOverlayToken = _jsx["default"].fromOverlaidToken(overlaidToken);

          _this2.overlayTokenMap[overlayTokenIndex] = jsxOverlayToken;
        }
      });
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _document["default"].fromNothing(JavaScriptDocument);
    }
  }]);

  return JavaScriptDocument;
}(_document["default"]);

exports["default"] = JavaScriptDocument;

_defineProperty(JavaScriptDocument, "Lexer", _javascript["default"]);

_defineProperty(JavaScriptDocument, "Parser", _javascript2["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsianN4UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiSmF2YVNjcmlwdERvY3VtZW50IiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIm5vZGUiLCJnZXROb2RlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwianN4Tm9kZXMiLCJleGVjdXRlIiwiZm9yRWFjaCIsImpzeE5vZGUiLCJqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwianN4Tm9kZUxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdEpTWFRva2VuIiwibGFzdEpTWFRva2VuIiwiZmlyc3RKU1hUb2tlbkluZGV4IiwiaW5kZXhPZiIsImxhc3RKU1hUb2tlbkluZGV4IiwianN4VG9rZW5JbmRleCIsImpzeFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYXlUb2tlbkluZGV4IiwianN4T3ZlcmxheVRva2VuIiwiSlNYT3ZlcmxheVRva2VuIiwiZnJvbU92ZXJsYWlkVG9rZW4iLCJvdmVybGF5VG9rZW5NYXAiLCJEb2N1bWVudCIsImZyb21Ob3RoaW5nIiwiSmF2YVNjcmlwdExleGVyIiwiSmF2YVNjcmlwdFBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsT0FBckIsQ0FBakI7O0lBRXFCQyxrQjs7Ozs7Ozs7Ozs7Ozs7OzsrREFDUkMsOEI7Ozs7Ozs7a0NBTUc7QUFBQTs7QUFDWixVQUFNQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFiO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtDLFNBQUwsRUFEZjtBQUFBLFVBRU1DLFFBQVEsR0FBR1QsUUFBUSxDQUFDVSxPQUFULENBQWlCTCxJQUFqQixDQUZqQjtBQUlBSSxNQUFBQSxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLFlBQU1DLDRCQUE0QixHQUFHRCxPQUFPLENBQUNFLHdCQUFSLEVBQXJDO0FBQUEsWUFDTUMsMkJBQTJCLEdBQUdILE9BQU8sQ0FBQ0ksdUJBQVIsRUFEcEM7QUFBQSxZQUVNQyxhQUFhLEdBQUdKLDRCQUZ0QjtBQUFBLFlBRW9EO0FBQzlDSyxRQUFBQSxZQUFZLEdBQUdILDJCQUhyQjtBQUFBLFlBSU1JLGtCQUFrQixHQUFHWixNQUFNLENBQUNhLE9BQVAsQ0FBZUgsYUFBZixDQUozQjtBQUFBLFlBS01JLGlCQUFpQixHQUFHZCxNQUFNLENBQUNhLE9BQVAsQ0FBZUYsWUFBZixDQUwxQjs7QUFPQSxhQUFLLElBQUlJLGFBQWEsR0FBR0gsa0JBQXpCLEVBQTZDRyxhQUFhLElBQUlELGlCQUE5RCxFQUFpRkMsYUFBYSxFQUE5RixFQUFrRztBQUNoRyxjQUFNQyxRQUFRLEdBQUdoQixNQUFNLENBQUNlLGFBQUQsQ0FBdkI7QUFBQSxjQUNNRSxhQUFhLEdBQUdELFFBRHRCO0FBQUEsY0FDZ0M7QUFDMUJFLFVBQUFBLGlCQUFpQixHQUFHSCxhQUYxQjtBQUFBLGNBRTBDO0FBQ3BDSSxVQUFBQSxlQUFlLEdBQUdDLGdCQUFnQkMsaUJBQWhCLENBQWtDSixhQUFsQyxDQUh4Qjs7QUFLQSxVQUFBLE1BQUksQ0FBQ0ssZUFBTCxDQUFxQkosaUJBQXJCLElBQTBDQyxlQUExQztBQUNEO0FBQ0YsT0FoQkQ7QUFpQkQ7OztrQ0FFb0I7QUFBRSxhQUFPSSxxQkFBU0MsV0FBVCxDQUFxQjVCLGtCQUFyQixDQUFQO0FBQWtEOzs7O0VBL0IzQjJCLG9COzs7O2dCQUEzQjNCLGtCLFdBR0o2QixzQjs7Z0JBSEk3QixrQixZQUtIOEIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERvY3VtZW50IGZyb20gXCIuLi9kb2N1bWVudFwiO1xuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgSlNYT3ZlcmxheVRva2VuIGZyb20gXCIuLi90b2tlbi9vdmVybGF5L2pzeFwiO1xuXG5pbXBvcnQgeyBKQVZBU0NSSVBUX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBqc3hRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHREb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IEphdmFTY3JpcHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlcjtcblxuICBwb3N0UHJvY2VzcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBqc3hOb2RlcyA9IGpzeFF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBqc3hOb2Rlcy5mb3JFYWNoKChqc3hOb2RlKSA9PiB7XG4gICAgICBjb25zdCBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0ganN4Tm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGpzeE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW4gPSBqc3hOb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgIGxhc3RKU1hUb2tlbiA9IGpzeE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbixcbiAgICAgICAgICAgIGZpcnN0SlNYVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0SlNYVG9rZW4pLFxuICAgICAgICAgICAgbGFzdEpTWFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0SlNYVG9rZW4pO1xuXG4gICAgICBmb3IgKGxldCBqc3hUb2tlbkluZGV4ID0gZmlyc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4IDw9IGxhc3RKU1hUb2tlbkluZGV4OyBqc3hUb2tlbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QganN4VG9rZW4gPSB0b2tlbnNbanN4VG9rZW5JbmRleF0sXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBqc3hUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0ganN4VG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBqc3hPdmVybGF5VG9rZW4gPSBKU1hPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0ganN4T3ZlcmxheVRva2VuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gRG9jdW1lbnQuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdERvY3VtZW50KTsgfVxufVxuIl19