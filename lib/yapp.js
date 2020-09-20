"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _scrollbarThickness = _interopRequireDefault(require("./scrollbarThickness"));

var _css = require("./utilities/css");

var _plugin = require("./utilities/plugin");

var _colour = require("./scheme/colour");

var _constants = require("./constants");

var _properties = require("./utilities/properties");

var _content = require("./utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n    font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n    \n  }\n\n"]);

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    key: "getLineHeight",
    value: function getLineHeight() {
      var lineHeightInPixels = this.css("line-height"),
          lineHeight = (0, _css.stripPixels)(lineHeightInPixels);
      return lineHeight;
    }
  }, {
    key: "getBorderWidth",
    value: function getBorderWidth(side) {
      var borderWidthInPixels = this.css("border-".concat(side, "-width")),
          borderWidth = (0, _css.stripPixels)(borderWidthInPixels);
      return borderWidth;
    }
  }, {
    key: "getBorderTopWidth",
    value: function getBorderTopWidth() {
      var side = _constants.TOP_SIDE,
          borderTopWidth = this.getBorderWidth(side);
      return borderTopWidth;
    }
  }, {
    key: "getBorderLeftWidth",
    value: function getBorderLeftWidth() {
      var side = _constants.LEFT_SIDE,
          borderLeftWidth = this.getBorderWidth(side);
      return borderLeftWidth;
    }
  }, {
    key: "getBorderRightWidth",
    value: function getBorderRightWidth() {
      var side = _constants.RIGHT_SIDE,
          borderRightWidth = this.getBorderWidth(side);
      return borderRightWidth;
    }
  }, {
    key: "getBorderBottomWidth",
    value: function getBorderBottomWidth() {
      var side = _constants.BOTTOM_SIDE,
          borderBottomWidth = this.getBorderWidth(side);
      return borderBottomWidth;
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
    key: "enableFiraCode",
    value: function enableFiraCode() {
      this.addClass("fira-code");
    }
  }, {
    key: "disableFiraCode",
    value: function disableFiraCode() {
      this.removeClass("fira-code");
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
      var borderTopWidth = this.getBorderTopWidth(),
          borderLeftWidth = this.getBorderLeftWidth(),
          borderRightWidth = this.getBorderRightWidth(),
          borderBottomWidth = this.getBorderBottomWidth();
      height -= borderTopWidth + borderBottomWidth;
      width -= borderLeftWidth + borderRightWidth;
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
          lineHeight = this.getLineHeight(),
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
      setYappParser = this.setParser.bind(this),
          ///
      resizeYapp = this.resize.bind(this); ///

      return {
        getPlugin: getPlugin,
        updateYapp: updateYapp,
        setYappWidth: setYappWidth,
        setYappHeight: setYappHeight,
        setYappLexer: setYappLexer,
        setYappParser: setYappParser,
        resizeYapp: resizeYapp
      };
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this2 = this;

      this.assignContext();
      var _this$properties = this.properties,
          childElements = _this$properties.childElements,
          _this$properties$fira = _this$properties.firaCode,
          firaCode = _this$properties$fira === void 0 ? false : _this$properties$fira,
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

      if (firaCode) {
        this.enableFiraCode();
      }

      this.onResize(function (event, element) {
        return _this2.resize();
      });
    }
  }], [{
    key: "fromContent",
    value: function fromContent(content, language, Plugin, options) {
      var Class = Yapp,
          properties = (0, _properties.propertiesFromContentLanguagePluginAndOptions)(content, language, Plugin, options),
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

_defineProperty(Yapp, "ignoredProperties", ["Plugin", "language", "firaCode", "editable"]);

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject(), _colour.colour, _colour.borderColour, _colour.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJUT1BfU0lERSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyV2lkdGgiLCJMRUZUX1NJREUiLCJib3JkZXJMZWZ0V2lkdGgiLCJSSUdIVF9TSURFIiwiYm9yZGVyUmlnaHRXaWR0aCIsIkJPVFRPTV9TSURFIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJnZXRDb250ZW50IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwibGluZUNvdW50IiwiZ2V0TGluZUhlaWdodCIsInNjcm9sbEJhclRoaWNrbmVzcyIsInNldEhlaWdodCIsInJlc2l6ZSIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwicmVzaXplWWFwcCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5IiwiZW5hYmxlRmlyYUNvZGUiLCJvblJlc2l6ZSIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImNvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUIsOEJBQU1ELFFBQU47QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFINEI7QUFJN0I7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxPQUFPLEdB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RmY7QUFBQSxVQUdNRyxJQUFJLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCdkQsVUFBekIsRUFBcUMvQixNQUFyQyxDQUhiOztBQUtBdUYsTUFBQUEsSUFBSSxDQUFDRyxVQUFMO0FBRUEsYUFBT0gsSUFBUDtBQUNEOzs7OEJBRWdCRCxLLEVBQU92RCxVLEVBQVk7QUFBQSxVQUMxQjZDLFFBRDBCLEdBQ0w3QyxVQURLLENBQzFCNkMsUUFEMEI7QUFBQSxVQUNoQlEsTUFEZ0IsR0FDTHJELFVBREssQ0FDaEJxRCxNQURnQjtBQUFBLFVBRTVCcEYsTUFGNEIsR0FFbkIseUNBQTRCNEUsUUFBNUIsRUFBc0NRLE1BQXRDLENBRm1CO0FBQUEsVUFHNUJHLElBSDRCLEdBR3JCQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QnZELFVBQXpCLEVBQXFDL0IsTUFBckMsQ0FIcUI7O0FBS2xDdUYsTUFBQUEsSUFBSSxDQUFDRyxVQUFMO0FBRUEsYUFBT0gsSUFBUDtBQUNEOzs7O0VBN09nQkMsYTs7Z0JBQWIxRixJLGFBNk1hLEs7O2dCQTdNYkEsSSx1QkErTXVCO0FBQ3pCNkYsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7Z0JBL012QjdGLEksdUJBbU51QixDQUN6QixRQUR5QixFQUV6QixVQUZ5QixFQUd6QixVQUh5QixFQUl6QixVQUp5QixDOztlQTZCZCwrQkFBVUEsSUFBVixDLG9CQU9KOEYsYyxFQUNPQyxvQixFQUNJQyx3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgc2Nyb2xsQmFyVGhpY2tuZXNzIGZyb20gXCIuL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5pbXBvcnQgeyBzdHJpcFBpeGVscyB9IGZyb20gXCIuL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IGNvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgVE9QX1NJREUsIExFRlRfU0lERSwgUklHSFRfU0lERSwgQk9UVE9NX1NJREUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGluZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhcImxpbmUtaGVpZ2h0XCIpLFxuICAgICAgICBsaW5lSGVpZ2h0ID0gc3RyaXBQaXhlbHMobGluZUhlaWdodEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBsaW5lSGVpZ2h0O1xuICB9XG5cbiAgZ2V0Qm9yZGVyV2lkdGgoc2lkZSkge1xuICAgIGNvbnN0IGJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhgYm9yZGVyLSR7c2lkZX0td2lkdGhgKSxcbiAgICAgICAgICBib3JkZXJXaWR0aCA9IHN0cmlwUGl4ZWxzKGJvcmRlcldpZHRoSW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGJvcmRlcldpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyVG9wV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFRPUF9TSURFLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVF9TSURFLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFRfU0lERSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTV9TSURFLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBlbmFibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpO1xuXG4gICAgaGVpZ2h0IC09ICggYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aCApO1xuICAgIHdpZHRoIC09ICggYm9yZGVyTGVmdFdpZHRoICsgYm9yZGVyUmlnaHRXaWR0aCApO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgc2Nyb2xsQmFyVGhpY2tuZXNzICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICByZXNpemVZYXBwXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBmaXJhQ29kZSA9IGZhbHNlLCBlZGl0YWJsZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxOyAgLyogRW5hYmxlIGxpZ2F0dXJlcyBmb3IgSUUgMTArLCBFZGdlICovXG4gICAgXG4gIH1cblxuYDtcbiJdfQ==