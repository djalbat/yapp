"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _necessary = require("necessary");

var _easy = require("easy");

var _occamStyles = require("occam-styles");

var _gutter = _interopRequireDefault(require("./gutter"));

var _syntax = _interopRequireDefault(require("./syntax"));

var _constants = require("./constants");

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

var second = _necessary.arrayUtilities.second,
    borderColour = _occamStyles.prettyPrinterScheme.borderColour,
    backgroundColour = _occamStyles.prettyPrinterScheme.backgroundColour;

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
    key: "getBorderTopWidth",
    value: function getBorderTopWidth() {
      var borderTopWidthInPixels = this.css("border-top-width"),
          matches = borderTopWidthInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          borderTopWidth = Number(secondMatch); ///

      return borderTopWidth;
    }
  }, {
    key: "getBorderLeftWidth",
    value: function getBorderLeftWidth() {
      var borderLeftWidthInPixels = this.css("border-top-width"),
          matches = borderLeftWidthInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          borderLeftWidth = Number(secondMatch); ///

      return borderLeftWidth;
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
    value: function childElements(properties) {
      return [/*#__PURE__*/React.createElement(_gutter["default"], null), /*#__PURE__*/React.createElement(_syntax["default"], null)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          resizePrettyPrinter = this.resize.bind(this),
          ///
      updatePrettyPrinter = this.update.bind(this),
          ///
      scrollPrettyPrinter = this.scroll.bind(this),
          ///
      setPrettyPrinterWidth = this.setWidth.bind(this),
          ///
      setPrettyPrinterHeight = this.setHeight.bind(this),
          ///
      isPrettyPrinterDisplayed = this.isDisplayed.bind(this),
          ///
      parentContext = Object.assign(context, {
        resizePrettyPrinter: resizePrettyPrinter,
        updatePrettyPrinter: updatePrettyPrinter,
        scrollPrettyPrinter: scrollPrettyPrinter,
        setPrettyPrinterWidth: setPrettyPrinterWidth,
        setPrettyPrinterHeight: setPrettyPrinterHeight,
        isPrettyPrinterDisplayed: isPrettyPrinterDisplayed
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
    value: function initialise(properties) {
      this.assignContext(["getGutterWidth", "setSyntaxBounds", "positionGutter", "updateGutter", "updateSyntax", "scrollGutter", "scrollSyntax"]);
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var prettyPrinter = _easy.Element.fromClass(Class, properties);

      prettyPrinter.initialise(properties);
      return prettyPrinter;
    }
  }]);

  return PrettyPrinter;
}(_easy.Element);

_defineProperty(PrettyPrinter, "tagName", "div");

_defineProperty(PrettyPrinter, "defaultProperties", {
  className: "pretty-printer"
});

var _default = (0, _easyWithStyle["default"])(PrettyPrinter)(_templateObject(), borderColour, backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJib3JkZXJDb2xvdXIiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwiYmFja2dyb3VuZENvbG91ciIsIlByZXR0eVByaW50ZXIiLCJpbmNsdWRlQm9yZGVyIiwiaGlkZGVuIiwiaXNIaWRkZW4iLCJzaG93Iiwid2lkdGgiLCJoaWRlIiwiaGVpZ2h0IiwiYm9yZGVyVG9wV2lkdGhJblBpeGVscyIsImNzcyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwiYm9yZGVyVG9wV2lkdGgiLCJOdW1iZXIiLCJib3JkZXJMZWZ0V2lkdGhJblBpeGVscyIsImJvcmRlckxlZnRXaWR0aCIsInByZXZpb3VzR3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImdldFRvcCIsImdldExlZnQiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsR3V0dGVyIiwic2Nyb2xsU3ludGF4IiwidG9rZW5zIiwiZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInVwZGF0ZUd1dHRlciIsInVwZGF0ZVN5bnRheCIsImd1dHRlcldpZHRoIiwiZ2V0R3V0dGVyV2lkdGgiLCJzZXRQcmV2aW91c0d1dHRlcldpZHRoIiwicmVzaXplIiwiZ2V0SW5uZXJCb3VuZHMiLCJnZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJib3VuZHMiLCJwb3NpdGlvbkd1dHRlciIsInNldFN5bnRheEJvdW5kcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInByb3BlcnRpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInVwZGF0ZSIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzY3JvbGwiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJpc1ByZXR0eVByaW50ZXJEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByZXR0eVByaW50ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxNQUFGLEdBQWFDLHlCQUFiLENBQUVELE1BQUY7QUFBQSxJQUNFRSxZQURGLEdBQ3FDQyxnQ0FEckMsQ0FDRUQsWUFERjtBQUFBLElBQ2dCRSxnQkFEaEIsR0FDcUNELGdDQURyQyxDQUNnQkMsZ0JBRGhCOztJQUdBQyxhOzs7Ozs7Ozs7Ozs7OzZCQUNLQyxhLEVBQWU7QUFDdEIsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixhQUFLRSxJQUFMO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSywrRUFBa0JKLGFBQWxCLENBQVg7O0FBRUEsVUFBSUMsTUFBSixFQUFZO0FBQ1YsYUFBS0ksSUFBTDtBQUNEOztBQUVELGFBQU9ELEtBQVA7QUFDRDs7OzhCQUVTSixhLEVBQWU7QUFDdkIsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixhQUFLRSxJQUFMO0FBQ0Q7O0FBRUQsVUFBTUcsTUFBTSxn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QixFQUF5QnJCLFVBQXpCLENBQXRCOztBQUVBc0IsTUFBQUEsYUFBYSxDQUFDRyxVQUFkLENBQXlCekIsVUFBekI7QUFFQSxhQUFPc0IsYUFBUDtBQUNEOzs7O0VBdE15QkMsYTs7Z0JBQXRCekUsYSxhQTBMYSxLOztnQkExTGJBLGEsdUJBNEx1QjtBQUN6QjRFLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVU1RSxhQUFWLEMsb0JBRU9ILFksRUFHQUUsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBCb3VuZHMsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmltcG9ydCB7IGxpbmVIZWlnaHQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSA9IHByZXR0eVByaW50ZXJTY2hlbWU7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gc3VwZXIuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpLFxuICAgICAgICAgIG1hdGNoZXMgPSBib3JkZXJUb3BXaWR0aEluUGl4ZWxzLm1hdGNoKC9eKFxcZCspcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBib3JkZXJMZWZ0V2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSxcbiAgICAgICAgICBtYXRjaGVzID0gYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMubWF0Y2goL14oXFxkKylweCQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cblxuICAgIHJldHVybiBib3JkZXJMZWZ0V2lkdGg7XG4gIH1cblxuICBnZXRJbm5lckJvdW5kcyhwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgY29uc3QgaW5jbHVkZUJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IHRvcCA9IDAsIC8vL1xuICAgICAgICBsZWZ0ID0gMCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpO1xuXG4gICAgbGVmdCArPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuICAgIHdpZHRoIC09IHByZXZpb3VzR3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpIHtcbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpO1xuXG4gICAgbGV0IHRvcCA9IGlubmVyQm91bmRzLmdldFRvcCgpLCAvLy9cbiAgICAgICAgbGVmdCA9IGlubmVyQm91bmRzLmdldExlZnQoKSwgIC8vL1xuICAgICAgICB3aWR0aCA9IGlubmVyQm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGlubmVyQm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdG9wICs9IGJvcmRlclRvcFdpZHRoO1xuICAgIGxlZnQgKz0gYm9yZGVyTGVmdFdpZHRoO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zY3JvbGxHdXR0ZXIoc2Nyb2xsVG9wICxzY3JvbGxMZWZ0KTtcbiAgICB0aGlzLnNjcm9sbFN5bnRheChzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIGxldCByaWNoVGV4dGFyZWFCb3VuZHMgPSBudWxsLFxuICAgICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XG5cbiAgICBjb25zdCBndXR0ZXJXaWR0aCA9IHRoaXMuZ2V0R3V0dGVyV2lkdGgoKTtcblxuICAgIGlmIChwcmV2aW91c0d1dHRlcldpZHRoICE9PSBndXR0ZXJXaWR0aCkge1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IGd1dHRlcldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKTtcblxuICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpLFxuICAgICAgICAgIGJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMucG9zaXRpb25HdXR0ZXIoKTtcblxuICAgIHRoaXMuc2V0U3ludGF4Qm91bmRzKGJvdW5kcyk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzR3V0dGVyV2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIC8+LFxuICAgICAgPFN5bnRheCAvPixcblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVQcmV0dHlQcmludGVyID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNjcm9sbFByZXR0eVByaW50ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cblx0XHRcdCAgICBzZXRQcmV0dHlQcmludGVyV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuXHRcdFx0XHQgIHNldFByZXR0eVByaW50ZXJIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cblx0XHRcdFx0ICBpc1ByZXR0eVByaW50ZXJEaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCxcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJIZWlnaHQsXG4gICAgICAgICAgICBpc1ByZXR0eVByaW50ZXJEaXNwbGF5ZWRcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCJcbiAgICBdKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHByZXR0eVByaW50ZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBwcmV0dHlQcmludGVyLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG4gICAgXG4gICAgcmV0dXJuIHByZXR0eVByaW50ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG5gO1xuIl19