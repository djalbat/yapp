"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  width: 100%;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ", ";\n  caret-color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n    font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n    \n  }\n\n"])), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);

exports["default"] = _default;