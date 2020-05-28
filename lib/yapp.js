"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamDom = require("occam-dom");

var _error = _interopRequireDefault(require("./token/overlay/error"));

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

var queryByExpression = _occamDom.queryUtilities.queryByExpression;

var Yapp = /*#__PURE__*/function (_Element) {
  _inherits(Yapp, _Element);

  var _super = _createSuper(Yapp);

  function Yapp(selectorOrDOMElement, lexer, parser, tokens, node, contentChangeHandler) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);

    _defineProperty(_assertThisInitialized(_this), "overlayTokenMap", {});

    _defineProperty(_assertThisInitialized(_this), "OverlayTokenMap", {
      "//error/@*": _error["default"]
    });

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
      var _this2 = this;

      var tokens = this.tokens.map(function (token, index) {
        return _this2.overlayTokenMap[index] || token;
      }); ///

      return tokens;
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
      this.addOverlayTokens();
      var tokens = this.getTokens(),
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
    key: "addOverlayTokens",
    value: function addOverlayTokens() {
      var _this3 = this;

      this.overlayTokenMap = {};

      if (this.node !== null) {
        var queryExpressions = Object.keys(this.OverlayTokenMap);
        queryExpressions.forEach(function (queryExpression) {
          var nodes = queryByExpression(_this3.node, queryExpression),
              OverlayToken = _this3.OverlayTokenMap[queryExpression];
          nodes.forEach(function (node) {
            var significantToken = node.getSignificantToken(),
                overlaidToken = significantToken,
                ///
            overlaidTokenIndex = _this3.tokens.indexOf(overlaidToken),
                overlayTokenIndex = overlaidTokenIndex,
                ///
            overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);

            _this3.overlayTokenMap[overlayTokenIndex] = overlayToken;
          });
        });
      }
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
      var _this4 = this;

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
          return _this4.resize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsicXVlcnlCeUV4cHJlc3Npb24iLCJxdWVyeVV0aWxpdGllcyIsIllhcHAiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiRXJyb3JUb2tlbiIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJvdmVybGF5VG9rZW5NYXAiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImFkZE92ZXJsYXlUb2tlbnMiLCJnZXRUb2tlbnMiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVzaXplIiwidXBkYXRlIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInF1ZXJ5RXhwcmVzc2lvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3ZlcmxheVRva2VuTWFwIiwiZm9yRWFjaCIsInF1ZXJ5RXhwcmVzc2lvbiIsIm5vZGVzIiwiT3ZlcmxheVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm92ZXJsYXlUb2tlbkluZGV4Iiwib3ZlcmxheVRva2VuIiwiZnJvbU92ZXJsYWlkVG9rZW4iLCJwcm9wZXJ0aWVzIiwiY2hhbmdlSGFuZGxlciIsImJpbmQiLCJzY3JvbGxIYW5kbGVyIiwidXBkYXRlWWFwcCIsInJlc2l6ZVlhcHAiLCJnZXRZYXBwQ29udGVudCIsImdldFlhcHBUb2tlbnMiLCJnZXRZYXBwTm9kZSIsImdldE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldExleGVyIiwic2V0WWFwcFBhcnNlciIsInNldFBhcnNlciIsInNldFlhcHBIZWlnaHQiLCJzZXRIZWlnaHQiLCJhc3NpZ25Db250ZXh0IiwiY2hpbGRFbGVtZW50cyIsImxhbmd1YWdlIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsImF1dG9SZXNpemUiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIkNsYXNzIiwib25Db250ZW50Q2hhbmdlIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyx3QixDQUF0QkQsaUI7O0lBRUZFLEk7Ozs7O0FBT0osZ0JBQVlDLG9CQUFaLEVBQWtDQyxLQUFsQyxFQUF5Q0MsTUFBekMsRUFBaURDLE1BQWpELEVBQXlEQyxJQUF6RCxFQUErREMsb0JBQS9ELEVBQXFGO0FBQUE7O0FBQUE7O0FBQ25GLDhCQUFNTCxvQkFBTjs7QUFEbUYsc0VBTm5FLEVBTW1FOztBQUFBLHNFQUpuRTtBQUNoQixvQkFBY007QUFERSxLQUltRTs7QUFHbkYsVUFBS0wsS0FBTCxHQUFhQSxLQUFiO0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsVUFBS0MsTUFBTCxHQUFj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LEVBQTRDQyxNQUE1QyxFQUFvREMsTUFBcEQsRUFBNERDLElBQTVELEVBQWtFQyxvQkFBbEUsQ0FQcUI7O0FBU2xDZ0YsTUFBQUEsSUFBSSxDQUFDRyxVQUFMLENBQWdCL0IsVUFBaEI7QUFFQSxhQUFPNEIsSUFBUDtBQUNEOzs7O0VBeE1nQkMsYTs7Z0JBQWJ2RixJLGFBc0xhLEs7O2dCQXRMYkEsSSx1QkF3THVCO0FBQ3pCMEYsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFtQmQsK0JBQVUxRixJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgbGV4ZXJGcm9tTGFuZ3VhZ2UgfSBmcm9tIFwiLi9sZXhlcnNcIjtcbmltcG9ydCB7IHBhcnNlckZyb21MYW5ndWFnZSB9IGZyb20gXCIuL3BhcnNlcnNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb3ZlcmxheVRva2VuTWFwID0ge307XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvclRva2VuXG4gIH07XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSwgY29udGVudENoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG5cbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIgPSBjb250ZW50Q2hhbmdlSGFuZGxlcjtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4sIGluZGV4KSA9PiB0aGlzLm92ZXJsYXlUb2tlbk1hcFtpbmRleF0gfHwgdG9rZW4pOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5hZGRPdmVybGF5VG9rZW5zKCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGFkZE92ZXJsYXlUb2tlbnMoKSB7XG4gICAgdGhpcy5vdmVybGF5VG9rZW5NYXAgPSB7fTtcblxuICAgIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5RXhwcmVzc2lvbnMgPSBPYmplY3Qua2V5cyh0aGlzLk92ZXJsYXlUb2tlbk1hcCk7XG5cbiAgICAgIHF1ZXJ5RXhwcmVzc2lvbnMuZm9yRWFjaCgocXVlcnlFeHByZXNzaW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24odGhpcy5ub2RlLCBxdWVyeUV4cHJlc3Npb24pLFxuICAgICAgICAgICAgICBPdmVybGF5VG9rZW4gPSB0aGlzLk92ZXJsYXlUb2tlbk1hcFtxdWVyeUV4cHJlc3Npb25dO1xuXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksXG4gICAgICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgICBvdmVybGF5VG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBvdmVybGF5VG9rZW47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBUb2tlbnMgPSB0aGlzLmdldFRva2Vucy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcE5vZGUgPSB0aGlzLmdldE5vZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHJlc2l6ZVlhcHAsXG4gICAgICBnZXRZYXBwQ29udGVudCxcbiAgICAgIGdldFlhcHBUb2tlbnMsXG4gICAgICBnZXRZYXBwTm9kZSxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICBzZXRZYXBwSGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFLCBhdXRvUmVzaXplID0gXCJ0cnVlXCIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0UsIG9uQ29udGVudENoYW5nZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlLCAvLy9cbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSwgY29udGVudENoYW5nZUhhbmRsZXIpO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYDtcbiJdfQ==