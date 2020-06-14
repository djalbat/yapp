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
    key: "setWidth",
    value: function setWidth(width) {
      console.log("width ".concat(width));

      _get(_getPrototypeOf(Yapp.prototype), "setWidth", this).call(this, width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      console.log("height ".concat(height));

      _get(_getPrototypeOf(Yapp.prototype), "setHeight", this).call(this, height);
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
      console.log("resize");
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
          language = this.plugin.getLanguage(),
          content = (0, _content.contentFromChildElements)(childElements),
          readOnly = !editable,
          scrollTop = 0,
          scrollLeft = 0; ///

      this.setLanguage(language);
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);
      this.setRichTextareaReadOnly(readOnly);
      this.onResize(function (event, element) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGluZUhlaWdodEluUGl4ZWxzIiwiY3NzIiwibGluZUhlaWdodCIsInNpZGUiLCJib3JkZXJXaWR0aEluUGl4ZWxzIiwiYm9yZGVyV2lkdGgiLCJUT1BfU0lERSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyV2lkdGgiLCJMRUZUX1NJREUiLCJib3JkZXJMZWZ0V2lkdGgiLCJSSUdIVF9TSURFIiwiYm9yZGVyUmlnaHRXaWR0aCIsIkJPVFRPTV9TSURFIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0IiwiZ2V0Q29udGVudCIsInVwZGF0ZSIsInRva2VucyIsImdldFRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImdldEJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyTGVmdFdpZHRoIiwiZ2V0Qm9yZGVyUmlnaHRXaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJsaW5lQ291bnQiLCJnZXRMbmVIZWlnaHQiLCJzY3JvbGxCYXJUaGlja25lc3MiLCJzZXRIZWlnaHQiLCJyZXNpemUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwib25Db250ZW50Q2hhbmdlIiwicHJvcGVydGllcyIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwiY2hhbmdlSGFuZGxlciIsImJpbmQiLCJzY3JvbGxIYW5kbGVyIiwiZ2V0UGx1Z2luIiwidXBkYXRlWWFwcCIsInNldFlhcHBXaWR0aCIsInNldFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJyZXNpemVZYXBwIiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImRlZmF1bHRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUIsOEJBQU1ELFFBQU47QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFINEI7QUFJN0I7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLG1CQURoQixDQURXLENBRTJCOztBQUV0QyxhQUFPRSxPQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQU1DLGtCQUFrQixH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QixFQUFxQ3RELE1BQXJDLENBSGI7O0FBS0FvRixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs4QkFFZ0JELEssRUFBTzdCLFUsRUFBWTtBQUFBLFVBQzFCcUIsUUFEMEIsR0FDTHJCLFVBREssQ0FDMUJxQixRQUQwQjtBQUFBLFVBQ2hCTyxNQURnQixHQUNMNUIsVUFESyxDQUNoQjRCLE1BRGdCO0FBQUEsVUFFNUJsRixNQUY0QixHQUVuQix5Q0FBNEIyRSxRQUE1QixFQUFzQ08sTUFBdEMsQ0FGbUI7QUFBQSxVQUc1QkUsSUFINEIsR0FHckJDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCN0IsVUFBekIsRUFBcUN0RCxNQUFyQyxDQUhxQjs7QUFLbENvRixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUF4T2dCQyxhOztnQkFBYnZGLEksYUErTWEsSzs7Z0JBL01iQSxJLHVCQWlOdUI7QUFDekIwRixFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQTBCZCwrQkFBVTFGLElBQVYsQyxvQkFFWDJGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGRlZmF1bHRTdHlsZSBmcm9tIFwiLi9zdHlsZS9kZWZhdWx0XCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuaW1wb3J0IFByZXR0eVByaW50ZXIgZnJvbSBcIi4vcHJldHR5UHJpbnRlclwiO1xuaW1wb3J0IHNjcm9sbEJhclRoaWNrbmVzcyBmcm9tIFwiLi9zY3JvbGxiYXJUaGlja25lc3NcIjtcblxuaW1wb3J0IHsgc3RyaXBQaXhlbHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY3NzXCI7XG5pbXBvcnQgeyBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBUT1BfU0lERSwgTEVGVF9TSURFLCBSSUdIVF9TSURFLCBCT1RUT01fU0lERSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldExuZUhlaWdodCgpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0SW5QaXhlbHMgPSB0aGlzLmNzcyhcImxpbmUtaGVpZ2h0XCIpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSBzdHJpcFBpeGVscyhsaW5lSGVpZ2h0SW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG4gIH1cblxuICBnZXRCb3JkZXJXaWR0aChzaWRlKSB7XG4gICAgY29uc3QgYm9yZGVyV2lkdGhJblBpeGVscyA9IHRoaXMuY3NzKGBib3JkZXItJHtzaWRlfS13aWR0aGApLFxuICAgICAgICAgIGJvcmRlcldpZHRoID0gc3RyaXBQaXhlbHMoYm9yZGVyV2lkdGhJblBpeGVscyk7XG5cbiAgICByZXR1cm4gYm9yZGVyV2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJUb3BXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gVE9QX1NJREUsXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclRvcFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyTGVmdFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBMRUZUX1NJREUsXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJMZWZ0V2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJSaWdodFdpZHRoKCkge1xuICAgIGNvbnN0IHNpZGUgPSBSSUdIVF9TSURFLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlclJpZ2h0V2lkdGg7XG4gIH1cblxuICBnZXRCb3JkZXJCb3R0b21XaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gQk9UVE9NX1NJREUsXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlcldpZHRoKHNpZGUpO1xuXG4gICAgcmV0dXJuIGJvcmRlckJvdHRvbVdpZHRoO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc29sZS5sb2coYHdpZHRoICR7d2lkdGh9YClcblxuICAgIHN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhgaGVpZ2h0ICR7aGVpZ2h0fWApXG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVzaXplXCIpXG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGggKTtcbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIGJvcmRlclJpZ2h0V2lkdGggKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMbmVIZWlnaHQoKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBsaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgc2Nyb2xsQmFyVGhpY2tuZXNzICsgYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aDtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHJlc2l6ZVlhcHBcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4pIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlQW5kUGx1Z2luKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgJHtkZWZhdWx0U3R5bGV9XG5cbmA7XG4iXX0=