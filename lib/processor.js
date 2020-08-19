"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _error = _interopRequireDefault(require("./token/significant/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var terminalNodeQuery = _occamDom.Query.fromExpression("//@*"),
    errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*");

var Processor = /*#__PURE__*/function () {
  function Processor() {
    _classCallCheck(this, Processor);
  }

  _createClass(Processor, [{
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content) {
          return _error["default"];
        }, errorTerminalNodeQuery);
      }
    }
  }, {
    key: "replaceNonTerminalNodesSignificantTokens",
    value: function replaceNonTerminalNodesSignificantTokens(tokens, node, callback) {
      var _this = this;

      for (var _len = arguments.length, nonTerminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        nonTerminalNodeQueries[_key - 3] = arguments[_key];
      }

      nonTerminalNodeQueries.forEach(function (nonTerminalNodeQuery) {
        var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
        nonTerminalNodes.forEach(function (nonTerminalNode) {
          return _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
        });
      });
    }
  }, {
    key: "replaceTerminalNodesSignificantToken",
    value: function replaceTerminalNodesSignificantToken(tokens, node, callback) {
      var _this2 = this;

      var contents = [];

      for (var _len2 = arguments.length, terminalNodeQueries = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        terminalNodeQueries[_key2 - 3] = arguments[_key2];
      }

      terminalNodeQueries.forEach(function (terminalNodeQuery) {
        var terminalNodes = terminalNodeQuery.execute(node);
        terminalNodes.forEach(function (terminalNode) {
          var content = _this2.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);

          if (content !== null) {
            contents.push(content);
          }
        });
      });
      return contents;
    }
  }, {
    key: "replaceNonTerminalNodeSignificantTokens",
    value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
      var _this3 = this;

      var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
      terminalNodes.forEach(function (terminalNode) {
        return _this3.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
      });
    }
  }, {
    key: "replaceTerminalNodeSignificantToken",
    value: function replaceTerminalNodeSignificantToken(terminalNode, tokens, callback) {
      var significantToken;
      significantToken = terminalNode.getSignificantToken();

      if (significantToken === null) {
        return null;
      }

      var endOfLineToken = significantToken.isEndOfLineToken();

      if (endOfLineToken) {
        return null;
      }

      var content = significantToken.getContent(),
          index = tokens.indexOf(significantToken),
          Token = callback(content); ///

      if (Token === null) {
        return null;
      }

      significantToken = Token.fromContent(content);
      var start = index,
          ///
      deleteCount = 1;
      tokens.splice(start, deleteCount, significantToken);
      terminalNode.setSignificantToken(significantToken);
      return content;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      return new Class();
    }
  }]);

  return Processor;
}();

var _default = Processor;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwiY2FsbGJhY2siLCJub25UZXJtaW5hbE5vZGVRdWVyaWVzIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJjb250ZW50cyIsInRlcm1pbmFsTm9kZVF1ZXJpZXMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiVG9rZW4iLCJmcm9tQ29udGVudCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJzZXRTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsZ0JBQU1DLGNBQU4sQ0FBcUIsTUFBckIsQ0FBMUI7QUFBQSxJQUNNQyxzQkFBc0IsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FEL0I7O0lBR01FLFM7Ozs7Ozs7NEJBQ0lDLE0sRUFBUUMsSSxFQUFNO0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtD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QU0sQ0FBQzhCLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQkMsV0FBckIsRUFBa0NWLGdCQUFsQztBQUVBSCxNQUFBQSxZQUFZLENBQUNlLG1CQUFiLENBQWlDWixnQkFBakM7QUFFQSxhQUFPaEIsT0FBUDtBQUNEOzs7Z0NBRWtCNkIsSyxFQUFPO0FBQUUsYUFBTyxJQUFJQSxLQUFKLEVBQVA7QUFBcUI7Ozs7OztlQUdwQ2pDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyh0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi5ub25UZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgbm9uVGVybWluYWxOb2RlUXVlcmllcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGVRdWVyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBUb2tlbiA9IGNhbGxiYWNrKGNvbnRlbnQpOyAvLy9cblxuICAgIGlmIChUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IFRva2VuLmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHsgcmV0dXJuIG5ldyBDbGFzcygpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjtcbiJdfQ==