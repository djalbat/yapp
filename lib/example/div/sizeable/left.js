"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyLayout = require("easy-layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 48rem;\n  min-width: 24rem;\n  \n"]);

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

var LeftSizeableDiv = /*#__PURE__*/function (_SizeableDiv) {
  _inherits(LeftSizeableDiv, _SizeableDiv);

  var _super = _createSuper(LeftSizeableDiv);

  function LeftSizeableDiv() {
    _classCallCheck(this, LeftSizeableDiv);

    return _super.apply(this, arguments);
  }

  _createClass(LeftSizeableDiv, [{
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          getLeftSizeableDivWidth = this.getWidth.bind(this),
          parentContext = Object.assign(context, {
        getLeftSizeableDivWidth: getLeftSizeableDivWidth
      });
      return parentContext;
    }
  }]);

  return LeftSizeableDiv;
}(_easyLayout.SizeableDiv);

var _default = (0, _easyWithStyle["default"])(LeftSizeableDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQuanMiXSwibmFtZXMiOlsiTGVmdFNpemVhYmxlRGl2IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldFdpZHRoIiwiYmluZCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJTaXplYWJsZURpdiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7Ozs7OztvQ0FDWTtBQUNkLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBRGhDO0FBQUEsVUFFTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsT0FBZCxFQUF1QjtBQUNyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQTtBQURxQyxPQUF2QixDQUZ0QjtBQU1BLGFBQU9HLGFBQVA7QUFDRDs7OztFQVQyQkcsdUI7O2VBWWYsK0JBQVVULGVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBTaXplYWJsZURpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5jbGFzcyBMZWZ0U2l6ZWFibGVEaXYgZXh0ZW5kcyBTaXplYWJsZURpdiB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdldExlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGdldExlZnRTaXplYWJsZURpdldpZHRoXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVmdFNpemVhYmxlRGl2KWBcblxuICB3aWR0aDogNDhyZW07XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIFxuYDtcbiJdfQ==