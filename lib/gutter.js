"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamStyles = require("occam-styles");

var _lineNumbers = _interopRequireDefault(require("./lineNumbers"));

var _constants = require("./constants");

var _tokens = require("./utilities/tokens");

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

var gutterBorderColour = _occamStyles.prettyPrinterScheme.gutterBorderColour,
    gutterBackgroundColour = _occamStyles.prettyPrinterScheme.gutterBackgroundColour;

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

var _default = (0, _easyWithStyle["default"])(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT, gutterBorderColour, gutterBackgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJndXR0ZXJCb3JkZXJDb2xvdXIiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsIkd1dHRlciIsInRva2VucyIsImxpbmVDb3VudCIsInVwZGF0ZUxpbmVOdW1iZXJzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInBvc2l0aW9uIiwiZ2V0U2Nyb2xsVG9wIiwidG9wIiwiY3NzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwicHJvcGVydGllcyIsImdldEd1dHRlcldpZHRoIiwiZ2V0V2lkdGgiLCJiaW5kIiwicG9zaXRpb25HdXR0ZXIiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGUiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGwiLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsImd1dHRlciIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIiwiR1VUVEVSX0hFSUdIVCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxrQixHQUErQ0MsZ0MsQ0FBL0NELGtCO0lBQW9CRSxzQixHQUEyQkQsZ0MsQ0FBM0JDLHNCOztJQUV0QkMsTTs7Ozs7Ozs7Ozs7OzsyQkFDR0MsTSxFQUFRO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGlDQUFvQkQsTUFBcEIsQ0FBbEI7QUFFQSxXQUFLRSxpQkFBTCxDQUF1QkQsU0FBdkI7QUFDRDs7OzJCQUVNRSxTLEVBQVdDLFUsRUFBWTtBQUM1QixXQUFLQyxZQUFMLENBQWtCRixTQUFsQjtBQUVBLFdBQUtHLFFBQUw7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUgsU0FBUyxHQUFHLEtBQUtJLFlBQUwsRUFBbEI7QUFFQSxVQUFNQyxHQUFHLGFBQU0sQ0FBQ0wsU0FBUCxPQUFUO0FBQUEsVUFDTU0sR0FBRyxHQUFHO0FBQ0pELFFBQUFBLEdBQUcsRUFBSEE7QUFESSxPQURaO0FBS0EsV0FBS0MsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7OzttQ0FFYztBQUNQLFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFUixTQURGLEdBQ2dCTyxLQURoQixDQUNFUCxTQURGO0FBR04sYUFBT0EsU0FBUDtBQUNEOzs7aUNBRVlBLFMsRUFBVztBQUN0QixXQUFLUyxXQUFMLENBQWlCO0FBQ2ZULFFBQUFBLFNBQVMsRUFBVEE7QUFEZSxPQUFqQjtBQUdEOzs7a0NBRWFVLFUsRUFBWTtBQUN4QixhQUFRLGNBRU4sb0JBQUMsdUJBQUQsT0FGTSxDQUFSO0FBS0Q7OztvQ0FFZTtBQUNmLFVBQU1DLGNBQWMsR0FBRyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBdkI7QUFBQSxVQUFrRDtBQUMvQ0MsTUFBQUEsY0FBYyxHQUFHLEtBQUtYLFFBQUwsQ0FBY1UsSUFBZCxDQUFtQixJQUFuQixDQURwQjtBQUFBLFVBQytDO0FBQzVDRSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZSCxJQUFaLENBQWlCLElBQWpCLENBRmxCO0FBQUEsVUFFMkM7QUFDeENJLE1BQUFBLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlMLElBQVosQ0FBaUIsSUFBakIsQ0FIbEIsQ0FEZSxDQUk0Qjs7QUFFMUMsYUFBUTtBQUNORixRQUFBQSxjQUFjLEVBQWRBLGNBRE07QUFFTkcsUUFBQUEsY0FBYyxFQUFkQSxjQUZNO0FBR05DLFFBQUFBLFlBQVksRUFBWkEsWUFITTtBQUlORSxRQUFBQSxZQUFZLEVBQVpBO0FBSk0sT0FBUjtBQU1EOzs7c0NBRWlCO0FBQ2hCLFVBQU1qQixTQUFTLEdBQUcsQ0FBbEI7QUFFQSxXQUFLbUIsUUFBTCxDQUFjO0FBQ1puQixRQUFBQSxTQUFTLEVBQVRBO0FBRFksT0FBZDtBQUdEOzs7K0JBRVVVLFUsRUFBWTtBQUNyQixXQUFLVSxhQUFMO0FBRUEsV0FBS0MsZUFBTDtBQUNEOzs7OEJBUWdCQyxLLEVBQU9aLFUsRUFBWTtBQUNsQyxVQUFNYSxNQUFNLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCWixVQUF6QixDQUFmOztBQUVBYSxNQUFBQSxNQUFNLENBQUNHLFVBQVAsQ0FBa0JoQixVQUFsQjtBQUVBLGFBQU9hLE1BQVA7QUFDRDs7OztFQXJGa0JDLGE7O2dCQUFmNUIsTSxhQXlFYSxLOztnQkF6RWJBLE0sdUJBMkV1QjtBQUN6QitCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVUvQixNQUFWLEMsb0JBRUhnQyx3QixFQUtNbkMsa0IsRUFFSUUsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuaW1wb3J0IHsgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVycyBmcm9tIFwiLi9saW5lTnVtYmVyc1wiO1xyXG5cclxuaW1wb3J0IHsgR1VUVEVSX0hFSUdIVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY29uc3QgeyBndXR0ZXJCb3JkZXJDb2xvdXIsIGd1dHRlckJhY2tncm91bmRDb2xvdXIgfSA9IHByZXR0eVByaW50ZXJTY2hlbWU7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaW5lTnVtYmVycyhsaW5lQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHNjcm9sbFRvcCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcclxuICB9XHJcbiAgXHJcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiAoW1xyXG5cclxuICAgICAgPExpbmVOdW1iZXJzIC8+LFxyXG5cclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IGdldEd1dHRlcldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBwb3NpdGlvbkd1dHRlciA9IHRoaXMucG9zaXRpb24uYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgdXBkYXRlR3V0dGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsR3V0dGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBnZXRHdXR0ZXJXaWR0aCxcclxuICAgICAgcG9zaXRpb25HdXR0ZXIsXHJcbiAgICAgIHVwZGF0ZUd1dHRlcixcclxuICAgICAgc2Nyb2xsR3V0dGVyXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImd1dHRlclwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xyXG4gICAgY29uc3QgZ3V0dGVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgIGd1dHRlci5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ3V0dGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEd1dHRlcilgXHJcblxyXG4gIGhlaWdodDogJHtHVVRURVJfSEVJR0hUfTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICR7Z3V0dGVyQm9yZGVyQ29sb3VyfTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1dHRlckJhY2tncm91bmRDb2xvdXJ9O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuYDtcclxuIl19