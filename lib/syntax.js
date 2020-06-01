"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _scrollable = _interopRequireDefault(require("./element/bounded/scrollable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  pointer-events: none;\n  background-color: transparent;\n  \n"]);

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
    key: "parentContext",
    value: function parentContext() {
      var updateSyntax = this.update.bind(this),
          ///
      scrollSyntax = this.scroll.bind(this),
          ///
      setSyntaxBounds = this.setBounds.bind(this),
          ///
      setLanguage = this.setLanguage.bind(this);
      return {
        updateSyntax: updateSyntax,
        scrollSyntax: scrollSyntax,
        setSyntaxBounds: setSyntaxBounds,
        setLanguage: setLanguage
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
    value: function initialise(properties) {
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var syntax = _scrollable["default"].fromClass(Class, properties);

      syntax.initialise(properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwidXBkYXRlU3ludGF4IiwidXBkYXRlIiwiYmluZCIsInNjcm9sbFN5bnRheCIsInNjcm9sbCIsInNldFN5bnRheEJvdW5kcyIsInNldEJvdW5kcyIsInNldExhbmd1YWdlIiwiaW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwcm9wZXJ0aWVzIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJzeW50YXgiLCJCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Z0NBQ1FDLFEsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQUc7QUFDWkQsUUFBQUEsUUFBUSxFQUFSQTtBQURZLE9BQWQ7QUFJQSxXQUFLRSxtQkFBTDtBQUVBLFdBQUtDLFdBQUwsQ0FBaUJGLEtBQWpCO0FBRUEsV0FBS0csZ0JBQUw7QUFDRDs7O3VDQUVrQjtBQUNYLFVBQUFILEtBQUssR0FBRyxLQUFLSSxRQUFMLEVBQVI7QUFBQSxVQUNFTCxRQURGLEdBQ2VDLEtBRGYsQ0FDRUQsUUFERjs7QUFHTixVQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsWUFBTU0sYUFBYSxHQUFHTixRQUF0QixDQURxQixDQUNXOztBQUVoQyxhQUFLTyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUNGOzs7MENBRXFCO0FBQ2QsVUFBQUwsS0FBSyxHQUFHLEtBQUtJLFFBQUwsRUFBUjtBQUFBLFVBQ0VMLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGOztBQUdOLFVBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixZQUFNTSxhQUFhLEdBQUdOLFFBQXRCLENBRHFCLENBQ1c7O0FBRWhDLGFBQUtRLFdBQUwsQ0FBaUJGLGFBQWpCO0FBQ0Q7QUFDRjs7OzJCQUVNRyxNLEVBQVE7QUFDYixVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNELElBQUQsRUFBT0UsS0FBUCxFQUFpQjtBQUFFO0FBQ3RDLFlBQU1DLHNCQUFzQixHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBL0I7QUFFQUosUUFBQUEsSUFBSSxJQUFJRyxzQkFBUjtBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5NLEVBTUosRUFOSSxDQUFiO0FBUUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1LLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFBQSxVQUE2QztBQUMxQ0MsTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQURsQjtBQUFBLFVBQzBDO0FBQ25DRyxNQUFBQSxlQUFlLEdBQUcsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBRnpCO0FBQUEsVUFFb0Q7QUFDN0NLLE1BQUFBLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCTCxJQUFqQixDQUFzQixJQUF0QixDQUhyQjtBQUtDLGFBQVE7QUFDTkYsUUFBQUEsWUFBWSxFQUFaQSxZQURNO0FBRU5HLFFBQUFBLFlBQVksRUFBWkEsWUFGTTtBQUdORSxRQUFBQSxlQUFlLEVBQWZBLGVBSE07QUFJTkUsUUFBQUEsV0FBVyxFQUFYQTtBQUpNLE9BQVI7QUFNRDs7O3NDQUVpQjtBQUNoQixVQUFNdEIsUUFBUSxHQUFHLElBQWpCO0FBQUEsVUFDTXVCLFlBQVksR0FBRztBQUNidkIsUUFBQUEsUUFBUSxFQUFSQTtBQURhLE9BRHJCO0FBS0EsV0FBS3dCLFFBQUwsQ0FBY0QsWUFBZDtBQUNEOzs7K0JBRVVFLFUsRUFBWTtBQUNyQixXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0YsVSxFQUFZO0FBQ2xDLFVBQU1HLE1BQU0sR0FBR0MsdUJBQXlCQyxTQUF6QixDQUFtQ0gsS0FBbkMsRUFBMENGLFVBQTFDLENBQWY7O0FBRUFHLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQk4sVUFBbEI7QUFFQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs7RUF0RmtCQyxzQjs7Z0JBQWY5QixNLGFBMEVhLEs7O2dCQTFFYkEsTSx1QkE0RXVCO0FBQ3pCaUMsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVWpDLE1BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCBCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9ib3VuZGVkL3Njcm9sbGFibGVcIjtcclxuXHJcbmNsYXNzIFN5bnRheCBleHRlbmRzIEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCB7XHJcbiAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUxhbmd1YWdlQ2xhc3MoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICB0aGlzLmFkZExhbmd1YWdlQ2xhc3MoKTtcclxuICB9XHJcblxyXG4gIGFkZExhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgbGFuZ3VhZ2UgfSA9IHN0YXRlO1xyXG5cclxuICAgIGlmIChsYW5ndWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZ3VhZ2U7IC8vL1xyXG5cclxuICAgICAgdGhpcy5hZGRDbGFzcyhsYW5ndWFnZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgbGFuZ3VhZ2UgfSA9IHN0YXRlO1xyXG5cclxuICAgIGlmIChsYW5ndWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZ3VhZ2U7IC8vL1xyXG5cclxuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhsYW5ndWFnZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4geyAvLy9cclxuICAgICAgICAgICAgY29uc3QgdG9rZW5XaXRoU2VsZWN0aW9uSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbldpdGhTZWxlY3Rpb25IVE1MO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICB9LCBcIlwiKTtcclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgdXBkYXRlU3ludGF4ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxTeW50YXggPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHNldFN5bnRheEJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyksIC8vL1xyXG4gICAgICAgICAgc2V0TGFuZ3VhZ2UgPSB0aGlzLnNldExhbmd1YWdlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHVwZGF0ZVN5bnRheCxcclxuICAgICAgc2Nyb2xsU3ludGF4LFxyXG4gICAgICBzZXRTeW50YXhCb3VuZHMsXHJcbiAgICAgIHNldExhbmd1YWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbnVsbCxcclxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2VcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBjb25zdCBzeW50YXggPSBCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBzeW50YXguaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICByZXR1cm4gc3ludGF4O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheClgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBcclxuYDtcclxuIl19