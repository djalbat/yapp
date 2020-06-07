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
      this.setLineCount(lineCount);
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
    key: "getLineCount",
    value: function getLineCount() {
      var state = this.getState(),
          lineCount = state.lineCount;
      return lineCount;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var state = this.getState(),
          scrollTop = state.scrollTop;
      return scrollTop;
    }
  }, {
    key: "setLineCount",
    value: function setLineCount(lineCount) {
      this.updateState({
        lineCount: lineCount
      });
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
      return [/*#__PURE__*/_easy.React.createElement(_lineNumbers["default"], null)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLineCount = this.getLineCount.bind(this),
          getGutterWidth = this.getWidth.bind(this),
          ///
      positionGutter = this.position.bind(this),
          ///
      updateGutter = this.update.bind(this),
          ///
      scrollGutter = this.scroll.bind(this); ///

      return {
        getLineCount: getLineCount,
        getGutterWidth: getGutterWidth,
        positionGutter: positionGutter,
        updateGutter: updateGutter,
        scrollGutter: scrollGutter
      };
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var scrollTop = 0,
          lineCount = null;
      this.setState({
        scrollTop: scrollTop,
        lineCount: lineCount
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJzZXRMaW5lQ291bnQiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJwb3NpdGlvbiIsImdldFNjcm9sbFRvcCIsInRvcCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImdldExpbmVDb3VudCIsImJpbmQiLCJnZXRHdXR0ZXJXaWR0aCIsImdldFdpZHRoIiwicG9zaXRpb25HdXR0ZXIiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGUiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGwiLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJndXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIkdVVFRFUl9IRUlHSFQiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLE0sRUFBUTtBQUNiLFVBQU1DLFNBQVMsR0FBRyxpQ0FBb0JELE1BQXBCLENBQWxCO0FBRUEsV0FBS0UsWUFBTCxDQUFrQkQsU0FBbEI7QUFFQSxXQUFLRSxpQkFBTCxDQUF1QkYsU0FBdkI7QUFDRDs7OzJCQUVNRyxTLEVBQVdDLFUsRUFBWTtBQUM1QixXQUFLQyxZQUFMLENBQWtCRixTQUFsQjtBQUVBLFdBQUtHLFFBQUw7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUgsU0FBUyxHQUFHLEtBQUtJLFlBQUwsRUFBbEI7QUFFQSxVQUFNQyxHQUFHLGFBQU0sQ0FBQ0wsU0FBUCxPQUFUO0FBQUEsVUFDTU0sR0FBRyxHQUFHO0FBQ0pELFFBQUFBLEdBQUcsRUFBSEE7QUFESSxPQURaO0FBS0EsV0FBS0MsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7OzttQ0FFYztBQUNQLFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFWCxTQURGLEdBQ2dCVSxLQURoQixDQUNFVixTQURGO0FBR04sYUFBT0EsU0FBUDtBQUNEOzs7bUNBRWM7QUFDUCxVQUFBVSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRVIsU0FERixHQUNnQk8sS0FEaEIsQ0FDRVAsU0FERjtBQUdOLGFBQU9BLFNBQVA7QUFDRDs7O2lDQUVZSCxTLEVBQVc7QUFDdEIsV0FBS1ksV0FBTCxDQUFpQjtBQUNmWixRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O2lDQUVZRyxTLEVBQVc7QUFDdEIsV0FBS1MsV0FBTCxDQUFpQjtBQUNmVCxRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O29DQUVlO0FBQ2QsYUFBUSxjQUVOLDBCQUFDLHVCQUFELE9BRk0sQ0FBUjtBQUtEOzs7b0NBRWU7QUFDZixVQUFNVSxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFBQSxVQUNPQyxjQUFjLEdBQUcsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRHhCO0FBQUEsVUFDbUQ7QUFDaERHLE1BQUFBLGNBQWMsR0FBRyxLQUFLWCxRQUFMLENBQWNRLElBQWQsQ0FBbUIsSUFBbkIsQ0FGcEI7QUFBQSxVQUUrQztBQUM1Q0ksTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUwsSUFBWixDQUFpQixJQUFqQixDQUhsQjtBQUFBLFVBRzJDO0FBQ3hDTSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZUCxJQUFaLENBQWlCLElBQWpCLENBSmxCLENBRGUsQ0FLNEI7O0FBRTFDLGFBQVE7QUFDTkQsUUFBQUEsWUFBWSxFQUFaQSxZQURNO0FBRU5FLFFBQUFBLGNBQWMsRUFBZEEsY0FGTTtBQUdORSxRQUFBQSxjQUFjLEVBQWRBLGNBSE07QUFJTkMsUUFBQUEsWUFBWSxFQUFaQSxZQUpNO0FBS05FLFFBQUFBLFlBQVksRUFBWkE7QUFMTSxPQUFSO0FBT0Q7OztzQ0FFaUI7QUFDaEIsVUFBTWpCLFNBQVMsR0FBRyxDQUFsQjtBQUFBLFVBQ01ILFNBQVMsR0FBRyxJQURsQjtBQUdBLFdBQUtzQixRQUFMLENBQWM7QUFDWm5CLFFBQUFBLFNBQVMsRUFBVEEsU0FEWTtBQUVaSCxRQUFBQSxTQUFTLEVBQVRBO0FBRlksT0FBZDtBQUlEOzs7aUNBRVk7QUFDWCxXQUFLdUIsYUFBTDtBQUVBLFdBQUtDLGVBQUw7QUFDRDs7OzhCQVFnQkMsSyxFQUFPQyxVLEVBQVk7QUFDbEMsVUFBTUMsTUFBTSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSixLQUFsQixFQUF5QkMsVUFBekIsQ0FBZjs7QUFFQUMsTUFBQUEsTUFBTSxDQUFDRyxVQUFQO0FBRUEsYUFBT0gsTUFBUDtBQUNEOzs7O0VBeEdrQkMsYTs7Z0JBQWY5QixNLGFBNEZhLEs7O2dCQTVGYkEsTSx1QkE4RnVCO0FBQ3pCaUMsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVWpDLE1BQVYsQyxvQkFFSGtDLHdCLEVBS01DLHdCLEVBRUlDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBHVVRURVJfSEVJR0hUIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Ub2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdG9rZW5zXCI7XHJcbmltcG9ydCB7IGd1dHRlckJvcmRlckNvbG91ciwgZ3V0dGVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS92aWV3XCI7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy5zZXRMaW5lQ291bnQobGluZUNvdW50KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzKGxpbmVDb3VudCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHBvc2l0aW9uKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBnZXRMaW5lQ291bnQoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgbGluZUNvdW50IH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gbGluZUNvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHNjcm9sbFRvcCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcclxuICB9XHJcblxyXG4gIHNldExpbmVDb3VudChsaW5lQ291bnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChbXHJcblxyXG4gICAgICA8TGluZU51bWJlcnMgLz4sXHJcblxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgZ2V0TGluZUNvdW50ID0gdGhpcy5nZXRMaW5lQ291bnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgIGdldEd1dHRlcldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBwb3NpdGlvbkd1dHRlciA9IHRoaXMucG9zaXRpb24uYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgdXBkYXRlR3V0dGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsR3V0dGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBnZXRMaW5lQ291bnQsXHJcbiAgICAgIGdldEd1dHRlcldpZHRoLFxyXG4gICAgICBwb3NpdGlvbkd1dHRlcixcclxuICAgICAgdXBkYXRlR3V0dGVyLFxyXG4gICAgICBzY3JvbGxHdXR0ZXJcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgICAgbGluZUNvdW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wLFxyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IGd1dHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBndXR0ZXIuaW5pdGlhbGlzZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ3V0dGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEd1dHRlcilgXHJcblxyXG4gIGhlaWdodDogJHtHVVRURVJfSEVJR0hUfTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICR7Z3V0dGVyQm9yZGVyQ29sb3VyfTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1dHRlckJhY2tncm91bmRDb2xvdXJ9O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuYDtcclxuIl19