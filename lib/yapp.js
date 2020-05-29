"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _documents = require("./documents");

var _content = require("./utilities/content");

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

  function Yapp(selectorOrDOMElement, contentChangeHandler, document) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);
    _this.contentChangeHandler = contentChangeHandler;
    _this.document = document;
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
      return this.document.getTokens();
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.document.getNode();
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.document.setLexer(lexer);
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.document.setParser(parser);
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.document.update(content);
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
          _properties$autoResiz = properties.autoResize,
          autoResize = _properties$autoResiz === void 0 ? "true" : _properties$autoResiz,
          language = this.document.getLanguage(),
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
      var language = properties.language,
          _properties$onContent = properties.onContentChange,
          onContentChange = _properties$onContent === void 0 ? null : _properties$onContent,
          contentChangeHandler = onContentChange,
          document = (0, _documents.documentFromLanguage)(language),
          yapp = _easy.Element.fromClass(Class, properties, contentChangeHandler, document);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJkb2N1bWVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldFRva2VucyIsImdldE5vZGUiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiZ2V0Q29udGVudCIsInVwZGF0ZSIsInRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJyZXNpemUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJhdXRvUmVzaXplIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsIm9uUmVzaXplIiwiQ2xhc3MiLCJvbkNvbnRlbnRDaGFuZ2UiLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsb0JBQVosRUFBa0NDLG9CQUFsQyxFQUF3REMsUUFBeEQsRUFBa0U7QUFBQTs7QUFBQTs7QUFDaEUsOEJBQU1GLG9CQUFOO0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUVBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBTGdFO0FBTWpFOzs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLG1CQURoQixDQURXLENBRTJCOztBQUV0QyxhQUFPRSxPQUFQO0FBQ0Q7OztnQ0FFVztBQUFFLGFBQU8sS0FBS0gsUUFBTCxDQUFjSSxTQUFkLEVBQVA7QUFBbUM7Ozs4QkFFdkM7QUFBRSxhQUFPLEtBQUtKLFFBQUwsQ0FBY0ssT0FBZCxFQUFQO0FBQWlDOzs7NkJBRXBDQyxLLEVBQU87QUFBRSxXQUFLTixRQUFMLENBQWNPLFFBQWQsQ0FBdUJELEtBQXZCO0FBQWdDOzs7OEJBRXhDRSxNLEVBQVE7QUFBRSxXQUFLUixRQUFMLENBQWNTLFNBQWQsQ0FBd0JELE1BQXhCO0FBQWtDOzs7NkJBRTdDO0FBQ1AsVUFBTUwsT0FBTyxHQUFHLEtBQUtPLFVBQUwsRUFBaEI7QUFFQSxXQUFLVixRQUFMLENBQWNXLE1BQWQsQ0FBcUJSLE9BQXJCO0FBRUEsVUFBTVMsTUFBTSxHQUFHLEtBQUtSLFNBQUwsRUFBZjtBQUFBLFVBQ01TLGtCQUFrQixHQUFHLEtBQUtDLG1CQUFMLENBQXlCRixNQUF6QixDQUQzQjs7QUFHQSxVQUFJQyxr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QUEsVUFHNUIxRCxRQUg0QixHQUdqQixxQ0FBcUJvRCxRQUFyQixDQUhpQjtBQUFBLFVBSTVCTyxJQUo0QixHQUlyQkMsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJ2QixVQUF6QixFQUFxQ25DLG9CQUFyQyxFQUEyREMsUUFBM0QsQ0FKcUI7O0FBTWxDMkQsTUFBQUEsSUFBSSxDQUFDRyxVQUFMLENBQWdCNUIsVUFBaEI7QUFFQSxhQUFPeUIsSUFBUDtBQUNEOzs7O0VBckpnQkMsYTs7Z0JBQWIvRCxJLGFBc0lhLEs7O2dCQXRJYkEsSSx1QkF3SXVCO0FBQ3pCa0UsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFnQmQsK0JBQVVsRSxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5cbmltcG9ydCB7IGRvY3VtZW50RnJvbUxhbmd1YWdlIH0gZnJvbSBcIi4vZG9jdW1lbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjb250ZW50Q2hhbmdlSGFuZGxlciwgZG9jdW1lbnQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gY29udGVudENoYW5nZUhhbmRsZXI7XG5cbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7IHJldHVybiB0aGlzLmRvY3VtZW50LmdldFRva2VucygpOyB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMuZG9jdW1lbnQuZ2V0Tm9kZSgpOyB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5kb2N1bWVudC5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMuZG9jdW1lbnQuc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5kb2N1bWVudC51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgd2lsbFVubW91dCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwVG9rZW5zID0gdGhpcy5nZXRUb2tlbnMuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBOb2RlID0gdGhpcy5nZXROb2RlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgZ2V0WWFwcENvbnRlbnQsXG4gICAgICBnZXRZYXBwVG9rZW5zLFxuICAgICAgZ2V0WWFwcE5vZGUsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgc2V0WWFwcEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGF1dG9SZXNpemUgPSBcInRydWVcIiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMuZG9jdW1lbnQuZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBvbkNvbnRlbnRDaGFuZ2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlLCAvLy9cbiAgICAgICAgICBkb2N1bWVudCA9IGRvY3VtZW50RnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNvbnRlbnRDaGFuZ2VIYW5kbGVyLCBkb2N1bWVudCk7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5gO1xuIl19