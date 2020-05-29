"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _lineNumbers = _interopRequireDefault(require("./lineNumbers"));

var _constants = require("./constants");

var _tokens = require("./utilities/tokens");

var _view = require("./scheme/view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: ", ";\n  z-index: 2;\n  position: absolute;\n  text-align: right;\n  user-select: none;\n  border-color: ", ";\n  pointer-events: none;\n  background-color: ", ";\n  border-right-style: dotted;\n  border-right-width: 1px;\n\n"]);

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

var Gutter = /*#__PURE__*/function (_Element) {
  _inherits(Gutter, _Element);

  var _super = _createSuper(Gutter);

  function Gutter() {
    _classCallCheck(this, Gutter);

    return _super.apply(this, arguments);
  }

  _createClass(Gutter, [{
    key: "update",
    value: function update(tokens) {
      var lineCount = (0, _tokens.lineCountFromTokens)(tokens);
      this.updateLineNumbers(lineCount);
    }
  }, {
    key: "scroll",
    value: function scroll(scrollTop, scrollLeft) {
      this.setScrollTop(scrollTop);
      this.position();
    }
  }, {
    key: "position",
    value: function position() {
      var scrollTop = this.getScrollTop();
      var top = "".concat(-scrollTop, "px"),
          css = {
        top: top
      };
      this.css(css);
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var state = this.getState(),
          scrollTop = state.scrollTop;
      return scrollTop;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(scrollTop) {
      this.updateState({
        scrollTop: scrollTop
      });
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      return [/*#__PURE__*/React.createElement(_lineNumbers["default"], null)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getGutterWidth = this.getWidth.bind(this),
          ///
      positionGutter = this.position.bind(this),
          ///
      updateGutter = this.update.bind(this),
          ///
      scrollGutter = this.scroll.bind(this); ///

      return {
        getGutterWidth: getGutterWidth,
        positionGutter: positionGutter,
        updateGutter: updateGutter,
        scrollGutter: scrollGutter
      };
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var scrollTop = 0;
      this.setState({
        scrollTop: scrollTop
      });
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var gutter = _easy.Element.fromClass(Class, properties);

      gutter.initialise(properties);
      return gutter;
    }
  }]);

  return Gutter;
}(_easy.Element);

_defineProperty(Gutter, "tagName", "div");

_defineProperty(Gutter, "defaultProperties", {
  className: "gutter"
});

var _default = (0, _easyWithStyle["default"])(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT, _view.gutterBorderColour, _view.gutterBackgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJwb3NpdGlvbiIsImdldFNjcm9sbFRvcCIsInRvcCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInByb3BlcnRpZXMiLCJnZXRHdXR0ZXJXaWR0aCIsImdldFdpZHRoIiwiYmluZCIsInBvc2l0aW9uR3V0dGVyIiwidXBkYXRlR3V0dGVyIiwidXBkYXRlIiwic2Nyb2xsR3V0dGVyIiwic2Nyb2xsIiwic2V0U3RhdGUiLCJhc3NpZ25Db250ZXh0Iiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJndXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIkdVVFRFUl9IRUlHSFQiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLE0sRUFBUTtBQUNiLFVBQU1DLFNBQVMsR0FBRyxpQ0FBb0JELE1BQXBCLENBQWxCO0FBRUEsV0FBS0UsaUJBQUwsQ0FBdUJELFNBQXZCO0FBQ0Q7OzsyQkFFTUUsUyxFQUFXQyxVLEVBQVk7QUFDNUIsV0FBS0MsWUFBTCxDQUFrQkYsU0FBbEI7QUFFQSxXQUFLRyxRQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1ILFNBQVMsR0FBRyxLQUFLSSxZQUFMLEVBQWxCO0FBRUEsVUFBTUMsR0FBRyxhQUFNLENBQUNMLFNBQVAsT0FBVDtBQUFBLFVBQ01NLEdBQUcsR0FBRztBQUNKRCxRQUFBQSxHQUFHLEVBQUhBO0FBREksT0FEWjtBQUtBLFdBQUtDLEdBQUwsQ0FBU0EsR0FBVDtBQUNEOzs7bUNBRWM7QUFDUCxVQUFBQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRVIsU0FERixHQUNnQk8sS0FEaEIsQ0FDRVAsU0FERjtBQUdOLGFBQU9BLFNBQVA7QUFDRDs7O2lDQUVZQSxTLEVBQVc7QUFDdEIsV0FBS1MsV0FBTCxDQUFpQjtBQUNmVCxRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O2tDQUVhVSxVLEVBQVk7QUFDeEIsYUFBUSxjQUVOLG9CQUFDLHVCQUFELE9BRk0sQ0FBUjtBQUtEOzs7b0NBRWU7QUFDZixVQUFNQyxjQUFjLEdBQUcsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZCO0FBQUEsVUFBa0Q7QUFDL0NDLE1BQUFBLGNBQWMsR0FBRyxLQUFLWCxRQUFMLENBQWNVLElBQWQsQ0FBbUIsSUFBbkIsQ0FEcEI7QUFBQSxVQUMrQztBQUM1Q0UsTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixJQUFqQixDQUZsQjtBQUFBLFVBRTJDO0FBQ3hDSSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZTCxJQUFaLENBQWlCLElBQWpCLENBSGxCLENBRGUsQ0FJNEI7O0FBRTFDLGFBQVE7QUFDTkYsUUFBQUEsY0FBYyxFQUFkQSxjQURNO0FBRU5HLFFBQUFBLGNBQWMsRUFBZEEsY0FGTTtBQUdOQyxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkUsUUFBQUEsWUFBWSxFQUFaQTtBQUpNLE9BQVI7QUFNRDs7O3NDQUVpQjtBQUNoQixVQUFNakIsU0FBUyxHQUFHLENBQWxCO0FBRUEsV0FBS21CLFFBQUwsQ0FBYztBQUNabkIsUUFBQUEsU0FBUyxFQUFUQTtBQURZLE9BQWQ7QUFHRDs7OytCQUVVVSxVLEVBQVk7QUFDckIsV0FBS1UsYUFBTDtBQUVBLFdBQUtDLGVBQUw7QUFDRDs7OzhCQVFnQkMsSyxFQUFPWixVLEVBQVk7QUFDbEMsVUFBTWEsTUFBTSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QlosVUFBekIsQ0FBZjs7QUFFQWEsTUFBQUEsTUFBTSxDQUFDRyxVQUFQLENBQWtCaEIsVUFBbEI7QUFFQSxhQUFPYSxNQUFQO0FBQ0Q7Ozs7RUFyRmtCQyxhOztnQkFBZjVCLE0sYUF5RWEsSzs7Z0JBekViQSxNLHVCQTJFdUI7QUFDekIrQixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVL0IsTUFBVixDLG9CQUVIZ0Msd0IsRUFLTUMsd0IsRUFFSUMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVycyBmcm9tIFwiLi9saW5lTnVtYmVyc1wiO1xyXG5cclxuaW1wb3J0IHsgR1VUVEVSX0hFSUdIVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5pbXBvcnQgeyBndXR0ZXJCb3JkZXJDb2xvdXIsIGd1dHRlckJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvdmlld1wiO1xyXG5cclxuY2xhc3MgR3V0dGVyIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGluZU51bWJlcnMobGluZUNvdW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IGAkey1zY3JvbGxUb3B9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3BcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIGdldFNjcm9sbFRvcCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxUb3A7XHJcbiAgfVxyXG4gIFxyXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3BcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gKFtcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVycyAvPixcclxuXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBnZXRHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgcG9zaXRpb25HdXR0ZXIgPSB0aGlzLnBvc2l0aW9uLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHVwZGF0ZUd1dHRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbEd1dHRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgZ2V0R3V0dGVyV2lkdGgsXHJcbiAgICAgIHBvc2l0aW9uR3V0dGVyLFxyXG4gICAgICB1cGRhdGVHdXR0ZXIsXHJcbiAgICAgIHNjcm9sbEd1dHRlclxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IGd1dHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBndXR0ZXIuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGd1dHRlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXIpYFxyXG5cclxuICBoZWlnaHQ6ICR7R1VUVEVSX0hFSUdIVH07XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAke2d1dHRlckJvcmRlckNvbG91cn07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyfTtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGRvdHRlZDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuXHJcbmA7XHJcbiJdfQ==