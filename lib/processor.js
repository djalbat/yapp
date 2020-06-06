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

var terminalNodeQuery = _occamDom.Query.fromExpression("//@*");

var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*");

var Processor = /*#__PURE__*/function () {
  function Processor() {
    _classCallCheck(this, Processor);
  }

  _createClass(Processor, [{
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"].fromContent(content);
        }, tokens, node);
      }
    }
  }, {
    key: "replaceNonTerminalNodesSignificantTokens",
    value: function replaceNonTerminalNodesSignificantTokens(nonTerminalNodeQuery, callback, tokens, node) {
      var _this = this;

      var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
      nonTerminalNodes.forEach(function (nonTerminalNode) {
        return _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, callback, tokens);
      });
    }
  }, {
    key: "replaceNonTerminalNodeSignificantTokens",
    value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, callback, tokens) {
      var _this2 = this;

      var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
      terminalNodes.forEach(function (terminalNode) {
        return _this2.replaceTerminalNodeSignificantToken(terminalNode, callback, tokens);
      });
    }
  }, {
    key: "replaceTerminalNodesSignificantToken",
    value: function replaceTerminalNodesSignificantToken(terminalNodeQuery, callback, tokens, node) {
      var _this3 = this;

      var contents = [],
          terminalNodes = terminalNodeQuery.execute(node);
      terminalNodes.forEach(function (terminalNode) {
        var content = _this3.replaceTerminalNodeSignificantToken(terminalNode, callback, tokens);

        if (content !== null) {
          contents.push(content);
        }
      });
      return contents;
    }
  }, {
    key: "replaceTerminalNodeSignificantToken",
    value: function replaceTerminalNodeSignificantToken(terminalNode, callback, tokens) {
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
          index = tokens.indexOf(significantToken);
      significantToken = callback(content); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwiZnJvbUNvbnRlbnQiLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsImNhbGxiYWNrIiwibm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJmb3JFYWNoIiwibm9uVGVybWluYWxOb2RlIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwiY29udGVudHMiLCJwdXNoIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixNQUFyQixDQUExQjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7O0lBRU1FLFM7Ozs7Ozs7NEJBQ0lDLE0sRUFBUUMsSSxFQUFNO0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtDLG9DQUFMLENBQTBDSixzQkFBMUMsRUFBa0UsVUFBQ0ssT0FBRDtBQUFBLGlCQUFhQyxrQkFBV0MsV0FBWCxDQUF1QkYsT0FBdkIsQ0FBYjtBQUFBLFNBQWxFLEVBQWdISCxNQUFoSCxFQUF3SEMsSUFBeEg7QUFDRDtBQUNGOzs7NkRBRXdDSyxvQixFQUFzQkMsUSxFQUFVUCxNLEVBQVFDLEksRUFBTTtBQUFBOztBQUNyRixVQUFNTyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLENBQUNHLE9BQXJCLENBQTZCUixJQUE3QixDQUF6QjtBQUVBTyxNQUFBQSxnQkFBZ0IsQ0FBQ0UsT0FBakIsQ0FBeUIsVUFBQ0MsZUFBRDtBQUFBLGVBQXFCLEtBQUksQ0FBQ0MsdUNBQUwsQ0FBNkNELGVBQTdDLEVBQThESixRQUE5RCxFQUF3RVAsTUFBeEUsQ0FBckI7QUFBQSxPQUF6QjtBQUNEOzs7NERBRXVDVyxlLEVBQWlCSixRLEVBQVVQLE0sRUFBUTtBQUFBOztBQUN6RSxVQUFNYSxhQUFhLEdBQUdsQixpQkFBaUIsQ0FBQ2MsT0FBbEIsQ0FBMEJFLGVBQTFCLENBQXRCO0FBRUFFLE1BQUFBLGFBQWEsQ0FBQ0gsT0FBZCxDQUFzQixVQUFDSSxZQUFEO0FBQUEsZUFBa0IsTUFBSSxDQUFDQyxtQ0FBTCxDQUF5Q0QsWUFBekMsRUFBdURQLFFBQXZELEVBQWlFUCxNQUFqRSxDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt5REFFb0NMLGlCLEVBQW1CWSxRLEVBQVVQLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQzlFLFVBQU1lLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01ILGFBQWEsR0FBR2xCLGlCQUFpQixDQUFDYyxPQUFsQixDQUEwQlIsSUFBMUIsQ0FEdEI7QUFHQVksTUFBQUEsYUFBYSxDQUFDSCxPQUFkLENBQXNCLFVBQUNJLFlBQUQsRUFBa0I7QUFDdEMsWUFBTVgsT0FBTyxHQUFHLE1BQUksQ0FBQ1ksbUNBQUwsQ0FBeUNELFlBQXpDLEVBQXVEUCxRQUF2RCxFQUFpRVAsTUFBakUsQ0FBaEI7O0FBRUEsWUFBSUcsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCYSxVQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY2QsT0FBZDtBQUNEO0FBQ0YsT0FORDtBQVFBLGFBQU9hLFFBQVA7QUFDRDs7O3dEQUVtQ0YsWSxFQUFjUCxRLEVBQVVQLE0sRUFBUTtBQUNsRSxVQUFJa0IsZ0JBQUo7QUFFQUEsTUFBQUEsZ0JBQWdCLEdBQUdKLFlBQVksQ0FBQ0ssbUJBQWIsRUFBbkI7O0FBRUEsVUFBSUQsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUUsY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ0csZ0JBQWpCLEVBQXZCOztBQUVBLFVBQUlELGNBQUosRUFBb0I7QUFDbEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTWpCLE9BQU8sR0FBR2UsZ0JBQWdCLENBQUNJLFVBQWpCLEVBQWhCO0FBQUEsVUFDTUMsS0FBSyxHQUFHdkIsTUFBTSxDQUFDd0IsT0FBUCxDQUFlTixnQkFBZixDQURkO0FBR0FBLE1BQUFBLGdCQUFnQixHQUFHWCxRQUFRLENBQUNKLE9BQUQsQ0FBM0IsQ0FsQmtFLENBa0I1Qjs7QUFFdEMsVUFBTXNCLEtBQUssR0FBR0YsS0FBZDtBQUFBLFVBQXNCO0FBQ2hCRyxNQUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFHQTFCLE1BQUFBLE1BQU0sQ0FBQzJCLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQkMsV0FBckIsRUFBa0NSLGdCQUFsQztBQUVBSixNQUFBQSxZQUFZLENBQUNjLG1CQUFiLENBQWlDVixnQkFBakM7QUFFQSxhQUFPZixPQUFQO0FBQ0Q7OztnQ0FFa0IwQixLLEVBQVE7QUFBRSxhQUFPLElBQUlBLEtBQUosRUFBUDtBQUFxQjs7Ozs7O2VBR3JDOUIsUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vQCpcIik7XG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpO1xuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5LCAoY29udGVudCkgPT4gRXJyb3JUb2tlbi5mcm9tQ29udGVudChjb250ZW50KSwgdG9rZW5zLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZVF1ZXJ5LCBjYWxsYmFjaywgdG9rZW5zLCBub2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaywgdG9rZW5zKSk7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCBjYWxsYmFjaywgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgY2FsbGJhY2ssIHRva2VucykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZVF1ZXJ5LCBjYWxsYmFjaywgdG9rZW5zLCBub2RlKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIGNhbGxiYWNrLCB0b2tlbnMpO1xuXG4gICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBjYWxsYmFjaywgdG9rZW5zKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgaW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcyApIHsgcmV0dXJuIG5ldyBDbGFzcygpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjtcbiJdfQ==