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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var second = _necessary.arrayUtilities.second;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "getWidth",
    value: function getWidth(includeBorder) {
      var hidden = this.isHidden();

      if (hidden) {
        this.show();
      }

      var width = _get(_getPrototypeOf(View.prototype), "getWidth", this).call(this, includeBorder);

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

      var height = _get(_getPrototypeOf(View.prototype), "getHeight", this).call(this, includeBorder);

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
    value: function initialise(properties) {
      this.assignContext(["getGutterWidth", "setSyntaxBounds", "positionGutter", "updateGutter", "updateSyntax", "scrollGutter", "scrollSyntax"]);
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var view = _easy.Element.fromClass(Class, properties);

      view.initialise(properties);
      return view;
    }
  }]);

  return View;
}(_easy.Element);

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "pretty-printer"
});

var _default = (0, _easyWithStyle["default"])(View)(_templateObject(), _view.borderColour, _view.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJWaWV3IiwiaW5jbHVkZUJvcmRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsImJvcmRlclRvcFdpZHRoSW5QaXhlbHMiLCJjc3MiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImJvcmRlclRvcFdpZHRoIiwiTnVtYmVyIiwiYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMiLCJib3JkZXJMZWZ0V2lkdGgiLCJwcmV2aW91c0d1dHRlcldpZHRoIiwidG9wIiwibGVmdCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJCb3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGVTeW50YXgiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJwcm9wZXJ0aWVzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVWaWV3IiwiYmluZCIsInVwZGF0ZVZpZXciLCJ1cGRhdGUiLCJzY3JvbGxWaWV3Iiwic2Nyb2xsIiwic2V0Vmlld1dpZHRoIiwic2V0V2lkdGgiLCJzZXRWaWV3SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiaXNWaWV3RGlzcGxheWVkIiwiaXNEaXNwbGF5ZWQiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U3RhdGUiLCJhc3NpZ25Db250ZXh0Iiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLGEsRUFBZTtBQUN0QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLHNFQUFrQkosYUFBbEIsQ0FBWDs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLHVFQUFtQk4sYUFBbkIsQ0FBWjs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtDLEdBQUwsQ0FBUyxrQkFBVCxDQUEvQjtBQUFBLFVBQ01DLE9BQU8sR0FBR0Ysc0JBQXNCLENBQUNHLEtBQXZCLENBQTZCLFdBQTdCLENBRGhCO0FB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XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmltcG9ydCB7IGxpbmVIZWlnaHQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgYmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS92aWV3XCI7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gc3VwZXIuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIiksXG4gICAgICAgICAgbWF0Y2hlcyA9IGJvcmRlclRvcFdpZHRoSW5QaXhlbHMubWF0Y2goL14oXFxkKylweCQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IE51bWJlcihzZWNvbmRNYXRjaCk7IC8vL1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyTGVmdFdpZHRoKCkge1xuICAgIGNvbnN0IGJvcmRlckxlZnRXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpLFxuICAgICAgICAgIG1hdGNoZXMgPSBib3JkZXJMZWZ0V2lkdGhJblBpeGVscy5tYXRjaCgvXihcXGQrKXB4JC8pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IE51bWJlcihzZWNvbmRNYXRjaCk7IC8vL1xuXG4gICAgcmV0dXJuIGJvcmRlckxlZnRXaWR0aDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICBjb25zdCBpbmNsdWRlQm9yZGVyID0gZmFsc2U7XG5cbiAgICBsZXQgdG9wID0gMCwgLy8vXG4gICAgICAgIGxlZnQgPSAwLCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aChpbmNsdWRlQm9yZGVyKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBsZWZ0ICs9IHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcblxuICAgIGNvbnN0IGlubmVyQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcykge1xuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCk7XG5cbiAgICBsZXQgdG9wID0gaW5uZXJCb3VuZHMuZ2V0VG9wKCksIC8vL1xuICAgICAgICBsZWZ0ID0gaW5uZXJCb3VuZHMuZ2V0TGVmdCgpLCAgLy8vXG4gICAgICAgIHdpZHRoID0gaW5uZXJCb3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gaW5uZXJCb3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0b3AgKz0gYm9yZGVyVG9wV2lkdGg7XG4gICAgbGVmdCArPSBib3JkZXJMZWZ0V2lkdGg7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlR3V0dGVyKHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVTeW50YXgodG9rZW5zKTtcblxuICAgIGNvbnN0IGd1dHRlcldpZHRoID0gdGhpcy5nZXRHdXR0ZXJXaWR0aCgpO1xuXG4gICAgaWYgKHByZXZpb3VzR3V0dGVyV2lkdGggIT09IGd1dHRlcldpZHRoKSB7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gZ3V0dGVyV2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpO1xuXG4gICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhwcmV2aW91c0d1dHRlcldpZHRoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcyksXG4gICAgICAgICAgYm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5wb3NpdGlvbkd1dHRlcigpO1xuXG4gICAgdGhpcy5zZXRTeW50YXhCb3VuZHMoYm91bmRzKTtcblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICBnZXRQcmV2aW91c0d1dHRlcldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNHdXR0ZXJXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxHdXR0ZXIgLz4sXG4gICAgICA8U3ludGF4IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVZpZXcgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVWaWV3ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuXHRcdFx0ICAgIHNldFZpZXdXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG5cdFx0XHRcdCAgc2V0Vmlld0hlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuXHRcdFx0XHQgIGlzVmlld0Rpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplVmlldyxcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcsXG4gICAgICAgICAgICBzY3JvbGxWaWV3LFxuICAgICAgICAgICAgc2V0Vmlld1dpZHRoLFxuICAgICAgICAgICAgc2V0Vmlld0hlaWdodCxcbiAgICAgICAgICAgIGlzVmlld0Rpc3BsYXllZFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcImdldEd1dHRlcldpZHRoXCIsXG4gICAgICBcInNldFN5bnRheEJvdW5kc1wiLFxuICAgICAgXCJwb3NpdGlvbkd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVHdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlU3ludGF4XCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxuICAgIF0pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXR0eS1wcmludGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcbiAgICBcbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJDb2xvdXJ9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbmA7XG4iXX0=