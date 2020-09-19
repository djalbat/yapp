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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: ", ";\n  z-index: 2;\n  position: absolute;\n  text-align: right;\n  user-select: none;\n  pointer-events: none;\n  border-right-style: dotted;\n  border-right-width: 1px;\n\n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"]);

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

var _default = (0, _easyWithStyle["default"])(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHRlci5qcyJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJzZXRMaW5lQ291bnQiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJwb3NpdGlvbiIsImdldFNjcm9sbFRvcCIsInRvcCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0TGluZUNvdW50IiwiYmluZCIsImdldEd1dHRlcldpZHRoIiwiZ2V0V2lkdGgiLCJwb3NpdGlvbkd1dHRlciIsInVwZGF0ZUd1dHRlciIsInVwZGF0ZSIsInNjcm9sbEd1dHRlciIsInNjcm9sbCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJndXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIkdVVFRFUl9IRUlHSFQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs7OzsyQkFDR0MsTSxFQUFRO0FBQ2IsVUFBTUMsU0FBUyxHQUFHLGlDQUFvQkQsTUFBcEIsQ0FBbEI7QUFFQSxXQUFLRSxZQUFMLENBQWtCRCxTQUFsQjtBQUVBLFdBQUtFLGlCQUFMLENBQXVCRixTQUF2QjtBQUNEOzs7MkJBRU1HLFMsRUFBV0MsVSxFQUFZO0FBQzVCLFdBQUtDLFlBQUwsQ0FBa0JGLFNBQWxCO0FBRUEsV0FBS0csUUFBTDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSCxTQUFTLEdBQUcsS0FBS0ksWUFBTCxFQUFsQjtBQUVBLFVBQU1DLEdBQUcsYUFBTSxDQUFDTCxTQUFQLE9BQVQ7QUFBQSxVQUNNTSxHQUFHLEdBQUc7QUFDSkQsUUFBQUEsR0FBRyxFQUFIQTtBQURJLE9BRFo7QUFLQSxXQUFLQyxHQUFMLENBQVNBLEdBQVQ7QUFDRDs7O21DQUVjO0FBQ1AsVUFBQUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBUjtBQUFBLFVBQ0VYLFNBREYsR0FDZ0JVLEtBRGhCLENBQ0VWLFNBREY7QUFHTixhQUFPQSxTQUFQO0FBQ0Q7OzttQ0FFYztBQUNQLFVBQUFVLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFUixTQURGLEdBQ2dCTyxLQURoQixDQUNFUCxTQURGO0FBR04sYUFBT0EsU0FBUDtBQUNEOzs7aUNBRVlILFMsRUFBVztBQUN0QixXQUFLWSxXQUFMLENBQWlCO0FBQ2ZaLFFBQUFBLFNBQVMsRUFBVEE7QUFEZSxPQUFqQjtBQUdEOzs7aUNBRVlHLFMsRUFBVztBQUN0QixXQUFLUyxXQUFMLENBQWlCO0FBQ2ZULFFBQUFBLFNBQVMsRUFBVEE7QUFEZSxPQUFqQjtBQUdEOzs7b0NBRWU7QUFDZCxhQUFRLGNBRU4sMEJBQUMsdUJBQUQsT0FGTSxDQUFSO0FBS0Q7OztvQ0FFZTtBQUNmLFVBQU1VLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDT0MsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRHRCO0FBQUEsVUFFT0MsY0FBYyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUZ4QjtBQUFBLFVBRW1EO0FBQ2hERyxNQUFBQSxjQUFjLEdBQUcsS0FBS2IsUUFBTCxDQUFjVSxJQUFkLENBQW1CLElBQW5CLENBSHBCO0FBQUEsVUFHK0M7QUFDNUNJLE1BQUFBLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlMLElBQVosQ0FBaUIsSUFBakIsQ0FKbEI7QUFBQSxVQUkyQztBQUN4Q00sTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWVAsSUFBWixDQUFpQixJQUFqQixDQUxsQjtBQUFBLFVBSzJDO0FBQ3BDUSxNQUFBQSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLE9BQWxCLEVBQTJCO0FBQ3pDRSxRQUFBQSxZQUFZLEVBQVpBLFlBRHlDO0FBRXpDRSxRQUFBQSxjQUFjLEVBQWRBLGNBRnlDO0FBR3pDRSxRQUFBQSxjQUFjLEVBQWRBLGNBSHlDO0FBSXpDQyxRQUFBQSxZQUFZLEVBQVpBLFlBSnlDO0FBS3pDRSxRQUFBQSxZQUFZLEVBQVpBO0FBTHlDLE9BQTNCLENBTnZCO0FBY0MsYUFBT0UsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1yQixTQUFTLEdBQUcsQ0FBbEI7QUFBQSxVQUNNSCxTQUFTLEdBQUcsSUFEbEI7QUFHQSxXQUFLMkIsUUFBTCxDQUFjO0FBQ1p4QixRQUFBQSxTQUFTLEVBQVRBLFNBRFk7QUFFWkgsUUFBQUEsU0FBUyxFQUFUQTtBQUZZLE9BQWQ7QUFJRDs7O2lDQUVZO0FBQ1gsV0FBSzRCLGFBQUw7QUFFQSxXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLE1BQU0sR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQWY7O0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUDtBQUVBLGFBQU9ILE1BQVA7QUFDRDs7OztFQTFHa0JDLGE7O2dCQUFmbkMsTSxhQThGYSxLOztnQkE5RmJBLE0sdUJBZ0d1QjtBQUN6QnNDLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVV0QyxNQUFWLEMsb0JBRUh1Qyx3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVycyBmcm9tIFwiLi9saW5lTnVtYmVyc1wiO1xyXG5cclxuaW1wb3J0IHsgR1VUVEVSX0hFSUdIVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgR3V0dGVyIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0TGluZUNvdW50KGxpbmVDb3VudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaW5lTnVtYmVycyhsaW5lQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZUNvdW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxpbmVDb3VudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVDb3VudDtcclxuICB9XHJcblxyXG4gIGdldFNjcm9sbFRvcCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3BcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiAoW1xyXG5cclxuICAgICAgPExpbmVOdW1iZXJzIC8+LFxyXG5cclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcclxuICAgICAgICAgIGdldExpbmVDb3VudCA9IHRoaXMuZ2V0TGluZUNvdW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICBnZXRHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgcG9zaXRpb25HdXR0ZXIgPSB0aGlzLnBvc2l0aW9uLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHVwZGF0ZUd1dHRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbEd1dHRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksICAvLy9cclxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XHJcbiAgICAgICAgICAgIGdldExpbmVDb3VudCxcclxuICAgICAgICAgICAgZ2V0R3V0dGVyV2lkdGgsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uR3V0dGVyLFxyXG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXIsXHJcbiAgICAgICAgICAgIHNjcm9sbEd1dHRlclxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDAsXHJcbiAgICAgICAgICBsaW5lQ291bnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3AsXHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImd1dHRlclwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xyXG4gICAgY29uc3QgZ3V0dGVyID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgIGd1dHRlci5pbml0aWFsaXNlKCk7XHJcbiAgICBcclxuICAgIHJldHVybiBndXR0ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoR3V0dGVyKWBcclxuXHJcbiAgaGVpZ2h0OiAke0dVVFRFUl9IRUlHSFR9O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdfQ==