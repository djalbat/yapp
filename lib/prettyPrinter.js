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

var _view = require("./scheme/view");

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    value: function childElements() {
      return [/*#__PURE__*/React.createElement(_gutter["default"], null), /*#__PURE__*/React.createElement(_syntax["default"], null)];
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
      parentContext = Object.assign(context, {
        resizeView: resizeView,
        updateView: updateView,
        scrollView: scrollView,
        setViewWidth: setViewWidth,
        setViewHeight: setViewHeight,
        isViewDisplayed: isViewDisplayed
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

var _default = (0, _easyWithStyle["default"])(PrettyPrinter)(_templateObject(), _view.borderColour, _view.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJQcmV0dHlQcmludGVyIiwiaW5jbHVkZUJvcmRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsImJvcmRlclRvcFdpZHRoSW5QaXhlbHMiLCJjc3MiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImJvcmRlclRvcFdpZHRoIiwiTnVtYmVyIiwiYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMiLCJib3JkZXJMZWZ0V2lkdGgiLCJwcmV2aW91c0d1dHRlcldpZHRoIiwidG9wIiwibGVmdCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJCb3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGVTeW50YXgiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVZpZXciLCJiaW5kIiwidXBkYXRlVmlldyIsInVwZGF0ZSIsInNjcm9sbFZpZXciLCJzY3JvbGwiLCJzZXRWaWV3V2lkdGgiLCJzZXRXaWR0aCIsInNldFZpZXdIZWlnaHQiLCJzZXRIZWlnaHQiLCJpc1ZpZXdEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLGEsRUFBZTtBQUN0QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLCtFQUFrQkosYUFBbEIsQ0FBWDs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLGdGQUFtQk4sYUFBbkIsQ0FBWjs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtDLEdBQUwsQ0FBUyxrQkFBVCxDQUEvQjtBQUFBLFVBQ01DLE9BQU8sR0FBR0Ysc0JBQXNCLENBQUNHLEtBQXZCLENB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dHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBCb3VuZHMsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgR3V0dGVyIGZyb20gXCIuL2d1dHRlclwiO1xuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcblxuaW1wb3J0IHsgbGluZUhlaWdodCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL3ZpZXdcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQcmV0dHlQcmludGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIpIHtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmlzSGlkZGVuKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aWR0aCA9IHN1cGVyLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpIHtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmlzSGlkZGVuKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHQgPSBzdXBlci5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0Qm9yZGVyVG9wV2lkdGgoKSB7XG4gICAgY29uc3QgYm9yZGVyVG9wV2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSxcbiAgICAgICAgICBtYXRjaGVzID0gYm9yZGVyVG9wV2lkdGhJblBpeGVscy5tYXRjaCgvXihcXGQrKXB4JC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gTnVtYmVyKHNlY29uZE1hdGNoKTsgLy8vXG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJMZWZ0V2lkdGgoKSB7XG4gICAgY29uc3QgYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIiksXG4gICAgICAgICAgbWF0Y2hlcyA9IGJvcmRlckxlZnRXaWR0aEluUGl4ZWxzLm1hdGNoKC9eKFxcZCspcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gTnVtYmVyKHNlY29uZE1hdGNoKTsgLy8vXG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIGNvbnN0IGluY2x1ZGVCb3JkZXIgPSBmYWxzZTtcblxuICAgIGxldCB0b3AgPSAwLCAvLy9cbiAgICAgICAgbGVmdCA9IDAsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKGluY2x1ZGVCb3JkZXIpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGxlZnQgKz0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgICB3aWR0aCAtPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuXG4gICAgY29uc3QgaW5uZXJCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIGlubmVyQm91bmRzO1xuICB9XG5cbiAgZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSB7XG4gICAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKTtcblxuICAgIGxldCB0b3AgPSBpbm5lckJvdW5kcy5nZXRUb3AoKSwgLy8vXG4gICAgICAgIGxlZnQgPSBpbm5lckJvdW5kcy5nZXRMZWZ0KCksICAvLy9cbiAgICAgICAgd2lkdGggPSBpbm5lckJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBpbm5lckJvdW5kcy5nZXRIZWlnaHQoKTtcblxuICAgIHRvcCArPSBib3JkZXJUb3BXaWR0aDtcbiAgICBsZWZ0ICs9IGJvcmRlckxlZnRXaWR0aDtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG4gICAgdGhpcy5zY3JvbGxTeW50YXgoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICBsZXQgcmljaFRleHRhcmVhQm91bmRzID0gbnVsbCxcbiAgICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpO1xuXG4gICAgdGhpcy51cGRhdGVHdXR0ZXIodG9rZW5zKTtcbiAgICB0aGlzLnVwZGF0ZVN5bnRheCh0b2tlbnMpO1xuXG4gICAgY29uc3QgZ3V0dGVyV2lkdGggPSB0aGlzLmdldEd1dHRlcldpZHRoKCk7XG5cbiAgICBpZiAocHJldmlvdXNHdXR0ZXJXaWR0aCAhPT0gZ3V0dGVyV2lkdGgpIHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSBndXR0ZXJXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCk7XG5cbiAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSxcbiAgICAgICAgICBib3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnBvc2l0aW9uR3V0dGVyKCk7XG5cbiAgICB0aGlzLnNldFN5bnRheEJvdW5kcyhib3VuZHMpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIC8+LFxuICAgICAgPFN5bnRheCAvPixcblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVWaWV3ID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlVmlldyA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRWaWV3V2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFZpZXdIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBpc1ZpZXdEaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHJlc2l6ZVZpZXcsXG4gICAgICAgICAgICB1cGRhdGVWaWV3LFxuICAgICAgICAgICAgc2Nyb2xsVmlldyxcbiAgICAgICAgICAgIHNldFZpZXdXaWR0aCxcbiAgICAgICAgICAgIHNldFZpZXdIZWlnaHQsXG4gICAgICAgICAgICBpc1ZpZXdEaXNwbGF5ZWRcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcImdldEd1dHRlcldpZHRoXCIsXG4gICAgICBcInNldFN5bnRheEJvdW5kc1wiLFxuICAgICAgXCJwb3NpdGlvbkd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVHdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlU3ludGF4XCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxuICAgIF0pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXR0eS1wcmludGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuICAgIFxuICAgIHJldHVybiB2aWV3O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV0dHlQcmludGVyKWBcblxuICBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuYDtcbiJdfQ==