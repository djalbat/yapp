"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyRichtextarea = require("easy-richtextarea");

var _firaCode = _interopRequireDefault(require("./mixin/font/firaCode"));

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
  var data = _taggedTemplateLiteral(["\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 0;\n  tab-size: 2;\n  position: absolute;\n  word-wrap: normal;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  caret-color: white;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n\n  ", "\n\n"]);

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
      setRichTextareaContent = this.setContent.bind(this); ///

      return {
        getRichTextareaContent: getRichTextareaContent,
        setRichTextareaBounds: setRichTextareaBounds,
        setRichTextareaContent: setRichTextareaContent
      };
    }
  }]);

  return _class;
}(_easyRichtextarea.RichTextarea), _defineProperty(_class, "defaultProperties", {
  spellCheck: "false"
}), _temp))(_templateObject(), _firaCode["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2hUZXh0YXJlYS5qcyJdLCJuYW1lcyI6WyJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwic2V0Qm91bmRzIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJSaWNoVGV4dGFyZWEiLCJzcGVsbENoZWNrIiwiZmlyYUNvZGVGb250TWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVlO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFDSEEsTUFERyxFQUNLO0FBQ2hCLFVBQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLEVBQVo7QUFBQSxVQUNNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxFQURiO0FBQUEsVUFFTUMsS0FBSyxHQUFHTCxNQUFNLENBQUNNLFFBQVAsRUFGZDtBQUFBLFVBR01DLE1BQU0sR0FBR1AsTUFBTSxDQUFDUSxTQUFQLEVBSGY7QUFLQSxXQUFLQyxNQUFMLENBQVlKLEtBQVosRUFBbUJFLE1BQW5CO0FBQ0EsV0FBS0csUUFBTCxDQUFjVCxHQUFkLEVBQW1CRSxJQUFuQjtBQUNEO0FBVFk7QUFBQTtBQUFBLDJCQVdORSxLQVhNLEVBV0NFLE1BWEQsRUFXUztBQUNwQixXQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDQSxXQUFLTyxTQUFMLENBQWVMLE1BQWY7QUFDRDtBQWRZO0FBQUE7QUFBQSw2QkFnQkpOLEdBaEJJLEVBZ0JDRSxJQWhCRCxFQWdCTztBQUNsQkYsTUFBQUEsR0FBRyxhQUFNQSxHQUFOLE9BQUg7QUFDQUUsTUFBQUEsSUFBSSxhQUFNQSxJQUFOLE9BQUo7QUFFQSxVQUFNVSxHQUFHLEdBQUc7QUFDVlosUUFBQUEsR0FBRyxFQUFIQSxHQURVO0FBRVZFLFFBQUFBLElBQUksRUFBSkE7QUFGVSxPQUFaO0FBS0EsV0FBS1UsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7QUExQlk7QUFBQTtBQUFBLG9DQTRCRztBQUNkLFVBQU1DLHNCQUFzQixHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQS9CO0FBQUEsVUFDTUMscUJBQXFCLEdBQUcsS0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQW9CLElBQXBCLENBRDlCO0FBQUEsVUFDMEQ7QUFDcERHLE1BQUFBLHNCQUFzQixHQUFHLEtBQUtDLFVBQUwsQ0FBZ0JKLElBQWhCLENBQXFCLElBQXJCLENBRi9CLENBRGMsQ0FHNkM7O0FBRTNELGFBQVE7QUFDTkYsUUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFETTtBQUVORyxRQUFBQSxxQkFBcUIsRUFBckJBLHFCQUZNO0FBR05FLFFBQUFBLHNCQUFzQixFQUF0QkE7QUFITSxPQUFSO0FBS0Q7QUF0Q1k7O0FBQUE7QUFBQSxFQUF3QkUsOEJBQXhCLGdEQXdDYztBQUN6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRGEsQ0F4Q2QsVSxvQkErRFhDLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuXG5pbXBvcnQgZmlyYUNvZGVGb250TWl4aW4gZnJvbSBcIi4vbWl4aW4vZm9udC9maXJhQ29kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIHRhYi1zaXplOiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBib3JkZXItdG9wOiBub25lO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICR7ZmlyYUNvZGVGb250TWl4aW59XG5cbmA7XG4iXX0=