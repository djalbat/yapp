"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easyRichtextarea = require("easy-richtextarea");

var _colour = require("./scheme/colour");

var _templateObject, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}), _temp))(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  ::selection {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  caret-color: inherit;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"])), _colour.selectionColour, _colour.selectionBackgroundColour);

exports["default"] = _default;