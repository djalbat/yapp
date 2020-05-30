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
  "special": "^(?:;|:|,|`|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\:|<\\/|\\/>)"
}, {
  "operator": "^(?:&=|>>>=|>>=|<<=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\-=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|\\^|\\|\\||\\||\\+\\+|\\-\\-|\\*\\*|\\+|\\-|\\*|\\/)"
}, {
  "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkphdmFTY3JpcHRMZXhlciIsImNvbnRlbnQiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiaW5Db21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRSxhQUFXO0FBRGIsQ0FEYyxFQUlkO0FBQ0UsY0FBWTtBQURkLENBSmMsRUFPZDtBQUNFLGFBQVc7QUFEYixDQVBjLEVBVWQ7QUFDRSxnQkFBYztBQURoQixDQVZjLEVBYWQ7QUFDRSxnQkFBYztBQURoQixDQWJjLENBQWhCOztJQWtCcUJDLGU7Ozs7Ozs7Ozs7Ozs7dUNBQ0FDLE8sRUFBUztBQUFFLHFHQUFnQ0EsT0FBaEMsRUFBeUNDLHlDQUF6QztBQUF5RTs7O3VDQUVwRkQsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUVoQ0YsTyxFQUFTRSxTLEVBQVc7QUFDekMsVUFBTUMsc0JBQXNCLEdBQUdELFNBQVMsR0FDUCxJQURPLEdBRUxFLHVCQUF1QkMsS0FBdkIsQ0FBNkJMLE9BQTdCLENBRm5DO0FBSUEsYUFBT0csc0JBQVA7QUFDRDs7O21EQUU4QkgsTyxFQUFTRSxTLEVBQVc7QUFDakQsVUFBTUksb0JBQW9CLEdBQUdKLFNBQVMsR0FDUEssa0JBQTJCRixLQUEzQixDQUFpQ0wsT0FBakMsS0FBNkNRLHFCQUE4QkgsS0FBOUIsQ0FBb0NMLE9BQXBDLENBRHRDLEdBRU4sSUFGaEM7QUFJQSxhQUFPTSxvQkFBUDtBQUNEOzs7c0RBRWlDTixPLEVBQVNFLFMsRUFBVztBQUNwRCxVQUFNSSxvQkFBb0IsR0FBR0osU0FBUyxHQUNQLElBRE8sR0FFTE8sb0JBQTZCSixLQUE3QixDQUFtQ0wsT0FBbkMsQ0FGakM7QUFJQSxhQUFPTSxvQkFBUDtBQUNEOzs7MkNBRXNCTixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUk3QkYsTyxFQUFTO0FBQUUsYUFBT1kseUJBQVlDLFdBQVosQ0FBd0JaLGVBQXhCLEVBQXlDRCxPQUF6QyxDQUFQO0FBQTJEOzs7a0NBRXBFO0FBQUUsYUFBT1kseUJBQVlFLFdBQVosQ0FBd0JiLGVBQXhCLENBQVA7QUFBa0Q7Ozs7RUFuQzlCVyx3Qjs7OztnQkFBeEJYLGUsYUErQkZELE8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mXCI7XHJcbmltcG9ydCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mXCI7XHJcbmltcG9ydCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Ojt8OnwsfGB8PT58XFxcXD98XFxcXHt8XFxcXH18XFxcXFt8XFxcXF18XFxcXCh8XFxcXCl8XFxcXDp8PFxcXFwvfFxcXFwvPilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzomPXw+Pj49fD4+PXw8PD18XFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFwqXFxcXCo9fFxcXFwqPXxcXFxcKz18XFxcXC09fFxcXFwvPXxcXFxcXj18XFxcXHw9PT18PT18PXwhPT18JT18Pj18PD18Pj4+fD4+fDw8fD58PHw9fCV8JiZ8Jnx+fCF8XFxcXF58XFxcXHxcXFxcfHxcXFxcfHxcXFxcK1xcXFwrfFxcXFwtXFxcXC18XFxcXCpcXFxcKnxcXFxcK3xcXFxcLXxcXFxcKnxcXFxcLylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydHxleHBvcnR8ZGVmYXVsdHx2YXJ8bGV0fGNvbnN0fGZ1bmN0aW9ufGNsYXNzfGV4dGVuZHN8Y29uc3RydWN0b3J8c3RhdGljfGJyZWFrfHJldHVybnxjb250aW51ZXxpZnxlbHNlfHN3aXRjaHxjYXNlfHRocm93fHRyeXxjYXRjaHxmaW5hbGx5fGluc3RhbmNlb2Z8dHlwZW9mfGFzeW5jfGF3YWl0fGRvfHdoaWxlfGZvcnxpbnxvZnxhc3xuZXd8dGhpc3xzdXBlcnxkZWxldGV8dW5kZWZpbmVkfG51bGx8dHJ1ZXxmYWxzZXx2b2lkfG1ldGF8ZGVidWdnZXIpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiBzdXBlci50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3Qgc2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlTGluZUNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSB8fCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbi5tYXRjaChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhKYXZhU2NyaXB0TGV4ZXIpOyB9XHJcbn1cclxuIl19