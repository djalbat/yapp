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
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content, type) {
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

      var type = significantToken.getType(),
          content = significantToken.getContent(),
          index = tokens.indexOf(significantToken),
          Token = callback(content, type); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0eXBlIiwiRXJyb3JUb2tlbiIsImNhbGxiYWNrIiwibm9uVGVybWluYWxOb2RlUXVlcmllcyIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zIiwiY29udGVudHMiLCJ0ZXJtaW5hbE5vZGVRdWVyaWVzIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJpbmRleCIsImluZGV4T2YiLCJUb2tlbiIsImZyb21Db250ZW50Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixNQUFyQixDQUExQjtBQUFBLElBQ01DLHNCQUFzQixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUQvQjs7SUFHTUUsUzs7Ozs7Ozs0QkFDSUMsTSxFQUFRQyxJLEVBQU07QUFDcEIsVUFBSUEsSUFBSSxLQUFLLElBQWIs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bEIsQ0FBbkI7QUFFQSxVQUFNMkIsS0FBSyxHQUFHSixLQUFkO0FBQUEsVUFBc0I7QUFDaEJLLE1BQUFBLFdBQVcsR0FBRyxDQURwQjtBQUdBL0IsTUFBQUEsTUFBTSxDQUFDZ0MsTUFBUCxDQUFjRixLQUFkLEVBQXFCQyxXQUFyQixFQUFrQ1gsZ0JBQWxDO0FBRUFILE1BQUFBLFlBQVksQ0FBQ2dCLG1CQUFiLENBQWlDYixnQkFBakM7QUFFQSxhQUFPakIsT0FBUDtBQUNEOzs7Z0NBRWtCK0IsSyxFQUFPO0FBQUUsYUFBTyxJQUFJQSxLQUFKLEVBQVA7QUFBcUI7Ozs7OztlQUdwQ25DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCwgdHlwZSkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyh0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi5ub25UZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgbm9uVGVybWluYWxOb2RlUXVlcmllcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGVRdWVyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIGNhbGxiYWNrLCAuLi50ZXJtaW5hbE5vZGVRdWVyaWVzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcblxuICAgIHRlcm1pbmFsTm9kZVF1ZXJpZXMuZm9yRWFjaCgodGVybWluYWxOb2RlUXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIHRva2VucywgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBjYWxsYmFjaykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCB0b2tlbnMsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50LCB0eXBlKTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXX0=