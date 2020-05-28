"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _lexers = require("./lexers");

var _parsers = require("./parsers");

var _content = require("./utilities/content");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  overflow: hidden;\n  position: relative;\n\n"]);

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

  function Yapp(selectorOrDOMElement, lexer, parser, tokens, node, contentChangeHandler) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);
    _this.lexer = lexer;
    _this.parser = parser;
    _this.tokens = tokens;
    _this.node = node;
    _this.contentChangeHandler = contentChangeHandler;
    return _this;
  }

  _createClass(Yapp, [{
    key: "setLexer",
    value: function setLexer(lexer) {
      this.lexer = lexer;
      this.update();
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.parser = parser;
      this.update();
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent; ///

      return content;
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.tokens = this.lexer.tokenise(content);
      this.ndoe = this.parser.parse(this.tokens);
      var richTextareaBounds = this.updatePrettyPrinter(this.tokens);

      if (richTextareaBounds !== null) {
        this.setRichTextareaBounds(richTextareaBounds);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var width = this.getWidth(),
          height = this.getHeight();
      this.setPrettyPrinterWidth(width);
      this.setPrettyPrinterHeight(height);
      var richTextareaBounds = this.resizePrettyPrinter();
      this.setRichTextareaBounds(richTextareaBounds);
    }
  }, {
    key: "didMount",
    value: function didMount() {
      this.resize();
      this.update();
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(event, element) {
      var richTextarea = element,
          ///
      contentChanged = richTextarea.hasContentChanged();

      if (contentChanged) {
        this.update();
        this.contentChangeHandler && this.contentChangeHandler(event, element);
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
    value: function childElements(properties) {
      var changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_prettyPrinter["default"], null), /*#__PURE__*/React.createElement(_richTextarea["default"], {
        onChange: changeHandler,
        onScroll: scrollHandler,
        active: true
      })];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var resizeYapp = this.resize.bind(this),
          ///
      setYappWidth = this.setWidth.bind(this),
          ///
      setYappHeight = this.setHeight.bind(this),
          ///
      getYappContent = this.getContent.bind(this); ///

      return {
        resizeYapp: resizeYapp,
        setYappWidth: setYappWidth,
        setYappHeight: setYappHeight,
        getYappContent: getYappContent
      };
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var _this2 = this;

      this.assignContext();
      var childElements = properties.childElements,
          _properties$language = properties.language,
          language = _properties$language === void 0 ? _constants.JAVASCRIPT_LANGUAGE : _properties$language,
          _properties$autoResiz = properties.autoResize,
          autoResize = _properties$autoResiz === void 0 ? "true" : _properties$autoResiz,
          content = (0, _content.contentFromChildElements)(childElements),
          scrollTop = 0,
          scrollLeft = 0; ///

      this.setLanguage(language);
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);

      if (autoResize === "true") {
        this.onResize(function () {
          return _this2.resize();
        });
      }
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$language2 = properties.language,
          language = _properties$language2 === void 0 ? _constants.JAVASCRIPT_LANGUAGE : _properties$language2,
          _properties$onContent = properties.onContentChange,
          onContentChange = _properties$onContent === void 0 ? null : _properties$onContent,
          lexer = (0, _lexers.lexerFromLanguage)(language),
          parser = (0, _parsers.parserFromLanguage)(language),
          tokens = null,
          node = null,
          contentChangeHandler = onContentChange,
          yapp = _easy.Element.fromClass(Class, properties, lexer, parser, tokens, node, contentChangeHandler);

      yapp.initialise(properties);
      return yapp;
    }
  }]);

  return Yapp;
}(_easy.Element);

_defineProperty(Yapp, "tagName", "div");

_defineProperty(Yapp, "defaultProperties", {
  className: "yapp"
});

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yT3JET01FbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJuZG9lIiwicGFyc2UiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInByb3BlcnRpZXMiLCJjaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNjcm9sbEhhbmRsZXIiLCJyZXNpemVZYXBwIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0WWFwcENvbnRlbnQiLCJhc3NpZ25Db250ZXh0IiwiY2hpbGRFbGVtZW50cyIsImxhbmd1YWdlIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsImF1dG9SZXNpemUiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIkNsYXNzIiwib25Db250ZW50Q2hhbmdlIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNl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b20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgbGV4ZXJGcm9tTGFuZ3VhZ2UgfSBmcm9tIFwiLi9sZXhlcnNcIjtcbmltcG9ydCB7IHBhcnNlckZyb21MYW5ndWFnZSB9IGZyb20gXCIuL3BhcnNlcnNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgbGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlLCBjb250ZW50Q2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcblxuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciA9IGNvbnRlbnRDaGFuZ2VIYW5kbGVyO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5kb2UgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodGhpcy50b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIgJiYgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICByZXNpemVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIGdldFlhcHBDb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFLCBhdXRvUmVzaXplID0gXCJ0cnVlXCIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0UsIG9uQ29udGVudENoYW5nZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlLCAvLy9cbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSwgY29udGVudENoYW5nZUhhbmRsZXIpO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYDtcbiJdfQ==