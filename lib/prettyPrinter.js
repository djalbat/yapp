"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _gutter = _interopRequireDefault(require("./gutter"));

var _syntax = _interopRequireDefault(require("./syntax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  position: relative;\n  overflow: hidden;\n  \n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"]);

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

var _default = (0, _easyWithStyle["default"])(PrettyPrinter)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXR0eVByaW50ZXIuanMiXSwibmFtZXMiOlsiUHJldHR5UHJpbnRlciIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImhlaWdodCIsInByZXZpb3VzR3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJpbm5lckJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVTeW50YXgiLCJ1cGRhdGVHdXR0ZXIiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImdldElubmVyQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQm91bmRzIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInVwZGF0ZSIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzY3JvbGwiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U3RhdGUiLCJhc3NpZ25Db250ZXh0Iiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixhQUFLRSxJQUFMO0FBQ0Q7O0FBRUQsVUFBTUMsS0FBSyw4RUFBWDs7QUFFQSxVQUFJSCxNQUFKLEVBQVk7QUFDVixhQUFLSSxJQUFMO0FBQ0Q7O0FBRUQsYUFBT0QsS0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNSCxNQUFNLEdBQUcsS0FBS0MsUUFBTCxFQUFmOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWLGFBQUtFLElBQUw7QUFDRDs7QUFFRCxVQUFNRyxNQUFNLCtFQUFaOztBQUVBLFVBQUlMLE1BQUosRUFBWTtBQUNWLGFBQUtJLElBQUw7QUFDRDs7QUFFRCxhQUFPQyxNQUFQO0FBQ0Q7OzttQ0FFY0MsbUIsRUFBcUI7QUFDbEMsVUFBSUMsR0FBRyxHQUFHLENBQVY7QUFBQSxVQUFhO0FBQ1RDLE1BQUFBLElBQUksR0FBRyxDQURYO0FBQUEsVUFDZTtBQUNYTCxNQUFBQSxLQUFLLEdBQUcsS0FBS00sUUFBTCxFQUZaO0FBQUEsVUFHSUosTUFBTSxHQUFHLEtBQUtLLFNBQUwsRUFIYjtBQUtBRixNQUFBQSxJQUFJLElBQUlGLG1CQUFSO0FBQ0FILE1BQUFBLEtBQUssSUFBSUcsbUJBQVQ7O0FBRUEsVUFBTUssV0FBVyxHQUFHQyxhQUFPQyx5QkFBUCxDQUFpQ04sR0FBakMsRUFBc0NDLElBQXRDLEVBQTRDTCxLQUE1QyxFQUFtREUsTUFBbkQsQ0FBcEI7O0FBRUEsYUFBT00sV0FBUDtBQUNEOzs7MENBRXFCQSxXLEVBQWE7QUFDakMsVUFBTUosR0FBRyxHQUFHSSxXQUFXLENBQUNHLE1BQVosRUFBWjtBQUFBLFVBQ01OLElBQUksR0FBR0csV0FBVyxDQUFDSSxPQUFaLEVBRGI7QUFBQSxVQUNtQztBQUM3QlosTUFBQUEsS0FBSyxHQUFHUSxXQUFXLENBQUNGLFFBQVosRUFGZDtBQUFBLFVBR01KLE1BQU0sR0FBR00sV0FBVyxDQUFDRCxTQUFaLEVBSGY7QUFBQSxVQUlNTSxrQkFBa0IsR0FBR0osYUFBT0MseUJBQVAsQ0FBaUNOLEdBQWpDLEVBQXNDQyxJQUF0QyxFQUE0Q0wsS0FBNUMsRUFBbURFLE1BQW5ELENBSjNCOztBQU1BLGFBQU9XLGtCQUFQO0FBQ0Q7OzsyQkFFTUMsUyxFQUFXQyxVLEVBQVk7QUFDNUIsV0FBS0MsWUFBTCxDQUFrQkYsU0FBbEIsRUFBNkJDLFVBQTdCO0FBQ0EsV0FBS0UsWUFBTCxDQUFrQkgsU0FBbEIsRUFBNkJDLFVBQTdCO0FBQ0Q7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsVUFBSUwsa0JBQWtCLEdBQUcsSUFBekI7QUFBQSxVQUNJVixtQkFBbUIsR0FBRyxLQUFLZ0Isc0JBQUwsRUFEMUI7QUFHQSxXQUFLQyxZQUFMLENBQWtCRixNQUFsQjtBQUVBLFdBQUtHLFlBQUwsQ0FBa0JILE1BQWxCO0FBRUEsVUFBTUksV0FBVyxHQUFHLEtBQUtDLGNBQUwsRUFBcEI7O0FBRUEsVUFBSXBCLG1CQUFtQixLQUFLbUIsV0FBNUIsRUFBeUM7QUFDdkNuQixRQUFBQSxtQkFBbUIsR0FBR21CLFdBQXRCLENBRHVDLENBQ0g7O0FBRXBDLGFBQUtFLHNCQUFMLENBQTRCckIsbUJBQTVCO0FBRUFVLFFBQUFBLGtCQUFrQixHQUFHLEtBQUtZLE1BQUwsRUFBckI7QUFDRDs7QUFFRCxhQUFPWixrQkFBUDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNVixtQkFBbUIsR0FBRyxLQUFLZ0Isc0JBQUwsRUFBNUI7QUFBQSxVQUNNWCxXQUFXLEdBQUcsS0FBS2tCLGNBQUwsQ0FBb0J2QixtQkFBcEIsQ0FEcEI7QUFBQSxVQUVNVSxrQkFBa0IsR0FBRyxLQUFLYyxxQkFBTCxDQUEyQm5CLFdBQTNCLENBRjNCO0FBQUEsVUFHTW9CLE1BQU0sR0FBR3BCLFdBSGYsQ0FETyxDQUlxQjs7QUFFNUIsV0FBS3FCLGNBQUw7QUFFQSxXQUFLQyxlQUFMLENBQXFCRixNQUFyQjtBQUVBLGFBQU9mLGtCQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDakIsVUFBQWtCLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFN0IsbUJBREYsR0FDMEI0QixLQUQxQixDQUNFNUIsbUJBREY7QUFHTixhQUFPQSxtQkFBUDtBQUNEOzs7MkNBRXNCQSxtQixFQUFxQjtBQUMxQyxXQUFLOEIsV0FBTCxDQUFpQjtBQUNmOUIsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQURlLE9BQWpCO0FBR0Q7OztvQ0FFZTtBQUNkLGFBQVEsY0FFTiwwQkFBQyxrQkFBRCxPQUZNLGVBR04sMEJBQUMsa0JBQUQsT0FITSxDQUFSO0FBTUQ7OztvQ0FFZTtBQUNkLFVBQU0rQixPQUFPLEdBQUcsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ01DLG1CQUFtQixHQUFHLEtBQUtYLE1BQUwsQ0FBWVksSUFBWixDQUFpQixJQUFqQixDQUQ1QjtBQUFBLFVBQ29EO0FBQzlDQyxNQUFBQSxtQkFBbUIsR0FBRyxLQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FGNUI7QUFBQSxVQUVvRDtBQUM5Q0csTUFBQUEsbUJBQW1CLEdBQUcsS0FBS0MsTUFBTCxDQUFZSixJQUFaLENBQWlCLElBQWpCLENBSDVCO0FBQUEsVUFHb0Q7QUFDOUNLLE1BQUFBLHFCQUFxQixHQUFHLEtBQUtDLFFBQUwsQ0FBY04sSUFBZCxDQUFtQixJQUFuQixDQUo5QjtBQUFBLFVBSXdEO0FBQ2xETyxNQUFBQSxzQkFBc0IsR0FBRyxLQUFLQyxTQUFMLENBQWVSLElBQWYsQ0FBb0IsSUFBcEIsQ0FML0I7QUFBQSxVQUswRDtBQUNwRFMsTUFBQUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZCxPQUFsQixFQUEyQjtBQUN6Q0UsUUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFEeUM7QUFFekNFLFFBQUFBLG1CQUFtQixFQUFuQkEsbUJBRnlDO0FBR3pDRSxRQUFBQSxtQkFBbUIsRUFBbkJBLG1CQUh5QztBQUl6Q0UsUUFBQUEscUJBQXFCLEVBQXJCQSxxQkFKeUM7QUFLekNFLFFBQUFBLHNCQUFzQixFQUF0QkE7QUFMeUMsT0FBM0IsQ0FOdEI7QUFjQSxhQUFPRSxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTTNDLG1CQUFtQixHQUFHLENBQTVCO0FBRUEsV0FBSzhDLFFBQUwsQ0FBYztBQUNaOUMsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQURZLE9BQWQ7QUFHRDs7O2lDQUVZO0FBQ1gsV0FBSytDLGFBQUwsQ0FBbUIsQ0FDakIsZ0JBRGlCLEVBRWpCLGlCQUZpQixFQUdqQixnQkFIaUIsRUFJakIsY0FKaUIsRUFLakIsY0FMaUIsRUFNakIsY0FOaUIsRUFPakIsY0FQaUIsQ0FBbkI7QUFVQSxXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLElBQUksR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQWI7O0FBRUFDLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQTFLeUJDLGE7O2dCQUF0QjNELGEsYUE4SmEsSzs7Z0JBOUpiQSxhLHVCQWdLdUI7QUFDekI4RCxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVOUQsYUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBCb3VuZHMsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgR3V0dGVyIGZyb20gXCIuL2d1dHRlclwiO1xuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmlzSGlkZGVuKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aWR0aCA9IHN1cGVyLmdldFdpZHRoKCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gc3VwZXIuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCkge1xuICAgIGxldCB0b3AgPSAwLCAvLy9cbiAgICAgICAgbGVmdCA9IDAsICAvLy9cbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBsZWZ0ICs9IHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gcHJldmlvdXNHdXR0ZXJXaWR0aDtcblxuICAgIGNvbnN0IGlubmVyQm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldFJpY2hUZXh0YXJlYUJvdW5kcyhpbm5lckJvdW5kcykge1xuICAgIGNvbnN0IHRvcCA9IGlubmVyQm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBpbm5lckJvdW5kcy5nZXRMZWZ0KCksLy8vXG4gICAgICAgICAgd2lkdGggPSBpbm5lckJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGlubmVyQm91bmRzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG4gICAgdGhpcy5zY3JvbGxTeW50YXgoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICBsZXQgcmljaFRleHRhcmVhQm91bmRzID0gbnVsbCxcbiAgICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpO1xuXG4gICAgdGhpcy51cGRhdGVTeW50YXgodG9rZW5zKTtcblxuICAgIHRoaXMudXBkYXRlR3V0dGVyKHRva2Vucyk7XG5cbiAgICBjb25zdCBndXR0ZXJXaWR0aCA9IHRoaXMuZ2V0R3V0dGVyV2lkdGgoKTtcblxuICAgIGlmIChwcmV2aW91c0d1dHRlcldpZHRoICE9PSBndXR0ZXJXaWR0aCkge1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IGd1dHRlcldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKTtcblxuICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMocHJldmlvdXNHdXR0ZXJXaWR0aCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpLFxuICAgICAgICAgIGJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMucG9zaXRpb25HdXR0ZXIoKTtcblxuICAgIHRoaXMuc2V0U3ludGF4Qm91bmRzKGJvdW5kcyk7XG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhQm91bmRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzR3V0dGVyV2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzR3V0dGVyV2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c0d1dHRlcldpZHRoKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxHdXR0ZXIgLz4sXG4gICAgICA8U3ludGF4IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldHR5UHJpbnRlckhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXNpemVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNjcm9sbFByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVyV2lkdGgsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVySGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCJcbiAgICBdKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdfQ==