"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _gutter = _interopRequireDefault(require("./gutter"));

var _syntax = _interopRequireDefault(require("./syntax"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
      this.updateSyntax(tokens);
      this.updateGutter(tokens);
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
    key: "enableFiraCode",
    value: function enableFiraCode() {
      this.enableSyntaxFiraCode();
    }
  }, {
    key: "disableFiraCode",
    value: function disableFiraCode() {
      this.disableSyntaxFiraCode();
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
      enablePrettyPrinterFiraCode = this.enableFiraCode.bind(this),
          ///
      disablePrettyPrinterFiraCode = this.disableFiraCode.bind(this),
          ///
      parentContext = Object.assign({}, context, {
        resizePrettyPrinter: resizePrettyPrinter,
        updatePrettyPrinter: updatePrettyPrinter,
        scrollPrettyPrinter: scrollPrettyPrinter,
        setPrettyPrinterWidth: setPrettyPrinterWidth,
        setPrettyPrinterHeight: setPrettyPrinterHeight,
        enablePrettyPrinterFiraCode: enablePrettyPrinterFiraCode,
        disablePrettyPrinterFiraCode: disablePrettyPrinterFiraCode
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
      this.assignContext(["getGutterWidth", "setSyntaxBounds", "positionGutter", "updateGutter", "updateSyntax", "scrollGutter", "scrollSyntax", "enableSyntaxFiraCode", "disableSyntaxFiraCode"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsiUHJldHR5UHJpbnRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsInByZXZpb3VzR3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVTeW50YXgiLCJ1cGRhdGVHdXR0ZXIiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJlbmFibGVTeW50YXhGaXJhQ29kZSIsImRpc2FibGVTeW50YXhGaXJhQ29kZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicmVzaXplUHJldHR5UHJpbnRlciIsImJpbmQiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwidXBkYXRlIiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInNjcm9sbCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFdpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInNldEhlaWdodCIsImVuYWJsZVByZXR0eVByaW50ZXJGaXJhQ29kZSIsImVuYWJsZUZpcmFDb2RlIiwiZGlzYWJsZVByZXR0eVByaW50ZXJGaXJhQ29kZSIsImRpc2FibGVGaXJhQ29kZSIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTdGF0ZSIsImFzc2lnbkNvbnRleHQiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixhQUFLRSxJQUFMO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSyw4RUFBWDs7QUFFQSxVQUFJSCxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNSCxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLCtFQUFaOztBQUVBLFVBQUlMLE1BQUosRUFBWTtBQUNWLGFBQUtJLElBQUw7QUFDRDs7QUFFRCxhQUFPQyxNQUFQO0FBQ0Q7OzttQ0FFY0MsbUIsRUFBcUI7QUFDbEMsVUFBSUMsR0FBRyxHQUFHLENBQVY7QUFBQSxVQUFhO0FBQ1RDLE1BQUFBLElBQUksR0FBRyxDQURYO0FBQUEsVUFDZTtBQUNYTCxNQUFBQSxLQUFLLEdBQUcsS0FBS00sUUFBTCxFQUZaO0FBQUEsVUFHSUosTUFBTSxHQUFHLEtBQUtLLFNBQUwsRUFIYjtBQUtBRixNQUFBQSxJQUFJLElBQUlGLG1CQUFSO0FBQ0FILE1BQUFBLEtBQUssSUFBSUcsbUJBQVQ7O0FBRUEsVUFBTUssV0FBVyxHQUFHQyxhQUFPQyx5QkFBUCxD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T0MsVSxFQUFZO0FBQ2xDLFVBQU1DLElBQUksR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQWI7O0FBRUFDLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQXhMeUJDLGE7O2dCQUF0QmpFLGEsYUE0S2EsSzs7Z0JBNUtiQSxhLHVCQThLdUI7QUFDekJvRSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVcEUsYUFBVixDLG9CQUlPcUUsK0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QsIEJvdW5kcywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgU3ludGF4IGZyb20gXCIuL3N5bnRheFwiO1xuXG5pbXBvcnQgeyBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmlzSGlkZGVuKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aWR0aCA9IHN1cGVyLmdldFdpZHRoKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gc3VwZXIuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIGxldCB0b3AgPSAwLCAvLy9cbiAgICAgICAgbGVmdCA9IDAsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBsZWZ0ICs9IHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcblxuICAgIGNvbnN0IGlubmVyQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcykge1xuICAgIGNvbnN0IHRvcCA9IGlubmVyQm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBpbm5lckJvdW5kcy5nZXRMZWZ0KCksLy8vXG4gICAgICAgICAgd2lkdGggPSBpbm5lckJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGlubmVyQm91bmRzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG4gICAgdGhpcy5zY3JvbGxTeW50YXgoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICBsZXQgcmljaFRleHRhcmVhQm91bmRzID0gbnVsbCxcbiAgICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpO1xuXG4gICAgdGhpcy51cGRhdGVTeW50YXgodG9rZW5zKTtcblxuICAgIHRoaXMudXBkYXRlR3V0dGVyKHRva2Vucyk7XG5cbiAgICBjb25zdCBndXR0ZXJXaWR0aCA9IHRoaXMuZ2V0R3V0dGVyV2lkdGgoKTtcblxuICAgIGlmIChwcmV2aW91c0d1dHRlcldpZHRoICE9PSBndXR0ZXJXaWR0aCkge1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IGd1dHRlcldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKTtcblxuICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpLFxuICAgICAgICAgIGJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMucG9zaXRpb25HdXR0ZXIoKTtcblxuICAgIHRoaXMuc2V0U3ludGF4Qm91bmRzKGJvdW5kcyk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5lbmFibGVTeW50YXhGaXJhQ29kZSgpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMuZGlzYWJsZVN5bnRheEZpcmFDb2RlKCk7XG4gIH1cblxuICBnZXRQcmV2aW91c0d1dHRlcldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNHdXR0ZXJXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNHdXR0ZXJXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEd1dHRlciAvPixcbiAgICAgIDxTeW50YXggLz4sXG5cbiAgICBdKTtcbiAgfVxuICBcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVzaXplUHJldHR5UHJpbnRlciA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzY3JvbGxQcmV0dHlQcmludGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldHR5UHJpbnRlcldpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRQcmV0dHlQcmludGVySGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZW5hYmxlUHJldHR5UHJpbnRlckZpcmFDb2RlID0gdGhpcy5lbmFibGVGaXJhQ29kZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBkaXNhYmxlUHJldHR5UHJpbnRlckZpcmFDb2RlID0gdGhpcy5kaXNhYmxlRmlyYUNvZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCxcbiAgICAgICAgICAgIHNldFByZXR0eVByaW50ZXJIZWlnaHQsXG4gICAgICAgICAgICBlbmFibGVQcmV0dHlQcmludGVyRmlyYUNvZGUsXG4gICAgICAgICAgICBkaXNhYmxlUHJldHR5UHJpbnRlckZpcmFDb2RlXG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCIsXG4gICAgICBcImVuYWJsZVN5bnRheEZpcmFDb2RlXCIsXG4gICAgICBcImRpc2FibGVTeW50YXhGaXJhQ29kZVwiXG4gICAgXSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG4gICAgXG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuYDtcbiJdfQ==