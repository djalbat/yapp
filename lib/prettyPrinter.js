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
          matches = lineHeightInPixels.match(/^(\d+(?:\.\d+)?)px$/),
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
          matches = borderWidthInPixels.match(/^(\d+(?:\.\d+)?)px$/),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJQcmV0dHlQcmludGVyIiwiaW5jbHVkZUJvcmRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsImxpbmVIZWlnaHRJblBpeGVscyIsImNzcyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwibGluZUhlaWdodCIsIk51bWJlciIsInNpZGUiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlcldpZHRoIiwiYm9yZGVyV2lkdGhJblBpeGVscyIsImJvcmRlcldpZHRoIiwicHJldmlvdXNHdXR0ZXJXaWR0aCIsInRvcCIsImxlZnQiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImlubmVyQm91bmRzIiwiQm91bmRzIiwiZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiZ2V0Qm9yZGVyTGVmdFdpZHRoIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGxTeW50YXgiLCJ0b2tlbnMiLCJnZXRQcmV2aW91c0d1dHRlcldpZHRoIiwidXBkYXRlR3V0dGVyIiwidXBkYXRlU3ludGF4IiwiZ3V0dGVyV2lkdGgiLCJnZXRHdXR0ZXJXaWR0aCIsInNldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJyZXNpemUiLCJnZXRJbm5lckJvdW5kcyIsImdldFJpY2hUZXh0YXJlYUJvdW5kcyIsImJvdW5kcyIsInBvc2l0aW9uR3V0dGVyIiwic2V0U3ludGF4Qm91bmRzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVWaWV3IiwiYmluZCIsInVwZGF0ZVZpZXciLCJ1cGRhdGUiLCJzY3JvbGxWaWV3Iiwic2Nyb2xsIiwic2V0Vmlld1dpZHRoIiwic2V0V2lkdGgiLCJzZXRWaWV3SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaXNWaWV3RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJnZXRMbmVIZWlnaHQiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLGEsRUFBZTtBQUN0QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLCtFQUFrQkosYUFBbEIsQ0FBWDs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLGdGQUFtQk4sYUFBbkIsQ0FBWjs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxrQkFBa0IsR0FBRyxLQUFLQyxHQUFMLENBQVMsYUFBVCxDQUEzQjtBQUFBLFVBQ01DLE9BQU8sR0FBR0Ysa0JBQWtCLENBQUNHLEtBQW5CLENBQXlCLHFCQUF6QixDQURoQjtBQUFBLFVBRU1DLFdBQVcsR0FBR2QsTUFBTSxDQUFDWSxPQUFELENBRjFCO0FBQUEsVUFHTUcsVUFBVSxHQUFHQyxNQUFNLENBQUNGLFdBQUQsQ0FIekIsQ0FEYSxDQUkyQjs7QUFFeEMsYUFBT0MsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1FLElBQUksR0FBRyxLQUFiO0FBQUEsVUFDTUMsY0FBYyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JGLElBQXBCLENBRHZCO0FBR0EsYUFBT0MsY0FBUDtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1ELElBQUksR0FBRyxNQUFiO0FBQUEsVUFDTUMsY0FBYyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JGLElBQXBCLENBRHZCO0FBR0EsYUFBT0MsY0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQU1ELElBQUksR0FBRyxPQUFiO0FBQUEsVUFDTUMsY0FBYyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JGLElBQXBCLENBRHZCO0FBR0EsYUFBT0MsY0FBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1ELElBQUksR0FBRyxRQUFiO0FBQUEsVUFDTUMsY0FBYyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0JGLElBQXBCLENBRHZCO0FBR0EsYUFBT0MsY0FBUDtBQUNEOzs7bUNBRWNELEksRUFBTTtBQUNuQixVQUFNRyxtQkFBbUIsR0FBRyxLQUFLVCxHQUFMLGtCQUFtQk0sSUFBbkIsWUFBNUI7QUFBQSxVQUNNTCxPQUFPLEdBQUdRLG1CQUFtQixDQUFDUCxLQUFwQixDQUEwQixxQkFBMUIsQ0FEaEI7QUFBQSxVQUVNQyxXQUFXLEdBQUdkLE1BQU0sQ0FBQ1ksT0FBRCxDQUYxQjtBQUFBLFVBR01TLFdBQVcsR0FBR0wsTUFBTSxDQUFDRixXQUFELENBSDFCLENBRG1CLENBSXNCOztBQUV6QyxhQUFPTyxXQUFQO0FBQ0Q7OzttQ0FFY0MsbUIsRUFBcUI7QUFDbEMsVUFBTW5CLGFBQWEsR0FBRyxLQUF0QjtBQUVBLFVBQUlvQixHQUFHLEdBQUcsQ0FBVjtBQUFBLFVBQWE7QUFDVEMsTUFBQUEsSUFBSSxHQUFHLENBRFg7QUFBQSxVQUNlO0FBQ1hqQixNQUFBQSxLQUFLLEdBQUcsS0FBS2tCLFFBQUwsQ0FBY3RCLGFBQWQsQ0FGWjtBQUFBLFVBR0lNLE1BQU0sR0FBRyxLQUFLaUIsU0FBTCxDQUFldkIsYUFBZixDQUhiO0FBS0FxQixNQUFBQSxJQUFJLElBQUlGLG1CQUFSO0FBQ0FmLE1BQUFBLEtBQUssSUFBSWUsbUJBQVQ7O0FBRUEsVUFBTUssV0FBVyxHQUFHQyxhQUFPQyx5QkFBUCxDQUFpQ04sR0FBakMsRUFBc0NDLElBQXRDLEVBQTRDakIsS0FBNUMsRUFBbURFLE1BQW5ELENBQXBCOztBQUVBLGFBQU9rQixXQUFQO0FBQ0Q7OzswQ0FFcUJBLFcsRUFBYTtBQUNqQyxVQUFNVCxjQUFjLEdBQUcsS0FBS1ksaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxlQUFlLEdBQUcsS0FBS0Msa0JBQUwsRUFEeEI7QUFHQSxVQUFJVCxHQUFHLEdBQUdJLFdBQVcsQ0FBQ00sTUFBWixFQUFWO0FBQUEsVUFBZ0M7QUFDNUJULE1BQUFBLElBQUksR0FBR0csV0FBVyxDQUFDTyxPQUFaLEVBRFg7QUFBQSxVQUNtQztBQUMvQjNCLE1BQUFBLEtBQUssR0FBR29CLFdBQVcsQ0FBQ0YsUUFBWixFQUZaO0FBQUEsVUFHSWhCLE1BQU0sR0FBR2tCLFdBQVcsQ0FBQ0QsU0FBWixFQUhiO0FBS0FILE1BQUFBLEdBQUcsSUFBSUwsY0FBUDtBQUNBTSxNQUFBQSxJQUFJLElBQUlPLGVBQVI7O0FBRUEsVUFBTUksa0JBQWtCLEdBQUdQLGFBQU9DLHlCQUFQLENBQWlDTixHQUFqQyxFQUFzQ0MsSUFBdEMsRUFBNENqQixLQUE1QyxFQUFtREUsTUFBbkQsQ0FBM0I7O0FBRUEsYUFBTzBCLGtCQUFQO0FBQ0Q7OzsyQkFFTUMsUyxFQUFXQyxVLEVBQVk7QUFDNUIsV0FBS0MsWUFBTCxDQUFrQkYsU0FBbEIsRUFBNkJDLFVBQTdCO0FBQ0EsV0FBS0UsWUFBTCxDQUFrQkgsU0FBbEIsRUFBNkJDLFVBQTdCO0FBQ0Q7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsVUFBSUwsa0JBQWtCLEdBQUcsSUFBekI7QUFBQSxVQUNJYixtQkFBbUIsR0FBRyxLQUFLbUIsc0JBQUwsRUFEMUI7QUFHQSxXQUFLQyxZQUFMLENBQWtCRixNQUFsQjtBQUNBLFdBQUtHLFlBQUwsQ0FBa0JILE1BQWxCO0FBRUEsVUFBTUksV0FBVyxHQUFHLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsVUFBSXZCLG1CQUFtQixLQUFLc0IsV0FBNUIsRUFBeUM7QUFDdkN0QixRQUFBQSxtQkFBbUIsR0FBR3NCLFdBQXRCLENBRHVDLENBQ0g7O0FBRXBDLGFBQUtFLHNCQUFMLENBQTRCeEIsbUJBQTVCO0FBRUFhLFFBQUFBLGtCQUFrQixHQUFHLEtBQUtZLE1BQUwsRUFBckI7QUFDRDs7QUFFRCxhQUFPWixrQkFBUDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNYixtQkFBbUIsR0FBRyxLQUFLbUIsc0JBQUwsRUFBNUI7QUFBQSxVQUNNZCxXQUFXLEdBQUcsS0FBS3FCLGNBQUwsQ0FBb0IxQixtQkFBcEIsQ0FEcEI7QUFBQSxVQUVNYSxrQkFBa0IsR0FBRyxLQUFLYyxxQkFBTCxDQUEyQnRCLFdBQTNCLENBRjNCO0FBQUEsVUFHTXVCLE1BQU0sR0FBR3ZCLFdBSGYsQ0FETyxDQUlxQjs7QUFFNUIsV0FBS3dCLGNBQUw7QUFFQSxXQUFLQyxlQUFMLENBQXFCRixNQUFyQjtBQUVBLGFBQU9mLGtCQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDakIsVUFBQWtCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFaEMsbUJBREYsR0FDMEIrQixLQUQxQixDQUNFL0IsbUJBREY7QUFHTixhQUFPQSxtQkFBUDtBQUNEOzs7MkNBRXNCQSxtQixFQUFxQjtBQUMxQyxXQUFLaUMsV0FBTCxDQUFpQjtBQUNmakMsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQURlLE9BQWpCO0FBR0Q7OztvQ0FFZTtBQUNkLGFBQVEsY0FFTiwwQkFBQyxrQkFBRCxPQUZNLGVBR04sMEJBQUMsa0JBQUQsT0FITSxDQUFSO0FBTUQ7OztvQ0FFZTtBQUNkLFVBQU1rQyxPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLFVBQVUsR0FBRyxLQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUIsSUFBakIsQ0FEbkI7QUFBQSxVQUMyQztBQUNyQ0MsTUFBQUEsVUFBVSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUZuQjtBQUFBLFVBRTJDO0FBQ3JDRyxNQUFBQSxVQUFVLEdBQUcsS0FBS0MsTUFBTCxDQUFZSixJQUFaLENBQWlCLElBQWpCLENBSG5CO0FBQUEsVUFHMkM7QUFDckNLLE1BQUFBLFlBQVksR0FBRyxLQUFLQyxRQUFMLENBQWNOLElBQWQsQ0FBbUIsSUFBbkIsQ0FKckI7QUFBQSxVQUkrQztBQUN6Q08sTUFBQUEsYUFBYSxHQUFHLEtBQUtDLFNBQUwsQ0FBZVIsSUFBZixDQUFvQixJQUFwQixDQUx0QjtBQUFBLFVBS2lEO0FBQzNDUyxNQUFBQSxlQUFlLEdBQUcsS0FBS0MsV0FBTCxDQUFpQlYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FOeEI7QUFBQSxVQU1xRDtBQUMvQ1csTUFBQUEsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JYLElBQWxCLENBQXVCLElBQXZCLENBUHJCO0FBQUEsVUFRTTdCLGlCQUFpQixHQUFHLEtBQUtBLGlCQUFMLENBQXVCNkIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FSMUI7QUFBQSxVQVNNWSxvQkFBb0IsR0FBRyxLQUFLQSxvQkFBTCxDQUEwQlosSUFBMUIsQ0FBK0IsSUFBL0IsQ0FUN0I7QUFBQSxVQVVNYSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbEIsT0FBZCxFQUF1QjtBQUNyQ0UsUUFBQUEsVUFBVSxFQUFWQSxVQURxQztBQUVyQ0UsUUFBQUEsVUFBVSxFQUFWQSxVQUZxQztBQUdyQ0UsUUFBQUEsVUFBVSxFQUFWQSxVQUhxQztBQUlyQ0UsUUFBQUEsWUFBWSxFQUFaQSxZQUpxQztBQUtyQ0UsUUFBQUEsYUFBYSxFQUFiQSxhQUxxQztBQU1yQ0UsUUFBQUEsZUFBZSxFQUFmQSxlQU5xQztBQU9yQ0UsUUFBQUEsWUFBWSxFQUFaQSxZQVBxQztBQVFyQ3hDLFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBUnFDO0FBU3JDeUMsUUFBQUEsb0JBQW9CLEVBQXBCQTtBQVRxQyxPQUF2QixDQVZ0QjtBQXNCQSxhQUFPQyxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTWxELG1CQUFtQixHQUFHLENBQTVCO0FBRUEsV0FBS3FELFFBQUwsQ0FBYztBQUNackQsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQURZLE9BQWQ7QUFHRDs7O2lDQUVZO0FBQ1gsV0FBS3NELGFBQUwsQ0FBbUIsQ0FDakIsZ0JBRGlCLEVBRWpCLGlCQUZpQixFQUdqQixnQkFIaUIsRUFJakIsY0FKaUIsRUFLakIsY0FMaUIsRUFNakIsY0FOaUIsRUFPakIsY0FQaUIsQ0FBbkI7QUFVQSxXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLElBQUksR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQWI7O0FBRUFDLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQXhPeUJDLGE7O2dCQUF0Qi9FLGEsYUE0TmEsSzs7Z0JBNU5iQSxhLHVCQThOdUI7QUFDekJrRixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVbEYsYUFBVixDLG9CQUVPbUYsMkIsRUFHQUMsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmltcG9ydCB7IGxpbmVIZWlnaHQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgYmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gc3VwZXIuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldExuZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhcImxpbmUtaGVpZ2h0XCIpLFxuICAgICAgICAgIG1hdGNoZXMgPSBsaW5lSGVpZ2h0SW5QaXhlbHMubWF0Y2goL14oXFxkKyg/OlxcLlxcZCspPylweCQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gTnVtYmVyKHNlY29uZE1hdGNoKTsgLy8vXG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBcInRvcFwiLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gXCJsZWZ0XCIsXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gXCJyaWdodFwiLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBcImJvdHRvbVwiLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgbWF0Y2hlcyA9IGJvcmRlcldpZHRoSW5QaXhlbHMubWF0Y2goL14oXFxkKyg/OlxcLlxcZCspPylweCQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBib3JkZXJXaWR0aCA9IE51bWJlcihzZWNvbmRNYXRjaCk7IC8vL1xuXG4gICAgcmV0dXJuIGJvcmRlcldpZHRoO1xuICB9XG5cbiAgZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIGNvbnN0IGluY2x1ZGVCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCB0b3AgPSAwLCAvLy9cbiAgICAgICAgbGVmdCA9IDAsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGxlZnQgKz0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgICB3aWR0aCAtPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuXG4gICAgY29uc3QgaW5uZXJCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIGlubmVyQm91bmRzO1xuICB9XG5cbiAgZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSB7XG4gICAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKTtcblxuICAgIGxldCB0b3AgPSBpbm5lckJvdW5kcy5nZXRUb3AoKSwgLy8vXG4gICAgICAgIGxlZnQgPSBpbm5lckJvdW5kcy5nZXRMZWZ0KCksICAvLy9cbiAgICAgICAgd2lkdGggPSBpbm5lckJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBpbm5lckJvdW5kcy5nZXRIZWlnaHQoKTtcblxuICAgIHRvcCArPSBib3JkZXJUb3BXaWR0aDtcbiAgICBsZWZ0ICs9IGJvcmRlckxlZnRXaWR0aDtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG4gICAgdGhpcy5zY3JvbGxTeW50YXgoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICBsZXQgcmljaFRleHRhcmVhQm91bmRzID0gbnVsbCxcbiAgICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpO1xuXG4gICAgdGhpcy51cGRhdGVHdXR0ZXIodG9rZW5zKTtcbiAgICB0aGlzLnVwZGF0ZVN5bnRheCh0b2tlbnMpO1xuXG4gICAgY29uc3QgZ3V0dGVyV2lkdGggPSB0aGlzLmdldEd1dHRlcldpZHRoKCk7XG5cbiAgICBpZiAocHJldmlvdXNHdXR0ZXJXaWR0aCAhPT0gZ3V0dGVyV2lkdGgpIHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSBndXR0ZXJXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCk7XG5cbiAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSxcbiAgICAgICAgICBib3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnBvc2l0aW9uR3V0dGVyKCk7XG5cbiAgICB0aGlzLnNldFN5bnRheEJvdW5kcyhib3VuZHMpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIC8+LFxuICAgICAgPFN5bnRheCAvPixcblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVWaWV3ID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlVmlldyA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRWaWV3V2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFZpZXdIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc1ZpZXdEaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldExuZUhlaWdodCA9IHRoaXMuZ2V0TG5lSGVpZ2h0LmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0Qm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0Qm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplVmlldyxcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcsXG4gICAgICAgICAgICBzY3JvbGxWaWV3LFxuICAgICAgICAgICAgc2V0Vmlld1dpZHRoLFxuICAgICAgICAgICAgc2V0Vmlld0hlaWdodCxcbiAgICAgICAgICAgIGlzVmlld0Rpc3BsYXllZCxcbiAgICAgICAgICAgIGdldExuZUhlaWdodCxcbiAgICAgICAgICAgIGdldEJvcmRlclRvcFdpZHRoLFxuICAgICAgICAgICAgZ2V0Qm9yZGVyQm90dG9tV2lkdGhcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcImdldEd1dHRlcldpZHRoXCIsXG4gICAgICBcInNldFN5bnRheEJvdW5kc1wiLFxuICAgICAgXCJwb3NpdGlvbkd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVHdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlU3ludGF4XCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxuICAgIF0pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXR0eS1wcmludGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuICAgIFxuICAgIHJldHVybiB2aWV3O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV0dHlQcmludGVyKWBcblxuICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuYDtcbiJdfQ==