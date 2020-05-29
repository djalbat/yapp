"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _document = _interopRequireDefault(require("./document"));

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

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

  function Yapp(selectorOrDOMElement, contentChangeHandler, document) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);
    _this.contentChangeHandler = contentChangeHandler;
    _this.document = document;
    return _this;
  }

  _createClass(Yapp, [{
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
          contentChangeHandler = onContentChange,
          document = _document["default"].fromLanguage(language),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJkb2N1bWVudCIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0Q29udGVudCIsInVwZGF0ZSIsInRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJyZXNpemUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJsYW5ndWFnZSIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJhdXRvUmVzaXplIiwic2V0TGFuZ3VhZ2UiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwib25SZXNpemUiLCJDbGFzcyIsIm9uQ29udGVudENoYW5nZSIsIkRvY3VtZW50IiwiZnJvbUxhbmd1YWdlIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLG9CQUFaLEVBQWtDQyxvQkFBbEMsRUFBd0RDLFFBQXhELEVBQWtFO0FBQUE7O0FBQUE7O0FBQ2hFLDhCQUFNRixvQkFBTjtBQUVBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFFQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUxnRTtBQU1qRTs7Ozs2QkFFUUMsSyxFQUFPO0FBQUUsV0FBS0QsUUFBTCxDQUFjRSxRQUFkLENBQXVCRCxLQUF2QjtBQUFnQzs7OzhCQUV4Q0UsTSxFQUFRO0FBQUUsV0FBS0gsUUFBTCxDQUFjSSxTQUFkLENBQXdCRCxNQUF4QjtBQUFrQzs7O2lDQUV6QztBQUNYLFVBQU1FLG1CQUFtQixHQUFHLEtBQUtDLHNCQUFMLEVBQTVCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixtQkFEaEIsQ0FEVyxDQUUyQjs7QUFFdEMsYUFBT0UsT0FBUDtBQUNEOzs7Z0NBRVc7QUFBRSxhQUFPLEtBQUtQLFFBQUwsQ0FBY1EsU0FBZCxFQUFQO0FBQW1DOzs7OEJBRXZDO0FBQUUsYUFBTyxLQUFLUixRQUFMLENBQWNTLE9BQWQsRUFBUDtBQUFpQzs7OzZCQUVwQztBQUNQLFVBQU1GLE9BQU8sR0FBRyxLQUFLRyxVQUFMLEVBQWhCO0FBRUEsV0FBS1YsUUFBTCxDQUFjVyxNQUFkLENBQXFCSixPQUFyQjtBQUVBLFVBQU1LLE1BQU0sR0FBRyxLQUFLSixTQUFMLEVBQWY7QUFBQSxVQUNNSyxrQkFBa0IsR0FBRyxLQUFL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LENBQ013QixlQUROO0FBQUEsVUFDTUEsZUFETixzQ0FDd0IsSUFEeEI7QUFBQSxVQUU1QjNELG9CQUY0QixHQUVMMkQsZUFGSztBQUFBLFVBRzVCMUQsUUFINEIsR0FHakIyRCxxQkFBU0MsWUFBVCxDQUFzQlQsUUFBdEIsQ0FIaUI7QUFBQSxVQUk1QlUsSUFKNEIsR0FJckJDLGNBQVFDLFNBQVIsQ0FBa0JOLEtBQWxCLEVBQXlCdkIsVUFBekIsRUFBcUNuQyxvQkFBckMsRUFBMkRDLFFBQTNELENBSnFCOztBQU1sQzZELE1BQUFBLElBQUksQ0FBQ0csVUFBTCxDQUFnQjlCLFVBQWhCO0FBRUEsYUFBTzJCLElBQVA7QUFDRDs7OztFQXBKZ0JDLGE7O2dCQUFiakUsSSxhQXFJYSxLOztnQkFySWJBLEksdUJBdUl1QjtBQUN6Qm9FLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZ0JkLCtCQUFVcEUsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY29udGVudENoYW5nZUhhbmRsZXIsIGRvY3VtZW50KSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciA9IGNvbnRlbnRDaGFuZ2VIYW5kbGVyO1xuXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5kb2N1bWVudC5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMuZG9jdW1lbnQuc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldFJpY2hUZXh0YXJlYUNvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gcmljaFRleHRhcmVhQ29udGVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7IHJldHVybiB0aGlzLmRvY3VtZW50LmdldFRva2VucygpOyB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMuZG9jdW1lbnQuZ2V0Tm9kZSgpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMuZG9jdW1lbnQudXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVySGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciAmJiB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcFRva2VucyA9IHRoaXMuZ2V0VG9rZW5zLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwTm9kZSA9IHRoaXMuZ2V0Tm9kZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgcmVzaXplWWFwcCxcbiAgICAgIGdldFlhcHBDb250ZW50LFxuICAgICAgZ2V0WWFwcFRva2VucyxcbiAgICAgIGdldFlhcHBOb2RlLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHNldFlhcHBIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBsYW5ndWFnZSA9IEpBVkFTQ1JJUFRfTEFOR1VBR0UsIGF1dG9SZXNpemUgPSBcInRydWVcIiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRSwgb25Db250ZW50Q2hhbmdlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZSwgLy8vXG4gICAgICAgICAgZG9jdW1lbnQgPSBEb2N1bWVudC5mcm9tTGFuZ3VhZ2UobGFuZ3VhZ2UpLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY29udGVudENoYW5nZUhhbmRsZXIsIGRvY3VtZW50KTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbmA7XG4iXX0=