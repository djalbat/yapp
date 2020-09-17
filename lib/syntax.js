"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _firaCode = _interopRequireDefault(require("./mixin/font/firaCode"));

var _monospace = _interopRequireDefault(require("./mixin/font/monospace"));

var _scrollable = _interopRequireDefault(require("./element/bounded/scrollable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  pointer-events: none;\n  background-color: transparent;\n  \n  ", "\n  \n  .fira-code {\n\n    ", "\n    \n  }\n\n"]);

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

var Syntax = /*#__PURE__*/function (_BoundedScrollableEle) {
  _inherits(Syntax, _BoundedScrollableEle);

  var _super = _createSuper(Syntax);

  function Syntax() {
    _classCallCheck(this, Syntax);

    return _super.apply(this, arguments);
  }

  _createClass(Syntax, [{
    key: "setLanguage",
    value: function setLanguage(language) {
      var state = {
        language: language
      };
      this.removeLanguageClass();
      this.updateState(state);
      this.addLanguageClass();
    }
  }, {
    key: "addLanguageClass",
    value: function addLanguageClass() {
      var state = this.getState(),
          language = state.language;

      if (language !== null) {
        var languageClass = language; ///

        this.addClass(languageClass);
      }
    }
  }, {
    key: "removeLanguageClass",
    value: function removeLanguageClass() {
      var state = this.getState(),
          language = state.language;

      if (language !== null) {
        var languageClass = language; ///

        this.removeClass(languageClass);
      }
    }
  }, {
    key: "update",
    value: function update(tokens) {
      var html = tokens.reduce(function (html, token) {
        ///
        var tokenWithSelectionHTML = token.asHTML();
        html += tokenWithSelectionHTML;
        return html;
      }, "");
      this.html(html);
    }
  }, {
    key: "enableFiraCode",
    value: function enableFiraCode() {
      this.addClass("fira-code");
    }
  }, {
    key: "disableFiraCode",
    value: function disableFiraCode() {
      this.removeClass("fira-code");
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setLanguage = this.setLanguage.bind(this),
          updateSyntax = this.update.bind(this),
          ///
      scrollSyntax = this.scroll.bind(this),
          ///
      setSyntaxBounds = this.setBounds.bind(this),
          ///
      enableSyntaxFiraCode = this.enableFiraCode.bind(this),
          ///
      disableSyntaxFiraCode = this.disableFiraCode.bind(this); ///

      return {
        setLanguage: setLanguage,
        updateSyntax: updateSyntax,
        scrollSyntax: scrollSyntax,
        setSyntaxBounds: setSyntaxBounds,
        enableSyntaxFiraCode: enableSyntaxFiraCode,
        disableSyntaxFiraCode: disableSyntaxFiraCode
      };
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var language = null,
          initialState = {
        language: language
      };
      this.setState(initialState);
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var syntax = _scrollable["default"].fromClass(Class, properties);

      syntax.initialise();
      return syntax;
    }
  }]);

  return Syntax;
}(_scrollable["default"]);

_defineProperty(Syntax, "tagName", "div");

_defineProperty(Syntax, "defaultProperties", {
  className: "syntax"
});

var _default = (0, _easyWithStyle["default"])(Syntax)(_templateObject(), _monospace["default"], _firaCode["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwic2V0TGFuZ3VhZ2UiLCJiaW5kIiwidXBkYXRlU3ludGF4IiwidXBkYXRlIiwic2Nyb2xsU3ludGF4Iiwic2Nyb2xsIiwic2V0U3ludGF4Qm91bmRzIiwic2V0Qm91bmRzIiwiZW5hYmxlU3ludGF4RmlyYUNvZGUiLCJlbmFibGVGaXJhQ29kZSIsImRpc2FibGVTeW50YXhGaXJhQ29kZSIsImRpc2FibGVGaXJhQ29kZSIsImluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwic3ludGF4IiwiQm91bmRlZFNjcm9sbGFibGVFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImZpcmFDb2RlRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Z0NBQ1FDLFEsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQUc7QUFDWkQsUUFBQUEsUUFBUSxFQUFSQTtBQURZLE9BQWQ7QUFJQSxXQUFLRSxtQkFBTDtBQUVBLFdBQUtDLFdBQUwsQ0FBaUJGLEtBQWpCO0FBRUEsV0FBS0csZ0JBQUw7QUFDRDs7O3VDQUVrQjtBQUNYLFVBQUFILEtBQUssR0FBRyxLQUFLSSxRQUFMLEVBQVI7QUFB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cm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCBmaXJhQ29kZUZvbnRNaXhpbiBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XHJcbmltcG9ydCBtb25vc3BhY2VGb250TWl4aW4gZnJvbSBcIi4vbWl4aW4vZm9udC9tb25vc3BhY2VcIjtcclxuaW1wb3J0IEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZVwiO1xyXG5cclxuY2xhc3MgU3ludGF4IGV4dGVuZHMgQm91bmRlZFNjcm9sbGFibGVFbGVtZW50IHtcclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgIGxhbmd1YWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbldpdGhTZWxlY3Rpb25IVE1MID0gdG9rZW4uYXNIVE1MKCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuV2l0aFNlbGVjdGlvbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIFwiXCIpO1xyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZUZpcmFDb2RlKCkge1xyXG4gICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVGaXJhQ29kZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2V0TGFuZ3VhZ2UgPSB0aGlzLnNldExhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXggPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheCA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xyXG4gICAgICAgICAgc2V0U3ludGF4Qm91bmRzID0gdGhpcy5zZXRCb3VuZHMuYmluZCh0aGlzKSwgLy8vXHJcbiAgICAgICAgICBlbmFibGVTeW50YXhGaXJhQ29kZSA9IHRoaXMuZW5hYmxlRmlyYUNvZGUuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgZGlzYWJsZVN5bnRheEZpcmFDb2RlID0gdGhpcy5kaXNhYmxlRmlyYUNvZGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBzZXRMYW5ndWFnZSxcclxuICAgICAgdXBkYXRlU3ludGF4LFxyXG4gICAgICBzY3JvbGxTeW50YXgsXHJcbiAgICAgIHNldFN5bnRheEJvdW5kcyxcclxuICAgICAgZW5hYmxlU3ludGF4RmlyYUNvZGUsXHJcbiAgICAgIGRpc2FibGVTeW50YXhGaXJhQ29kZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IG51bGwsXHJcbiAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBjb25zdCBzeW50YXggPSBCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBzeW50YXguaW5pdGlhbGlzZSgpO1xyXG5cclxuICAgIHJldHVybiBzeW50YXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4KWBcclxuXHJcbiAgei1pbmRleDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG4gICR7bW9ub3NwYWNlRm9udE1peGlufVxyXG4gIFxyXG4gIC5maXJhLWNvZGUge1xyXG5cclxuICAgICR7ZmlyYUNvZGVGb250TWl4aW59XHJcbiAgICBcclxuICB9XHJcblxyXG5gO1xyXG4iXX0=