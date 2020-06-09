"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _necessary = require("necessary");

var _easy = require("easy");

var _gutter = _interopRequireDefault(require("./gutter"));

var _syntax = _interopRequireDefault(require("./syntax"));

var _constants = require("./constants");

var _prettyPrinter = require("./scheme/prettyPrinter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  border: 1px solid ", ";\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n\n"]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var second = _necessary.arrayUtilities.second;

var PrettyPrinter = /*#__PURE__*/function (_Element) {
  _inherits(PrettyPrinter, _Element);

  var _super = _createSuper(PrettyPrinter);

  function PrettyPrinter() {
    _classCallCheck(this, PrettyPrinter);

    return _super.apply(this, arguments);
  }

  _createClass(PrettyPrinter, [{
    key: "getWidth",
    value: function getWidth(includeBorder) {
      var hidden = this.isHidden();

      if (hidden) {
        this.show();
      }

      var width = _get(_getPrototypeOf(PrettyPrinter.prototype), "getWidth", this).call(this, includeBorder);

      if (hidden) {
        this.hide();
      }

      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight(includeBorder) {
      var hidden = this.isHidden();

      if (hidden) {
        this.show();
      }

      var height = _get(_getPrototypeOf(PrettyPrinter.prototype), "getHeight", this).call(this, includeBorder);

      if (hidden) {
        this.hide();
      }

      return height;
    }
  }, {
    key: "getLneHeight",
    value: function getLneHeight() {
      var lineHeightInPixels = this.css("line-height"),
          matches = lineHeightInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          lineHeight = Number(secondMatch); ///

      return lineHeight;
    }
  }, {
    key: "getBorderTopWidth",
    value: function getBorderTopWidth() {
      var side = "top",
          borderTopWidth = this.getBorderWidth(side);
      return borderTopWidth;
    }
  }, {
    key: "getBorderLeftWidth",
    value: function getBorderLeftWidth() {
      var side = "left",
          borderTopWidth = this.getBorderWidth(side);
      return borderTopWidth;
    }
  }, {
    key: "getBorderRightWidth",
    value: function getBorderRightWidth() {
      var side = "right",
          borderTopWidth = this.getBorderWidth(side);
      return borderTopWidth;
    }
  }, {
    key: "getBorderBottomWidth",
    value: function getBorderBottomWidth() {
      var side = "bottom",
          borderTopWidth = this.getBorderWidth(side);
      return borderTopWidth;
    }
  }, {
    key: "getBorderWidth",
    value: function getBorderWidth(side) {
      var borderWidthInPixels = this.css("border-".concat(side, "-width")),
          matches = borderWidthInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          borderWidth = Number(secondMatch); ///

      return borderWidth;
    }
  }, {
    key: "getInnerBounds",
    value: function getInnerBounds(previousGutterWidth) {
      var includeBorder = false;
      var top = 0,
          ///
      left = 0,
          ///
      width = this.getWidth(includeBorder),
          height = this.getHeight(includeBorder);
      left += previousGutterWidth;
      width -= previousGutterWidth;

      var innerBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

      return innerBounds;
    }
  }, {
    key: "getRichTextareaBounds",
    value: function getRichTextareaBounds(innerBounds) {
      var borderTopWidth = this.getBorderTopWidth(),
          borderLeftWidth = this.getBorderLeftWidth();
      var top = innerBounds.getTop(),
          ///
      left = innerBounds.getLeft(),
          ///
      width = innerBounds.getWidth(),
          height = innerBounds.getHeight();
      top += borderTopWidth;
      left += borderLeftWidth;

      var richTextareaBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

      return richTextareaBounds;
    }
  }, {
    key: "scroll",
    value: function scroll(scrollTop, scrollLeft) {
      this.scrollGutter(scrollTop, scrollLeft);
      this.scrollSyntax(scrollTop, scrollLeft);
    }
  }, {
    key: "update",
    value: function update(tokens) {
      var richTextareaBounds = null,
          previousGutterWidth = this.getPreviousGutterWidth();
      this.updateGutter(tokens);
      this.updateSyntax(tokens);
      var gutterWidth = this.getGutterWidth();

      if (previousGutterWidth !== gutterWidth) {
        previousGutterWidth = gutterWidth; ///

        this.setPreviousGutterWidth(previousGutterWidth);
        richTextareaBounds = this.resize();
      }

      return richTextareaBounds;
    }
  }, {
    key: "resize",
    value: function resize() {
      var previousGutterWidth = this.getPreviousGutterWidth(),
          innerBounds = this.getInnerBounds(previousGutterWidth),
          richTextareaBounds = this.getRichTextareaBounds(innerBounds),
          bounds = innerBounds; ///

      this.positionGutter();
      this.setSyntaxBounds(bounds);
      return richTextareaBounds;
    }
  }, {
    key: "getPreviousGutterWidth",
    value: function getPreviousGutterWidth() {
      var state = this.getState(),
          previousGutterWidth = state.previousGutterWidth;
      return previousGutterWidth;
    }
  }, {
    key: "setPreviousGutterWidth",
    value: function setPreviousGutterWidth(previousGutterWidth) {
      this.updateState({
        previousGutterWidth: previousGutterWidth
      });
    }
  }, {
    key: "childElements",
    value: function childElements() {
      return [/*#__PURE__*/_easy.React.createElement(_gutter["default"], null), /*#__PURE__*/_easy.React.createElement(_syntax["default"], null)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          resizeView = this.resize.bind(this),
          ///
      updateView = this.update.bind(this),
          ///
      scrollView = this.scroll.bind(this),
          ///
      setViewWidth = this.setWidth.bind(this),
          ///
      setViewHeight = this.setHeight.bind(this),
          ///
      isViewDisplayed = this.isDisplayed.bind(this),
          ///
      getLneHeight = this.getLneHeight.bind(this),
          getBorderTopWidth = this.getBorderTopWidth.bind(this),
          getBorderBottomWidth = this.getBorderBottomWidth.bind(this),
          parentContext = Object.assign(context, {
        resizeView: resizeView,
        updateView: updateView,
        scrollView: scrollView,
        setViewWidth: setViewWidth,
        setViewHeight: setViewHeight,
        isViewDisplayed: isViewDisplayed,
        getLneHeight: getLneHeight,
        getBorderTopWidth: getBorderTopWidth,
        getBorderBottomWidth: getBorderBottomWidth
      });
      return parentContext;
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousGutterWidth = 0;
      this.setState({
        previousGutterWidth: previousGutterWidth
      });
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext(["getGutterWidth", "setSyntaxBounds", "positionGutter", "updateGutter", "updateSyntax", "scrollGutter", "scrollSyntax"]);
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var view = _easy.Element.fromClass(Class, properties);

      view.initialise();
      return view;
    }
  }]);

  return PrettyPrinter;
}(_easy.Element);

_defineProperty(PrettyPrinter, "tagName", "div");

_defineProperty(PrettyPrinter, "defaultProperties", {
  className: "pretty-printer"
});

var _default = (0, _easyWithStyle["default"])(PrettyPrinter)(_templateObject(), _prettyPrinter.borderColour, _prettyPrinter.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJQcmV0dHlQcmludGVyIiwiaW5jbHVkZUJvcmRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsImxpbmVIZWlnaHRJblBpeGVscyIsImNzcyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwibGluZUhlaWdodCIsIk51bWJlciIsInNpZGUiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlcldpZHRoIiwiYm9yZGVyV2lkdGhJblBpeGVscyIsImJvcmRlcldpZHRoIiwicHJldmlvdXNHdXR0ZXJXaWR0aCIsInRvcCIsImxlZnQiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImlubmVyQm91bmRzIiwiQm91bmRzIiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiZ2V0Qm9yZGVyTGVmdFdpZHRoIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGxTeW50YXgiLCJ0b2tlbnMiLCJnZXRQcmV2aW91c0d1dHRlcldpZHRoIiwidXBkYXRlR3V0dGVyIiwidXBkYXRlU3ludGF4IiwiZ3V0dGVyV2lkdGgiLCJnZXRHdXR0ZXJXaWR0aCIsInNldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJyZXNpemUiLCJnZXRJbm5lckJvdW5kcyIsImdldFJpY2hUZXh0YXJlYUJvdW5kcyIsImJvdW5kcyIsInBvc2l0aW9uR3V0dGVyIiwic2V0U3ludGF4Qm91bmRzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVWaWV3IiwiYmluZCIsInVwZGF0ZVZpZXciLCJ1cGRhdGUiLCJzY3JvbGxWaWV3Iiwic2Nyb2xsIiwic2V0Vmlld1dpZHRoIiwic2V0V2lkdGgiLCJzZXRWaWV3SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaXNWaWV3RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJnZXRMbmVIZWlnaHQiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLGEsRUFBZTtBQUN0QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLCtFQUFrQkosYUFBbEIsQ0FBWDs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLGdGQUFtQk4sYUFBbkIsQ0FBWjs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxrQkFB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VUFGcUM7QUFHckNFLFFBQUFBLFVBQVUsRUFBVkEsVUFIcUM7QUFJckNFLFFBQUFBLFlBQVksRUFBWkEsWUFKcUM7QUFLckNFLFFBQUFBLGFBQWEsRUFBYkEsYUFMcUM7QUFNckNFLFFBQUFBLGVBQWUsRUFBZkEsZUFOcUM7QUFPckNFLFFBQUFBLFlBQVksRUFBWkEsWUFQcUM7QUFRckN4QyxRQUFBQSxpQkFBaUIsRUFBakJBLGlCQVJxQztBQVNyQ3lDLFFBQUFBLG9CQUFvQixFQUFwQkE7QUFUcUMsT0FBdkIsQ0FWdEI7QUFzQkEsYUFBT0MsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1sRCxtQkFBbUIsR0FBRyxDQUE1QjtBQUVBLFdBQUtxRCxRQUFMLENBQWM7QUFDWnJELFFBQUFBLG1CQUFtQixFQUFuQkE7QUFEWSxPQUFkO0FBR0Q7OztpQ0FFWTtBQUNYLFdBQUtzRCxhQUFMLENBQW1CLENBQ2pCLGdCQURpQixFQUVqQixpQkFGaUIsRUFHakIsZ0JBSGlCLEVBSWpCLGNBSmlCLEVBS2pCLGNBTGlCLEVBTWpCLGNBTmlCLEVBT2pCLGNBUGlCLENBQW5CO0FBVUEsV0FBS0MsZUFBTDtBQUNEOzs7OEJBUWdCQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxJQUFJLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFiOztBQUVBQyxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUF4T3lCQyxhOztnQkFBdEIvRSxhLGFBNE5hLEs7O2dCQTVOYkEsYSx1QkE4TnVCO0FBQ3pCa0YsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVWxGLGFBQVYsQyxvQkFFT21GLDJCLEVBR0FDLCtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUmVhY3QsIEJvdW5kcywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL3N5bnRheFwiO1xuXG5pbXBvcnQgeyBsaW5lSGVpZ2h0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gc3VwZXIuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRMbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoXCJsaW5lLWhlaWdodFwiKSxcbiAgICAgICAgICBtYXRjaGVzID0gbGluZUhlaWdodEluUGl4ZWxzLm1hdGNoKC9eKFxcZCspcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgbGluZUhlaWdodCA9IE51bWJlcihzZWNvbmRNYXRjaCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gXCJ0b3BcIixcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJMZWZ0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFwibGVmdFwiLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclJpZ2h0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFwicmlnaHRcIixcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJCb3R0b21XaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gXCJib3R0b21cIixcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJXaWR0aChzaWRlKSB7XG4gICAgY29uc3QgYm9yZGVyV2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKGBib3JkZXItJHtzaWRlfS13aWR0aGApLFxuICAgICAgICAgIG1hdGNoZXMgPSBib3JkZXJXaWR0aEluUGl4ZWxzLm1hdGNoKC9eKFxcZCspcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICBjb25zdCBpbmNsdWRlQm9yZGVyID0gZmFsc2U7XG5cbiAgICBsZXQgdG9wID0gMCwgLy8vXG4gICAgICAgIGxlZnQgPSAwLCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBsZWZ0ICs9IHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcblxuICAgIGNvbnN0IGlubmVyQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcykge1xuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCk7XG5cbiAgICBsZXQgdG9wID0gaW5uZXJCb3VuZHMuZ2V0VG9wKCksIC8vL1xuICAgICAgICBsZWZ0ID0gaW5uZXJCb3VuZHMuZ2V0TGVmdCgpLCAgLy8vXG4gICAgICAgIHdpZHRoID0gaW5uZXJCb3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gaW5uZXJCb3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0b3AgKz0gYm9yZGVyVG9wV2lkdGg7XG4gICAgbGVmdCArPSBib3JkZXJMZWZ0V2lkdGg7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlR3V0dGVyKHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVTeW50YXgodG9rZW5zKTtcblxuICAgIGNvbnN0IGd1dHRlcldpZHRoID0gdGhpcy5nZXRHdXR0ZXJXaWR0aCgpO1xuXG4gICAgaWYgKHByZXZpb3VzR3V0dGVyV2lkdGggIT09IGd1dHRlcldpZHRoKSB7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gZ3V0dGVyV2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpO1xuXG4gICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhwcmV2aW91c0d1dHRlcldpZHRoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcyksXG4gICAgICAgICAgYm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5wb3NpdGlvbkd1dHRlcigpO1xuXG4gICAgdGhpcy5zZXRTeW50YXhCb3VuZHMoYm91bmRzKTtcblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICBnZXRQcmV2aW91c0d1dHRlcldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNHdXR0ZXJXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEd1dHRlciAvPixcbiAgICAgIDxTeW50YXggLz4sXG5cbiAgICBdKTtcbiAgfVxuICBcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVzaXplVmlldyA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVZpZXcgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzY3JvbGxWaWV3ID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0Vmlld1dpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRWaWV3SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaXNWaWV3RGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRMbmVIZWlnaHQgPSB0aGlzLmdldExuZUhlaWdodC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldEJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldEJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHJlc2l6ZVZpZXcsXG4gICAgICAgICAgICB1cGRhdGVWaWV3LFxuICAgICAgICAgICAgc2Nyb2xsVmlldyxcbiAgICAgICAgICAgIHNldFZpZXdXaWR0aCxcbiAgICAgICAgICAgIHNldFZpZXdIZWlnaHQsXG4gICAgICAgICAgICBpc1ZpZXdEaXNwbGF5ZWQsXG4gICAgICAgICAgICBnZXRMbmVIZWlnaHQsXG4gICAgICAgICAgICBnZXRCb3JkZXJUb3BXaWR0aCxcbiAgICAgICAgICAgIGdldEJvcmRlckJvdHRvbVdpZHRoXG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCJcbiAgICBdKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJDb2xvdXJ9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbmA7XG4iXX0=