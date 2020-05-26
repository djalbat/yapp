"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _scrollable = _interopRequireDefault(require("./element/bounded/scrollable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  z-index: 1;\n  overflow: hidden;\n  position: absolute;\n  white-space: pre;\n  user-select: none;\n  pointer-events: none;\n  background-color: transparent;\n  \n"]);

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
    key: "setDocumentType",
    value: function setDocumentType(documentType) {
      var state = {
        documentType: documentType
      };
      this.removeDocumentTypeClass();
      this.updateState(state);
      this.addDocumentTypeClass();
    }
  }, {
    key: "addDocumentTypeClass",
    value: function addDocumentTypeClass() {
      var state = this.getState(),
          documentType = state.documentType;

      if (documentType !== null) {
        var documentTypeClass = documentType; ///

        this.addClass(documentTypeClass);
      }
    }
  }, {
    key: "removeDocumentTypeClass",
    value: function removeDocumentTypeClass() {
      var state = this.getState(),
          documentType = state.documentType;

      if (documentType !== null) {
        var documentTypeClass = documentType; ///

        this.removeClass(documentTypeClass);
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
      setDocumentType = this.setDocumentType.bind(this);
      return {
        updateSyntax: updateSyntax,
        scrollSyntax: scrollSyntax,
        setSyntaxBounds: setSyntaxBounds,
        setDocumentType: setDocumentType
      };
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var documentType = null,
          initialState = {
        documentType: documentType
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJTeW50YXgiLCJkb2N1bWVudFR5cGUiLCJzdGF0ZSIsInJlbW92ZURvY3VtZW50VHlwZUNsYXNzIiwidXBkYXRlU3RhdGUiLCJhZGREb2N1bWVudFR5cGVDbGFzcyIsImdldFN0YXRlIiwiZG9jdW1lbnRUeXBlQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9rZW5zIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5XaXRoU2VsZWN0aW9uSFRNTCIsImFzSFRNTCIsInVwZGF0ZVN5bnRheCIsInVwZGF0ZSIsImJpbmQiLCJzY3JvbGxTeW50YXgiLCJzY3JvbGwiLCJzZXRTeW50YXhCb3VuZHMiLCJzZXRCb3VuZHMiLCJzZXREb2N1bWVudFR5cGUiLCJpbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInByb3BlcnRpZXMiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsInN5bnRheCIsIkJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs7OztvQ0FDWUMsWSxFQUFjO0FBQzVCLFVBQU1DLEtBQUssR0FBRztBQUNaRCxRQUFBQSxZQUFZLEVBQVpBO0FBRFksT0FBZDtBQUlBLFdBQUtFLHVCQUFMO0FBRUEsV0FBS0MsV0FBTCxDQUFpQkYsS0FBakI7QUFFQSxXQUFLRyxvQkFBTDtBQUNEOzs7MkNBRXNCO0FBQ2YsVUFBQUgsS0FBSyxHQUFHLEtBQUtJLFFBQUwsRUFBUjtBQUFBLFVBQ0VMLFlBREYsR0FDbUJDLEtBRG5CLENBQ0VELFlBREY7O0FBR04sVUFBSUEsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCLFlBQU1NLGlCQUFpQixHQUFHTixZQUExQixDQUR5QixDQUNlOztBQUV4QyxhQUFLTyxRQUFMLENBQWNELGlCQUFkO0FBQ0Q7QUFDRjs7OzhDQUV5QjtBQUNsQixVQUFBTCxLQUFLLEdBQUcsS0FBS0ksUUFBTCxFQUFSO0FBQUEsVUFDRUwsWUFERixHQUNtQkMsS0FEbkIsQ0FDRUQsWUFERjs7QUFHTixVQUFJQSxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekIsWUFBTU0saUJBQWlCLEdBQUdOLFlBQTFCLENBRHlCLENBQ2U7O0FBRXhDLGFBQUtRLFdBQUwsQ0FBaUJGLGlCQUFqQjtBQUNEO0FBQ0Y7OzsyQkFFTUcsTSxFQUFRO0FBQ2IsVUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDRCxJQUFELEVBQU9FLEtBQVAsRUFBaUI7QUFBRTtBQUN0QyxZQUFNQyxzQkFBc0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEVBQS9CO0FBRUFKLFFBQUFBLElBQUksSUFBSUcsc0JBQVI7QUFFQSxlQUFPSCxJQUFQO0FBQ0QsT0FOTSxFQU1KLEVBTkksQ0FBYjtBQVFBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNSyxZQUFZLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBQUEsVUFBNkM7QUFDMUNDLE1BQUFBLFlBQVksR0FBRyxLQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FEbEI7QUFBQSxVQUMwQztBQUNuQ0csTUFBQUEsZUFBZSxHQUFHLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUZ6QjtBQUFBLFVBRW9EO0FBQzdDSyxNQUFBQSxlQUFlLEdBQUcsS0FBS0EsZUFBTCxDQUFxQkwsSUFBckIsQ0FBMEIsSUFBMUIsQ0FIekI7QUFLQyxhQUFRO0FBQ05GLFFBQUFBLFlBQVksRUFBWkEsWUFETTtBQUVORyxRQUFBQSxZQUFZLEVBQVpBLFlBRk07QUFHTkUsUUFBQUEsZUFBZSxFQUFmQSxlQUhNO0FBSU5FLFFBQUFBLGVBQWUsRUFBZkE7QUFKTSxPQUFSO0FBTUQ7OztzQ0FFaUI7QUFDaEIsVUFBTXRCLFlBQVksR0FBRyxJQUFyQjtBQUFBLFVBQ011QixZQUFZLEdBQUc7QUFDYnZCLFFBQUFBLFlBQVksRUFBWkE7QUFEYSxPQURyQjtBQUtBLFdBQUt3QixRQUFMLENBQWNELFlBQWQ7QUFDRDs7OytCQUVVRSxVLEVBQVk7QUFDckIsV0FBS0MsZUFBTDtBQUNEOzs7OEJBUWdCQyxLLEVBQU9GLFUsRUFBWTtBQUNsQyxVQUFNRyxNQUFNLEdBQUdDLHVCQUF5QkMsU0FBekIsQ0FBbUNILEtBQW5DLEVBQTBDRixVQUExQyxDQUFmOztBQUVBRyxNQUFBQSxNQUFNLENBQUNHLFVBQVAsQ0FBa0JOLFVBQWxCO0FBRUEsYUFBT0csTUFBUDtBQUNEOzs7O0VBdEZrQkMsc0I7O2dCQUFmOUIsTSxhQTBFYSxLOztnQkExRWJBLE0sdUJBNEV1QjtBQUN6QmlDLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVVqQyxNQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgQm91bmRlZFNjcm9sbGFibGVFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvYm91bmRlZC9zY3JvbGxhYmxlXCI7XHJcblxyXG5jbGFzcyBTeW50YXggZXh0ZW5kcyBCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQge1xyXG4gIHNldERvY3VtZW50VHlwZShkb2N1bWVudFR5cGUpIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICBkb2N1bWVudFR5cGVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW1vdmVEb2N1bWVudFR5cGVDbGFzcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIHRoaXMuYWRkRG9jdW1lbnRUeXBlQ2xhc3MoKTtcclxuICB9XHJcblxyXG4gIGFkZERvY3VtZW50VHlwZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGRvY3VtZW50VHlwZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkb2N1bWVudFR5cGVDbGFzcyA9IGRvY3VtZW50VHlwZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGRvY3VtZW50VHlwZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZURvY3VtZW50VHlwZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGRvY3VtZW50VHlwZSB9ID0gc3RhdGU7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBkb2N1bWVudFR5cGVDbGFzcyA9IGRvY3VtZW50VHlwZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGRvY3VtZW50VHlwZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4geyAvLy9cclxuICAgICAgICAgICAgY29uc3QgdG9rZW5XaXRoU2VsZWN0aW9uSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbldpdGhTZWxlY3Rpb25IVE1MO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgICB9LCBcIlwiKTtcclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgdXBkYXRlU3ludGF4ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxTeW50YXggPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHNldFN5bnRheEJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyksIC8vL1xyXG4gICAgICAgICAgc2V0RG9jdW1lbnRUeXBlID0gdGhpcy5zZXREb2N1bWVudFR5cGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdXBkYXRlU3ludGF4LFxyXG4gICAgICBzY3JvbGxTeW50YXgsXHJcbiAgICAgIHNldFN5bnRheEJvdW5kcyxcclxuICAgICAgc2V0RG9jdW1lbnRUeXBlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGRvY3VtZW50VHlwZSA9IG51bGwsXHJcbiAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50VHlwZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJzeW50YXhcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IHN5bnRheCA9IEJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgIHN5bnRheC5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xyXG5cclxuICAgIHJldHVybiBzeW50YXg7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4KWBcclxuXHJcbiAgei1pbmRleDogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIFxyXG5gO1xyXG4iXX0=