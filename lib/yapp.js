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

var _colour = require("./scheme/colour");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ", ";\n  caret-color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n    font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n    \n  }\n\n"]);

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

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJUT1BfU0lERSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyV2lkdGgiLCJMRUZUX1NJREUiLCJib3JkZXJMZWZ0V2lkdGgiLCJSSUdIVF9TSURFIiwiYm9yZGVyUmlnaHRXaWR0aCIsIkJPVFRPTV9TSURFIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJnZXRDb250ZW50IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwibGluZUNvdW50IiwiZ2V0TGluZUhlaWdodCIsInNjcm9sbEJhclRoaWNrbmVzcyIsInNldEhlaWdodCIsInJlc2l6ZSIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwicmVzaXplWWFwcCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5IiwiZW5hYmxlRmlyYUNvZGUiLCJvblJlc2l6ZSIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFB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QUFzQ1EsTUFBdEMsQ0FGZjtBQUFBLFVBR01HLElBQUksR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJ2RCxVQUF6QixFQUFxQy9CLE1BQXJDLENBSGI7O0FBS0F1RixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs4QkFFZ0JELEssRUFBT3ZELFUsRUFBWTtBQUFBLFVBQzFCNkMsUUFEMEIsR0FDTDdDLFVBREssQ0FDMUI2QyxRQUQwQjtBQUFBLFVBQ2hCUSxNQURnQixHQUNMckQsVUFESyxDQUNoQnFELE1BRGdCO0FBQUEsVUFFNUJwRixNQUY0QixHQUVuQix5Q0FBNEI0RSxRQUE1QixFQUFzQ1EsTUFBdEMsQ0FGbUI7QUFBQSxVQUc1QkcsSUFINEIsR0FHckJDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCdkQsVUFBekIsRUFBcUMvQixNQUFyQyxDQUhxQjs7QUFLbEN1RixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUE3T2dCQyxhOztnQkFBYjFGLEksYUE2TWEsSzs7Z0JBN01iQSxJLHVCQStNdUI7QUFDekI2RixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztnQkEvTXZCN0YsSSx1QkFtTnVCLENBQ3pCLFFBRHlCLEVBRXpCLFVBRnlCLEVBR3pCLFVBSHlCLEVBSXpCLFVBSnlCLEM7O2VBNkJkLCtCQUFVQSxJQUFWLEMsb0JBT0o4RixjLEVBQ01DLG1CLEVBQ0NDLG9CLEVBQ0lDLHdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcbmltcG9ydCBzY3JvbGxCYXJUaGlja25lc3MgZnJvbSBcIi4vc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgVE9QX1NJREUsIExFRlRfU0lERSwgUklHSFRfU0lERSwgQk9UVE9NX1NJREUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IGNvbG91ciwgY2FyZXRDb2xvdXIsIGJvcmRlckNvbG91ciwgYmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TGluZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhcImxpbmUtaGVpZ2h0XCIpLFxuICAgICAgICBsaW5lSGVpZ2h0ID0gc3RyaXBQaXhlbHMobGluZUhlaWdodEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBsaW5lSGVpZ2h0O1xuICB9XG5cbiAgZ2V0Qm9yZGVyV2lkdGgoc2lkZSkge1xuICAgIGNvbnN0IGJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhgYm9yZGVyLSR7c2lkZX0td2lkdGhgKSxcbiAgICAgICAgICBib3JkZXJXaWR0aCA9IHN0cmlwUGl4ZWxzKGJvcmRlcldpZHRoSW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGJvcmRlcldpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyVG9wV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFRPUF9TSURFLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVF9TSURFLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFRfU0lERSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTV9TSURFLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBlbmFibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpO1xuXG4gICAgaGVpZ2h0IC09ICggYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aCApO1xuICAgIHdpZHRoIC09ICggYm9yZGVyTGVmdFdpZHRoICsgYm9yZGVyUmlnaHRXaWR0aCApO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgc2Nyb2xsQmFyVGhpY2tuZXNzICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICByZXNpemVZYXBwXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBmaXJhQ29kZSA9IGZhbHNlLCBlZGl0YWJsZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7IC8qIEZvcmNlIGxpZ2F0dXJlcyBmb3IgV2Via2l0LCBCbGluaywgR2Vja28gKi9cbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cbiAgICBcbiAgfVxuXG5gO1xuIl19