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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var entries = [{
  "special": "^(?:,|\\:|\\{|\\}|\\[|\\])"
}, {
  "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
}, {
  "keyword": "^(?:null|true|false)"
}, {
  "unassigned": "^[^\\s]+"
}];

var JSONLexer = /*#__PURE__*/function (_CommonLexer) {
  _inherits(JSONLexer, _CommonLexer);

  var _super = _createSuper(JSONLexer);

  function JSONLexer() {
    _classCallCheck(this, JSONLexer);

    return _super.apply(this, arguments);
  }

  _createClass(JSONLexer, [{
    key: "tokeniseEndOfLines",
    value: function tokeniseEndOfLines(content) {
      return _get(_getPrototypeOf(JSONLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
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
      return _occamLexers.CommonLexer.fromEntries(JSONLexer, entries);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      return _occamLexers.CommonLexer.fromNothing(JSONLexer);
    }
  }]);

  return JSONLexer;
}(_occamLexers.CommonLexer);

exports["default"] = JSONLexer;

_defineProperty(JSONLexer, "entries", entries);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzb24uanMiXSwibmFtZXMiOlsiZW50cmllcyIsIkpTT05MZXhlciIsImNvbnRlbnQiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiaW5Db21tZW50IiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUNFLGFBQVc7QUFEYixDQURjLEVBSWQ7QUFDRSxZQUFVO0FBRFosQ0FKYyxFQU9kO0FBQ0UsYUFBVztBQURiLENBUGMsRUFVZDtBQUNFLGdCQUFjO0FBRGhCLENBVmMsQ0FBaEI7O0lBZXFCQyxTOzs7Ozs7Ozs7Ozs7O3VDQUNBQyxPLEVBQVM7QUFBRSwrRkFBZ0NBLE9BQWhDLEVBQXlDQyx5Q0FBekM7QUFBeUU7Ozt1Q0FFcEZELE8sRUFBU0UsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFaENGLE8sRUFBU0UsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzttREFFNUJGLE8sRUFBU0UsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OztzREFFakNGLE8sRUFBU0UsUyxFQUFXO0FBQUUsYUFBTyxJQUFQO0FBQWM7OzsyQ0FFL0NGLE8sRUFBUztBQUFFLGFBQU8sSUFBUDtBQUFjOzs7Z0NBSTdCRixPLEVBQVM7QUFBRSxhQUFPSyx5QkFBWUMsV0FBWixDQUF3QkwsU0FBeEIsRUFBbUNELE9BQW5DLENBQVA7QUFBcUQ7OztrQ0FFOUQ7QUFBRSxhQUFPSyx5QkFBWUUsV0FBWixDQUF3Qk4sU0FBeEIsQ0FBUDtBQUE0Qzs7OztFQWpCOUJJLHdCOzs7O2dCQUFsQkosUyxhQWFGRCxPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Oix8XFxcXDp8XFxcXHt8XFxcXH18XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlxcXFwtP1sxLTldWzAtOV0qKFxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/Om51bGx8dHJ1ZXxmYWxzZSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiBzdXBlci50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEpTT05MZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoSlNPTkxleGVyKTsgfVxyXG59XHJcbiJdfQ==