"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _gutter = _interopRequireDefault(require("./gutter"));

var _syntax = _interopRequireDefault(require("./syntax"));

var _constants = require("./constants");

var _prettyPrinter = require("./scheme/prettyPrinter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  position: relative;\n  overflow: hidden;\n  background-color: ", ";\n\n"]);

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

var PrettyPrinter = /*#__PURE__*/function (_Element) {
  _inherits(PrettyPrinter, _Element);

  var _super = _createSuper(PrettyPrinter);

  function PrettyPrinter() {
    _classCallCheck(this, PrettyPrinter);

    return _super.apply(this, arguments);
  }

  _createClass(PrettyPrinter, [{
    key: "getWidth",
    value: function getWidth() {
      var hidden = this.isHidden();

      if (hidden) {
        this.show();
      }

      var width = _get(_getPrototypeOf(PrettyPrinter.prototype), "getWidth", this).call(this);

      if (hidden) {
        this.hide();
      }

      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var hidden = this.isHidden();

      if (hidden) {
        this.show();
      }

      var height = _get(_getPrototypeOf(PrettyPrinter.prototype), "getHeight", this).call(this);

      if (hidden) {
        this.hide();
      }

      return height;
    }
  }, {
    key: "getInnerBounds",
    value: function getInnerBounds(previousGutterWidth) {
      var top = 0,
          ///
      left = 0,
          ///
      width = this.getWidth(),
          height = this.getHeight();
      left += previousGutterWidth;
      width -= previousGutterWidth;

      var innerBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

      return innerBounds;
    }
  }, {
    key: "getRichTextareaBounds",
    value: function getRichTextareaBounds(innerBounds) {
      var top = innerBounds.getTop(),
          left = innerBounds.getLeft(),
          ///
      width = innerBounds.getWidth(),
          height = innerBounds.getHeight(),
          richTextareaBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

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
      parentContext = Object.assign({}, context, {
        resizePrettyPrinter: resizePrettyPrinter,
        updatePrettyPrinter: updatePrettyPrinter,
        scrollPrettyPrinter: scrollPrettyPrinter,
        setPrettyPrinterWidth: setPrettyPrinterWidth,
        setPrettyPrinterHeight: setPrettyPrinterHeight
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

var _default = (0, _easyWithStyle["default"])(PrettyPrinter)(_templateObject(), _prettyPrinter.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsiUHJldHR5UHJpbnRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsInByZXZpb3VzR3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGVTeW50YXgiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInVwZGF0ZSIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzY3JvbGwiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U3RhdGUiLCJhc3NpZ25Db250ZXh0Iiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwi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QixFQUFuQkEsbUJBRHlDO0FBRXpDRSxRQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUZ5QztBQUd6Q0UsUUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFIeUM7QUFJekNFLFFBQUFBLHFCQUFxQixFQUFyQkEscUJBSnlDO0FBS3pDRSxRQUFBQSxzQkFBc0IsRUFBdEJBO0FBTHlDLE9BQTNCLENBTnRCO0FBY0EsYUFBT0UsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU0zQyxtQkFBbUIsR0FBRyxDQUE1QjtBQUVBLFdBQUs4QyxRQUFMLENBQWM7QUFDWjlDLFFBQUFBLG1CQUFtQixFQUFuQkE7QUFEWSxPQUFkO0FBR0Q7OztpQ0FFWTtBQUNYLFdBQUsrQyxhQUFMLENBQW1CLENBQ2pCLGdCQURpQixFQUVqQixpQkFGaUIsRUFHakIsZ0JBSGlCLEVBSWpCLGNBSmlCLEVBS2pCLGNBTGlCLEVBTWpCLGNBTmlCLEVBT2pCLGNBUGlCLENBQW5CO0FBVUEsV0FBS0MsZUFBTDtBQUNEOzs7OEJBUWdCQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxJQUFJLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUFiOztBQUVBQyxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUF6S3lCQyxhOztnQkFBdEIzRCxhLGFBNkphLEs7O2dCQTdKYkEsYSx1QkErSnVCO0FBQ3pCOEQsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVTlELGFBQVYsQyxvQkFJTytELCtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBCb3VuZHMsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgR3V0dGVyIGZyb20gXCIuL2d1dHRlclwiO1xuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcblxuaW1wb3J0IHsgbGluZUhlaWdodCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICBsZXQgdG9wID0gMCwgLy8vXG4gICAgICAgIGxlZnQgPSAwLCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgbGVmdCArPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuICAgIHdpZHRoIC09IHByZXZpb3VzR3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBpbm5lckJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gaW5uZXJCb3VuZHMuZ2V0TGVmdCgpLC8vL1xuICAgICAgICAgIHdpZHRoID0gaW5uZXJCb3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBpbm5lckJvdW5kcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlR3V0dGVyKHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVTeW50YXgodG9rZW5zKTtcblxuICAgIGNvbnN0IGd1dHRlcldpZHRoID0gdGhpcy5nZXRHdXR0ZXJXaWR0aCgpO1xuXG4gICAgaWYgKHByZXZpb3VzR3V0dGVyV2lkdGggIT09IGd1dHRlcldpZHRoKSB7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gZ3V0dGVyV2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpO1xuXG4gICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhwcmV2aW91c0d1dHRlcldpZHRoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcyksXG4gICAgICAgICAgYm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5wb3NpdGlvbkd1dHRlcigpO1xuXG4gICAgdGhpcy5zZXRTeW50YXhCb3VuZHMoYm91bmRzKTtcblxuICAgIHJldHVybiByaWNoVGV4dGFyZWFCb3VuZHM7XG4gIH1cblxuICBnZXRQcmV2aW91c0d1dHRlcldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNHdXR0ZXJXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEd1dHRlciAvPixcbiAgICAgIDxTeW50YXggLz4sXG5cbiAgICBdKTtcbiAgfVxuICBcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVzaXplUHJldHR5UHJpbnRlciA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzY3JvbGxQcmV0dHlQcmludGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldHR5UHJpbnRlcldpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRQcmV0dHlQcmludGVySGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCxcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJIZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcImdldEd1dHRlcldpZHRoXCIsXG4gICAgICBcInNldFN5bnRheEJvdW5kc1wiLFxuICAgICAgXCJwb3NpdGlvbkd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVHdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlU3ludGF4XCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxuICAgIF0pO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXR0eS1wcmludGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuICAgIFxuICAgIHJldHVybiB2aWV3O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV0dHlQcmludGVyKWBcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbmA7XG4iXX0=