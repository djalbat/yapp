"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamLexers = require("occam-lexers");

var _richTextarea = _interopRequireDefault(require("./richTextarea"));

var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));

var _content = require("./utilities/content");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n\n"]);

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

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing();

var Yapp = /*#__PURE__*/function (_Element) {
  _inherits(Yapp, _Element);

  var _super = _createSuper(Yapp);

  function Yapp() {
    _classCallCheck(this, Yapp);

    return _super.apply(this, arguments);
  }

  _createClass(Yapp, [{
    key: "update",
    value: function update() {
      var richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent,
          ///
      tokens = florenceLexer.tokenise(content),
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
    key: "prepare",
    value: function prepare() {
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
          ///
      scrollHandler = this.scrollHandler.bind(this); ///

      return [/*#__PURE__*/React.createElement(_prettyPrinter["default"], null), /*#__PURE__*/React.createElement(_richTextarea["default"], {
        onChange: changeHandler,
        onScroll: scrollHandler,
        active: true
      })];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var prepareYapp = this.prepare.bind(this);
      return {
        prepareYapp: prepareYapp
      };
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var _this = this;

      this.assignContext();
      var childElements = properties.childElements,
          content = (0, _content.contentFromChildElements)(childElements),
          scrollTop = 0,
          scrollLeft = 0,
          documentType = _constants.FLORENCE_DOCUMENT_TYPE; ///

      this.setDocumentType(documentType);
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);
      this.onResize(function () {
        return _this.resize();
      });
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var yapp = _easy.Element.fromClass(Class, properties);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIllhcHAiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldHR5UHJpbnRlcldpZHRoIiwic2V0UHJldHR5UHJpbnRlckhlaWdodCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJyZXNpemUiLCJ1cGRhdGUiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwicHJvcGVydGllcyIsImNoYW5nZUhhbmRsZXIiLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInByZXBhcmVZYXBwIiwicHJlcGFyZSIsImFzc2lnbkNvbnRleHQiLCJjaGlsZEVsZW1lbnRzIiwiZG9jdW1lbnRUeXBlIiwiRkxPUkVOQ0VfRE9DVU1FTlRfVFlQRSIsInNldERvY3VtZW50VHlwZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIkNsYXNzIiwieWFwcCIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFB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TWMsSUFBSSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QmIsVUFBekIsQ0FBYjs7QUFFQWMsTUFBQUEsSUFBSSxDQUFDRyxVQUFMLENBQWdCakIsVUFBaEI7QUFFQSxhQUFPYyxJQUFQO0FBQ0Q7Ozs7RUFqR2dCQyxhOztnQkFBYjNDLEksYUFxRmEsSzs7Z0JBckZiQSxJLHVCQXVGdUI7QUFDekI4QyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVOUMsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuaW1wb3J0IHsgRkxPUkVOQ0VfRE9DVU1FTlRfVFlQRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKHJpY2hUZXh0YXJlYUJvdW5kcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlcldpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgcHJlcGFyZVlhcHAgPSB0aGlzLnByZXBhcmUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgcHJlcGFyZVlhcHBcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwLCAvLy9cbiAgICAgICAgICBkb2N1bWVudFR5cGUgPSBGTE9SRU5DRV9ET0NVTUVOVF9UWVBFOyAgLy8vXG5cbiAgICB0aGlzLnNldERvY3VtZW50VHlwZShkb2N1bWVudFR5cGUpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKCgpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB5YXBwLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG5gO1xuXG4iXX0=