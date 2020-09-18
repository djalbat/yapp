"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyRichtextarea = require("easy-richtextarea");

var _prettyPrinter = require("./scheme/prettyPrinter");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  white-space: pre;\n  caret-color: ", ";\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n  ::selection {\n    color: ", ";\n    background-color: ", ";\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _easyWithStyle["default"])((_temp = _class = /*#__PURE__*/function (_RichTextarea) {
  _inherits(_class, _RichTextarea);

  var _super = _createSuper(_class);

  function _class() {
    _classCallCheck(this, _class);

    return _super.apply(this, arguments);
  }

  _createClass(_class, [{
    key: "setBounds",
    value: function setBounds(bounds) {
      var top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();
      this.resize(width, height);
      this.position(top, left);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
    }
  }, {
    key: "position",
    value: function position(top, left) {
      top = "".concat(top, "px");
      left = "".concat(left, "px");
      var css = {
        top: top,
        left: left
      };
      this.css(css);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRichTextareaContent = this.getContent.bind(this),
          setRichTextareaBounds = this.setBounds.bind(this),
          ///
      setRichTextareaContent = this.setContent.bind(this),
          ///
      setRichTextareaReadOnly = this.setReadOnly.bind(this); ///

      return {
        getRichTextareaContent: getRichTextareaContent,
        setRichTextareaBounds: setRichTextareaBounds,
        setRichTextareaContent: setRichTextareaContent,
        setRichTextareaReadOnly: setRichTextareaReadOnly
      };
    }
  }]);

  return _class;
}(_easyRichtextarea.RichTextarea), _defineProperty(_class, "defaultProperties", {
  spellCheck: "false"
}), _temp))(_templateObject(), _prettyPrinter.caretColour, _prettyPrinter.caretColour, _prettyPrinter.selectionBackgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2hUZXh0YXJlYS5qcyJdLCJuYW1lcyI6WyJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwic2V0Qm91bmRzIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsInNldFJlYWRPbmx5IiwiUmljaFRleHRhcmVhIiwic3BlbGxDaGVjayIsImNhcmV0Q29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRWU7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQUNIQSxNQURHLEVBQ0s7QUFDaEIsVUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsRUFBWjtBQUFBLFVBQ01DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxPQUFQLEVBRGI7QUFBQSxVQUVNQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sUUFBUCxFQUZkO0FBQUEsVUFHTUMsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFNBQVAsRUFIZjtBQUtBLFdBQUtDLE1BQUwsQ0FBWUosS0FBWixFQUFtQkUsTUFBbkI7QUFDQSxXQUFLRyxRQUFMLENBQWNULEdBQWQsRUFBbUJFLElBQW5CO0FBQ0Q7QUFUWTtBQUFBO0FBQUEsMkJBV05FLEtBWE0sRUFXQ0UsTUFYRCxFQVdTO0FBQ3BCLFdBQUtJLFFBQUwsQ0FBY04sS0FBZDtBQUNBLFdBQUtPLFNBQUwsQ0FBZUwsTUFBZjtBQUNEO0FBZFk7QUFBQTtBQUFBLDZCQWdCSk4sR0FoQkksRUFnQkNFLElBaEJELEVBZ0JPO0FBQ2xCRixNQUFBQSxHQUFHLGFBQU1BLEdBQU4sT0FBSDtBQUNBRSxNQUFBQSxJQUFJLGFBQU1BLElBQU4sT0FBSjtBQUVBLFVBQU1VLEdBQUcsR0FBRztBQUNWWixRQUFBQSxHQUFHLEVBQUhBLEdBRFU7QUFFVkUsUUFBQUEsSUFBSSxFQUFKQTtBQUZVLE9BQVo7QUFLQSxXQUFLVSxHQUFMLENBQVNBLEdBQVQ7QUFDRDtBQTFCWTtBQUFBO0FBQUEsb0NBNEJHO0FBQ2QsVUFBTUMsc0JBQXNCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBL0I7QUFBQSxVQUNNQyxxQkFBcUIsR0FBRyxLQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FEOUI7QUFBQSxVQUMwRDtBQUNwREcsTUFBQUEsc0JBQXNCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkosSUFBaEIsQ0FBcUIsSUFBckIsQ0FGL0I7QUFBQSxVQUU0RDtBQUN0REssTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQk4sSUFBakIsQ0FBc0IsSUFBdEIsQ0FIaEMsQ0FEYyxDQUlnRDs7QUFFOUQsYUFBUTtBQUNORixRQUFBQSxzQkFBc0IsRUFBdEJBLHNCQURNO0FBRU5HLFFBQUFBLHFCQUFxQixFQUFyQkEscUJBRk07QUFHTkUsUUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFITTtBQUlORSxRQUFBQSx1QkFBdUIsRUFBdkJBO0FBSk0sT0FBUjtBQU1EO0FBeENZOztBQUFBO0FBQUEsRUFBd0JFLDhCQUF4QixnREEwQ2M7QUFDekJDLEVBQUFBLFVBQVUsRUFBRTtBQURhLENBMUNkLFUsb0JBNERFQywwQixFQVdKQSwwQixFQUNXQyx3QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSaWNoVGV4dGFyZWEgfSBmcm9tIFwiZWFzeS1yaWNodGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgY2FyZXRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtjYXJldENvbG91cn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG5gO1xuIl19