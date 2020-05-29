"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamDom = require("occam-dom");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _error = _interopRequireDefault(require("./token/overlay/error"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsicXVlcnlCeUV4cHJlc3Npb24iLCJxdWVyeVV0aWxpdGllcyIsIllhcHAiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiRXJyb3JPdmVybGF5VG9rZW4iLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJhZGRPdmVybGF5VG9rZW5zIiwiZ2V0VG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRQcmV0dHlQcmludGVySGVpZ2h0IiwicmVzaXplUHJldHR5UHJpbnRlciIsInJlc2l6ZSIsInVwZGF0ZSIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJxdWVyeUV4cHJlc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsIk92ZXJsYXlUb2tlbk1hcCIsImZvckVhY2giLCJxdWVyeUV4cHJlc3Npb24iLCJub2RlcyIsIk92ZXJsYXlUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYWlkVG9rZW5JbmRleCIsImluZGV4T2YiLCJvdmVybGF5VG9rZW5JbmRleCIsIm92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJnZXROb2RlIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwTGV4ZXIiLCJzZXRMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJsYW5ndWFnZSIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJhdXRvUmVzaXplIiwic2V0TGFuZ3VhZ2UiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwib25SZXNpemUiLCJDbGFzcyIsIm9uQ29udGVudENoYW5nZSIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxpQixHQUFzQkMsd0IsQ0FBdEJELGlCOztJQUVGRSxJOzs7OztBQU9KLGdCQUFZQyxvQkFBWixFQUFrQ0MsS0FBbEMsRUFBeUNDLE1BQXpDLEVBQWlEQyxNQUFqRCxFQUF5REMsSUFBekQsRUFBK0RDLG9CQUEvRCxFQUFxRjtBQUFBOztBQUFBOztBQUNuRiw4QkFBTUwsb0JBQU47O0FBRG1GLHNFQU5uRSxFQU1tRTs7QUFBQSxzRUFKbkU7QUFDaEIsb0JBQWNNO0FBREUsS0FJbUU7O0FBR25GLFVBQUtMLEtBQUwsR0FBYUEsS0FBYjtBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFVBQUtDLE1B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RCxLQUFyQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLE1BQXBELEVBQTREQyxJQUE1RCxFQUFrRUMsb0JBQWxFLENBUHFCOztBQVNsQ2dGLE1BQUFBLElBQUksQ0FBQ0csVUFBTCxDQUFnQi9CLFVBQWhCO0FBRUEsYUFBTzRCLElBQVA7QUFDRDs7OztFQXhNZ0JDLGE7O2dCQUFidkYsSSxhQXNMYSxLOztnQkF0TGJBLEksdUJBd0x1QjtBQUN6QjBGLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBbUJkLCtCQUFVMUYsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgRXJyb3JPdmVybGF5VG9rZW4gZnJvbSBcIi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuXG5pbXBvcnQgeyBsZXhlckZyb21MYW5ndWFnZSB9IGZyb20gXCIuL2xleGVyc1wiO1xuaW1wb3J0IHsgcGFyc2VyRnJvbUxhbmd1YWdlIH0gZnJvbSBcIi4vcGFyc2Vyc1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBvdmVybGF5VG9rZW5NYXAgPSB7fTtcblxuICBPdmVybGF5VG9rZW5NYXAgPSB7XG4gICAgXCIvL2Vycm9yL0AqXCI6IEVycm9yT3ZlcmxheVRva2VuXG4gIH07XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSwgY29udGVudENoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG5cbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIgPSBjb250ZW50Q2hhbmdlSGFuZGxlcjtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4sIGluZGV4KSA9PiB0aGlzLm92ZXJsYXlUb2tlbk1hcFtpbmRleF0gfHwgdG9rZW4pOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5hZGRPdmVybGF5VG9rZW5zKCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGFkZE92ZXJsYXlUb2tlbnMoKSB7XG4gICAgdGhpcy5vdmVybGF5VG9rZW5NYXAgPSB7fTtcblxuICAgIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5RXhwcmVzc2lvbnMgPSBPYmplY3Qua2V5cyh0aGlzLk92ZXJsYXlUb2tlbk1hcCk7XG5cbiAgICAgIHF1ZXJ5RXhwcmVzc2lvbnMuZm9yRWFjaCgocXVlcnlFeHByZXNzaW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24odGhpcy5ub2RlLCBxdWVyeUV4cHJlc3Npb24pLFxuICAgICAgICAgICAgICBPdmVybGF5VG9rZW4gPSB0aGlzLk92ZXJsYXlUb2tlbk1hcFtxdWVyeUV4cHJlc3Npb25dO1xuXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksXG4gICAgICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgICBvdmVybGF5VG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBvdmVybGF5VG9rZW47XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBUb2tlbnMgPSB0aGlzLmdldFRva2Vucy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcE5vZGUgPSB0aGlzLmdldE5vZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHJlc2l6ZVlhcHAsXG4gICAgICBnZXRZYXBwQ29udGVudCxcbiAgICAgIGdldFlhcHBUb2tlbnMsXG4gICAgICBnZXRZYXBwTm9kZSxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXIsXG4gICAgICBzZXRZYXBwSGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFLCBhdXRvUmVzaXplID0gXCJ0cnVlXCIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0UsIG9uQ29udGVudENoYW5nZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbGV4ZXIgPSBsZXhlckZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlLCAvLy9cbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSwgY29udGVudENoYW5nZUhhbmRsZXIpO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuYDtcbiJdfQ==