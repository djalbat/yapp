"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

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

var TokensTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(TokensTextarea, _Textarea);

  var _super = _createSuper(TokensTextarea);

  function TokensTextarea() {
    _classCallCheck(this, TokensTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(TokensTextarea, [{
    key: "setTokens",
    value: function setTokens(tokens) {
      if (tokens !== null) {
        var lineNumber = 1,
            previousToken = null;
        var html = tokens.reduce(function (html, token) {
          var tokenHTML = token.asHTML();

          if (previousToken === null) {
            html += "".concat(lineNumber++, ": ");
          } else {
            var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

            if (previousTokenEndOfLineToken) {
              html += "".concat(lineNumber++, ": ");
            }
          }

          html += tokenHTML;
          previousToken = token;
          return html;
        }, "");
        this.html(html);
      } else {
        this.clearTokens();
      }
    }
  }, {
    key: "clearTokens",
    value: function clearTokens() {
      var html = "";
      this.html(html);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);
      return {
        setTokens: setTokens,
        clearTokens: clearTokens
      };
    }
  }]);

  return TokensTextarea;
}(_textarea["default"]);

exports["default"] = TokensTextarea;

_defineProperty(TokensTextarea, "defaultProperties", {
  className: "tokens",
  spellCheck: "false",
  readOnly: true
});