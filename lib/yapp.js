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

  function Yapp(selector, model) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selector);
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
    value: function initialise() {
      var _this2 = this;

      this.assignContext();
      var _this$properties = this.properties,
          childElements = _this$properties.childElements,
          _this$properties$auto = _this$properties.autoResize,
          autoResize = _this$properties$auto === void 0 ? "true" : _this$properties$auto,
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
          model = (0, _models.modelFromLanguage)(language),
          yapp = _easy.Element.fromClass(Class, properties, model);

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

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwibW9kZWwiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwibGV4ZXIiLCJzZXRMZXhlciIsInBhcnNlciIsInNldFBhcnNlciIsImdldENvbnRlbnQiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVWaWV3Iiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFZpZXdXaWR0aCIsInNldFZpZXdIZWlnaHQiLCJyZXNpemVWaWV3IiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsVmlldyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJhdXRvUmVzaXplIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsIm9uUmVzaXplIiwiQ2xhc3MiLCJ5YXBwIiwiRWxl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Q0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQXJKZ0JDLGE7O2dCQUFiL0QsSSxhQXVJYSxLOztnQkF2SWJBLEksdUJBeUl1QjtBQUN6QmtFLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVsRSxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5cbmltcG9ydCB7IG1vZGVsRnJvbUxhbmd1YWdlIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBtb2RlbCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldFRva2VucygpIHsgcmV0dXJuIHRoaXMubW9kZWwuZ2V0VG9rZW5zKCk7IH1cblxuICBnZXROb2RlKCkgeyByZXR1cm4gdGhpcy5tb2RlbC5nZXROb2RlKCk7IH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLm1vZGVsLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5tb2RlbC5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLm1vZGVsLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy51cGRhdGVWaWV3KHRva2Vucyk7XG5cbiAgICBpZiAocmljaFRleHRhcmVhQm91bmRzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5zZXRWaWV3V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0Vmlld0hlaWdodChoZWlnaHQpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5yZXNpemVWaWV3KCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3V0KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsVmlldyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxWaWV3IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0WWFwcFRva2VucyA9IHRoaXMuZ2V0VG9rZW5zLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwTm9kZSA9IHRoaXMuZ2V0Tm9kZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgcmVzaXplWWFwcCxcbiAgICAgIGdldFlhcHBDb250ZW50LFxuICAgICAgZ2V0WWFwcFRva2VucyxcbiAgICAgIGdldFlhcHBOb2RlLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlcixcbiAgICAgIHNldFlhcHBIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGF1dG9SZXNpemUgPSBcInRydWVcIiB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5tb2RlbC5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxWaWV3KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBpZiAoYXV0b1Jlc2l6ZSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMub25SZXNpemUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbW9kZWwgPSBtb2RlbEZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBtb2RlbCk7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cblxuYDtcbiJdfQ==