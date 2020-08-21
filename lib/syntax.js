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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwidXBkYXRlU3ludGF4IiwidXBkYXRlIiwiYmluZCIsInNjcm9sbFN5bnRheCIsInNjcm9sbCIsInNldFN5bnRheEJvdW5kcyIsInNldEJvdW5kcyIsInNldExhbmd1YWdlIiwiaW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzeW50YXgiLCJCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Z0NBQ1FDLFEsRUFBVTtBQUNwQixVQUFNQyxLQUFLLEdBQUc7QUFDWkQsUUFBQUEsUUFBUSxFQUFSQTtBQURZLE9BQWQ7QUFJQSxXQUFLRSxtQkFBTDtBQUVBLFdBQUtDLFdBQUwsQ0FBaUJGLEtBQWpCO0FBRUEsV0FBS0csZ0JBQUw7QUFDRDs7O3VDQUVrQjtBQUNYLFVBQUFILEtBQUssR0FBRyxLQUFLSSxRQUFMLEVBQVI7QUFBQSxVQUNFTCxRQURGLEdBQ2VDLEtBRGYsQ0FDRUQsUUFERjs7QUFHTixVQUFJQSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsWUFBTU0sYUFBYSxHQUFHTixRQUF0QixDQURxQixDQUNXOztBQUVoQyxhQUFLTyxRQUFMLENBQWNELGFBQWQ7QUFDRDtBQUNGOzs7MENBRXFCO0FBQ2QsVUFBQUwsS0FBSyxHQUFHLEtBQUtJLFFBQUwsRUFBUjtBQUFBLFVBQ0VMLFFBREYsR0FDZUMsS0FEZixDQUNFRCxRQURGOztBQUdOLFVBQUlBLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixZQUFNTSxhQUFhLEdBQUdOLFFBQXRCLENBRHFCLENBQ1c7O0FBRWhDLGFBQUtRLFdBQUwsQ0FBaUJGLGFBQWpCO0FBQ0Q7QUFDRjs7OzJCQUVNRyxNLEVBQVE7QUFDYixVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNELElBQUQsRUFBT0UsS0FBUCxFQUFpQjtBQUFFO0FBQ3RDLFlBQU1DLHNCQUFzQixHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBL0I7QUFFQUosUUFBQUEsSUFBSSxJQUFJRyxzQkFBUjtBQUVBLGVBQU9ILElBQVA7QUFDRCxPQU5NLEVBTUosRUFOSSxDQUFiO0FBUUEsV0FBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1LLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFBQSxVQUE2QztBQUMxQ0MsTUFBQUEsWUFBWSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQURsQjtBQUFBLFVBQzBDO0FBQ25DRyxNQUFBQSxlQUFlLEdBQUcsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBRnpCO0FBQUEsVUFFb0Q7QUFDN0NLLE1BQUFBLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCTCxJQUFqQixDQUFzQixJQUF0QixDQUhyQjtBQUtDLGFBQVE7QUFDTkYsUUFBQUEsWUFBWSxFQUFaQSxZQURNO0FBRU5HLFFBQUFBLFlBQVksRUFBWkEsWUFGTTtBQUdORSxRQUFBQSxlQUFlLEVBQWZBLGVBSE07QUFJTkUsUUFBQUEsV0FBVyxFQUFYQTtBQUpNLE9BQVI7QUFNRDs7O3NDQUVpQjtBQUNoQixVQUFNdEIsUUFBUSxHQUFHLElBQWpCO0FBQUEsVUFDTXVCLFlBQVksR0FBRztBQUNidkIsUUFBQUEsUUFBUSxFQUFSQTtBQURhLE9BRHJCO0FBS0EsV0FBS3dCLFFBQUwsQ0FBY0QsWUFBZDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLRSxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLE1BQU0sR0FBR0MsdUJBQXlCQyxTQUF6QixDQUFtQ0osS0FBbkMsRUFBMENDLFVBQTFDLENBQWY7O0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0csVUFBUDtBQUVBLGFBQU9ILE1BQVA7QUFDRDs7OztFQXRGa0JDLHNCOztnQkFBZjlCLE0sYUEwRWEsSzs7Z0JBMUViQSxNLHVCQTRFdUI7QUFDekJpQyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVakMsTUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZVwiO1xyXG5cclxuY2xhc3MgU3ludGF4IGV4dGVuZHMgQm91bmRlZFNjcm9sbGFibGVFbGVtZW50IHtcclxuICBzZXRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgIGxhbmd1YWdlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsYW5ndWFnZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbldpdGhTZWxlY3Rpb25IVE1MID0gdG9rZW4uYXNIVE1MKCk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuV2l0aFNlbGVjdGlvbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIFwiXCIpO1xyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCB1cGRhdGVTeW50YXggPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheCA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xyXG4gICAgICAgICAgc2V0U3ludGF4Qm91bmRzID0gdGhpcy5zZXRCb3VuZHMuYmluZCh0aGlzKSwgLy8vXHJcbiAgICAgICAgICBzZXRMYW5ndWFnZSA9IHRoaXMuc2V0TGFuZ3VhZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdXBkYXRlU3ludGF4LFxyXG4gICAgICBzY3JvbGxTeW50YXgsXHJcbiAgICAgIHNldFN5bnRheEJvdW5kcyxcclxuICAgICAgc2V0TGFuZ3VhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsLFxyXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgICAgICBsYW5ndWFnZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInN5bnRheFwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xyXG4gICAgY29uc3Qgc3ludGF4ID0gQm91bmRlZFNjcm9sbGFibGVFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XHJcblxyXG4gICAgc3ludGF4LmluaXRpYWxpc2UoKTtcclxuXHJcbiAgICByZXR1cm4gc3ludGF4O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheClgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBcclxuYDtcclxuIl19