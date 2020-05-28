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
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.parser = parser;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent; ///

      return content;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.tokens = this.lexer.tokenise(content);
      this.node = this.parser.parse(this.tokens);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yT3JET01FbGVtZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJ0b2tlbnMiLCJub2RlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJyZXNpemUiLCJ1cGRhdGUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0VG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJnZXROb2RlIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwTGV4ZXIiLCJzZXRMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJsYW5ndWFnZSIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJhdXRvUmVzaXplIiwic2V0TGFuZ3VhZ2UiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwib25SZXNpemUiLCJDbGFzcyIsIm9uQ29udGVudENoYW5nZSIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7OztBQUNKLGdCQUFZQyxvQkFBWixFQUFrQ0MsS0FBbEMsRUFBeUNDLE1BQXpDLEVBQWlEQyxNQUFqRCxFQUF5REMsSUFBekQsRUFBK0RDLG9CQUEvRCxFQUFxRjtBQUFBOztBQUFBOztBQUNuRiw4QkFBTUwsb0JBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBWG1GO0FBWXBGOzs7OzZCQUVRSixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLG1CQUFtQixHQUFHLEtBQUtDLHNCQUFMLEVBQTVCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixtQkFEaEIsQ0FEVyxDQUUyQjs7QUFFdEMsYUFBT0UsT0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtMLE1BQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1JLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBRUEsV0FBS04sTUFBTCxHQUFjLEtBQUtGLEtBQUwsQ0FBV1MsUUFBWCxDQUFvQkYsT0FBcEIs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a0NBQ2lDQSxVQURqQyxDQUMxQnFCLFFBRDBCO0FBQUEsVUFDMUJBLFFBRDBCLHNDQUNmQyw4QkFEZTtBQUFBLGtDQUNpQ3RCLFVBRGpDLENBQ000QixlQUROO0FBQUEsVUFDTUEsZUFETixzQ0FDd0IsSUFEeEI7QUFBQSxVQUU1QjdELEtBRjRCLEdBRXBCLCtCQUFrQnNELFFBQWxCLENBRm9CO0FBQUEsVUFHNUJyRCxNQUg0QixHQUduQixpQ0FBbUJxRCxRQUFuQixDQUhtQjtBQUFBLFVBSTVCcEQsTUFKNEIsR0FJbkIsSUFKbUI7QUFBQSxVQUs1QkMsSUFMNEIsR0FLckIsSUFMcUI7QUFBQSxVQU01QkMsb0JBTjRCLEdBTUx5RCxlQU5LO0FBQUEsVUFPNUJDLElBUDRCLEdBT3JCQyxjQUFRQyxTQUFSLENBQWtCSixLQUFsQixFQUF5QjNCLFVBQXpCLEVBQXFDakMsS0FBckMsRUFBNENDLE1BQTVDLEVBQW9EQyxNQUFwRCxFQUE0REMsSUFBNUQsRUFBa0VDLG9CQUFsRSxDQVBxQjs7QUFTbEMwRCxNQUFBQSxJQUFJLENBQUNHLFVBQUwsQ0FBZ0JoQyxVQUFoQjtBQUVBLGFBQU82QixJQUFQO0FBQ0Q7Ozs7RUFsS2dCQyxhOztnQkFBYmpFLEksYUFnSmEsSzs7Z0JBaEpiQSxJLHVCQWtKdUI7QUFDekJvRSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQW1CZCwrQkFBVXBFLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgbGV4ZXJGcm9tTGFuZ3VhZ2UgfSBmcm9tIFwiLi9sZXhlcnNcIjtcbmltcG9ydCB7IHBhcnNlckZyb21MYW5ndWFnZSB9IGZyb20gXCIuL3BhcnNlcnNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgbGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlLCBjb250ZW50Q2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcblxuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciA9IGNvbnRlbnRDaGFuZ2VIYW5kbGVyO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gIH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMucGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0aGlzLnRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyV2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckhlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciAmJiB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcFRva2VucyA9IHRoaXMuZ2V0VG9rZW5zLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwTm9kZSA9IHRoaXMuZ2V0Tm9kZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgcmVzaXplWWFwcCxcbiAgICAgIGdldFlhcHBDb250ZW50LFxuICAgICAgZ2V0WWFwcFRva2VucyxcbiAgICAgIGdldFlhcHBOb2RlLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHNldFlhcHBIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0UsIGF1dG9SZXNpemUgPSBcInRydWVcIiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRSwgb25Db250ZW50Q2hhbmdlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBsZXhlciA9IGxleGVyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tTGFuZ3VhZ2UobGFuZ3VhZ2UpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2UsIC8vL1xuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgbGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlLCBjb250ZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5gO1xuIl19