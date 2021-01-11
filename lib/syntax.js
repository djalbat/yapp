"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _scrollable = _interopRequireDefault(require("./element/bounded/scrollable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  pointer-events: none;\n  background-color: transparent;\n  \n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
    key: "parentContext",
    value: function parentContext() {
      var setLanguage = this.setLanguage.bind(this),
          updateSyntax = this.update.bind(this),
          ///
      scrollSyntax = this.scroll.bind(this),
          ///
      setSyntaxBounds = this.setBounds.bind(this); ///

      return {
        setLanguage: setLanguage,
        updateSyntax: updateSyntax,
        scrollSyntax: scrollSyntax,
        setSyntaxBounds: setSyntaxBounds
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

var _default = (0, _easyWithStyle["default"])(Syntax)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwic2V0TGFuZ3VhZ2UiLCJiaW5kIiwidXBkYXRlU3ludGF4IiwidXBkYXRlIiwic2Nyb2xsU3ludGF4Iiwic2Nyb2xsIiwic2V0U3ludGF4Qm91bmRzIiwic2V0Qm91bmRzIiwiaW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzeW50YXgiLCJCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Z0NBQ1FDLFEsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQUc7QUFDWkQsUUFBQUEsUUFBUSxFQUFSQTtBQURZLE9BQWQ7QUFJQSxXQUFLRSxtQkFBTDtBQUVBLFdBQUtDLFdBQUwsQ0FBaUJGLEtBQWpCO0FBRUEsV0FBS0csZ0JBQUw7QUFDRDs7O3VDQUVrQjtBQUNYLFVBQUFILEtBQUssR0FBRyxLQUFLSSxRQUFMLEVBQVI7QUFBQSxVQUNFTCxRQURGLEdBQ2VDLEtBRGYsQ0FDRUQsUUFERjs7QUFHTixVQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsWUFBTU0sYUFBYSxHQUFHTixRQUF0QixDQURxQixDQUNXOztBQUVoQyxhQUFLTyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUNGOzs7MENBRXFCO0FBQ2QsVUFBQUwsS0FBSyxHQUFHLEtBQUtJLFFBQUwsRUFBUjtBQUFBLFVBQ0VMLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGOztBQUdOLFVBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixZQUFNTSxhQUFhLEdBQUdOLFFBQXRCLENBRHFCLENBQ1c7O0FBRWhDLGFBQUtRLFdBQUwsQ0FBaUJGLGFBQWpCO0FBQ0Q7QUFDRjs7OzJCQUVNRyxNLEVBQVE7QUFDYixVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNELElBQUQsRUFBT0UsS0FBUCxFQUFpQjtBQUFFO0FBQ3RDLFlBQU1DLHNCQUFzQixHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBL0I7QUFFQUosUUFBQUEsSUFBSSxJQUFJRyxzQkFBUjtBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5NLEVBTUosRUFOSSxDQUFiO0FBUUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1LLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFwQjtBQUFBLFVBQ09DLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FEdEI7QUFBQSxVQUM4QztBQUMzQ0csTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUosSUFBWixDQUFpQixJQUFqQixDQUZsQjtBQUFBLFVBRTBDO0FBQ25DSyxNQUFBQSxlQUFlLEdBQUcsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSHpCLENBRGUsQ0FJc0M7O0FBRXBELGFBQVE7QUFDTkQsUUFBQUEsV0FBVyxFQUFYQSxXQURNO0FBRU5FLFFBQUFBLFlBQVksRUFBWkEsWUFGTTtBQUdORSxRQUFBQSxZQUFZLEVBQVpBLFlBSE07QUFJTkUsUUFBQUEsZUFBZSxFQUFmQTtBQUpNLE9BQVI7QUFNRDs7O3NDQUVpQjtBQUNoQixVQUFNckIsUUFBUSxHQUFHLElBQWpCO0FBQUEsVUFDTXVCLFlBQVksR0FBRztBQUNidkIsUUFBQUEsUUFBUSxFQUFSQTtBQURhLE9BRHJCO0FBS0EsV0FBS3dCLFFBQUwsQ0FBY0QsWUFBZDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRSxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLE1BQU0sR0FBR0MsdUJBQXlCQyxTQUF6QixDQUFtQ0osS0FBbkMsRUFBMENDLFVBQTFDLENBQWY7O0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUDtBQUVBLGFBQU9ILE1BQVA7QUFDRDs7OztFQXRGa0JDLHNCOztnQkFBZjlCLE0sYUEwRWEsSzs7Z0JBMUViQSxNLHVCQTRFdUI7QUFDekJpQyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVakMsTUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZVwiO1xyXG5cclxuY2xhc3MgU3ludGF4IGV4dGVuZHMgQm91bmRlZFNjcm9sbGFibGVFbGVtZW50IHtcclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgIGxhbmd1YWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbldpdGhTZWxlY3Rpb25IVE1MID0gdG9rZW4uYXNIVE1MKCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuV2l0aFNlbGVjdGlvbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIFwiXCIpO1xyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBzZXRMYW5ndWFnZSA9IHRoaXMuc2V0TGFuZ3VhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgICAgIHVwZGF0ZVN5bnRheCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsU3ludGF4ID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgLy8vXHJcbiAgICAgICAgICBzZXRTeW50YXhCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHNldExhbmd1YWdlLFxyXG4gICAgICB1cGRhdGVTeW50YXgsXHJcbiAgICAgIHNjcm9sbFN5bnRheCxcclxuICAgICAgc2V0U3ludGF4Qm91bmRzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbnVsbCxcclxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2VcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJzeW50YXhcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IHN5bnRheCA9IEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgIHN5bnRheC5pbml0aWFsaXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIHN5bnRheDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTeW50YXgpYFxyXG5cclxuICB6LWluZGV4OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdfQ==