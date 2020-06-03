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

  return View;
}(_easy.Element);

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "pretty-printer"
});

var _default = (0, _easyWithStyle["default"])(View)(_templateObject(), _view.borderColour, _view.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJWaWV3IiwiaW5jbHVkZUJvcmRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsImJvcmRlclRvcFdpZHRoSW5QaXhlbHMiLCJjc3MiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsImJvcmRlclRvcFdpZHRoIiwiTnVtYmVyIiwiYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMiLCJib3JkZXJMZWZ0V2lkdGgiLCJwcmV2aW91c0d1dHRlcldpZHRoIiwidG9wIiwibGVmdCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJCb3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGVTeW50YXgiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVZpZXciLCJiaW5kIiwidXBkYXRlVmlldyIsInVwZGF0ZSIsInNjcm9sbFZpZXciLCJzY3JvbGwiLCJzZXRWaWV3V2lkdGgiLCJzZXRXaWR0aCIsInNldFZpZXdIZWlnaHQiLCJzZXRIZWlnaHQiLCJpc1ZpZXdEaXNwbGF5ZWQiLCJpc0Rpc3BsYXllZCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLHlCLENBQVhELE07O0lBRUZFLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ0tDLGEsRUFBZTtBQUN0QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLHNFQUFrQkosYUFBbEIsQ0FBWDs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7OEJBRVNKLGEsRUFBZTtBQUN2QixVQUFNQyxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLHVFQUFtQk4sYUFBbkIsQ0FBWjs7QUFFQSxVQUFJQyxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0MsTUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtDLEdBQUwsQ0FBUyxrQkFBVCxDQUEvQjtBQUFBLFVBQ01DLE9BQU8sR0FBR0Ysc0JBQXNCLENBQUNHLEtBQXZCLENBQTZCLFdBQTdCLENBRGhCO0FB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dGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEJvdW5kcywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL3N5bnRheFwiO1xuXG5pbXBvcnQgeyBsaW5lSGVpZ2h0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvdmlld1wiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gc3VwZXIuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlcik7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlcikge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodChpbmNsdWRlQm9yZGVyKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpLFxuICAgICAgICAgIG1hdGNoZXMgPSBib3JkZXJUb3BXaWR0aEluUGl4ZWxzLm1hdGNoKC9eKFxcZCspcHgkLyksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBib3JkZXJMZWZ0V2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSxcbiAgICAgICAgICBtYXRjaGVzID0gYm9yZGVyTGVmdFdpZHRoSW5QaXhlbHMubWF0Y2goL14oXFxkKylweCQvKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSBOdW1iZXIoc2Vjb25kTWF0Y2gpOyAvLy9cblxuICAgIHJldHVybiBib3JkZXJMZWZ0V2lkdGg7XG4gIH1cblxuICBnZXRJbm5lckJvdW5kcyhwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgY29uc3QgaW5jbHVkZUJvcmRlciA9IGZhbHNlO1xuXG4gICAgbGV0IHRvcCA9IDAsIC8vL1xuICAgICAgICBsZWZ0ID0gMCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIpO1xuXG4gICAgbGVmdCArPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuICAgIHdpZHRoIC09IHByZXZpb3VzR3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpIHtcbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpO1xuXG4gICAgbGV0IHRvcCA9IGlubmVyQm91bmRzLmdldFRvcCgpLCAvLy9cbiAgICAgICAgbGVmdCA9IGlubmVyQm91bmRzLmdldExlZnQoKSwgIC8vL1xuICAgICAgICB3aWR0aCA9IGlubmVyQm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGlubmVyQm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdG9wICs9IGJvcmRlclRvcFdpZHRoO1xuICAgIGxlZnQgKz0gYm9yZGVyTGVmdFdpZHRoO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zY3JvbGxHdXR0ZXIoc2Nyb2xsVG9wICxzY3JvbGxMZWZ0KTtcbiAgICB0aGlzLnNjcm9sbFN5bnRheChzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIGxldCByaWNoVGV4dGFyZWFCb3VuZHMgPSBudWxsLFxuICAgICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XG5cbiAgICBjb25zdCBndXR0ZXJXaWR0aCA9IHRoaXMuZ2V0R3V0dGVyV2lkdGgoKTtcblxuICAgIGlmIChwcmV2aW91c0d1dHRlcldpZHRoICE9PSBndXR0ZXJXaWR0aCkge1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IGd1dHRlcldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKTtcblxuICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpLFxuICAgICAgICAgIGJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMucG9zaXRpb25HdXR0ZXIoKTtcblxuICAgIHRoaXMuc2V0U3ludGF4Qm91bmRzKGJvdW5kcyk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzR3V0dGVyV2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxHdXR0ZXIgLz4sXG4gICAgICA8U3ludGF4IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVZpZXcgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVWaWV3ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuXHRcdFx0ICAgIHNldFZpZXdXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG5cdFx0XHRcdCAgc2V0Vmlld0hlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuXHRcdFx0XHQgIGlzVmlld0Rpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplVmlldyxcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcsXG4gICAgICAgICAgICBzY3JvbGxWaWV3LFxuICAgICAgICAgICAgc2V0Vmlld1dpZHRoLFxuICAgICAgICAgICAgc2V0Vmlld0hlaWdodCxcbiAgICAgICAgICAgIGlzVmlld0Rpc3BsYXllZFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0R3V0dGVyV2lkdGhcIixcbiAgICAgIFwic2V0U3ludGF4Qm91bmRzXCIsXG4gICAgICBcInBvc2l0aW9uR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZUd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVTeW50YXhcIixcbiAgICAgIFwic2Nyb2xsR3V0dGVyXCIsXG4gICAgICBcInNjcm9sbFN5bnRheFwiXG4gICAgXSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG4gICAgXG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG5gO1xuIl19