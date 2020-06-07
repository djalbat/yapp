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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    value: function childElements() {
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
    value: function initialise() {
      this.assignContext();
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var gutter = _easy.Element.fromClass(Class, properties);

      gutter.initialise();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJwb3NpdGlvbiIsImdldFNjcm9sbFRvcCIsInRvcCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImdldEd1dHRlcldpZHRoIiwiZ2V0V2lkdGgiLCJiaW5kIiwicG9zaXRpb25HdXR0ZXIiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGUiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGwiLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJndXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIkdVVFRFUl9IRUlHSFQiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLE0sRUFBUTtBQUNiLFVBQU1DLFNBQVMsR0FBRyxpQ0FBb0JELE1BQXBCLENBQWxCO0FBRUEsV0FBS0UsaUJBQUwsQ0FBdUJELFNBQXZCO0FBQ0Q7OzsyQkFFTUUsUyxFQUFXQyxVLEVBQVk7QUFDNUIsV0FBS0MsWUFBTCxDQUFrQkYsU0FBbEI7QUFFQSxXQUFLRyxRQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1ILFNBQVMsR0FBRyxLQUFLSSxZQUFMLEVBQWxCO0FBRUEsVUFBTUMsR0FBRyxhQUFNLENBQUNMLFNBQVAsT0FBVDtBQUFBLFVBQ01NLEdBQUcsR0FBRztBQUNKRCxRQUFBQSxHQUFHLEVBQUhBO0FBREksT0FEWjtBQUtBLFdBQUtDLEdBQUwsQ0FBU0EsR0FBVDtBQUNEOzs7bUNBRWM7QUFDUCxVQUFBQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRVIsU0FERixHQUNnQk8sS0FEaEIsQ0FDRVAsU0FERjtBQUdOLGFBQU9BLFNBQVA7QUFDRDs7O2lDQUVZQSxTLEVBQVc7QUFDdEIsV0FBS1MsV0FBTCxDQUFpQjtBQUNmVCxRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O29DQUVlO0FBQ2QsYUFBUSxjQUVOLG9CQUFDLHVCQUFELE9BRk0sQ0FBUjtBQUtEOzs7b0NBRWU7QUFDZixVQUFNVSxjQUFjLEdBQUcsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZCO0FBQUEsVUFBa0Q7QUFDL0NDLE1BQUFBLGNBQWMsR0FBRyxLQUFLVixRQUFMLENBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FEcEI7QUFBQSxVQUMrQztBQUM1Q0UsTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixJQUFqQixDQUZsQjtBQUFBLFVBRTJDO0FBQ3hDSSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZTCxJQUFaLENBQWlCLElBQWpCLENBSGxCLENBRGUsQ0FJNEI7O0FBRTFDLGFBQVE7QUFDTkYsUUFBQUEsY0FBYyxFQUFkQSxjQURNO0FBRU5HLFFBQUFBLGNBQWMsRUFBZEEsY0FGTTtBQUdOQyxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkUsUUFBQUEsWUFBWSxFQUFaQTtBQUpNLE9BQVI7QUFNRDs7O3NDQUVpQjtBQUNoQixVQUFNaEIsU0FBUyxHQUFHLENBQWxCO0FBRUEsV0FBS2tCLFFBQUwsQ0FBYztBQUNabEIsUUFBQUEsU0FBUyxFQUFUQTtBQURZLE9BQWQ7QUFHRDs7O2lDQUVZO0FBQ1gsV0FBS21CLGFBQUw7QUFFQSxXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLE1BQU0sR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQWY7O0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUDtBQUVBLGFBQU9ILE1BQVA7QUFDRDs7OztFQXJGa0JDLGE7O2dCQUFmNUIsTSxhQXlFYSxLOztnQkF6RWJBLE0sdUJBMkV1QjtBQUN6QitCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVUvQixNQUFWLEMsb0JBRUhnQyx3QixFQUtNQyx3QixFQUVJQyw0QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBHVVRURVJfSEVJR0hUIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Ub2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdG9rZW5zXCI7XHJcbmltcG9ydCB7IGd1dHRlckJvcmRlckNvbG91ciwgZ3V0dGVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS92aWV3XCI7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaW5lTnVtYmVycyhsaW5lQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHNjcm9sbFRvcCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcclxuICB9XHJcbiAgXHJcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChbXHJcblxyXG4gICAgICA8TGluZU51bWJlcnMgLz4sXHJcblxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgZ2V0R3V0dGVyV2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHBvc2l0aW9uR3V0dGVyID0gdGhpcy5wb3NpdGlvbi5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIGdldEd1dHRlcldpZHRoLFxyXG4gICAgICBwb3NpdGlvbkd1dHRlcixcclxuICAgICAgdXBkYXRlR3V0dGVyLFxyXG4gICAgICBzY3JvbGxHdXR0ZXJcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3BcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IGd1dHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBndXR0ZXIuaW5pdGlhbGlzZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ3V0dGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEd1dHRlcilgXHJcblxyXG4gIGhlaWdodDogJHtHVVRURVJfSEVJR0hUfTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICR7Z3V0dGVyQm9yZGVyQ29sb3VyfTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1dHRlckJhY2tncm91bmRDb2xvdXJ9O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuYDtcclxuIl19