"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _yapp = _interopRequireDefault(require("./style/yapp"));

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
    key: "getContent",
    value: function getContent() {
      var richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent; ///

      return content;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.plugin.getTokens();
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.plugin.getNode();
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
      var tokens = this.getTokens(),
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
      var updateYapp = this.update.bind(this),
          ///
      resizeYapp = this.resize.bind(this),
          ///
      getYappContent = this.getContent.bind(this),
          ///
      getYappTokens = this.getTokens.bind(this),
          ///
      getYappNode = this.getNode.bind(this),
          ///
      setYappWidth = this.setWidth.bind(this),
          ///
      setYappLexer = this.setLexer.bind(this),
          ///
      setYappParser = this.setParser.bind(this),
          ///
      setYappHeight = this.setHeight.bind(this); ///

      return {
        updateYapp: updateYapp,
        resizeYapp: resizeYapp,
        getYappContent: getYappContent,
        getYappTokens: getYappTokens,
        getYappNode: getYappNode,
        setYappWidth: setYappWidth,
        setYappLexer: setYappLexer,
        setYappParser: setYappParser,
        setYappHeight: setYappHeight
      };
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this2 = this;

      this.assignContext();
      var _this$properties = this.properties,
          childElements = _this$properties.childElements,
          _this$properties$auto = _this$properties.autoResize,
          autoResize = _this$properties$auto === void 0 ? "true" : _this$properties$auto,
          language = this.plugin.getLanguage(),
          content = (0, _content.contentFromChildElements)(childElements),
          scrollTop = 0,
          scrollLeft = 0; ///

      this.setLanguage(language);
      this.scrollView(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);

      if (autoResize === "true") {
        this.onResize(function () {
          return _this2.resize();
        });
      }
    }
  }], [{
    key: "fromContent",
    value: function fromContent(content, language, options, Plugin) {
      var properties = (0, _properties.propertiesFromContentLanguageOptionsAndPlugin)(content, language, options, Plugin),
          plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin),
          yapp = _easy.Element.fromClass(Yapp, properties, plugin);

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

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject(), _yapp["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJnZXRDb250ZW50IiwidXBkYXRlIiwidG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlVmlldyIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRWaWV3V2lkdGgiLCJzZXRWaWV3SGVpZ2h0IiwicmVzaXplVmlldyIsImxpbmVDb3VudCIsImxpbmVIZWlnaHQiLCJnZXRMbmVIZWlnaHQiLCJib3JkZXJUb3BXaWR0aCIsImdldEJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsInNjcm9sbEJhclRoaWNrbmVzcyIsInNldEhlaWdodCIsInJlc2l6ZSIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFZpZXciLCJjaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNjcm9sbEhhbmRsZXIiLCJ1cGRhdGVZYXBwIiwicmVzaXplWWFwcCIsImdldFlhcHBDb250ZW50IiwiZ2V0WWFwcFRva2VucyIsImdldFlhcHBOb2RlIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwic2V0WWFwcEhlaWdodCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiYXV0b1Jlc2l6ZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIm9wdGlvbnMiLCJQbHVnaW4iLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJDbGFzcyIsImNsYXNzTmFtZSIsInlhcHBTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUQsUUFBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUg0QjtBQUk3Qjs7OztpQ0FFWTtBQUNYLFVBQU1DLG1CQUFtQixHQUFHLEtBQUtDLHNCQUFMLEVBQTVCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixtQkFEaEIsQ0FEVyxDQUUyQjs7QUFFdEMsYUFBT0UsT0FBUDtBQUNEOzs7Z0NBRVc7QUFBRSxhQUFPLEtBQUtILE1BQUwsQ0FBWUksU0FBWixFQUFQO0FBQWlDOzs7OEJBRXJDO0FBQUUsYUFBTyxLQUFLSixNQUFMLENBQVlLLE9BQVosRUFBUDtBQUErQjs7OzZCQUVsQ0MsSyxFQUFPO0FBQUUsV0FBS04sTUFBTCxDQUFZTyxRQUFaLENBQXFCRCxLQUFyQjtBQUE4Qjs7OzhCQUV0Q0UsTSxFQUFRO0FBQUUsV0FBS1IsTUFBTCxDQUFZUyxTQUFaLENBQXNCRCxNQUF0QjtBQUFnQzs7OzZCQUUzQztBQUNQLFVBQU1MLE9BQU8sR0FBRyxLQUFLTyxVQUFMLEVBQWhCO0FBRUEsV0FBS1YsTUFBTCxDQUFZVyxNQUFaLENBQW1CUixPQUFuQjtBQUVBLFVBQU1TLE1BQU0sR0FBRyxL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T0gsSUFBUDtBQUNEOzs7O0VBeEtnQkMsYTs7Z0JBQWJ4RSxJLGFBZ0phLEs7O2dCQWhKYkEsSSx1QkFrSnVCO0FBQ3pCNEUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUF5QmQsK0JBQVU1RSxJQUFWLEMsb0JBRVg2RSxnQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB5YXBwU3R5bGUgZnJvbSBcIi4vc3R5bGUveWFwcFwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcbmltcG9ydCBzY3JvbGxCYXJUaGlja25lc3MgZnJvbSBcIi4vc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5cbmltcG9ydCB7IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wbHVnaW5cIjtcbmltcG9ydCB7IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlT3B0aW9uc0FuZFBsdWdpbiB9IGZyb20gXCIuL3V0aWxpdGllcy9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tQ29udGVudCwgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7IHJldHVybiB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKTsgfVxuXG4gIGdldE5vZGUoKSB7IHJldHVybiB0aGlzLnBsdWdpbi5nZXROb2RlKCk7IH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVWaWV3KHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXRWaWV3V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0Vmlld0hlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVWaWV3KCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldExuZUhlaWdodCgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGxpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBzY3JvbGxCYXJUaGlja25lc3MgKyBib3JkZXJUb3BXaWR0aCArIGJvcmRlckJvdHRvbVdpZHRoO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBUb2tlbnMgPSB0aGlzLmdldFRva2Vucy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcE5vZGUgPSB0aGlzLmdldE5vZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHJlc2l6ZVlhcHAsXG4gICAgICBnZXRZYXBwQ29udGVudCxcbiAgICAgIGdldFlhcHBUb2tlbnMsXG4gICAgICBnZXRZYXBwTm9kZSxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICBzZXRZYXBwSGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBhdXRvUmVzaXplID0gXCJ0cnVlXCIgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIG9wdGlvbnMsIFBsdWdpbikge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZU9wdGlvbnNBbmRQbHVnaW4oY29udGVudCwgbGFuZ3VhZ2UsIG9wdGlvbnMsIFBsdWdpbiksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhZYXBwLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gICR7eWFwcFN0eWxlfVxuXG5gO1xuIl19