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

var _constants = require("./constants");

var _properties = require("./utilities/properties");

var _content = require("./utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  position: relative;\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n    font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n    \n  }\n\n"]);

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
          _this$properties$resi = _this$properties.resizeable,
          resizeable = _this$properties$resi === void 0 ? false : _this$properties$resi,
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

      if (resizeable) {
        this.onResize(function (event, element) {
          return _this2.resize();
        });
      }
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

_defineProperty(Yapp, "ignoredProperties", ["Plugin", "language", "firaCode", "editable", "resizeable"]);

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJUT1BfU0lERSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyV2lkdGgiLCJMRUZUX1NJREUiLCJib3JkZXJMZWZ0V2lkdGgiLCJSSUdIVF9TSURFIiwiYm9yZGVyUmlnaHRXaWR0aCIsIkJPVFRPTV9TSURFIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJnZXRDb250ZW50IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwibGluZUNvdW50IiwiZ2V0TGluZUhlaWdodCIsInNjcm9sbEJhclRoaWNrbmVzcyIsInNldEhlaWdodCIsInJlc2l6ZSIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwicmVzaXplWWFwcCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJlZGl0YWJsZSIsInJlc2l6ZWFibGUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsImVuYWJsZUZpcmFDb2RlIiwib25SZXNpemUiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUIsOEJBQU1ELFFBQU47QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFINEI7QUFJN0I7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLG1CQURoQixDQURXLENBRTJCOztBQUV0QyxhQUFPRSxP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dEYsTUFBTSxHQUFHLHlDQUE0QjZFLFFBQTVCLEVBQXNDUSxNQUF0QyxDQUZmO0FBQUEsVUFHTUcsSUFBSSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QnhELFVBQXpCLEVBQXFDL0IsTUFBckMsQ0FIYjs7QUFLQXdGLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OzhCQUVnQkQsSyxFQUFPeEQsVSxFQUFZO0FBQUEsVUFDMUI4QyxRQUQwQixHQUNMOUMsVUFESyxDQUMxQjhDLFFBRDBCO0FBQUEsVUFDaEJRLE1BRGdCLEdBQ0x0RCxVQURLLENBQ2hCc0QsTUFEZ0I7QUFBQSxVQUU1QnJGLE1BRjRCLEdBRW5CLHlDQUE0QjZFLFFBQTVCLEVBQXNDUSxNQUF0QyxDQUZtQjtBQUFBLFVBRzVCRyxJQUg0QixHQUdyQkMsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJ4RCxVQUF6QixFQUFxQy9CLE1BQXJDLENBSHFCOztBQUtsQ3dGLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQWhQZ0JDLGE7O2dCQUFiM0YsSSxhQStNYSxLOztnQkEvTWJBLEksdUJBaU51QjtBQUN6QjhGLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2dCQWpOdkI5RixJLHVCQXFOdUIsQ0FDekIsUUFEeUIsRUFFekIsVUFGeUIsRUFHekIsVUFIeUIsRUFJekIsVUFKeUIsRUFLekIsWUFMeUIsQzs7ZUE4QmQsK0JBQVVBLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgc2Nyb2xsQmFyVGhpY2tuZXNzIGZyb20gXCIuL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5pbXBvcnQgeyBzdHJpcFBpeGVscyB9IGZyb20gXCIuL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IFRPUF9TSURFLCBMRUZUX1NJREUsIFJJR0hUX1NJREUsIEJPVFRPTV9TSURFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExpbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoXCJsaW5lLWhlaWdodFwiKSxcbiAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlcldpZHRoKHNpZGUpIHtcbiAgICBjb25zdCBib3JkZXJXaWR0aEluUGl4ZWxzID0gdGhpcy5jc3MoYGJvcmRlci0ke3NpZGV9LXdpZHRoYCksXG4gICAgICAgICAgYm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBUT1BfU0lERSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyVG9wV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJMZWZ0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IExFRlRfU0lERSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckxlZnRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlclJpZ2h0V2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFJJR0hUX1NJREUsXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyUmlnaHRXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBCT1RUT01fU0lERSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyQm90dG9tV2lkdGg7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgZW5hYmxlRmlyYUNvZGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgfVxuXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gbGluZUNvdW50ICogbGluZUhlaWdodCArIHNjcm9sbEJhclRoaWNrbmVzcyArIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3V0KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBIZWlnaHQsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgcmVzaXplWWFwcFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZmlyYUNvZGUgPSBmYWxzZSwgZWRpdGFibGUgPSBmYWxzZSwgcmVzaXplYWJsZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuICAgIH1cblxuICAgIGlmIChyZXNpemVhYmxlKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiUGx1Z2luXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwiZmlyYUNvZGVcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJyZXNpemVhYmxlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxOyAgLyogRW5hYmxlIGxpZ2F0dXJlcyBmb3IgSUUgMTArLCBFZGdlICovXG4gICAgXG4gIH1cblxuYDtcbiJdfQ==