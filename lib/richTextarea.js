"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyRichtextarea = require("easy-richtextarea");

var _firaCode = _interopRequireDefault(require("./mixin/font/firaCode"));

var _monospace = _interopRequireDefault(require("./mixin/font/monospace"));

var _css = require("./utilities/css");

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
  var data = _taggedTemplateLiteral(["\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  white-space: pre;\n  caret-color: ", ";\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n  ::selection {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", "\n\n  .fira-code {\n\n    ", "\n    \n  }\n\n"]);

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
    key: "getLineHeight",
    value: function getLineHeight() {
      var lineHeightInPixels = this.css("line-height"),
          lineHeight = (0, _css.stripPixels)(lineHeightInPixels);
      return lineHeight;
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRichTextareaContent = this.getContent.bind(this),
          setRichTextareaBounds = this.setBounds.bind(this),
          ///
      setRichTextareaContent = this.setContent.bind(this),
          ///
      setRichTextareaReadOnly = this.setReadOnly.bind(this),
          ///
      getRichTextareaLineHeight = this.getLineHeight.bind(this),
          ///
      enableRichTextareaFiraCode = this.enableFiraCode.bind(this),
          ///
      disableRichTextareaFiraCode = this.disableFiraCode.bind(this); ///

      return {
        getRichTextareaContent: getRichTextareaContent,
        setRichTextareaBounds: setRichTextareaBounds,
        setRichTextareaContent: setRichTextareaContent,
        setRichTextareaReadOnly: setRichTextareaReadOnly,
        getRichTextareaLineHeight: getRichTextareaLineHeight,
        enableRichTextareaFiraCode: enableRichTextareaFiraCode,
        disableRichTextareaFiraCode: disableRichTextareaFiraCode
      };
    }
  }]);

  return _class;
}(_easyRichtextarea.RichTextarea), _defineProperty(_class, "defaultProperties", {
  spellCheck: "false"
}), _temp))(_templateObject(), _prettyPrinter.caretColour, _prettyPrinter.caretColour, _prettyPrinter.selectionBackgroundColour, _monospace["default"], _firaCode["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2hUZXh0YXJlYS5qcyJdLCJuYW1lcyI6WyJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImxpbmVIZWlnaHRJblBpeGVscyIsImxpbmVIZWlnaHQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0Q29udGVudCIsImJpbmQiLCJzZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJzZXRCb3VuZHMiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0Q29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJnZXRSaWNoVGV4dGFyZWFMaW5lSGVpZ2h0IiwiZ2V0TGluZUhlaWdodCIsImVuYWJsZVJpY2hUZXh0YXJlYUZpcmFDb2RlIiwiZW5hYmxlRmlyYUNvZGUiLCJkaXNhYmxlUmljaFRleHRhcmVhRmlyYUNvZGUiLCJkaXNhYmxlRmlyYUNvZGUiLCJSaWNoVGV4dGFyZWEiLCJzcGVsbENoZWNrIiwiY2FyZXRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwibW9ub3NwYWNlRm9udE1peGluIiwiZmlyYUNvZGVGb250TWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFDSEEsTUFERyxFQUNLO0FBQ2hCLFVBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLEVBQVo7QUFBQSxVQUNNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxFQURiO0FBQUEsVUFFTUMsS0FBSyxHQUFHTCxNQUFNLENBQUNNLFFBQVAsRUFGZDtBQUFBLFVBR01DLE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxTQUFQLEVBSGY7QUFLQSxXQUFLQyxNQUFMLENBQVlKLEtBQVosRUFBbUJFLE1BQW5CO0FBQ0EsV0FBS0csUUFBTCxDQUFjVCxHQUFkLEVBQW1CRSxJQUFuQjtBQUNEO0FBVFk7QUFBQTtBQUFBLDJCQVdORSxLQVhNLEVBV0NFLE1BWEQsRUFXUztBQUNwQixXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDQSxXQUFLTyxTQUFMLENBQWVMLE1BQWY7QUFDRDtBQWRZO0FBQUE7QUFBQSw2QkFnQkpOLEdBaEJJLEVBZ0JDRSxJQWhCRCxFQWdCTztBQUNsQkYsTUFBQUEsR0FBRyxhQUFNQSxHQUFOLE9BQUg7QUFDQUUsTUFBQUEsSUFBSSxhQUFNQSxJQUFOLE9BQUo7QUFFQSxVQUFNVSxHQUFHLEdBQUc7QUFDVlosUUFBQUEsR0FBRyxFQUFIQSxHQURVO0FBRVZFLFFBQUFBLElBQUksRUFBSkE7QUFGVSxPQUFaO0FBS0EsV0FBS1UsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7QUExQlk7QUFBQTtBQUFBLHFDQTRCSTtBQUNmLFdBQUtDLFFBQUwsQ0FBYyxXQUFkO0FBQ0Q7QUE5Qlk7QUFBQTtBQUFBLHNDQWdDSztBQUNoQixXQUFLQyxXQUFMLENBQWlCLFdBQWpCO0FBQ0Q7QUFsQ1k7QUFBQTtBQUFBLG9DQW9DRztBQUNkLFVBQU1DLGtCQUFrQixHQUFHLEtBQUtILEdBQUwsQ0FBUyxhQUFULENBQTNCO0FBQUEsVUFDTUksVUFBVSxHQUFHLHNCQUFZRCxrQkFBWixDQURuQjtBQUdBLGFBQU9DLFVBQVA7QUFDRDtBQXpDWTtBQUFBO0FBQUEsb0NBMkNHO0FBQ2QsVUFBTUMsc0JBQXNCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBL0I7QUFBQSxVQUNNQyxxQkFBcUIsR0FBRyxLQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FEOUI7QUFBQSxVQUMwRDtBQUNwREcsTUFBQUEsc0JBQXNCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQkosSUFBaEIsQ0FBcUIsSUFBckIsQ0FGL0I7QUFBQSxVQUU0RDtBQUN0REssTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQk4sSUFBakIsQ0FBc0IsSUFBdEIsQ0FIaEM7QUFBQSxVQUc2RDtBQUN2RE8sTUFBQUEseUJBQXlCLEdBQUcsS0FBS0MsYUFBTCxDQUFtQlIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FKbEM7QUFBQSxVQUlrRTtBQUM1RFMsTUFBQUEsMEJBQTBCLEdBQUcsS0FBS0MsY0FBTCxDQUFvQlYsSUFBcEIsQ0FBeUIsSUFBekIsQ0FMbkM7QUFBQSxVQUtvRTtBQUM5RFcsTUFBQUEsMkJBQTJCLEdBQUcsS0FBS0MsZUFBTCxDQUFxQlosSUFBckIsQ0FBMEIsSUFBMUIsQ0FOcEMsQ0FEYyxDQU93RDs7QUFFdEUsYUFBUTtBQUNORixRQUFBQSxzQkFBc0IsRUFBdEJBLHNCQURNO0FBRU5HLFFBQUFBLHFCQUFxQixFQUFyQkEscUJBRk07QUFHTkUsUUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFITTtBQUlORSxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQUpNO0FBS05FLFFBQUFBLHlCQUF5QixFQUF6QkEseUJBTE07QUFNTkUsUUFBQUEsMEJBQTBCLEVBQTFCQSwwQkFOTTtBQU9ORSxRQUFBQSwyQkFBMkIsRUFBM0JBO0FBUE0sT0FBUjtBQVNEO0FBN0RZOztBQUFBO0FBQUEsRUFBd0JFLDhCQUF4QixnREErRGM7QUFDekJDLEVBQUFBLFVBQVUsRUFBRTtBQURhLENBL0RkLFUsb0JBaUZFQywwQixFQVdKQSwwQixFQUNXQyx3QyxFQUdwQkMscUIsRUFJRUMsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUmljaFRleHRhcmVhIH0gZnJvbSBcImVhc3ktcmljaHRleHRhcmVhXCI7XG5cbmltcG9ydCBmaXJhQ29kZUZvbnRNaXhpbiBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5pbXBvcnQgbW9ub3NwYWNlRm9udE1peGluIGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5cbmltcG9ydCB7IHN0cmlwUGl4ZWxzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2Nzc1wiO1xuaW1wb3J0IHsgY2FyZXRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBlbmFibGVGaXJhQ29kZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICB9XG5cbiAgZGlzYWJsZUZpcmFDb2RlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gIH1cblxuICBnZXRMaW5lSGVpZ2h0KCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHRJblBpeGVscyA9IHRoaXMuY3NzKFwibGluZS1oZWlnaHRcIiksXG4gICAgICAgICAgbGluZUhlaWdodCA9IHN0cmlwUGl4ZWxzKGxpbmVIZWlnaHRJblBpeGVscyk7XG5cbiAgICByZXR1cm4gbGluZUhlaWdodDtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0UmljaFRleHRhcmVhTGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlUmljaFRleHRhcmVhRmlyYUNvZGUgPSB0aGlzLmVuYWJsZUZpcmFDb2RlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBkaXNhYmxlUmljaFRleHRhcmVhRmlyYUNvZGUgPSB0aGlzLmRpc2FibGVGaXJhQ29kZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHksXG4gICAgICBnZXRSaWNoVGV4dGFyZWFMaW5lSGVpZ2h0LFxuICAgICAgZW5hYmxlUmljaFRleHRhcmVhRmlyYUNvZGUsXG4gICAgICBkaXNhYmxlUmljaFRleHRhcmVhRmlyYUNvZGVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuICAke21vbm9zcGFjZUZvbnRNaXhpbn1cblxuICAuZmlyYS1jb2RlIHtcblxuICAgICR7ZmlyYUNvZGVGb250TWl4aW59XG4gICAgXG4gIH1cblxuYDtcbiJdfQ==