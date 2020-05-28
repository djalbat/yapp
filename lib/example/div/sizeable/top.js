"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyLayout = require("easy-layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: 36rem;\n  min-height: 12rem;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var TopSizeableDiv = /*#__PURE__*/function (_SizeableDiv) {
  _inherits(TopSizeableDiv, _SizeableDiv);

  var _super = _createSuper(TopSizeableDiv);

  function TopSizeableDiv() {
    _classCallCheck(this, TopSizeableDiv);

    return _super.apply(this, arguments);
  }

  _createClass(TopSizeableDiv, [{
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          getTopSizeableDivHeight = this.getHeight.bind(this),
          parentContext = Object.assign(context, {
        getTopSizeableDivHeight: getTopSizeableDivHeight
      });
      return parentContext;
    }
  }]);

  return TopSizeableDiv;
}(_easyLayout.SizeableDiv);

var _default = (0, _easyWithStyle["default"])(TopSizeableDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5qcyJdLCJuYW1lcyI6WyJUb3BTaXplYWJsZURpdiIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRIZWlnaHQiLCJiaW5kIiwicGFyZW50Q29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsIlNpemVhYmxlRGl2Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyx1QkFBdUIsR0FBRyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FEaEM7QUFBQSxVQUVNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxPQUFkLEVBQXVCO0FBQ3JDRSxRQUFBQSx1QkFBdUIsRUFBdkJBO0FBRHFDLE9BQXZCLENBRnRCO0FBTUEsYUFBT0csYUFBUDtBQUNEOzs7O0VBVDBCRyx1Qjs7ZUFZZCwrQkFBVVQsY0FBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNpemVhYmxlRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmNsYXNzIFRvcFNpemVhYmxlRGl2IGV4dGVuZHMgU2l6ZWFibGVEaXYge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZXRUb3BTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHRcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUb3BTaXplYWJsZURpdilgXG5cbiAgaGVpZ2h0OiAzNnJlbTtcbiAgbWluLWhlaWdodDogMTJyZW07XG4gIFxuYDtcbiJdfQ==