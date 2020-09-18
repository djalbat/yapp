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

var _properties = require("./utilities/properties");

var _constants = require("./constants");

var _content = require("./utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  position: relative;\n\n"]);

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
      this.enableRichTextareaFiraCode();
      this.enablePrettyPrinterFiraCode();
    }
  }, {
    key: "disableFiraCode",
    value: function disableFiraCode() {
      this.disableRichTextareaFiraCode();
      this.disablePrettyPrinterFiraCode();
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
          richTextareaLineHeight = this.getRichTextareaLineHeight(),
          lineNumbersLineHeight = richTextareaLineHeight,
          ///
      lineHeight = richTextareaLineHeight,
          ///
      borderTopWidth = this.getBorderTopWidth(),
          borderBottomWidth = this.getBorderBottomWidth(),
          height = lineCount * lineHeight + _scrollbarThickness["default"] + borderTopWidth + borderBottomWidth;
      this.setHeight(height);
      this.resize();
      this.update();
      this.setLineNumbersLineHeight(lineNumbersLineHeight);
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

_defineProperty(Yapp, "ignoredProperties", ["Plugin", "language", "firaCode", "editable", "resizeable"]);

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50Iiwic2lkZSIsImJvcmRlcldpZHRoSW5QaXhlbHMiLCJjc3MiLCJib3JkZXJXaWR0aCIsIlRPUF9TSURFIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJXaWR0aCIsIkxFRlRfU0lERSIsImJvcmRlckxlZnRXaWR0aCIsIlJJR0hUX1NJREUiLCJib3JkZXJSaWdodFdpZHRoIiwiQk9UVE9NX1NJREUiLCJib3JkZXJCb3R0b21XaWR0aCIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJlbmFibGVSaWNoVGV4dGFyZWFGaXJhQ29kZSIsImVuYWJsZVByZXR0eVByaW50ZXJGaXJhQ29kZSIsImRpc2FibGVSaWNoVGV4dGFyZWFGaXJhQ29kZSIsImRpc2FibGVQcmV0dHlQcmludGVyRmlyYUNvZGUiLCJnZXRDb250ZW50IiwidXBkYXRlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwibGluZUNvdW50IiwicmljaFRleHRhcmVhTGluZUhlaWdodCIsImdldFJpY2hUZXh0YXJlYUxpbmVIZWlnaHQiLCJsaW5lTnVtYmVyc0xpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0Iiwic2Nyb2xsQmFyVGhpY2tuZXNzIiwic2V0SGVpZ2h0IiwicmVzaXplIiwic2V0TGluZU51bWJlcnNMaW5lSGVpZ2h0IiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwicmVzaXplWWFwcCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJlZGl0YWJsZSIsInJlc2l6ZWFibGUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsImVuYWJsZUZpcmFDb2RlIiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFB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O0FBQ0Y7OztnQ0FnQmtCL0MsTyxFQUFTOEUsUSxFQUFVUSxNLEVBQVE7QUFDNUMsVUFBTUMsS0FBSyxHQUFHNUYsSUFBZDtBQUFBLFVBQ000RCxVQUFVLEdBQUcsd0RBQXVDdkQsT0FBdkMsRUFBZ0Q4RSxRQUFoRCxFQUEwRFEsTUFBMUQsQ0FEbkI7QUFBQSxVQUVNekYsTUFBTSxHQUFHLHlDQUE0QmlGLFFBQTVCLEVBQXNDUSxNQUF0QyxDQUZmO0FBQUEsVUFHTUUsSUFBSSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QmhDLFVBQXpCLEVBQXFDMUQsTUFBckMsQ0FIYjs7QUFLQTJGLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OzhCQUVnQkQsSyxFQUFPaEMsVSxFQUFZO0FBQUEsVUFDMUJ1QixRQUQwQixHQUNMdkIsVUFESyxDQUMxQnVCLFFBRDBCO0FBQUEsVUFDaEJRLE1BRGdCLEdBQ0wvQixVQURLLENBQ2hCK0IsTUFEZ0I7QUFBQSxVQUU1QnpGLE1BRjRCLEdBRW5CLHlDQUE0QmlGLFFBQTVCLEVBQXNDUSxNQUF0QyxDQUZtQjtBQUFBLFVBRzVCRSxJQUg0QixHQUdyQkMsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJoQyxVQUF6QixFQUFxQzFELE1BQXJDLENBSHFCOztBQUtsQzJGLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQWpQZ0JDLGE7O2dCQUFiOUYsSSxhQWdOYSxLOztnQkFoTmJBLEksdUJBa051QjtBQUN6QmlHLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2dCQWxOdkJqRyxJLHVCQXNOdUIsQ0FDekIsUUFEeUIsRUFFekIsVUFGeUIsRUFHekIsVUFIeUIsRUFJekIsVUFKeUIsRUFLekIsWUFMeUIsQzs7ZUE4QmQsK0JBQVVBLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgc2Nyb2xsQmFyVGhpY2tuZXNzIGZyb20gXCIuL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5pbXBvcnQgeyBzdHJpcFBpeGVscyB9IGZyb20gXCIuL3V0aWxpdGllcy9jc3NcIjtcbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IFRPUF9TSURFLCBMRUZUX1NJREUsIFJJR0hUX1NJREUsIEJPVFRPTV9TSURFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0Qm9yZGVyV2lkdGgoc2lkZSkge1xuICAgIGNvbnN0IGJvcmRlcldpZHRoSW5QaXhlbHMgPSB0aGlzLmNzcyhgYm9yZGVyLSR7c2lkZX0td2lkdGhgKSxcbiAgICAgICAgICBib3JkZXJXaWR0aCA9IHN0cmlwUGl4ZWxzKGJvcmRlcldpZHRoSW5QaXhlbHMpO1xuXG4gICAgcmV0dXJuIGJvcmRlcldpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyVG9wV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IFRPUF9TSURFLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJUb3BXaWR0aDtcbiAgfVxuXG4gIGdldEJvcmRlckxlZnRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gTEVGVF9TSURFLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyV2lkdGgoc2lkZSk7XG5cbiAgICByZXR1cm4gYm9yZGVyTGVmdFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpIHtcbiAgICBjb25zdCBzaWRlID0gUklHSFRfU0lERSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJSaWdodFdpZHRoO1xuICB9XG5cbiAgZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSB7XG4gICAgY29uc3Qgc2lkZSA9IEJPVFRPTV9TSURFLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJXaWR0aChzaWRlKTtcblxuICAgIHJldHVybiBib3JkZXJCb3R0b21XaWR0aDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBlbmFibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLmVuYWJsZVJpY2hUZXh0YXJlYUZpcmFDb2RlKCk7XG5cbiAgICB0aGlzLmVuYWJsZVByZXR0eVByaW50ZXJGaXJhQ29kZSgpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMuZGlzYWJsZVJpY2hUZXh0YXJlYUZpcmFDb2RlKCk7XG5cbiAgICB0aGlzLmRpc2FibGVQcmV0dHlQcmludGVyRmlyYUNvZGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxldCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckxlZnRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyTGVmdFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyUmlnaHRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpO1xuXG4gICAgaGVpZ2h0IC09ICggYm9yZGVyVG9wV2lkdGggKyBib3JkZXJCb3R0b21XaWR0aCApO1xuICAgIHdpZHRoIC09ICggYm9yZGVyTGVmdFdpZHRoICsgYm9yZGVyUmlnaHRXaWR0aCApO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUxpbmVIZWlnaHQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUxpbmVIZWlnaHQoKSxcbiAgICAgICAgICBsaW5lTnVtYmVyc0xpbmVIZWlnaHQgPSByaWNoVGV4dGFyZWFMaW5lSGVpZ2h0LCAvLy9cbiAgICAgICAgICBsaW5lSGVpZ2h0ID0gcmljaFRleHRhcmVhTGluZUhlaWdodCwgLy8vXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gbGluZUNvdW50ICogbGluZUhlaWdodCArIHNjcm9sbEJhclRoaWNrbmVzcyArIGJvcmRlclRvcFdpZHRoICsgYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLnNldExpbmVOdW1iZXJzTGluZUhlaWdodChsaW5lTnVtYmVyc0xpbmVIZWlnaHQpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBIZWlnaHQsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgcmVzaXplWWFwcFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZmlyYUNvZGUgPSBmYWxzZSwgZWRpdGFibGUgPSBmYWxzZSwgcmVzaXplYWJsZSA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5lbmFibGVGaXJhQ29kZSgpO1xuICAgIH1cblxuICAgIGlmIChyZXNpemVhYmxlKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiUGx1Z2luXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwiZmlyYUNvZGVcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJyZXNpemVhYmxlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbikge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VBbmRQbHVnaW4oY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5gO1xuIl19