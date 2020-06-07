"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _javascript = _interopRequireDefault(require("./plugin/javascript"));

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
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$Plugin = properties.Plugin,
          Plugin = _properties$Plugin === void 0 ? _javascript["default"] : _properties$Plugin,
          plugin = Plugin.fromNothing(),
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

var _default = (0, _easyWithStyle["default"])(Yapp)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwicmljaFRleHRhcmVhQ29udGVudCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJjb250ZW50IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImxleGVyIiwic2V0TGV4ZXIiLCJwYXJzZXIiLCJzZXRQYXJzZXIiLCJnZXRDb250ZW50IiwidXBkYXRlIiwidG9rZW5zIiwicmljaFRleHRhcmVhQm91bmRzIiwidXBkYXRlVmlldyIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRWaWV3V2lkdGgiLCJzZXRWaWV3SGVpZ2h0IiwicmVzaXplVmlldyIsInJlc2l6ZSIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJwcm9wZXJ0aWVzIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFZpZXciLCJjaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNjcm9sbEhhbmRsZXIiLCJ1cGRhdGVZYXBwIiwicmVzaXplWWFwcCIsImdldFlhcHBDb250ZW50IiwiZ2V0WWFwcFRva2VucyIsImdldFlhcHBOb2RlIiwic2V0WWFwcFdpZHRoIiwic2V0V2lkdGgiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwic2V0WWFwcEhlaWdodCIsInNldEhlaWdodCIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiYXV0b1Jlc2l6ZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIkNsYXNzIiwiUGx1Z2luIiwiSmF2YVNjcmlwdFBsdWdpbiIsImZyb21Ob3RoaW5nIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQUE7O0FBQzVCLDhCQUFNRCxRQUFOO0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSDRCO0FBSTdCOzs7O2lDQUVZO0FBQ1gsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msc0JBQUwsRUFBNUI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLG1CQURoQixDQURXLENBRTJCOztBQUV0QyxhQUFPRSxPQUFQO0FBQ0Q7OztnQ0FFVztBQUFFLGFBQU8sS0FBS0gsTUFBTCxDQUFZSSxTQUFaLEVBQVA7QUFBaUM7Ozs4QkFFckM7QUFBRSxhQUFPLEtBQUtKLE1BQUwsQ0FBWUssT0FBWixFQUFQO0FBQStCOzs7NkJBRWxDQyxLLEVBQU87QUFBRSxXQUFLTixNQUFMLENBQVlPLFFBQVosQ0FBcUJELEtBQXJCO0FBQThCOzs7OEJBRXRDRSxNLEVBQVE7QUFBRSxXQUFLUixNQUFMLENBQVlTLFNBQVosQ0FBc0JELE1BQXRCO0FBQWdDOzs7NkJBRTNDO0FBQ1AsVUFBTUwsT0FBTyxHQUFHLEtBQUtPLFVBQUwsRUFBaEI7QUFFQSxXQUFLVixNQUFMLENBQVlXLE1BQVosQ0FBbUJSLE9BQW5CO0FBRUEsVUFBTVMsTUFBTSxHQUFHLEtBQUtSLFNBQUwsRUFBZjtBQUFBLFVBQ01TLGtCQUFrQixHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JGLE1BQWhCLENBRDNCOztBQUdBLFVBQUlDLGtCQUFrQixLQUFLLElBQTNCLEVBQWlDO0FBQy9CLGFBQUtFLHFCQUFMLENBQTJCRixrQkFBM0I7QUFDRDtBQUNGOzs7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QUFRQyxTQUFSLENBQWtCTixLQUFsQixFQUF5QjdCLFVBQXpCLEVBQXFDOUIsTUFBckMsQ0FIcUI7O0FBS2xDK0QsTUFBQUEsSUFBSSxDQUFDRyxVQUFMO0FBRUEsYUFBT0gsSUFBUDtBQUNEOzs7O0VBckpnQkMsYTs7Z0JBQWJsRSxJLGFBdUlhLEs7O2dCQXZJYkEsSSx1QkF5SXVCO0FBQ3pCcUUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCwrQkFBVXJFLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5pbXBvcnQgUHJldHR5UHJpbnRlciBmcm9tIFwiLi9wcmV0dHlQcmludGVyXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFBsdWdpbiBmcm9tIFwiLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBwbHVnaW4pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldFRva2VucygpIHsgcmV0dXJuIHRoaXMucGx1Z2luLmdldFRva2VucygpOyB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMucGx1Z2luLmdldE5vZGUoKTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVZpZXcodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldFZpZXdXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRWaWV3SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVZpZXcoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdXQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxWaWV3KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwVG9rZW5zID0gdGhpcy5nZXRUb2tlbnMuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFlhcHBOb2RlID0gdGhpcy5nZXROb2RlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgZ2V0WWFwcENvbnRlbnQsXG4gICAgICBnZXRZYXBwVG9rZW5zLFxuICAgICAgZ2V0WWFwcE5vZGUsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyLFxuICAgICAgc2V0WWFwcEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgYXV0b1Jlc2l6ZSA9IFwidHJ1ZVwiIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxWaWV3KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBpZiAoYXV0b1Jlc2l6ZSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMub25SZXNpemUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgUGx1Z2luID0gSmF2YVNjcmlwdFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBQbHVnaW4uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgLyogRm9yY2UgbGlnYXR1cmVzIGZvciBXZWJraXQsIEJsaW5rLCBHZWNrbyAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7ICAvKiBFbmFibGUgbGlnYXR1cmVzIGZvciBJRSAxMCssIEVkZ2UgKi9cblxuYDtcbiJdfQ==