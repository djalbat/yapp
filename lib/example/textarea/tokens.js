"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2Vucy5qcyJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImNsZWFyVG9rZW5zIiwic2V0VG9rZW5zIiwiYmluZCIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzhCQUNUQyxNLEVBQVE7QUFDaEIsVUFBSUEsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsWUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQUEsWUFDSUMsYUFBYSxHQUFHLElBRHBCO0FBR0EsWUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLE1BQVAsQ0FBYyxVQUFDRCxJQUFELEVBQU9FLEtBQVAsRUFBaUI7QUFDMUMsY0FBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sRUFBbEI7O0FBRUEsY0FBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCQyxZQUFBQSxJQUFJLGNBQU9GLFVBQVUsRUFBakIsT0FBSjtBQUNELFdBRkQsTUFFTztBQUNMLGdCQUFNTywyQkFBMkIsR0FBR04sYUFBYSxDQUFDTyxnQkFBZCxFQUFwQzs7QUFFQSxnQkFBSUQsMkJBQUosRUFBaUM7QUFDL0JMLGNBQUFBLElBQUksY0FBT0YsVUFBVSxFQUFqQixPQUFKO0FBQ0Q7QUFDRjs7QUFFREUsVUFBQUEsSUFBSSxJQUFJRyxTQUFSO0FBRUFKLFVBQUFBLGFBQWEsR0FBR0csS0FBaEI7QUFFQSxpQkFBT0YsSUFBUDtBQUNELFNBbEJZLEVBa0JWLEVBbEJVLENBQWI7QUFvQkEsYUFBS0EsSUFBTCxDQUFVQSxJQUFWO0FBQ0QsT0F6QkQsTUF5Qk87QUFDTCxhQUFLTyxXQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhO0FBQ1osVUFBTVAsSUFBSSxHQUFHLEVBQWI7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTVEsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFsQjtBQUFBLFVBQ01GLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCRSxJQUFqQixDQUFzQixJQUF0QixDQURwQjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5ELFFBQUFBLFdBQVcsRUFBWEE7QUFGTSxPQUFSO0FBSUQ7Ozs7RUE5Q3lDRyxvQjs7OztnQkFBdkJkLGMsdUJBZ0RRO0FBQ3pCZSxFQUFBQSxTQUFTLEVBQUUsUUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLEVBQUFBLFFBQVEsRUFBRTtBQUhlLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGlmICh0b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH0sIFwiXCIpO1xuXG4gICAgICB0aGlzLmh0bWwoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gXCJcIjtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXX0=