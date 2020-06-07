"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _javascript = _interopRequireDefault(require("./interpreter/javascript"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Yapp = /*#__PURE__*/function (_Element) {
  _inherits(Yapp, _Element);

  var _super = _createSuper(Yapp);

  function Yapp(selector, interpreter) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selector);
    _this.interpreter = interpreter;
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
      return this.interpreter.getTokens();
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.interpreter.getNode();
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.interpreter.setLexer(lexer);
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.interpreter.setParser(parser);
    }
  }, {
    key: "update",
    value: function update() {
      var content = this.getContent();
      this.interpreter.update(content);
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
          language = this.interpreter.getLanguage(),
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
      var _properties$Interpret = properties.Interpreter,
          Interpreter = _properties$Interpret === void 0 ? _javascript["default"] : _properties$Interpret,
          interpreter = Interpreter.fromNothing(),
          yapp = _easy.Element.fromClass(Class, properties, interpreter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwiaW50ZXJwcmV0ZXIiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwibGV4ZXIiLCJzZXRMZXhlciIsInBhcnNlciIsInNldFBhcnNlciIsImdldENvbnRlbnQiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVWaWV3Iiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFZpZXdXaWR0aCIsInNldFZpZXdIZWlnaHQiLCJyZXNpemVWaWV3IiwicmVzaXplIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsIm9uQ29udGVudENoYW5nZSIsInByb3BlcnRpZXMiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsVmlldyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInVwZGF0ZVlhcHAiLCJyZXNpemVZYXBwIiwiZ2V0WWFwcENvbnRlbnQiLCJnZXRZYXBwVG9rZW5zIiwiZ2V0WWFwcE5vZGUiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJzZXRZYXBwSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJhdXRvUmVzaXplIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsIm9uUmVzaXplIiwiQ2xhc3MiLCJJbnRlcnByZXRlciIsIkphdmFTY3JpcHRJbnRlcnByZXRlciIsImZyb21Ob3RoaW5nIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLFdBQXRCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQ2pDLDhCQUFNRCxRQUFOO0FBRUEsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFIaUM7QUFJbEM7Ozs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7O2dDQUVXO0FBQUUsYUFBTyxLQUFLSCxXQUFMLENBQWlCSSxTQUFqQixFQUFQO0FBQXNDOzs7OEJBRTFDO0FBQUUsYUFBTyxLQUFLSixXQUFMLENBQWlCSyxPQUFqQixFQUFQO0FBQW9DOzs7NkJBRXZDQyxLLEVBQU87QUFBRSxXQUFLTixXQUFMLENBQWlCTyxRQUFqQixDQUEwQkQsS0FBMUI7QUFBbUM7Ozs4QkFFM0NFLE0sRUFBUTtBQUFFLFdBQUtSLFdBQUwsQ0FBaUJTLFNBQWpCLENBQTJCRCxNQUEzQjtBQUFxQzs7OzZCQUVoRDtBQUNQLFVBQU1MLE9BQU8sR0FBRyxLQUFLTyxVQUFMLEVBQWhCO0FBRUEsV0FBS1YsV0FBTCxDQUFpQlcsTUFBakIsQ0FBd0JSLE9BQXhCO0FBRUEsVUFBTVMsTUFBTSxHQUFHLEtBQUtSLFNBQUwsRUFBZjtBQUFBLFVBQ01TLGtCQUFrQixHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JGLE1BQWhCLENBRDNCOztBQUdBLFVBQUlDLGtCQUFrQixLQUFLLElBQTNCLEVBQWlDO0FBQy9CLGFBQUtFLHFCQUFM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QUFBLFVBRzVCQyxJQUg0QixHQUdyQkMsY0FBUUMsU0FBUixDQUFrQk4sS0FBbEIsRUFBeUI3QixVQUF6QixFQUFxQzlCLFdBQXJDLENBSHFCOztBQUtsQytELE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQXJKZ0JDLGE7O2dCQUFibEUsSSxhQXVJYSxLOztnQkF2SWJBLEksdUJBeUl1QjtBQUN6QnFFLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVyRSxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuaW1wb3J0IFByZXR0eVByaW50ZXIgZnJvbSBcIi4vcHJldHR5UHJpbnRlclwiO1xuaW1wb3J0IEphdmFTY3JpcHRJbnRlcnByZXRlciBmcm9tIFwiLi9pbnRlcnByZXRlci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGludGVycHJldGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5pbnRlcnByZXRlciA9IGludGVycHJldGVyO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkgeyByZXR1cm4gdGhpcy5pbnRlcnByZXRlci5nZXRUb2tlbnMoKTsgfVxuXG4gIGdldE5vZGUoKSB7IHJldHVybiB0aGlzLmludGVycHJldGVyLmdldE5vZGUoKTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMuaW50ZXJwcmV0ZXIuc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLmludGVycHJldGVyLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMuaW50ZXJwcmV0ZXIudXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVZpZXcodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldFZpZXdXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRWaWV3SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVZpZXcoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxWaWV3KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwVG9rZW5zID0gdGhpcy5nZXRUb2tlbnMuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBOb2RlID0gdGhpcy5nZXROb2RlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgZ2V0WWFwcENvbnRlbnQsXG4gICAgICBnZXRZYXBwVG9rZW5zLFxuICAgICAgZ2V0WWFwcE5vZGUsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgc2V0WWFwcEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgYXV0b1Jlc2l6ZSA9IFwidHJ1ZVwiIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLmludGVycHJldGVyLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFZpZXcoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIGlmIChhdXRvUmVzaXplID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5vblJlc2l6ZSgoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBJbnRlcnByZXRlciA9IEphdmFTY3JpcHRJbnRlcnByZXRlciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBpbnRlcnByZXRlciA9IEludGVycHJldGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBpbnRlcnByZXRlcik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cblxuYDtcbiJdfQ==