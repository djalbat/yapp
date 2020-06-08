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
          richTextareaBounds = this.updateView(tokens);

      if (richTextareaBounds !== null) {
        this.setRichTextareaBounds(richTextareaBounds);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var width = this.getWidth(),
          height = this.getHeight();
      this.setViewWidth(width);
      this.setViewHeight(height);
      var richTextareaBounds = this.resizeView();
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
      this.scrollView(scrollTop, scrollLeft);
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
      this.scrollView(scrollTop, scrollLeft);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwibGV4ZXIiLCJzZXRMZXhlciIsInBhcnNlciIsInNldFBhcnNlciIsImdldENvbnRlbnQiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVWaWV3Iiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFZpZXdXaWR0aCIsInNldFZpZXdIZWlnaHQiLCJyZXNpemVWaWV3IiwibGluZUNvdW50IiwibGluZUhlaWdodCIsImdldExuZUhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImdldEJvcmRlckJvdHRvbVdpZHRoIiwic2Nyb2xsQmFyVGhpY2tuZXNzIiwic2V0SGVpZ2h0IiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsVmlldyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsImdldFBsdWdpbiIsInVwZGF0ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJQbHVnaW4iLCJDbGFzcyIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsImRlZmF1bHRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7OzZCQUVRQyxLLEVBQU87QUFBRSxXQUFLSixNQUFMLENBQVlLLFFBQVosQ0FBcUJELEtBQXJCO0FBQThCOzs7OEJBRXRDRSxNLEVBQVE7QUFBRSxXQUFLTixNQUFMLENBQVlPLFNBQVosQ0FBc0JELE1BQXRCO0FBQWdDOzs7NkJBRTNDO0FBQ1AsVUFBTUgsT0FBTyxHQUFHLEtBQUtLLFVBQUwsRUFBaEI7QUFFQSxXQUFLUixNQUFMLENBQVlTLE1BQVosQ0FBbUJOLE9BQW5CO0FBRUEsVUFBTU8sTUFBTSxHQUFHLEtBQUtWLE1BQUwsQ0FBWVcsU0FBWixFQUFmO0FBQUEsVUFDTUMsa0JBQWtCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkgsTUFBaEIsQ0FEM0I7O0FBR0EsVUFBSUUsa0JBQWtCLEtB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dUQsUUFBaEQsRUFBMERPLE1BQTFELENBRG5CO0FBQUEsVUFFTWpFLE1BQU0sR0FBRyx5Q0FBNEIwRCxRQUE1QixFQUFzQ08sTUFBdEMsQ0FGZjtBQUFBLFVBR01FLElBQUksR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUI1QixVQUF6QixFQUFxQ3RDLE1BQXJDLENBSGI7O0FBS0FtRSxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs4QkFFZ0JELEssRUFBTzVCLFUsRUFBWTtBQUFBLFVBQzFCb0IsUUFEMEIsR0FDTHBCLFVBREssQ0FDMUJvQixRQUQwQjtBQUFBLFVBQ2hCTyxNQURnQixHQUNMM0IsVUFESyxDQUNoQjJCLE1BRGdCO0FBQUEsVUFFNUJqRSxNQUY0QixHQUVuQix5Q0FBNEIwRCxRQUE1QixFQUFzQ08sTUFBdEMsQ0FGbUI7QUFBQSxVQUc1QkUsSUFINEIsR0FHckJDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCNUIsVUFBekIsRUFBcUN0QyxNQUFyQyxDQUhxQjs7QUFLbENtRSxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUFwS2dCQyxhOztnQkFBYnRFLEksYUEySWEsSzs7Z0JBM0liQSxJLHVCQTZJdUI7QUFDekJ5RSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQTBCZCwrQkFBVXpFLElBQVYsQyxvQkFFWDBFLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGRlZmF1bHRTdHlsZSBmcm9tIFwiLi9zdHlsZS9kZWZhdWx0XCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuaW1wb3J0IFByZXR0eVByaW50ZXIgZnJvbSBcIi4vcHJldHR5UHJpbnRlclwiO1xuaW1wb3J0IHNjcm9sbEJhclRoaWNrbmVzcyBmcm9tIFwiLi9zY3JvbGxiYXJUaGlja25lc3NcIjtcblxuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVWaWV3KHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXRWaWV3V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0Vmlld0hlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVWaWV3KCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldExuZUhlaWdodCgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGxpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBzY3JvbGxCYXJUaGlja25lc3MgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZUFuZFBsdWdpbihjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gICR7ZGVmYXVsdFN0eWxlfVxuXG5gO1xuIl19