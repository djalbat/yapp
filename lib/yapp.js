"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _default2 = _interopRequireDefault(require("./style/default"));

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _scrollbarThickness = _interopRequireDefault(require("./scrollbarThickness"));

var _css = require("./utilities/css");

var _plugin = require("./utilities/plugin");

var _properties = require("./utilities/properties");

var _content = require("./utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  ", "\n\n"]);

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Yapp = /*#__PURE__*/function (_Element) {
  _inherits(Yapp, _Element);

  var _super = _createSuper(Yapp);

  function Yapp(selector, plugin) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selector);
    _this.plugin = plugin;
    return _this;
  }

  _createClass(Yapp, [{
    key: "getPlugin",
    value: function getPlugin() {
      return this.plugin;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent; ///

      return content;
    }
  }, {
    key: "getLneHeight",
    value: function getLneHeight() {
      var lineHeightInPixels = this.css("line-height"),
          lineHeight = (0, _css.stripPixels)(lineHeightInPixels);
      return lineHeight;
    }
  }, {
    key: "getBorderTopWidth",
    value: function getBorderTopWidth() {
      var topBorderWidthInPixels = this.css("border-top-width"),
          topBorderWidth = (0, _css.stripPixels)(topBorderWidthInPixels);
      return topBorderWidth;
    }
  }, {
    key: "getBorderBottomWidth",
    value: function getBorderBottomWidth() {
      var bottomBorderWidthInPixels = this.css("border-bottom-width"),
          bottomBorderWidth = (0, _css.stripPixels)(bottomBorderWidthInPixels);
      return bottomBorderWidth;
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.plugin.setLexer(lexer);
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.plugin.setParser(parser);
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.plugin.update(content);
      var tokens = this.plugin.getTokens(),
          richTextareaBounds = this.updatePrettyPrinter(tokens);

      if (richTextareaBounds !== null) {
        this.setRichTextareaBounds(richTextareaBounds);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var width = this.getWidth(),
          height = this.getHeight();
      this.setPrettyPrinterWidth(width);
      this.setPrettyPrinterHeight(height);
      var richTextareaBounds = this.resizePrettyPrinter();
      this.setRichTextareaBounds(richTextareaBounds);
    }
  }, {
    key: "didMount",
    value: function didMount() {
      var content = this.getContent(),
          lineCount = (0, _content.lineCountFromContent)(content),
          lineHeight = this.getLneHeight(),
          borderTopWidth = this.getBorderTopWidth(),
          borderBottomWidth = this.getBorderBottomWidth(),
          height = lineCount * lineHeight + _scrollbarThickness["default"] + borderTopWidth + borderBottomWidth;
      this.setHeight(height);
      this.resize();
      this.update();
    }
  }, {
    key: "willUnmout",
    value: function willUnmout() {///
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(event, element) {
      var richTextarea = element,
          ///
      contentChanged = richTextarea.hasContentChanged();

      if (contentChanged) {
        var onContentChange = this.properties.onContentChange,
            contentChangeHandler = onContentChange; ///

        this.update();
        element = this; ///

        contentChangeHandler && contentChangeHandler(event, element); ///
      }
    }
  }, {
    key: "scrollHandler",
    value: function scrollHandler(event, element) {
      var richTextarea = element,
          ///
      scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this);
      return [/*#__PURE__*/_easy.React.createElement(_prettyPrinter["default"], null), /*#__PURE__*/_easy.React.createElement(_richTextarea["default"], {
        onChange: changeHandler,
        onScroll: scrollHandler,
        active: true
      })];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getPlugin = this.getPlugin.bind(this),
          updateYapp = this.update.bind(this),
          ///
      setYappWidth = this.setWidth.bind(this),
          ///
      setYappHeight = this.setHeight.bind(this),
          ///
      setYappLexer = this.setLexer.bind(this),
          ///
      setYappParser = this.setParser.bind(this); ///

      return {
        getPlugin: getPlugin,
        updateYapp: updateYapp,
        setYappWidth: setYappWidth,
        setYappHeight: setYappHeight,
        setYappLexer: setYappLexer,
        setYappParser: setYappParser
      };
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this2 = this;

      this.assignContext();
      var _this$properties = this.properties,
          childElements = _this$properties.childElements,
          _this$properties$edit = _this$properties.editable,
          editable = _this$properties$edit === void 0 ? false : _this$properties$edit,
          language = this.plugin.getLanguage(),
          content = (0, _content.contentFromChildElements)(childElements),
          readOnly = !editable,
          scrollTop = 0,
          scrollLeft = 0; ///

      this.setLanguage(language);
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);
      this.setRichTextareaReadOnly(readOnly);
      this.onResize(function () {
        return _this2.resize();
      });
    }
  }], [{
    key: "fromContent",
    value: function fromContent(content, language, Plugin) {
      var Class = Yapp,
          properties = (0, _properties.propertiesFromContentLanguageAndPlugin)(content, language, Plugin),
          plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin),
          yapp = _easy.Element.fromClass(Class, properties, plugin);

      yapp.initialise();
      return yapp;
    }
  }, {
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var language = properties.language,
          Plugin = properties.Plugin,
          plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin),
          yapp = _easy.Element.fromClass(Class, properties, plugin);

      yapp.initialise();
      return yapp;
    }
  }]);

  return Yapp;
}(_easy.Element);

_defineProperty(Yapp, "tagName", "div");

_defineProperty(Yapp, "defaultProperties", {
  className: "yapp"
});

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject(), _default2["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInRvcEJvcmRlcldpZHRoSW5QaXhlbHMiLCJ0b3BCb3JkZXJXaWR0aCIsImJvdHRvbUJvcmRlcldpZHRoSW5QaXhlbHMiLCJib3R0b21Cb3JkZXJXaWR0aCIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJnZXRDb250ZW50IiwidXBkYXRlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRQcmV0dHlQcmludGVySGVpZ2h0IiwicmVzaXplUHJldHR5UHJpbnRlciIsImxpbmVDb3VudCIsImdldExuZUhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwic2Nyb2xsQmFyVGhpY2tuZXNzIiwic2V0SGVpZ2h0IiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImRlZmF1bHRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsR0FBTCxDQUFTLGFBQVQsQ0FBM0I7QUFBQSxVQUNNQyxVQUFVLEdBQUcsc0JBQVlGLGtCQUFaLENBRG5CO0FBR0EsYUFBT0UsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtGLEdBQUwsQ0FBUyxrQkFBVCxDQUEvQjtBQUFBLFVBQ01HLGNBQWMsR0FBRyxzQkFBWUQsc0JBQVosQ0FEdkI7QUFHQSxhQUFPQyxjQUFQO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsVUFBTUMseUJBQXlCLEdBQUcsS0FBS0osR0FBTCxDQUFTLHFCQUFULENBQWxDO0FBQUEsVUFDTUssaUJBQWlCLEdBQUcsc0JBQVlELHlCQUFaLENBRDFCO0FBR0EsYUFBT0MsaUJBQVA7QUFDRDs7OzZCQUVRQyxLLEVBQU87QUFBRSxXQUFLWCxNQUFMLENBQVlZLFFBQVosQ0FBcUJELEtBQXJCO0FBQThCOzs7OEJBRXRDRSxNLEVBQVE7QUFBRSxXQUFLYixNQUFMLENBQVljLFNBQVosQ0FBc0JELE1BQXRCO0FBQWdDOzs7NkJBRTNDO0FBQ1AsVUFBTVYsT0FBTyxHQUFHLEtBQUtZLFVBQUwsRUFBaEI7QUFFQSxXQUFLZixNQUFMLENBQVlnQixNQUFaLENBQW1CYixPQUFuQjtBQUVBLFVBQU1jLE1BQU0sR0FBRyxLQUFLakIsTUFBTCxDQUFZa0IsU0FBWixFQUFmO0FBQUEsVUFDTUMsa0JBQWtCLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUJILE1BQXpCLENBRDNCOztBQUdBLFVBQUlFLGtCQUFrQixLQUFLLElBQTNCLEVBQWlDO0FBQy9CLGFBQUtFLHFCQUFMLENBQTJCRixrQkFBM0I7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNRyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtDLFNBQUwsRUFEZjtBQUdBLFdBQUtDLHFCQUFMLENBQTJCSixLQUEzQjtBQUNBLFdBQUtLLHNCQUFMLENBQTRCSCxNQUE1QjtBQUVBLFVBQU1MLGtCQUFrQixHQUFHLEtBQUtTLG1CQUFMLEVBQTNCO0FBRUEsV0FBS1AscUJBQUwsQ0FBMkJGLGtCQUEzQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNaEIsT0FBTyxHQUFHLEtBQUtZLFVBQUwsRUFBaEI7QUFBQSxVQUNNYyxTQUFTLEdBQUcsbUNBQXFCMUIsT0FBckIsQ0FEbEI7QUFBQSxVQUVNRyxVQUFVLEdBQUcsS0FBS3dCLFlBQUwsRUFGbkI7QUFBQSxVQUdNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFIdkI7QUFBQSxVQUlNQyxpQkFBaUIsR0FBRyxLQUFLQyxvQkFBTCxFQUoxQjtBQUFBLFVBS01WLE1BQU0sR0FBR0ssU0FBUyxHQUFHdkIsVUFBWixHQUF5QjZCLDhCQUF6QixHQUE4Q0osY0FBOUMsR0FBK0RFLGlCQUw5RTtBQU9BLFdBQUtHLFNBQUwsQ0FBZVosTUFBZjtBQUVBLFdBQUthLE1BQUw7QUFFQSxXQUFLckIsTUFBTDtBQUNEOzs7aUNBRVksQ0FDWDtBQUNEOzs7a0NBRWFzQixLLEVBQU9DLE8sRUFBUztBQUM1QixVQUFNQyxZQUFZLEdBQUdELE9BQXJCO0FBQUEsVUFBOEI7QUFDeEJFLE1BQUFBLGNBQWMsR0FBR0QsWUFBWSxDQUFDRSxpQkFBYixFQUR2Qjs7QUFHQSxVQUFJRCxjQUFKLEVBQW9CO0FBQ1osWUFBRUUsZUFBRixHQUFzQixLQUFLQyxVQUEzQixDQUFFRCxlQUFGO0FBQUEsWUFDQUUsb0JBREEsR0FDdUJGLGVBRHZCLENBRFksQ0FFNEI7O0FBRTlDLGFBQUszQixNQUFMO0FBRUF1QixRQUFBQSxPQUFPLEdBQUcsSUFBVixDQU5rQixDQU1GOztBQUVoQk0sUUFBQUEsb0JBQW9CLElBQUlBLG9CQUFvQixDQUFDUCxLQUFELEVBQVFDLE9BQVIsQ0FBNUMsQ0FSa0IsQ0FRNEM7QUFDL0Q7QUFDRjs7O2tDQUVhRCxLLEVBQU9DLE8sRUFBUztBQUM1QixVQUFNQyxZQUFZLEdBQUdELE9BQXJCO0FBQUEsVUFBOEI7QUFDeEJPLE1BQUFBLFNBQVMsR0FBR04sWUFBWSxDQUFDTyxZQUFiLEVBRGxCO0FBQUEsVUFFTUMsVUFBVSxHQUFHUixZQUFZLENBQUNTLGFBQWIsRUFGbkI7QUFJQSxXQUFLQyxtQkFBTCxDQUF5QkosU0FBekIsRUFBb0NFLFVBQXBDO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1HLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF0QjtBQUFBLFVBQ01DLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUR0QjtBQUdBLGFBQVEsY0FFTiwwQkFBQyx5QkFBRCxPQUZNLGVBR04sMEJBQUMsd0JBQUQ7QUFBYyxRQUFBLFFBQVEsRUFBRUQsYUFBeEI7QUFBdUMsUUFBQSxRQUFRLEVBQUVFLGFBQWpEO0FBQWdFLFFBQUEsTUFBTTtBQUF0RSxRQUhNLENBQVI7QUFNRDs7O29DQUVlO0FBQ2QsVUFBTUMsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUYsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUFBLFVBQ01HLFVBQVUsR0FBRyxLQUFLdkMsTUFBTCxDQUFZb0MsSUFBWixDQUFpQixJQUFqQixDQURuQjtBQUFBLFVBQzRDO0FBQ3RDSSxNQUFBQSxZQUFZLEdBQUcsS0FBS0MsUUFBTCxDQUFjTCxJQUFkLENBQW1CLElBQW5CLENBRnJCO0FBQUEsVUFFZ0Q7QUFDMUNNLE1BQUFBLGFBQWEsR0FBRyxLQUFLdEIsU0FBTCxDQUFlZ0IsSUFBZixDQUFvQixJQUFwQixDQUh0QjtBQUFBLFVBR2tEO0FBQzVDTyxNQUFBQSxZQUFZLEdBQUcsS0FBSy9DLFFBQUwsQ0FBY3dDLElBQWQsQ0FBbUIsSUFBbkIsQ0FKckI7QUFBQSxVQUlnRDtBQUMxQ1EsTUFBQUEsYUFBYSxHQUFHLEtBQUs5QyxTQUFMLENBQWVzQyxJQUFmLENBQW9CLElBQXBCLENBTHRCLENBRGMsQ0FNb0M7O0FBRWxELGFBQVE7QUFDTkUsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5DLFFBQUFBLFVBQVUsRUFBVkEsVUFGTTtBQUdOQyxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkUsUUFBQUEsYUFBYSxFQUFiQSxhQUpNO0FBS05DLFFBQUFBLFlBQVksRUFBWkEsWUFMTTtBQU1OQyxRQUFBQSxhQUFhLEVBQWJBO0FBTk0sT0FBUjtBQVFEOzs7aUNBRVk7QUFBQTs7QUFDWCxXQUFLQyxhQUFMO0FBRFcsNkJBR2lDLEtBQUtqQixVQUh0QztBQUFBLFVBR0hrQixhQUhHLG9CQUdIQSxhQUhHO0FBQUEsbURBR1lDLFFBSFo7QUFBQSxVQUdZQSxRQUhaLHNDQUd1QixLQUh2QjtBQUFBLFVBSUxDLFFBSkssR0FJTSxLQUFLaEUsTUFBTCxDQUFZaUUsV0FBWixFQUpOO0FBQUEsVUFLTDlELE9BTEssR0FLSyx1Q0FBeUIyRCxhQUF6QixDQUxMO0FBQUEsVUFNTEksUUFOSyxHQU1NLENBQUNILFFBTlA7QUFBQSxVQU9MakIsU0FQSyxHQU9PLENBUFA7QUFBQSxVQVFMRSxVQVJLLEdBUVEsQ0FSUixFQVFXOztBQUV0QixXQUFLbUIsV0FBTCxDQUFpQkgsUUFBakI7QUFFQSxXQUFLZCxtQkFBTCxDQUF5QkosU0FBekIsRUFBb0NFLFVBQXBDO0FBRUEsV0FBS29CLHNCQUFMLENBQTRCakUsT0FBNUI7QUFFQSxXQUFLa0UsdUJBQUwsQ0FBNkJILFFBQTdCO0FBRUEsV0FBS0ksUUFBTCxDQUFjO0FBQUEsZUFBTSxNQUFJLENBQUNqQyxNQUFMLEVBQU47QUFBQSxPQUFkO0FBQ0Q7OztnQ0FRa0JsQyxPLEVBQVM2RCxRLEVBQVVPLE0sRUFBUTtBQUM1QyxVQUFNQyxLQUFLLEdBQUcxRSxJQUFkO0FBQUEsVUFDTThDLFVBQVUsR0FBRyx3REFBdUN6QyxPQUF2QyxFQUFnRDZELFFBQWhELEVBQTBETyxNQUExRCxDQURuQjtBQUFBLFVBRU12RSxNQUFNLEdBQUcseUNBQTRCZ0UsUUFBNUIsRUFBc0NPLE1BQXRDLENBRmY7QUFBQSxVQUdNRSxJQUFJLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCNUIsVUFBekIsRUFBcUM1QyxNQUFyQyxDQUhiOztBQUtBeUUsTUFBQUEsSUFBSSxDQUFDRyxVQUFMO0FBRUEsYUFBT0gsSUFBUDtBQUNEOzs7OEJBRWdCRCxLLEVBQU81QixVLEVBQVk7QUFBQSxVQUMxQm9CLFFBRDBCLEdBQ0xwQixVQURLLENBQzFCb0IsUUFEMEI7QUFBQSxVQUNoQk8sTUFEZ0IsR0FDTDNCLFVBREssQ0FDaEIyQixNQURnQjtBQUFBLFVBRTVCdkUsTUFGNEIsR0FFbkIseUNBQTRCZ0UsUUFBNUIsRUFBc0NPLE1BQXRDLENBRm1CO0FBQUEsVUFHNUJFLElBSDRCLEdBR3JCQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QjVCLFVBQXpCLEVBQXFDNUMsTUFBckMsQ0FIcUI7O0FBS2xDeUUsTUFBQUEsSUFBSSxDQUFDRyxVQUFMO0FBRUEsYUFBT0gsSUFBUDtBQUNEOzs7O0VBM0xnQkMsYTs7Z0JBQWI1RSxJLGFBa0thLEs7O2dCQWxLYkEsSSx1QkFvS3VCO0FBQ3pCK0UsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUEwQmQsK0JBQVUvRSxJQUFWLEMsb0JBRVhnRixvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBkZWZhdWx0U3R5bGUgZnJvbSBcIi4vc3R5bGUvZGVmYXVsdFwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcbmltcG9ydCBzY3JvbGxCYXJUaGlja25lc3MgZnJvbSBcIi4vc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExuZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhcImxpbmUtaGVpZ2h0XCIpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSBzdHJpcFBpeGVscyhsaW5lSGVpZ2h0SW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCB0b3BCb3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpLFxuICAgICAgICAgIHRvcEJvcmRlcldpZHRoID0gc3RyaXBQaXhlbHModG9wQm9yZGVyV2lkdGhJblBpeGVscyk7XG5cbiAgICByZXR1cm4gdG9wQm9yZGVyV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJCb3R0b21XaWR0aCgpIHtcbiAgICBjb25zdCBib3R0b21Cb3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoXCJib3JkZXItYm90dG9tLXdpZHRoXCIpLFxuICAgICAgICAgIGJvdHRvbUJvcmRlcldpZHRoID0gc3RyaXBQaXhlbHMoYm90dG9tQm9yZGVyV2lkdGhJblBpeGVscyk7XG5cbiAgICByZXR1cm4gYm90dG9tQm9yZGVyV2lkdGg7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgc2Nyb2xsQmFyVGhpY2tuZXNzICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZUFuZFBsdWdpbihjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gICR7ZGVmYXVsdFN0eWxlfVxuXG5gO1xuIl19