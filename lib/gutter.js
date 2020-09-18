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

var _prettyPrinter = require("./scheme/prettyPrinter");

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
      var context = this.getContext(),
          getLineCount = this.getLineCount.bind(this),
          getGutterWidth = this.getWidth.bind(this),
          ///
      positionGutter = this.position.bind(this),
          ///
      updateGutter = this.update.bind(this),
          ///
      scrollGutter = this.scroll.bind(this),
          ///
      parentContext = Object.assign({}, context, {
        getLineCount: getLineCount,
        getGutterWidth: getGutterWidth,
        positionGutter: positionGutter,
        updateGutter: updateGutter,
        scrollGutter: scrollGutter
      });
      return parentContext;
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

var _default = (0, _easyWithStyle["default"])(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT, _prettyPrinter.gutterBorderColour, _prettyPrinter.gutterBackgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJzZXRMaW5lQ291bnQiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJwb3NpdGlvbiIsImdldFNjcm9sbFRvcCIsInRvcCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0TGluZUNvdW50IiwiYmluZCIsImdldEd1dHRlcldpZHRoIiwiZ2V0V2lkdGgiLCJwb3NpdGlvbkd1dHRlciIsInVwZGF0ZUd1dHRlciIsInVwZGF0ZSIsInNjcm9sbEd1dHRlciIsInNjcm9sbCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJndXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIkdVVFRFUl9IRUlHSFQiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7MkJBQ0dDLE0sRUFBUTtBQUNiLFVBQU1DLFNBQVMsR0FBRyxpQ0FBb0JELE1BQXBCLENBQWxCO0FBRUEsV0FBS0UsWUFBTCxDQUFrQkQsU0FBbEI7QUFFQSxXQUFLRSxpQkFBTCxDQUF1QkYsU0FBdkI7QUFDRDs7OzJCQUVNRyxTLEVBQVdDLFUsRUFBWTtBQUM1QixXQUFLQyxZQUFMLENBQWtCRixTQUFsQjtBQUVBLFdBQUtHLFFBQUw7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUgsU0FBUyxHQUFHLEtBQUtJLFlBQUwsRUFBbEI7QUFFQSxVQUFNQyxHQUFHLGFBQU0sQ0FBQ0wsU0FBUCxPQUFUO0FBQUEsVUFDTU0sR0FBRyxHQUFHO0FBQ0pELFFBQUFBLEdBQUcsRUFBSEE7QUFESSxPQURaO0FBS0EsV0FBS0MsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7OzttQ0FFYztBQUNQLFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFWCxTQURGLEdBQ2dCVSxLQURoQixDQUNFVixTQURGO0FBR04sYUFBT0EsU0FBUDtBQUNEOzs7bUNBRWM7QUFDUCxVQUFBVSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRVIsU0FERixHQUNnQk8sS0FEaEIsQ0FDRVAsU0FERjtBQUdOLGFBQU9BLFNBQVA7QUFDRDs7O2lDQUVZSCxTLEVBQVc7QUFDdEIsV0FBS1ksV0FBTCxDQUFpQjtBQUNmWixRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O2lDQUVZRyxTLEVBQVc7QUFDdEIsV0FBS1MsV0FBTCxDQUFpQjtBQUNmVCxRQUFBQSxTQUFTLEVBQVRBO0FBRGUsT0FBakI7QUFHRDs7O29DQUVlO0FBQ2QsYUFBUSxjQUVOLDBCQUFDLHVCQUFELE9BRk0sQ0FBUjtBQUtEOzs7b0NBRWU7QUFDZixVQUFNVSxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ09DLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUR0QjtBQUFBLFVBRU9DLGNBQWMsR0FBRyxLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FGeEI7QUFBQSxVQUVtRDtBQUNoREcsTUFBQUEsY0FBYyxHQUFHLEtBQUtiLFFBQUwsQ0FBY1UsSUFBZCxDQUFtQixJQUFuQixDQUhwQjtBQUFBLFVBRytDO0FBQzVDSSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZTCxJQUFaLENBQWlCLElBQWpCLENBSmxCO0FBQUEsVUFJMkM7QUFDeENNLE1BQUFBLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlQLElBQVosQ0FBaUIsSUFBakIsQ0FMbEI7QUFBQSxVQUsyQztBQUNwQ1EsTUFBQUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCYixPQUFsQixFQUEyQjtBQUN6Q0UsUUFBQUEsWUFBWSxFQUFaQSxZQUR5QztBQUV6Q0UsUUFBQUEsY0FBYyxFQUFkQSxjQUZ5QztBQUd6Q0UsUUFBQUEsY0FBYyxFQUFkQSxjQUh5QztBQUl6Q0MsUUFBQUEsWUFBWSxFQUFaQSxZQUp5QztBQUt6Q0UsUUFBQUEsWUFBWSxFQUFaQTtBQUx5QyxPQUEzQixDQU52QjtBQWNDLGFBQU9FLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNckIsU0FBUyxHQUFHLENBQWxCO0FBQUEsVUFDTUgsU0FBUyxHQUFHLElBRGxCO0FBR0EsV0FBSzJCLFFBQUwsQ0FBYztBQUNaeEIsUUFBQUEsU0FBUyxFQUFUQSxTQURZO0FBRVpILFFBQUFBLFNBQVMsRUFBVEE7QUFGWSxPQUFkO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUs0QixhQUFMO0FBRUEsV0FBS0MsZUFBTDtBQUNEOzs7OEJBUWdCQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxNQUFNLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFmOztBQUVBQyxNQUFBQSxNQUFNLENBQUNHLFVBQVA7QUFFQSxhQUFPSCxNQUFQO0FBQ0Q7Ozs7RUExR2tCQyxhOztnQkFBZm5DLE0sYUE4RmEsSzs7Z0JBOUZiQSxNLHVCQWdHdUI7QUFDekJzQyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVdEMsTUFBVixDLG9CQUVIdUMsd0IsRUFLTUMsaUMsRUFFSUMscUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgTGluZU51bWJlcnMgZnJvbSBcIi4vbGluZU51bWJlcnNcIjtcclxuXHJcbmltcG9ydCB7IEdVVFRFUl9IRUlHSFQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgbGluZUNvdW50RnJvbVRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcclxuaW1wb3J0IHsgZ3V0dGVyQm9yZGVyQ29sb3VyLCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcclxuXHJcbmNsYXNzIEd1dHRlciBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Ub2tlbnModG9rZW5zKTtcclxuXHJcbiAgICB0aGlzLnNldExpbmVDb3VudChsaW5lQ291bnQpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGluZU51bWJlcnMobGluZUNvdW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IGAkey1zY3JvbGxUb3B9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3BcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIGdldExpbmVDb3VudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsaW5lQ291bnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBsaW5lQ291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTY3JvbGxUb3AoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgc2Nyb2xsVG9wIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gc2Nyb2xsVG9wO1xyXG4gIH1cclxuXHJcbiAgc2V0TGluZUNvdW50KGxpbmVDb3VudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFtcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVycyAvPixcclxuXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICBnZXRMaW5lQ291bnQgPSB0aGlzLmdldExpbmVDb3VudC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgZ2V0R3V0dGVyV2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHBvc2l0aW9uR3V0dGVyID0gdGhpcy5wb3NpdGlvbi5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAgLy8vXHJcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xyXG4gICAgICAgICAgICBnZXRMaW5lQ291bnQsXHJcbiAgICAgICAgICAgIGdldEd1dHRlcldpZHRoLFxyXG4gICAgICAgICAgICBwb3NpdGlvbkd1dHRlcixcclxuICAgICAgICAgICAgdXBkYXRlR3V0dGVyLFxyXG4gICAgICAgICAgICBzY3JvbGxHdXR0ZXJcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xyXG4gIH1cclxuICBcclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgICAgbGluZUNvdW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wLFxyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IGd1dHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBndXR0ZXIuaW5pdGlhbGlzZSgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZ3V0dGVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEd1dHRlcilgXHJcblxyXG4gIGhlaWdodDogJHtHVVRURVJfSEVJR0hUfTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICR7Z3V0dGVyQm9yZGVyQ29sb3VyfTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2d1dHRlckJhY2tncm91bmRDb2xvdXJ9O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuYDtcclxuIl19