"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _scrollbarThickness = _interopRequireDefault(require("../../scrollbarThickness"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var BoundedScrollableElement = /*#__PURE__*/function (_Element) {
  _inherits(BoundedScrollableElement, _Element);

  var _super = _createSuper(BoundedScrollableElement);

  function BoundedScrollableElement() {
    _classCallCheck(this, BoundedScrollableElement);

    return _super.apply(this, arguments);
  }

  _createClass(BoundedScrollableElement, [{
    key: "scroll",
    value: function scroll(scrollTop, scrollLeft) {
      this.setScrollTop(scrollTop);
      this.setScrollLeft(scrollLeft);
      var top = this.getTop(),
          left = this.getLeft();
      this.position(top, left);
    }
  }, {
    key: "setBounds",
    value: function setBounds(bounds) {
      var top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();
      this.resize(width, height);
      this.position(top, left);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      width = width - _scrollbarThickness["default"];
      height = height - _scrollbarThickness["default"];
      this.setWidth(width);
      this.setHeight(height);
      var top = this.getTop(),
          left = this.getLeft();
      this.position(top, left);
    }
  }, {
    key: "position",
    value: function position(top, left) {
      this.setTop(top);
      this.setLeft(left);
      var width = this.getWidth(),
          height = this.getHeight();
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();
      top = top - scrollTop;
      left = left - scrollLeft;
      width = width + scrollLeft;
      height = height + scrollTop;
      top = "".concat(top, "px");
      left = "".concat(left, "px");
      width = "".concat(width, "px");
      height = "".concat(height, "px");
      var css = {
        top: top,
        left: left,
        width: width,
        height: height
      };
      this.css(css);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      var state = this.getState(),
          top = state.top;
      return top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      var state = this.getState(),
          left = state.left;
      return left;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var state = this.getState(),
          width = state.width;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var state = this.getState(),
          height = state.height;
      return height;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var state = this.getState(),
          scrollTop = state.scrollTop;
      return scrollTop;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      var state = this.getState(),
          scrollLeft = state.scrollLeft;
      return scrollLeft;
    }
  }, {
    key: "setTop",
    value: function setTop(top) {
      this.updateState({
        top: top
      });
    }
  }, {
    key: "setLeft",
    value: function setLeft(left) {
      this.updateState({
        left: left
      });
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.updateState({
        width: width
      });
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.updateState({
        height: height
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
    key: "setScrollLeft",
    value: function setScrollLeft(scrollLeft) {
      this.updateState({
        scrollLeft: scrollLeft
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var top = 0,
          left = 0,
          width = 0,
          height = 0,
          scrollTop = 0,
          scrollLeft = 0;
      this.setState({
        top: top,
        left: left,
        width: width,
        height: height,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
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
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var boundedScrollableElement = _easy.Element.fromClass.apply(_easy.Element, [Class, properties].concat(remainingArguments));

      boundedScrollableElement.initialise(properties);
      return boundedScrollableElement;
    }
  }]);

  return BoundedScrollableElement;
}(_easy.Element);

exports["default"] = BoundedScrollableElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGFibGUuanMiXSwibmFtZXMiOlsiQm91bmRlZFNjcm9sbGFibGVFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsInBvc2l0aW9uIiwiYm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJlc2l6ZSIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJjc3MiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRTdGF0ZSIsInByb3BlcnRpZXMiLCJhc3NpZ25Db250ZXh0Iiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJib3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7OzJCQUNaQyxTLEVBQVdDLFUsRUFBWTtBQUM1QixXQUFLQyxZQUFMLENBQWtCRixTQUFsQjtBQUNBLFdBQUtHLGFBQUwsQ0FBbUJGLFVBQW5CO0FBRUEsVUFBTUcsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01DLElBQUksR0FBRyxLQUFLQyxPQUFMLEVBRGI7QUFHQSxXQUFLQyxRQUFMLENBQWNKLEdBQWQsRUFBbUJFLElBQW5CO0FBQ0Q7Ozs4QkFFU0csTSxFQUFRO0FBQ2hCLFVBQU1MLEdBQUcsR0FBR0ssTUFBTSxDQUFDSixNQUFQLEVBQVo7QUFBQSxVQUNNQyxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0YsT0FBUCxFQURiO0FBQUEsVUFFTUcsS0FBSyxHQUFHRCxNQUFNLENBQUNFLFFBQVAsRUFGZDtBQUFBLFVBR01DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxTQUFQLEVBSGY7QUFLQSxXQUFLQyxNQUFMLENBQVlKLEtBQVosRUFBbUJFLE1BQW5CO0FBQ0EsV0FBS0osUUFBTCxDQUFjSixHQUFkLEVBQW1CRSxJQUFuQjtBQUNEOzs7MkJBRU1JLEssRUFBT0UsTSxFQUFRO0FBQ3BCRixNQUFBQSxLQUFLLEdBQUdBLEtBQUssR0FBR0ssOEJBQWhCO0FBQ0FILE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxHQUFHRyw4QkFBbEI7QUFFQSxXQUFLQyxRQUFMLENBQWNOLEtBQWQ7QUFDQSxXQUFLTyxTQUFMLENBQWVMLE1BQWY7QUFFQSxVQUFNUixHQUFHLEdBQUcsS0FBS0MsTUFBTCxFQUFaO0FBQUEsVUFDTUMsSUFBSSxHQUFHLEtBQUtDLE9BQUwsRUFEYjtBQUdBLFdBQUtDLFFBQUwsQ0FBY0osR0FBZCxFQUFtQkUsSUFBbkI7QUFDRDs7OzZCQUVRRixHLEVBQUtFLEksRUFBTTtBQUNsQixXQUFLWSxNQUFMLENBQVlkLEdBQVo7QUFDQSxXQUFLZSxPQUFMLENBQWFiLElBQWI7QUFFQSxVQUFJSSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFaO0FBQUEsVUFDSUMsTUFBTSxHQUFHLEtBQUtDLFNBQUwsRUFEYjtBQUdBLFVBQU1iLFNBQVMsR0FBRyxLQUFLb0IsWUFBTCxFQUFsQjtBQUFBLFVBQ01uQixVQUFVLEdBQUcsS0FBS29CLGFBQUwsRUFEbkI7QUFHQWpCLE1BQUFBLEdBQUcsR0FBR0EsR0FBRyxHQUFHSixTQUFaO0FBQ0FNLE1BQUFBLElBQUksR0FBR0EsSUFBSSxHQUFHTCxVQUFkO0FBQ0FTLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxHQUFHVCxVQUFoQjtBQUNBVyxNQUFBQSxNQUFNLEdBQUdBLE1BQU0sR0FBR1osU0FBbEI7QUFFQUksTUFBQUEsR0FBRyxhQUFNQSxHQUFOLE9BQUg7QUFDQUUsTUFBQUEsSUFBSSxhQUFNQSxJQUFOLE9BQUo7QUFDQUksTUFBQUEsS0FBSyxhQUFNQSxLQUFOLE9BQUw7QUFDQUUsTUFBQUEsTUFBTSxhQUFNQSxNQUFOLE9BQU47QUFFQSxVQUFNVSxHQUFHLEdBQUc7QUFDVmxCLFFBQUFBLEdBQUcsRUFBSEEsR0FEVTtBQUVWRSxRQUFBQSxJQUFJLEVBQUpBLElBRlU7QUFHVkksUUFBQUEsS0FBSyxFQUFMQSxLQUhVO0FBSVZFLFFBQUFBLE1BQU0sRUFBTkE7QUFKVSxPQUFaO0FBT0EsV0FBS1UsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFcEIsR0FERixHQUNVbUIsS0FEVixDQUNFbkIsR0FERjtBQUdOLGFBQU9BLEdBQVA7QUFDRDs7OzhCQUVTO0FBQ0YsVUFBQW1CLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFbEIsSUFERixHQUNXaUIsS0FEWCxDQUNFakIsSUFERjtBQUdOLGFBQU9BLElBQVA7QUFDRDs7OytCQUVVO0FBQ0gsVUFBQWlCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFZCxLQURGLEdBQ1lhLEtBRFosQ0FDRWIsS0FERjtBQUdOLGFBQU9BLEtBQVA7QUFDRDs7O2dDQUVXO0FBQ0osVUFBQWEsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBUjtBQUFBLFVBQ0VaLE1BREYsR0FDYVcsS0FEYixDQUNFWCxNQURGO0FBR04sYUFBT0EsTUFBUDtBQUNEOzs7bUNBRWM7QUFDUCxVQUFBVyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRXhCLFNBREYsR0FDZ0J1QixLQURoQixDQUNFdkIsU0FERjtBQUdOLGFBQU9BLFNBQVA7QUFDRDs7O29DQUVlO0FBQ1IsVUFBQXVCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFdkIsVUFERixHQUNpQnNCLEtBRGpCLENBQ0V0QixVQURGO0FBR04sYUFBT0EsVUFBUDtBQUNEOzs7MkJBRU1HLEcsRUFBSztBQUNWLFdBQUtxQixXQUFMLENBQWlCO0FBQ2ZyQixRQUFBQSxHQUFHLEVBQUhBO0FBRGUsT0FBakI7QUFHRDs7OzRCQUVPRSxJLEVBQU07QUFDWixXQUFLbUIsV0FBTCxDQUFpQjtBQUNmbkIsUUFBQUEsSUFBSSxFQUFKQTtBQURlLE9BQWpCO0FBR0Q7Ozs2QkFFUUksSyxFQUFPO0FBQ2QsV0FBS2UsV0FBTCxDQUFpQjtBQUNmZixRQUFBQSxLQUFLLEVBQUxBO0FBRGUsT0FBakI7QUFHRDs7OzhCQUVTRSxNLEVBQVE7QUFDaEIsV0FBS2EsV0FBTCxDQUFpQjtBQUNmYixRQUFBQSxNQUFNLEVBQU5BO0FBRGUsT0FBakI7QUFHRDs7O2lDQUVZWixTLEVBQVc7QUFDdEIsV0FBS3lCLFdBQUwsQ0FBaUI7QUFDZnpCLFFBQUFBLFNBQVMsRUFBVEE7QUFEZSxPQUFqQjtBQUdEOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixXQUFLd0IsV0FBTCxDQUFpQjtBQUNmeEIsUUFBQUEsVUFBVSxFQUFWQTtBQURlLE9BQWpCO0FBR0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUcsR0FBRyxHQUFHLENBQVo7QUFBQSxVQUNNRSxJQUFJLEdBQUcsQ0FEYjtBQUFBLFVBRU1JLEtBQUssR0FBRyxDQUZkO0FBQUEsVUFHTUUsTUFBTSxHQUFHLENBSGY7QUFBQSxVQUlNWixTQUFTLEdBQUcsQ0FKbEI7QUFBQSxVQUtNQyxVQUFVLEdBQUcsQ0FMbkI7QUFPQSxXQUFLeUIsUUFBTCxDQUFjO0FBQ1p0QixRQUFBQSxHQUFHLEVBQUhBLEdBRFk7QUFFWkUsUUFBQUEsSUFBSSxFQUFKQSxJQUZZO0FBR1pJLFFBQUFBLEtBQUssRUFBTEEsS0FIWTtBQUlaRSxRQUFBQSxNQUFNLEVBQU5BLE1BSlk7QUFLWlosUUFBQUEsU0FBUyxFQUFUQSxTQUxZO0FBTVpDLFFBQUFBLFVBQVUsRUFBVkE7QUFOWSxPQUFkO0FBUUQ7OzsrQkFFVTBCLFUsRUFBWTtBQUNyQixXQUFLQyxhQUFMO0FBRUEsV0FBS0MsZUFBTDtBQUNEOzs7OEJBRWdCQyxLLEVBQU9ILFUsRUFBbUM7QUFBQSx3Q0FBcEJJLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQ3pELFVBQU1DLHdCQUF3QixHQUFHQyxjQUFRQyxTQUFSLHVCQUFrQkosS0FBbEIsRUFBeUJILFVBQXpCLFNBQXdDSSxrQkFBeEMsRUFBakM7O0FBRUFDLE1BQUFBLHdCQUF3QixDQUFDRyxVQUF6QixDQUFvQ1IsVUFBcEM7QUFFQSxhQUFPSyx3QkFBUDtBQUNEOzs7O0VBNUttREMsYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHNjcm9sbGJhclRoaWNrbmVzcyBmcm9tIFwiLi4vLi4vc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZHMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IGJvdW5kcy5nZXRMZWZ0KCksXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHdpZHRoID0gd2lkdGggLSBzY3JvbGxiYXJUaGlja25lc3M7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdGhpcy5zZXRUb3AodG9wKTtcbiAgICB0aGlzLnNldExlZnQobGVmdCk7XG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRvcCA9IHRvcCAtIHNjcm9sbFRvcDtcbiAgICBsZWZ0ID0gbGVmdCAtIHNjcm9sbExlZnQ7XG4gICAgd2lkdGggPSB3aWR0aCArIHNjcm9sbExlZnQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0ICsgc2Nyb2xsVG9wO1xuXG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB0b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgd2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgaGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRvcCA9IDAsXG4gICAgICAgICAgbGVmdCA9IDAsXG4gICAgICAgICAgd2lkdGggPSAwLFxuICAgICAgICAgIGhlaWdodCA9IDAsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9wLFxuICAgICAgbGVmdCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgYm91bmRlZFNjcm9sbGFibGVFbGVtZW50ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBib3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBib3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==