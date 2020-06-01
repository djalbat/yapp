"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _view = _interopRequireDefault(require("./view"));

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _models = require("./models");

var _content = require("./utilities/content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  overflow: hidden;\n  position: relative;\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Fira Code\", monospace;\n  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n  font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n\n"]);

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

  function Yapp(selectorOrDOMElement, contentChangeHandler, model) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);
    _this.contentChangeHandler = contentChangeHandler;
    _this.model = model;
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
      return this.model.getTokens();
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.model.getNode();
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.model.setLexer(lexer);
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.model.setParser(parser);
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.model.update(content);
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
      this.scrollView(scrollTop, scrollLeft);
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_view["default"], null), /*#__PURE__*/React.createElement(_richTextarea["default"], {
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
          language = this.model.getLanguage(),
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
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var language = properties.language,
          _properties$onContent = properties.onContentChange,
          onContentChange = _properties$onContent === void 0 ? null : _properties$onContent,
          contentChangeHandler = onContentChange,
          model = (0, _models.modelFromLanguage)(language),
          yapp = _easy.Element.fromClass(Class, properties, contentChangeHandler, model);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJtb2RlbCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldFRva2VucyIsImdldE5vZGUiLCJsZXhlciIsInNldExleGVyIiwicGFyc2VyIiwic2V0UGFyc2VyIiwiZ2V0Q29udGVudCIsInVwZGF0ZSIsInRva2VucyIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVZpZXciLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0Vmlld1dpZHRoIiwic2V0Vmlld0hlaWdodCIsInJlc2l6ZVZpZXciLCJyZXNpemUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxWaWV3IiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJhdXRvUmVzaXplIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsIm9uUmVzaXplIiwiQ2xhc3MiLCJvbkNvbnRlbnRDaGFuZ2UiLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsb0JBQVosRUFBa0NDLG9CQUFsQyxFQUF3REMsS0FBeEQsRUFBK0Q7QUFBQTs7QUFBQTs7QUFDN0QsOEJBQU1GLG9CQUFOO0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUVBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUw2RDtBQU05RDs7OztpQ0FFWTtBQUNYLFVBQU1DLG1CQUFtQixHQUFHLEtBQUtDLHNCQUFMLEVBQTVCO0FBQUEsVUFDTUMsT0FBTyxHQUFHRixtQkFEaEIsQ0FEVyxDQUUyQjs7QUFFdEMsYUFBT0UsT0FBUDtBQUNEOzs7Z0NBRVc7QUFBRSxhQUFPLEtBQUtILEtBQUwsQ0FBV0ksU0FBWCxFQUFQO0FBQWdDOzs7OEJBRXBDO0FBQUUsYUFBTyxLQUFLSixLQUFMLENBQVdLLE9BQVgsRUFBUDtBQUE4Qjs7OzZCQUVqQ0MsSyxFQUFPO0FBQUUsV0FBS04sS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxLQUFwQjtBQUE2Qjs7OzhCQUVyQ0UsTSxFQUFRO0FBQUUsV0FBS1IsS0FBTCxDQUFXUyxTQUFYLENBQXFCRCxNQUFyQjtBQUErQjs7OzZCQUUxQztBQUNQLFVBQU1MLE9BQU8sR0FBRyxLQUFLTyxVQUFMLEVBQWhCO0FBRUEsV0FBS1YsS0FBTCxDQUFXVyxNQUFYLENBQWtCUixPQUFsQjtBQUVBLFVBQU1TLE1BQU0sR0FBRyxLQUFLUixTQUFMLEVBQWY7QUFBQSxVQUNNUyxrQkFBa0IsR0FBRyxLQUFLQyxVQUFMLENBQWdCRixNQUFoQixDQUQzQjs7QUFHQSxVQUFJQyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQixhQUFLRSxxQkFBTCxDQUEyQkYsa0JB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SUFKNEIsR0FJckJDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCdkIsVUFBekIsRUFBcUNuQyxvQkFBckMsRUFBMkRDLEtBQTNELENBSnFCOztBQU1sQzJELE1BQUFBLElBQUksQ0FBQ0csVUFBTCxDQUFnQjVCLFVBQWhCO0FBRUEsYUFBT3lCLElBQVA7QUFDRDs7OztFQXJKZ0JDLGE7O2dCQUFiL0QsSSxhQXNJYSxLOztnQkF0SWJBLEksdUJBd0l1QjtBQUN6QmtFLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZ0JkLCtCQUFVbEUsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBtb2RlbEZyb21MYW5ndWFnZSB9IGZyb20gXCIuL21vZGVsc1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY29udGVudENoYW5nZUhhbmRsZXIsIG1vZGVsKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciA9IGNvbnRlbnRDaGFuZ2VIYW5kbGVyO1xuXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkgeyByZXR1cm4gdGhpcy5tb2RlbC5nZXRUb2tlbnMoKTsgfVxuXG4gIGdldE5vZGUoKSB7IHJldHVybiB0aGlzLm1vZGVsLmdldE5vZGUoKTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMubW9kZWwuc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLm1vZGVsLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMubW9kZWwudXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVZpZXcodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldFZpZXdXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRWaWV3SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVZpZXcoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlciAmJiB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxWaWV3KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxWaWV3IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcFRva2VucyA9IHRoaXMuZ2V0VG9rZW5zLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwTm9kZSA9IHRoaXMuZ2V0Tm9kZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgcmVzaXplWWFwcCxcbiAgICAgIGdldFlhcHBDb250ZW50LFxuICAgICAgZ2V0WWFwcFRva2VucyxcbiAgICAgIGdldFlhcHBOb2RlLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHNldFlhcHBIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBhdXRvUmVzaXplID0gXCJ0cnVlXCIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLm1vZGVsLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgb25Db250ZW50Q2hhbmdlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZSwgLy8vXG4gICAgICAgICAgbW9kZWwgPSBtb2RlbEZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb250ZW50Q2hhbmdlSGFuZGxlciwgbW9kZWwpO1xuXG4gICAgeWFwcC5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTsgIC8qIEVuYWJsZSBsaWdhdHVyZXMgZm9yIElFIDEwKywgRWRnZSAqL1xuXG5gO1xuIl19