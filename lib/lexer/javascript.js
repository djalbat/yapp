"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _singleLine = _interopRequireDefault(require("../token/nonSignificant/comment/singleLine"));

var _endOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/endOf"));

var _startOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/startOf"));

var _middleOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/middleOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var entries = [{
  "special": "^(?:;|,|\\.|\\{|\\}|\\(|\\)|=)"
}, {
  "keyword": "^(?:import|export|default|function|const|new)"
}, {
  "identifier": "^[a-zA-Z]+"
}, {
  "unassigned": "^[^\\s]+"
}];

var JavaScriptLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(JavaScriptLexer, _CommonLexer);

  var _super = _createSuper(JavaScriptLexer);

  function JavaScriptLexer() {
    _classCallCheck(this, JavaScriptLexer);

    return _super.apply(this, arguments);
  }

  _createClass(JavaScriptLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(JavaScriptLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
    }
  }, {
    key: "matchBrokenComment",
    value: function matchBrokenComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchSingleLineComment",
    value: function matchSingleLineComment(content, inComment) {
      var singleLineCommentToken = inComment ? null : _singleLine["default"].match(content);
      return singleLineCommentToken;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      var multiLinCommentToken = inComment ? _endOf["default"].match(content) || _middleOf["default"].match(content) : null;
      return multiLinCommentToken;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      var multiLinCommentToken = inComment ? null : _startOf["default"].match(content);
      return multiLinCommentToken;
    }
  }, {
    key: "matchRegularExpression",
    value: function matchRegularExpression(content) {
      return null;
    }
  }], [{
    key: "fromEntries",
    value: function fromEntries(entries) {
      return _occamLexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return _occamLexers.CommonLexer.fromNothing(JavaScriptLexer);
    }
  }]);

  return JavaScriptLexer;
}(_occamLexers.CommonLexer);

exports["default"] = JavaScriptLexer;

_defineProperty(JavaScriptLexer, "entries", entries);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkphdmFTY3JpcHRMZXhlciIsImNvbnRlbnQiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiaW5Db21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRSxhQUFXO0FBRGIsQ0FEYyxFQUlkO0FBQ0UsYUFBVztBQURiLENBSmMsRUFPZDtBQUNFLGdCQUFjO0FBRGhCLENBUGMsRUFVZDtBQUNFLGdCQUFjO0FBRGhCLENBVmMsQ0FBaEI7O0lBZXFCQyxlOzs7Ozs7Ozs7Ozs7O3VDQUNBQyxPLEVBQVM7QUFBRSxxR0FBZ0NBLE9BQWhDLEVBQXlDQyx5Q0FBekM7QUFBeUU7Ozt1Q0FFcEZELE8sRUFBU0UsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFaENGLE8sRUFBU0UsUyxFQUFXO0FBQ3pDLFVBQU1DLHNCQUFzQixHQUFHRCxTQUFTLEdBQ1AsSUFETyxHQUVMRSx1QkFBdUJDLEtBQXZCLENBQTZCTCxPQUE3QixDQUZuQztBQUlBLGFBQU9HLHNCQUFQO0FBQ0Q7OzttREFFOEJILE8sRUFBU0UsUyxFQUFXO0FBQ2pELFVBQU1JLG9CQUFvQixHQUFHSixTQUFTLEdBQ1BLLGtCQUEyQkYsS0FBM0IsQ0FBaUNMLE9BQWpDLEtBQTZDUSxxQkFBOEJILEtBQTlCLENBQW9DTCxPQUFwQyxDQUR0QyxHQUVOLElBRmhDO0FBSUEsYUFBT00sb0JBQVA7QUFDRDs7O3NEQUVpQ04sTyxFQUFTRSxTLEVBQVc7QUFDcEQsVUFBTUksb0JBQW9CLEdBQUdKLFNBQVMsR0FDUCxJQURPLEdBRUxPLG9CQUE2QkosS0FBN0IsQ0FBbUNMLE9BQW5DLENBRmpDO0FBSUEsYUFBT00sb0JBQVA7QUFDRDs7OzJDQUVzQk4sTyxFQUFTO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztnQ0FJN0JGLE8sRUFBUztBQUFFLGFBQU9ZLHlCQUFZQyxXQUFaLENBQXdCWixlQUF4QixFQUF5Q0QsT0FBekMsQ0FBUDtBQUEyRDs7O2tDQUVwRTtBQUFFLGFBQU9ZLHlCQUFZRSxXQUFaLENBQXdCYixlQUF4QixDQUFQO0FBQWtEOzs7O0VBbkM5Qlcsd0I7Ozs7Z0JBQXhCWCxlLGFBK0JGRCxPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBTaW5nbGVMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L3NpbmdsZUxpbmVcIjtcclxuaW1wb3J0IEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZlwiO1xyXG5pbXBvcnQgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvc3RhcnRPZlwiO1xyXG5pbXBvcnQgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL21pZGRsZU9mXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo7fCx8XFxcXC58XFxcXHt8XFxcXH18XFxcXCh8XFxcXCl8PSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydHxleHBvcnR8ZGVmYXVsdHxmdW5jdGlvbnxjb25zdHxuZXcpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiBzdXBlci50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhKYXZhU2NyaXB0TGV4ZXIpOyB9XHJcbn1cclxuIl19