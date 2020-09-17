"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _common = _interopRequireDefault(require("./mixin/font/common"));

var _prettyPrinter = require("./scheme/prettyPrinter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: ", ";\n  float: left;\n  margin: 0 6px 0 6px;\n  \n  ", "\n\n"]);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LineNumbers = /*#__PURE__*/function (_Element) {
  _inherits(LineNumbers, _Element);

  var _super = _createSuper(LineNumbers);

  function LineNumbers() {
    _classCallCheck(this, LineNumbers);

    return _super.apply(this, arguments);
  }

  _createClass(LineNumbers, [{
    key: "update",
    value: function update(lineCount) {
      var html = "";

      for (var lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
        html = "".concat(html).concat(lineNumber, "<br/>");
      }

      this.html(html);
    }
  }, {
    key: "setLineHeight",
    value: function setLineHeight(lineHeight) {
      lineHeight = "".concat(lineHeight, "px"); ///

      this.style("line-height", lineHeight);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var updateLineNumbers = this.update.bind(this),
          ///
      setLineNumbersLineHeight = this.setLineHeight.bind(this); ///

      return {
        updateLineNumbers: updateLineNumbers,
        setLineNumbersLineHeight: setLineNumbersLineHeight
      };
    }
  }]);

  return LineNumbers;
}(_easy.Element);

_defineProperty(LineNumbers, "tagName", "div");

_defineProperty(LineNumbers, "defaultProperties", {
  className: "line-numbers"
});

var _default = (0, _easyWithStyle["default"])(LineNumbers)(_templateObject(), _prettyPrinter.lineNumbersColour, _common["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVOdW1iZXJzLmpzIl0sIm5hbWVzIjpbIkxpbmVOdW1iZXJzIiwibGluZUNvdW50IiwiaHRtbCIsImxpbmVOdW1iZXIiLCJsaW5lSGVpZ2h0Iiwic3R5bGUiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInVwZGF0ZSIsImJpbmQiLCJzZXRMaW5lTnVtYmVyc0xpbmVIZWlnaHQiLCJzZXRMaW5lSGVpZ2h0IiwiRWxlbWVudCIsImNsYXNzTmFtZSIsImxpbmVOdW1iZXJzQ29sb3VyIiwiY29tbW9uRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLFMsRUFBVztBQUNoQixVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxXQUFLLElBQUlDLFVBQVUsR0FBRyxDQUF0QixFQUF5QkEsVUFBVSxJQUFJRixTQUF2QyxFQUFrREUsVUFBVSxFQUE1RCxFQUFnRTtBQUM5REQsUUFBQUEsSUFBSSxhQUFNQSxJQUFOLFNBQWFDLFVBQWIsVUFBSjtBQUNEOztBQUVELFdBQUtELElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7a0NBRWFFLFUsRUFBWTtBQUN4QkEsTUFBQUEsVUFBVSxhQUFNQSxVQUFOLE9BQVYsQ0FEd0IsQ0FDUTs7QUFFaEMsV0FBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJELFVBQTFCO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1FLGlCQUFpQixHQUFHLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUExQjtBQUFBLFVBQW1EO0FBQzVDQyxNQUFBQSx3QkFBd0IsR0FBRyxLQUFLQyxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQURsQyxDQURlLENBRWtEOztBQUVoRSxhQUFRO0FBQ05GLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRE07QUFFTkcsUUFBQUEsd0JBQXdCLEVBQXhCQTtBQUZNLE9BQVI7QUFJRDs7OztFQXpCdUJFLGE7O2dCQUFwQlgsVyxhQTJCYSxLOztnQkEzQmJBLFcsdUJBNkJ1QjtBQUN6QlksRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFLZCwrQkFBVVosV0FBVixDLG9CQUVKYSxnQyxFQUlQQyxrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IGNvbW1vbkZvbnRNaXhpbiBmcm9tIFwiLi9taXhpbi9mb250L2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgbGluZU51bWJlcnNDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUobGluZUNvdW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluZU51bWJlciA9IDE7IGxpbmVOdW1iZXIgPD0gbGluZUNvdW50OyBsaW5lTnVtYmVyKyspIHtcclxuICAgICAgaHRtbCA9IGAke2h0bWx9JHtsaW5lTnVtYmVyfTxici8+YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lSGVpZ2h0KGxpbmVIZWlnaHQpIHtcclxuICAgIGxpbmVIZWlnaHQgPSBgJHtsaW5lSGVpZ2h0fXB4YDsgLy8vXHJcblxyXG4gICAgdGhpcy5zdHlsZShcImxpbmUtaGVpZ2h0XCIsIGxpbmVIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IHVwZGF0ZUxpbmVOdW1iZXJzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgc2V0TGluZU51bWJlcnNMaW5lSGVpZ2h0ID0gdGhpcy5zZXRMaW5lSGVpZ2h0LmJpbmQodGhpcyk7IC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICB1cGRhdGVMaW5lTnVtYmVycyxcclxuICAgICAgc2V0TGluZU51bWJlcnNMaW5lSGVpZ2h0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImxpbmUtbnVtYmVyc1wiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExpbmVOdW1iZXJzKWBcclxuXHJcbiAgY29sb3I6ICR7bGluZU51bWJlcnNDb2xvdXJ9O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA2cHggMCA2cHg7XHJcbiAgXHJcbiAgJHtjb21tb25Gb250TWl4aW59XHJcblxyXG5gO1xyXG4iXX0=