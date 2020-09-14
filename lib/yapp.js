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

var _constants = require("./constants");

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

      if (resizeable) {
        this.onResize(function (event, element) {
          return _this2.resize();
        });
      }
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

_defineProperty(Yapp, "ignoredProperties", ["Plugin", "language", "editable", "resizeable"]);

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject(), _default2["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJUT1BfU0lERSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyV2lkdGgiLCJMRUZUX1NJREUiLCJib3JkZXJMZWZ0V2lkdGgiLCJSSUdIVF9TSURFIiwiYm9yZGVyUmlnaHRXaWR0aCIsIkJPVFRPTV9TSURFIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiZ2V0Q29udGVudCIsInVwZGF0ZSIsInRva2VucyIsImdldFRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRQcmV0dHlQcmludGVySGVpZ2h0IiwicmVzaXplUHJldHR5UHJpbnRlciIsImxpbmVDb3VudCIsImdldExuZUhlaWdodCIsInNjcm9sbEJhclRoaWNrbmVzcyIsInNldEhlaWdodCIsInJlc2l6ZSIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJjaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNjcm9sbEhhbmRsZXIiLCJnZXRQbHVnaW4iLCJ1cGRhdGVZYXBwIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsInJlc2l6ZVlhcHAiLCJhc3NpZ25Db250ZXh0IiwiY2hpbGRFbGVtZW50cyIsImVkaXRhYmxlIiwicmVzaXplYWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImRlZmF1bHRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsR0FBTCxDQUFT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QUEsVUFDaEJPLE1BRGdCLEdBQ0w3QixVQURLLENBQ2hCNkIsTUFEZ0I7QUFBQSxVQUU1QmpGLE1BRjRCLEdBRW5CLHlDQUE0QjBFLFFBQTVCLEVBQXNDTyxNQUF0QyxDQUZtQjtBQUFBLFVBRzVCRSxJQUg0QixHQUdyQkMsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUI5QixVQUF6QixFQUFxQ3BELE1BQXJDLENBSHFCOztBQUtsQ21GLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQTdOZ0JDLGE7O2dCQUFidEYsSSx1QkFtTXVCLENBQ3pCLFFBRHlCLEVBRXpCLFVBRnlCLEVBR3pCLFVBSHlCLEVBSXpCLFlBSnlCLEM7O2VBNkJkLCtCQUFVQSxJQUFWLEMsb0JBRVh5RixvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBkZWZhdWx0U3R5bGUgZnJvbSBcIi4vc3R5bGUvZGVmYXVsdFwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcbmltcG9ydCBzY3JvbGxCYXJUaGlja25lc3MgZnJvbSBcIi4vc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgVE9QX1NJREUsIExFRlRfU0lERSwgUklHSFRfU0lERSwgQk9UVE9NX1NJREUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFBsdWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRMbmVIZWlnaHQoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodEluUGl4ZWxzID0gdGhpcy5jc3MoXCJsaW5lLWhlaWdodFwiKSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gc3RyaXBQaXhlbHMobGluZUhlaWdodEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBsaW5lSGVpZ2h0O1xuICB9XG5cbiAgZ2V0Qm9yZGVyV2lkdGgoc2lkZSkge1xuICAgIGNvbnN0IGJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhgYm9yZGVyLSR7c2lkZX0td2lkdGhgKSxcbiAgICAgICAgICBib3JkZXJXaWR0aCA9IHN0cmlwUGl4ZWxzKGJvcmRlcldpZHRoSW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGJvcmRlcldpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyVG9wV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFRPUF9TSURFLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVF9TSURFLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFRfU0lERSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTV9TSURFLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgc2Nyb2xsQmFyVGhpY2tuZXNzICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHJlc2l6ZVlhcHBcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gZmFsc2UsIHJlc2l6ZWFibGUgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICBpZiAocmVzaXplYWJsZSkge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMucmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJyZXNpemVhYmxlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbikge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VBbmRQbHVnaW4oY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICAke2RlZmF1bHRTdHlsZX1cblxuYDtcbiJdfQ==