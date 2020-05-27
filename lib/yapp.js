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

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing();

var Yapp = /*#__PURE__*/function (_Element) {
  _inherits(Yapp, _Element);

  var _super = _createSuper(Yapp);

  function Yapp(selectorOrDOMElement, changeHandler) {
    var _this;

    _classCallCheck(this, Yapp);

    _this = _super.call(this, selectorOrDOMElement);
    _this.changeHandler = changeHandler;
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
    key: "update",
    value: function update() {
      var content = this.getContent(),
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
    key: "didMount",
    value: function didMount() {
      this.resize();
      this.update();
    }
  }, {
    key: "richTextareaChangeHandler",
    value: function richTextareaChangeHandler(event, element) {
      var richTextarea = element,
          ///
      contentChanged = richTextarea.hasContentChanged();

      if (contentChanged) {
        this.update();
      }

      this.changeHandler && this.changeHandler(event, element);
    }
  }, {
    key: "richTextareaScrollHandler",
    value: function richTextareaScrollHandler(event, element) {
      var richTextarea = element,
          ///
      scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var changeHandler = this.richTextareaChangeHandler.bind(this),
          ///
      scrollHandler = this.richTextareaScrollHandler.bind(this); ///

      return [/*#__PURE__*/React.createElement(_prettyPrinter["default"], null), /*#__PURE__*/React.createElement(_richTextarea["default"], {
        onChange: changeHandler,
        onScroll: scrollHandler,
        active: true
      })];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var resizeYapp = this.resize.bind(this),
          ///
      setYappWidth = this.setWidth.bind(this),
          ///
      setYappHeight = this.setHeight.bind(this),
          ///
      getYappContent = this.getContent.bind(this); ///

      return {
        resizeYapp: resizeYapp,
        setYappWidth: setYappWidth,
        setYappHeight: setYappHeight,
        getYappContent: getYappContent
      };
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var _this2 = this;

      this.assignContext();
      var childElements = properties.childElements,
          _properties$autoResiz = properties.autoResize,
          autoResize = _properties$autoResiz === void 0 ? true : _properties$autoResiz,
          content = (0, _content.contentFromChildElements)(childElements),
          scrollTop = 0,
          scrollLeft = 0,
          documentType = _constants.FLORENCE_DOCUMENT_TYPE; ///

      this.setDocumentType(documentType);
      this.scrollPrettyPrinter(scrollTop, scrollLeft);
      this.setRichTextareaContent(content);

      if (autoResize) {
        this.onResize(function () {
          return _this2.resize();
        });
      }
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
          changeHandler = onChange,
          yapp = _easy.Element.fromClass(Class, properties, changeHandler);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhcHAuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsIllhcHAiLCJzZWxlY3Rvck9yRE9NRWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJyaWNoVGV4dGFyZWFCb3VuZHMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFByZXR0eVByaW50ZXJXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVzaXplIiwidXBkYXRlIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsUHJldHR5UHJpbnRlciIsInByb3BlcnRpZXMiLCJyaWNoVGV4dGFyZWFDaGFuZ2VIYW5kbGVyIiwiYmluZCIsInNjcm9sbEhhbmRsZXIiLCJyaWNoVGV4dGFyZWFTY3JvbGxIYW5kbGVyIiwicmVzaXplWWFwcCIsInNldFlhcHBXaWR0aCIsInNldFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInNldEhlaWdodCIsImdldFlhcHBDb250ZW50IiwiYXNzaWduQ29udGV4dCIsImNoaWxkRWxlbWVudHMiLCJhdXRvUmVzaXplIiwiZG9jdW1lbnRUeXBlIiwiRkxPUkVOQ0VfRE9DVU1FTlRfVFlQRSIsInNldERvY3VtZW50VHlwZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJvblJlc2l6ZSIsIkNsYXNzIiwib25DaGFuZ2UiLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDJCQUFjQyxXQUFkLEVBQXRCOztJQUVNQyxJOzs7OztBQUNKLGdCQUFZQyxvQkFBWixFQUFrQ0MsYUFBbEMsRUFBaUQ7QUFBQTs7QUFBQTs7QUFDL0MsOEJBQU1ELG9CQUFOO0FBRUEsVUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFIK0M7QUFJaEQ7Ozs7aUNBRVk7QUFDWCxVQUFNQyxtQkFBbUIsR0FBRyxLQUFLQyxzQkFBTCxFQUE1QjtBQUFBLFVBQ01DLE9BQU8sR0FBR0YsbUJBRGhCLENBRFcsQ0FFMkI7O0FBRXRDLGFBQU9FLE9BQVA7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUEsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyxNQUFNLEdBQUdWLGFBQWEsQ0FBQ1csUUFBZCxDQUF1QkgsT0FBdkIsQ0FEZjtBQUFBLFVBRU1JLGtCQUFrQixHQUFHLEtBQUtDLG1CQUFMLENBQXlCSCxNQUF6QixDQUYzQjs7QUFJQSxVQUFJRSxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQixhQUFLRSxxQkFBTCxDQUEyQkYsa0JBQTNCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsVUFBTUcsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE1BQU0sR0FBRyxLQUFLQyxTQUFMLEVBRGY7QUFHQSxXQUFLQyxxQkFBTCxDQUEyQkosS0FBM0I7QUFDQSxXQUFLSyxzQkFBTCxDQUE0QkgsTUFBNUI7QUFFQSxVQUFNTCxrQkFBa0IsR0FBRyxLQUFLUyxtQkFBTCxFQUEzQjtBQUVBLFdBQUtQLHFCQUFMLENBQTJCRixrQkFBM0I7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS1UsTUFBTDtBQUVBLFdBQUtDLE1BQUw7QUFDRDs7OzhDQUV5QkMsSyxFQUFPQyxPLEVBQVM7QUFDeEMsVUFBTUMsWUFBWSxHQUFHRCxPQUFyQjtBQUFBLFVBQThCO0FBQ3hCRSxNQUFBQSxjQUFjLEdBQUdELFlBQVksQ0FBQ0UsaUJBQWIsRUFEdkI7O0FBR0EsVUFBSUQsY0FBSixFQUFvQjtBQUNsQixhQUFLSixNQUFMO0FBQ0Q7O0FBRUQsV0FBS2xCLGFBQUwsSUFBc0IsS0FBS0EsYUFBTCxDQUFtQm1CLEtBQW5CLEVBQTBCQyxPQUExQixDQUF0QjtBQUNEOzs7OENBRXlCRCxLLEVBQU9DLE8sRUFBUztBQUN4QyxVQUFNQyxZQUFZLEdBQUdELE9BQXJCO0FBQUEsVUFBOEI7QUFDeEJJLE1BQUFBLFNBQVMsR0FBR0gsWUFBWSxDQUFDSSxZQUFiLEVBRGxCO0FBQUEsVUFFTUMsVUFBVSxHQUFHTCxZQUFZLENBQUNNLGFBQWIsRUFGbkI7QUFJQSxXQUFLQyxtQkFBTCxDQUF5QkosU0FBekIsRUFBb0NFLFVBQXBDO0FBQ0Q7OztrQ0FFYUcsVSxFQUFZO0FBQ3hCLFVBQU03QixhQUFhLEdBQUcsS0FBSzhCLHlCQUFMLENBQStCQyxJQUEvQixDQUFvQyxJQUFwQyxDQUF0QjtBQUFBLFVBQWlFO0FBQzNEQyxNQUFBQSxhQUFhLEdBQUcsS0FBS0MseUJBQUwsQ0FBK0JGLElBQS9CLENBQW9DLElBQXBDLENBRHRCLENBRHdCLENBRXlDOztBQUVqRSxhQUFRLGNBRU4sb0JBQUMseUJBQUQsT0FGTSxlQUdOLG9CQUFDLHdCQUFEO0FBQWMsUUFBQSxRQUFRLEVBQUUvQixhQUF4QjtBQUF1QyxRQUFBLFFBQVEsRUFBRWdDLGFBQWpEO0FBQWdFLFFBQUEsTUFBTTtBQUF0RSxRQUhNLENBQVI7QUFNRDs7O29DQUVlO0FBQ2QsVUFBTUUsVUFBVSxHQUFHLEtBQUtqQixNQUFMLENBQVljLElBQVosQ0FBaUIsSUFBakIsQ0FBbkI7QUFBQSxVQUE0QztBQUN0Q0ksTUFBQUEsWUFBWSxHQUFHLEtBQUtDLFFBQUwsQ0FBY0wsSUFBZCxDQUFtQixJQUFuQixDQURyQjtBQUFBLFVBQ2dEO0FBQzFDTSxNQUFBQSxhQUFhLEdBQUcsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQW9CLElBQXBCLENBRnRCO0FBQUEsVUFFa0Q7QUFDNUNRLE1BQUFBLGNBQWMsR0FBRyxLQUFLbkMsVUFBTCxDQUFnQjJCLElBQWhCLENBQXFCLElBQXJCLENBSHZCLENBRGMsQ0FJc0M7O0FBRXBELGFBQVE7QUFDTkcsUUFBQUEsVUFBVSxFQUFWQSxVQURNO0FBRU5DLFFBQUFBLFlBQVksRUFBWkEsWUFGTTtBQUdORSxRQUFBQSxhQUFhLEVBQWJBLGFBSE07QUFJTkUsUUFBQUEsY0FBYyxFQUFkQTtBQUpNLE9BQVI7QUFNRDs7OytCQUVVVixVLEVBQVk7QUFBQTs7QUFDckIsV0FBS1csYUFBTDtBQURxQixVQUdiQyxhQUhhLEdBR3dCWixVQUh4QixDQUdiWSxhQUhhO0FBQUEsa0NBR3dCWixVQUh4QixDQUdFYSxVQUhGO0FBQUEsVUFHRUEsVUFIRixzQ0FHZSxJQUhmO0FBQUEsVUFJZnZDLE9BSmUsR0FJTCx1Q0FBeUJzQyxhQUF6QixDQUpLO0FBQUEsVUFLZmpCLFNBTGUsR0FLSCxDQUxHO0FBQUEsVUFNZkUsVUFOZSxHQU1GLENBTkU7QUFBQSxVQU9maUIsWUFQZSxHQU9BQyxpQ0FQQSxFQU95Qjs7QUFFOUMsV0FBS0MsZUFBTCxDQUFxQkYsWUFBckI7QUFFQSxXQUFLZixtQkFBTCxDQUF5QkosU0FBekIsRUFBb0NFLFVBQXBDO0FBRUEsV0FBS29CLHNCQUFMLENBQTRCM0MsT0FBNUI7O0FBRUEsVUFBSXVDLFVBQUosRUFBZ0I7QUFDZCxhQUFLSyxRQUFMLENBQWM7QUFBQSxpQkFBTSxNQUFJLENBQUM5QixNQUFMLEVBQU47QUFBQSxTQUFkO0FBQ0Q7QUFDRjs7OzhCQVFnQitCLEssRUFBT25CLFUsRUFBWTtBQUFBLGlDQUNOQSxVQURNLENBQzFCb0IsUUFEMEI7QUFBQSxVQUMxQkEsUUFEMEIscUNBQ2YsSUFEZTtBQUFBLFVBRTVCakQsYUFGNEIsR0FFWmlELFFBRlk7QUFBQSxVQUc1QkMsSUFINEIsR0FHckJDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCbkIsVUFBekIsRUFBcUM3QixhQUFyQyxDQUhxQjs7QUFLbENrRCxNQUFBQSxJQUFJLENBQUNHLFVBQUwsQ0FBZ0J4QixVQUFoQjtBQUVBLGFBQU9xQixJQUFQO0FBQ0Q7Ozs7RUF6SGdCQyxhOztnQkFBYnJELEksYUEyR2EsSzs7Z0JBM0diQSxJLHVCQTZHdUI7QUFDekJ3RCxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkLCtCQUFVeEQsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuaW1wb3J0IHsgRkxPUkVOQ0VfRE9DVU1FTlRfVFlQRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBZYXBwIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JET01FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyID0gY2hhbmdlSGFuZGxlcjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChyaWNoVGV4dGFyZWFCb3VuZHMgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVySGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHJpY2hUZXh0YXJlYUNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlciAmJiB0aGlzLmNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmljaFRleHRhcmVhU2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgY2hhbmdlSGFuZGxlciA9IHRoaXMucmljaFRleHRhcmVhQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5yaWNoVGV4dGFyZWFTY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBnZXRZYXBwQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHJlc2l6ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgZ2V0WWFwcENvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBhdXRvUmVzaXplID0gdHJ1ZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMCwgLy8vXG4gICAgICAgICAgZG9jdW1lbnRUeXBlID0gRkxPUkVOQ0VfRE9DVU1FTlRfVFlQRTsgIC8vL1xuXG4gICAgdGhpcy5zZXREb2N1bWVudFR5cGUoZG9jdW1lbnRUeXBlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKGF1dG9SZXNpemUpIHtcbiAgICAgIHRoaXMub25SZXNpemUoKCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcblxuICAgIHlhcHAuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbmA7XG4iXX0=