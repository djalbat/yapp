"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _firaCode = _interopRequireDefault(require("./mixin/font/firaCode"));

var _view = require("./scheme/view");

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

var _default = (0, _easyWithStyle["default"])(LineNumbers)(_templateObject(), _view.lineNumbersColour, _firaCode["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVOdW1iZXJzLmpzIl0sIm5hbWVzIjpbIkxpbmVOdW1iZXJzIiwibGluZUNvdW50IiwicHJldmlvdXNMaW5lQ291bnQiLCJnZXRQcmV2aW91c0xpbmVDb3VudCIsInNldFByZXZpb3VzTGluZUNvdW50IiwiaHRtbCIsImxpbmVOdW1iZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInVwZGF0ZSIsImJpbmQiLCJzZXRTdGF0ZSIsInByb3BlcnRpZXMiLCJzZXRJbml0aWFsU3RhdGUiLCJDbGFzcyIsImxpbmVOdW1iZXJzIiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJsaW5lTnVtYmVyc0NvbG91ciIsImZpcmFDb2RlRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7Ozs7OzJCQUNHQyxTLEVBQVc7QUFDaEIsVUFBTUMsaUJBQWlCLEdBQUcsS0FBS0Msb0JBQUwsRUFBMUI7O0FBRUEsVUFBSUYsU0FBUyxLQUFLQyxpQkFBbEIsRUFBcUM7QUFDbkMsWUFBTUEsa0JBQWlCLEdBQUdELFNBQTFCLENBRG1DLENBQ0c7O0FBRXRDLGFBQUtHLG9CQUFMLENBQTBCRixrQkFBMUI7QUFFQSxhQUFLRyxJQUFMLENBQVVKLFNBQVY7QUFDRDtBQUNGOzs7eUJBRUlBLFMsRUFBVztBQUNkLFVBQUlJLElBQUksR0FBRyxFQUFYOztBQUVBLFdBQUssSUFBSUMsVUFBVSxHQUFHLENBQXRCLEVBQXlCQSxVQUFVLElBQUlMLFNBQXZDLEVBQWtESyxVQUFVLEVBQTVELEVBQWdFO0FBQzlERCxRQUFBQSxJQUFJLGFBQU1BLElBQU4sU0FBYUMsVUFBYixVQUFKO0FBQ0Q7O0FBRUQsNEVBQVdELElBQVg7QUFDRDs7OzJDQUVzQjtBQUNmLFVBQUFFLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFTixpQkFERixHQUN3QkssS0FEeEIsQ0FDRUwsaUJBREY7QUFHTixhQUFPQSxpQkFBUDtBQUNEOzs7eUNBRW9CQSxpQixFQUFtQjtBQUN0QyxXQUFLTyxXQUFMLENBQWlCO0FBQ2ZQLFFBQUFBLGlCQUFpQixFQUFqQkE7QUFEZSxPQUFqQjtBQUdEOzs7b0NBRWU7QUFDZixVQUFNUSxpQkFBaUIsR0FBRyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBMUIsQ0FEZSxDQUNvQzs7QUFFbEQsYUFBUTtBQUNORixRQUFBQSxpQkFBaUIsRUFBakJBO0FBRE0sT0FBUjtBQUdEOzs7c0NBRWlCO0FBQ2hCLFVBQU1SLGlCQUFpQixHQUFHLENBQTFCO0FBRUEsV0FBS1csUUFBTCxDQUFjO0FBQ1pYLFFBQUFBLGlCQUFpQixFQUFqQkE7QUFEWSxPQUFkO0FBR0Q7OzsrQkFFVVksVSxFQUFZO0FBQ3JCLFdBQUtDLGVBQUw7QUFDRDs7OzhCQVFnQkMsSyxFQUFPRixVLEVBQVk7QUFDbEMsVUFBTUcsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QkYsVUFBekIsQ0FBcEI7O0FBRUFHLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1Qk4sVUFBdkI7QUFFQSxhQUFPRyxXQUFQO0FBQ0Q7Ozs7RUFwRXVCQyxhOztnQkFBcEJsQixXLGFBd0RhLEs7O2dCQXhEYkEsVyx1QkEwRHVCO0FBQ3pCcUIsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVXJCLFdBQVYsQyxvQkFLSnNCLHVCLEVBRVBDLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgZmlyYUNvZGVGb250TWl4aW4gZnJvbSBcIi4vbWl4aW4vZm9udC9maXJhQ29kZVwiO1xyXG5cclxuaW1wb3J0IHsgbGluZU51bWJlcnNDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvdmlld1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUobGluZUNvdW50KSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVDb3VudCA9IHRoaXMuZ2V0UHJldmlvdXNMaW5lQ291bnQoKTtcclxuXHJcbiAgICBpZiAobGluZUNvdW50ICE9PSBwcmV2aW91c0xpbmVDb3VudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0xpbmVDb3VudCA9IGxpbmVDb3VudDsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c0xpbmVDb3VudChwcmV2aW91c0xpbmVDb3VudCk7XHJcblxyXG4gICAgICB0aGlzLmh0bWwobGluZUNvdW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGh0bWwobGluZUNvdW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgbGluZU51bWJlciA9IDE7IGxpbmVOdW1iZXIgPD0gbGluZUNvdW50OyBsaW5lTnVtYmVyKyspIHtcclxuICAgICAgaHRtbCA9IGAke2h0bWx9JHtsaW5lTnVtYmVyfTxici8+YDtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNMaW5lQ291bnQoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgcHJldmlvdXNMaW5lQ291bnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0xpbmVDb3VudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUNvdW50KHByZXZpb3VzTGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNMaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IHVwZGF0ZUxpbmVOdW1iZXJzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICB1cGRhdGVMaW5lTnVtYmVyc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xpbmVDb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzTGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImxpbmUtbnVtYmVyc1wiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xyXG4gICAgY29uc3QgbGluZU51bWJlcnMgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XHJcblxyXG4gICAgbGluZU51bWJlcnMuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICByZXR1cm4gbGluZU51bWJlcnM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGluZU51bWJlcnMpYFxyXG5cclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIGNvbG9yOiAke2xpbmVOdW1iZXJzQ29sb3VyfTtcclxuICBcclxuICAke2ZpcmFDb2RlRm9udE1peGlufVxyXG4gIFxyXG5gO1xyXG4iXX0=