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
  "delimiter": "^(?:`|\\$\\{|<\\/|\\/>)"
}, {
  "special": "^(?:;|:|,|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\:)"
}, {
  "operator": "^(?:&=|>>>=|>>=|<<=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\-=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|\\^|\\|\\||\\||\\+\\+|\\-\\-|\\*\\*|\\+|\\-|\\*|\\/)"
}, {
  "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)\\b"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkphdmFTY3JpcHRMZXhlciIsImNvbnRlbnQiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiaW5Db21tZW50Iiwic2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRSxlQUFhO0FBRGYsQ0FEYyxFQUlkO0FBQ0UsYUFBVztBQURiLENBSmMsRUFPZDtBQUNFLGNBQVk7QUFEZCxDQVBjLEVBVWQ7QUFDRSxhQUFXO0FBRGIsQ0FWYyxFQWFkO0FBQ0UsZ0JBQWM7QUFEaEIsQ0FiYyxFQWdCZDtBQUNFLGdCQUFjO0FBRGhCLENBaEJjLENBQWhCOztJQXFCcUJDLGU7Ozs7Ozs7Ozs7Ozs7dUNBQ0FDLE8sRUFBUztBQUFFLHFHQUFnQ0EsT0FBaEMsRUFBeUNDLHlDQUF6QztBQUF5RTs7O3VDQUVwRkQsTyxFQUFTRSxTLEVBQVc7QUFBRSxhQUFPLElBQVA7QUFBYzs7OzJDQUVoQ0YsTyxFQUFTRSxTLEVBQVc7QUFDekMsVUFBTUMsc0JBQXNCLEdBQUdELFNBQVMsR0FDUCxJQURPLEdBRUxFLHVCQUF1QkMsS0FBdkIsQ0FBNkJMLE9BQTdCLENBRm5DO0FBSUEsYUFBT0csc0JBQVA7QUFDRDs7O21EQUU4QkgsTyxFQUFTRSxTLEVBQVc7QUFDakQsVUFBTUksb0JBQW9CLEdBQUdKLFNBQVMsR0FDUEssa0JBQTJCRixLQUEzQixDQUFpQ0wsT0FBakMsS0FBNkNRLHFCQUE4QkgsS0FBOUIsQ0FBb0NMLE9BQXBDLENBRHRDLEdBRU4sSUFGaEM7QUFJQSxhQUFPTSxvQkFBUDtBQUNEOzs7c0RBRWlDTixPLEVBQVNFLFMsRUFBVztBQUNwRCxVQUFNSSxvQkFBb0IsR0FBR0osU0FBUyxHQUNQLElBRE8sR0FFTE8sb0JBQTZCSixLQUE3QixDQUFtQ0wsT0FBbkMsQ0FGakM7QUFJQSxhQUFPTSxvQkFBUDtBQUNEOzs7MkNBRXNCTixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUk3QkYsTyxFQUFTO0FBQUUsYUFBT1kseUJBQVlDLFdBQVosQ0FBd0JaLGVBQXhCLEVBQXlDRCxPQUF6QyxDQUFQO0FBQTJEOzs7a0NBRXBFO0FBQUUsYUFBT1kseUJBQVlFLFdBQVosQ0FBd0JiLGVBQXhCLENBQVA7QUFBa0Q7Ozs7RUFuQzlCVyx3Qjs7OztnQkFBeEJYLGUsYUErQkZELE8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbW1vbkxleGVyLCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IFNpbmdsZUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc2luZ2xlTGluZVwiO1xyXG5pbXBvcnQgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL2VuZE9mXCI7XHJcbmltcG9ydCBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mXCI7XHJcbmltcG9ydCBNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvbWlkZGxlT2ZcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86YHxcXFxcJFxcXFx7fDxcXFxcL3xcXFxcLz4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo7fDp8LHw9PnxcXFxcP3xcXFxce3xcXFxcfXxcXFxcW3xcXFxcXXxcXFxcKHxcXFxcKXxcXFxcOilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzomPXw+Pj49fD4+PXw8PD18XFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFwqXFxcXCo9fFxcXFwqPXxcXFxcKz18XFxcXC09fFxcXFwvPXxcXFxcXj18XFxcXHw9PT18PT18PXwhPT18JT18Pj18PD18Pj4+fD4+fDw8fD58PHw9fCV8JiZ8Jnx+fCF8XFxcXF58XFxcXHxcXFxcfHxcXFxcfHxcXFxcK1xcXFwrfFxcXFwtXFxcXC18XFxcXCpcXFxcKnxcXFxcK3xcXFxcLXxcXFxcKnxcXFxcLylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydHxleHBvcnR8ZGVmYXVsdHx2YXJ8bGV0fGNvbnN0fGZ1bmN0aW9ufGNsYXNzfGV4dGVuZHN8Y29uc3RydWN0b3J8c3RhdGljfGJyZWFrfHJldHVybnxjb250aW51ZXxpZnxlbHNlfHN3aXRjaHxjYXNlfHRocm93fHRyeXxjYXRjaHxmaW5hbGx5fGluc3RhbmNlb2Z8dHlwZW9mfGFzeW5jfGF3YWl0fGRvfHdoaWxlfGZvcnxpbnxvZnxhc3xuZXd8dGhpc3xzdXBlcnxkZWxldGV8dW5kZWZpbmVkfG51bGx8dHJ1ZXxmYWxzZXx2b2lkfG1ldGF8ZGVidWdnZXIpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpBLVpdK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0TGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBzaW5nbGVMaW5lQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGVMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVMaW5lQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkge1xyXG4gICAgY29uc3QgbXVsdGlMaW5Db21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIHx8IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gbXVsdGlMaW5Db21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLm1hdGNoKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRMZXhlcik7IH1cclxufVxyXG4iXX0=