"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamStyles = require("occam-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  float: left;\n  margin-left: 6px;\n  margin-right: 6px;\n  color: ", ";\n  \n  ", "\n  \n"]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineNumbersColour = _occamStyles.prettyPrinterScheme.lineNumbersColour;

var LineNumbers = /*#__PURE__*/function (_Element) {
  _inherits(LineNumbers, _Element);

  var _super = _createSuper(LineNumbers);

  function LineNumbers() {
    _classCallCheck(this, LineNumbers);

    return _super.apply(this, arguments);
  }

  _createClass(LineNumbers, [{
    key: "update",
    value: function update(lineCount) {
      var previousLineCount = this.getPreviousLineCount();

      if (lineCount !== previousLineCount) {
        var _previousLineCount = lineCount; ///

        this.setPreviousLineCount(_previousLineCount);
        this.html(lineCount);
      }
    }
  }, {
    key: "html",
    value: function html(lineCount) {
      var html = "";

      for (var lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
        html = "".concat(html).concat(lineNumber, "<br/>");
      }

      _get(_getPrototypeOf(LineNumbers.prototype), "html", this).call(this, html);
    }
  }, {
    key: "getPreviousLineCount",
    value: function getPreviousLineCount() {
      var state = this.getState(),
          previousLineCount = state.previousLineCount;
      return previousLineCount;
    }
  }, {
    key: "setPreviousLineCount",
    value: function setPreviousLineCount(previousLineCount) {
      this.updateState({
        previousLineCount: previousLineCount
      });
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var updateLineNumbers = this.update.bind(this); ///

      return {
        updateLineNumbers: updateLineNumbers
      };
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousLineCount = 0;
      this.setState({
        previousLineCount: previousLineCount
      });
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var lineNumbers = _easy.Element.fromClass(Class, properties);

      lineNumbers.initialise(properties);
      return lineNumbers;
    }
  }]);

  return LineNumbers;
}(_easy.Element);

_defineProperty(LineNumbers, "tagName", "div");

_defineProperty(LineNumbers, "defaultProperties", {
  className: "line-numbers"
});

var _default = (0, _easyWithStyle["default"])(LineNumbers)(_templateObject(), lineNumbersColour, _occamStyles.firaCodeFontMixin);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVOdW1iZXJzLmpzIl0sIm5hbWVzIjpbImxpbmVOdW1iZXJzQ29sb3VyIiwicHJldHR5UHJpbnRlclNjaGVtZSIsIkxpbmVOdW1iZXJzIiwibGluZUNvdW50IiwicHJldmlvdXNMaW5lQ291bnQiLCJnZXRQcmV2aW91c0xpbmVDb3VudCIsInNldFByZXZpb3VzTGluZUNvdW50IiwiaHRtbCIsImxpbmVOdW1iZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInVwZGF0ZSIsImJpbmQiLCJzZXRTdGF0ZSIsInByb3BlcnRpZXMiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsImxpbmVOdW1iZXJzIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJmaXJhQ29kZUZvbnRNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHUUEsaUIsR0FBc0JDLGdDLENBQXRCRCxpQjs7SUFFRkUsVzs7Ozs7Ozs7Ozs7OzsyQkFDR0MsUyxFQUFXO0FBQ2hCLFVBQU1DLGlCQUFpQixHQUFHLEtBQUtDLG9CQUFMLEVBQTFCOztBQUVBLFVBQUlGLFNBQVMsS0FBS0MsaUJBQWxCLEVBQXFDO0FBQ25DLFlBQU1BLGtCQUFpQixHQUFHRCxTQUExQixDQURtQyxDQUNHOztBQUV0QyxhQUFLRyxvQkFBTCxDQUEwQkYsa0JBQTFCO0FBRUEsYUFBS0csSUFBTCxDQUFVSixTQUFWO0FBQ0Q7QUFDRjs7O3lCQUVJQSxTLEVBQVc7QUFDZCxVQUFJSSxJQUFJLEdBQUcsRUFBWDs7QUFFQSxXQUFLLElBQUlDLFVBQVUsR0FBRyxDQUF0QixFQUF5QkEsVUFBVSxJQUFJTCxTQUF2QyxFQUFrREssVUFBVSxFQUE1RCxFQUFnRTtBQUM5REQsUUFBQUEsSUFBSSxhQUFNQSxJQUFOLFNBQWFDLFVBQWIsVUFBSjtBQUNEOztBQUVELDRFQUFXRCxJQUFYO0FBQ0Q7OzsyQ0FFc0I7QUFDZixVQUFBRSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFSO0FBQUEsVUFDRU4saUJBREYsR0FDd0JLLEtBRHhCLENBQ0VMLGlCQURGO0FBR04sYUFBT0EsaUJBQVA7QUFDRDs7O3lDQUVvQkEsaUIsRUFBbUI7QUFDdEMsV0FBS08sV0FBTCxDQUFpQjtBQUNmUCxRQUFBQSxpQkFBaUIsRUFBakJBO0FBRGUsT0FBakI7QUFHRDs7O29DQUVlO0FBQ2YsVUFBTVEsaUJBQWlCLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQTFCLENBRGUsQ0FDb0M7O0FBRWxELGFBQVE7QUFDTkYsUUFBQUEsaUJBQWlCLEVBQWpCQTtBQURNLE9BQVI7QUFHRDs7O3NDQUVpQjtBQUNoQixVQUFNUixpQkFBaUIsR0FBRyxDQUExQjtBQUVBLFdBQUtXLFFBQUwsQ0FBYztBQUNaWCxRQUFBQSxpQkFBaUIsRUFBakJBO0FBRFksT0FBZDtBQUdEOzs7K0JBRVVZLFUsRUFBWTtBQUNyQixXQUFLQyxlQUFMO0FBQ0Q7Ozs4QkFRZ0JDLEssRUFBT0YsVSxFQUFZO0FBQ2xDLFVBQU1HLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJGLFVBQXpCLENBQXBCOztBQUVBRyxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJOLFVBQXZCO0FBRUEsYUFBT0csV0FBUDtBQUNEOzs7O0VBcEV1QkMsYTs7Z0JBQXBCbEIsVyxhQXdEYSxLOztnQkF4RGJBLFcsdUJBMER1QjtBQUN6QnFCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVVyQixXQUFWLEMsb0JBS0pGLGlCLEVBRVB3Qiw4QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5pbXBvcnQgeyBmaXJhQ29kZUZvbnRNaXhpbiB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcclxuaW1wb3J0IHsgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcclxuXHJcbmNvbnN0IHsgbGluZU51bWJlcnNDb2xvdXIgfSA9IHByZXR0eVByaW50ZXJTY2hlbWU7XHJcblxyXG5jbGFzcyBMaW5lTnVtYmVycyBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHVwZGF0ZShsaW5lQ291bnQpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUNvdW50ID0gdGhpcy5nZXRQcmV2aW91c0xpbmVDb3VudCgpO1xyXG5cclxuICAgIGlmIChsaW5lQ291bnQgIT09IHByZXZpb3VzTGluZUNvdW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzTGluZUNvdW50ID0gbGluZUNvdW50OyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzTGluZUNvdW50KHByZXZpb3VzTGluZUNvdW50KTtcclxuXHJcbiAgICAgIHRoaXMuaHRtbChsaW5lQ291bnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHRtbChsaW5lQ291bnQpIHtcclxuICAgIGxldCBodG1sID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBsaW5lTnVtYmVyID0gMTsgbGluZU51bWJlciA8PSBsaW5lQ291bnQ7IGxpbmVOdW1iZXIrKykge1xyXG4gICAgICBodG1sID0gYCR7aHRtbH0ke2xpbmVOdW1iZXJ9PGJyLz5gO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0xpbmVDb3VudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBwcmV2aW91c0xpbmVDb3VudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzTGluZUNvdW50O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNMaW5lQ291bnQocHJldmlvdXNMaW5lQ291bnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0xpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgdXBkYXRlTGluZU51bWJlcnMgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHVwZGF0ZUxpbmVOdW1iZXJzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzTGluZUNvdW50ID0gMDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNMaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwibGluZS1udW1iZXJzXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBjb25zdCBsaW5lTnVtYmVycyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICBsaW5lTnVtYmVycy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xyXG5cclxuICAgIHJldHVybiBsaW5lTnVtYmVycztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMaW5lTnVtYmVycylgXHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgY29sb3I6ICR7bGluZU51bWJlcnNDb2xvdXJ9O1xyXG4gIFxyXG4gICR7ZmlyYUNvZGVGb250TWl4aW59XHJcbiAgXHJcbmA7XHJcbiJdfQ==