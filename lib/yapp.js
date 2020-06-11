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
      var borderTopWidth = this.getBorderTopWidth(),
          borderBottomWidth = this.getBorderBottomWidth();
      height -= borderTopWidth + borderBottomWidth;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInRvcEJvcmRlcldpZHRoSW5QaXhlbHMiLCJ0b3BCb3JkZXJXaWR0aCIsImJvdHRvbUJvcmRlcldpZHRoSW5QaXhlbHMiLCJib3R0b21Cb3JkZXJXaWR0aCIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJnZXRDb250ZW50IiwidXBkYXRlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwibGluZUNvdW50IiwiZ2V0TG5lSGVpZ2h0Iiwic2Nyb2xsQmFyVGhpY2tuZXNzIiwic2V0SGVpZ2h0IiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImRlZmF1bHRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsR0FBTCxDQUFTLGFBQVQsQ0FBM0I7QUFBQSxVQUNNQyxVQUFVLEdBQUcsc0JBQVlGLGtCQUFaLENBRG5CO0FBR0EsYUFBT0UsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtGLEdBQUwsQ0FB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QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs4QkFFZ0JELEssRUFBTzVCLFUsRUFBWTtBQUFBLFVBQzFCb0IsUUFEMEIsR0FDTHBCLFVBREssQ0FDMUJvQixRQUQwQjtBQUFBLFVBQ2hCTyxNQURnQixHQUNMM0IsVUFESyxDQUNoQjJCLE1BRGdCO0FBQUEsVUFFNUJ2RSxNQUY0QixHQUVuQix5Q0FBNEJnRSxRQUE1QixFQUFzQ08sTUFBdEMsQ0FGbUI7QUFBQSxVQUc1QkUsSUFINEIsR0FHckJDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCNUIsVUFBekIsRUFBcUM1QyxNQUFyQyxDQUhxQjs7QUFLbEN5RSxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUFoTWdCQyxhOztnQkFBYjVFLEksYUF1S2EsSzs7Z0JBdktiQSxJLHVCQXlLdUI7QUFDekIrRSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQTBCZCwrQkFBVS9FLElBQVYsQyxvQkFFWGdGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGRlZmF1bHRTdHlsZSBmcm9tIFwiLi9zdHlsZS9kZWZhdWx0XCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuaW1wb3J0IFByZXR0eVByaW50ZXIgZnJvbSBcIi4vcHJldHR5UHJpbnRlclwiO1xuaW1wb3J0IHNjcm9sbEJhclRoaWNrbmVzcyBmcm9tIFwiLi9zY3JvbGxiYXJUaGlja25lc3NcIjtcblxuaW1wb3J0IHsgc3RyaXBQaXhlbHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3NzXCI7XG5pbXBvcnQgeyBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0TG5lSGVpZ2h0KCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHRJblBpeGVscyA9IHRoaXMuY3NzKFwibGluZS1oZWlnaHRcIiksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIGdldEJvcmRlclRvcFdpZHRoKCkge1xuICAgIGNvbnN0IHRvcEJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIiksXG4gICAgICAgICAgdG9wQm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyh0b3BCb3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiB0b3BCb3JkZXJXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckJvdHRvbVdpZHRoKCkge1xuICAgIGNvbnN0IGJvdHRvbUJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhcImJvcmRlci1ib3R0b20td2lkdGhcIiksXG4gICAgICAgICAgYm90dG9tQm9yZGVyV2lkdGggPSBzdHJpcFBpeGVscyhib3R0b21Cb3JkZXJXaWR0aEluUGl4ZWxzKTtcblxuICAgIHJldHVybiBib3R0b21Cb3JkZXJXaWR0aDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldExuZUhlaWdodCgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGxpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBzY3JvbGxCYXJUaGlja25lc3MgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlclxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZWRpdGFibGUgPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4pIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlQW5kUGx1Z2luKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgJHtkZWZhdWx0U3R5bGV9XG5cbmA7XG4iXX0=