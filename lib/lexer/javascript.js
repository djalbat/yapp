"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

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
  "special": "^;"
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
      return null;
    }
  }, {
    key: "matchMultiLineCommentInComment",
    value: function matchMultiLineCommentInComment(content, inComment) {
      return null;
    }
  }, {
    key: "matchMultiLineCommentNotInComment",
    value: function matchMultiLineCommentNotInComment(content, inComment) {
      return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphdmFzY3JpcHQuanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkphdmFTY3JpcHRMZXhlciIsImNvbnRlbnQiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiaW5Db21tZW50IiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FFZDtBQUFFLGFBQVc7QUFBYixDQUZjLEVBSWQ7QUFBRSxnQkFBYztBQUFoQixDQUpjLENBQWhCOztJQVFxQkMsZTs7Ozs7Ozs7Ozs7Ozt1Q0FDQUMsTyxFQUFTO0FBQUUscUdBQWdDQSxPQUFoQyxFQUF5Q0MseUNBQXpDO0FBQXlFOzs7dUNBRXBGRCxPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRWhDRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7bURBRTVCRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7c0RBRWpDRixPLEVBQVNFLFMsRUFBVztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7MkNBRS9DRixPLEVBQVM7QUFBRSxhQUFPLElBQVA7QUFBYzs7O2dDQUk3QkYsTyxFQUFTO0FBQUUsYUFBT0sseUJBQVlDLFdBQVosQ0FBd0JMLGVBQXhCLEVBQXlDRCxPQUF6QyxDQUFQO0FBQTJEOzs7a0NBRXBFO0FBQUUsYUFBT0sseUJBQVlFLFdBQVosQ0FBd0JOLGVBQXhCLENBQVA7QUFBa0Q7Ozs7RUFqQjlCSSx3Qjs7OztnQkFBeEJKLGUsYUFhRkQsTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG5cclxuICB7IFwic3BlY2lhbFwiOiBcIl47XCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCIgfVxyXG5cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gc3VwZXIudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoUmVndWxhckV4cHJlc3Npb24oY29udGVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRMZXhlcik7IH1cclxufVxyXG4iXX0=