"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  float: left;\n  margin: 0 6px 0 6px;\n  \n  color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"]);

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    key: "parentContext",
    value: function parentContext() {
      var updateLineNumbers = this.update.bind(this); ///

      return {
        updateLineNumbers: updateLineNumbers
      };
    }
  }]);

  return LineNumbers;
}(_easy.Element);

_defineProperty(LineNumbers, "tagName", "div");

_defineProperty(LineNumbers, "defaultProperties", {
  className: "line-numbers"
});

var _default = (0, _easyWithStyle["default"])(LineNumbers)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVOdW1iZXJzLmpzIl0sIm5hbWVzIjpbIkxpbmVOdW1iZXJzIiwibGluZUNvdW50IiwiaHRtbCIsImxpbmVOdW1iZXIiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInVwZGF0ZSIsImJpbmQiLCJFbGVtZW50IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLFMsRUFBVztBQUNoQixVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxXQUFLLElBQUlDLFVBQVUsR0FBRyxDQUF0QixFQUF5QkEsVUFBVSxJQUFJRixTQUF2QyxFQUFrREUsVUFBVSxFQUE1RCxFQUFnRTtBQUM5REQsUUFBQUEsSUFBSSxhQUFNQSxJQUFOLFNBQWFDLFVBQWIsVUFBSjtBQUNEOztBQUVELFdBQUtELElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNRSxpQkFBaUIsR0FBRyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBMUIsQ0FEZSxDQUNvQzs7QUFFbEQsYUFBUTtBQUNORixRQUFBQSxpQkFBaUIsRUFBakJBO0FBRE0sT0FBUjtBQUdEOzs7O0VBakJ1QkcsYTs7Z0JBQXBCUCxXLGFBbUJhLEs7O2dCQW5CYkEsVyx1QkFxQnVCO0FBQ3pCUSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQUtkLCtCQUFVUixXQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmNsYXNzIExpbmVOdW1iZXJzIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKGxpbmVDb3VudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGxpbmVOdW1iZXIgPSAxOyBsaW5lTnVtYmVyIDw9IGxpbmVDb3VudDsgbGluZU51bWJlcisrKSB7XHJcbiAgICAgIGh0bWwgPSBgJHtodG1sfSR7bGluZU51bWJlcn08YnIvPmA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IHVwZGF0ZUxpbmVOdW1iZXJzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICB1cGRhdGVMaW5lTnVtYmVyc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJsaW5lLW51bWJlcnNcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMaW5lTnVtYmVycylgXHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA2cHggMCA2cHg7XHJcbiAgXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogJ0RlamFWdSBTYW5zIE1vbm8nLCBNZW5sbywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBtb25vc3BhY2U7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl19