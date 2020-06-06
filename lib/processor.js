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
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, _error["default"], tokens, node);
      }
    }
  }, {
    key: "replaceNonTerminalNodesSignificantTokens",
    value: function replaceNonTerminalNodesSignificantTokens(nonTerminalNodeQuery, SignificantToken, tokens, node) {
      var _this = this;

      var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
      nonTerminalNodes.forEach(function (nonTerminalNode) {
        return _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, SignificantToken, tokens);
      });
    }
  }, {
    key: "replaceNonTerminalNodeSignificantTokens",
    value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, SignificantToken, tokens) {
      var _this2 = this;

      var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
      terminalNodes.forEach(function (terminalNode) {
        return _this2.replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens);
      });
    }
  }, {
    key: "replaceTerminalNodesSignificantToken",
    value: function replaceTerminalNodesSignificantToken(terminalNodeQuery, SignificantToken, tokens, node) {
      var _this3 = this;

      var terminalNodes = terminalNodeQuery.execute(node);
      terminalNodes.forEach(function (terminalNode) {
        return _this3.replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens);
      });
    }
  }, {
    key: "replaceTerminalNodeSignificantToken",
    value: function replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens) {
      var significantToken;
      significantToken = terminalNode.getSignificantToken();

      if (significantToken === null) {
        return;
      }

      var endOfLineToken = significantToken.isEndOfLineToken();

      if (endOfLineToken) {
        return;
      }

      var content = significantToken.getContent(),
          index = tokens.indexOf(significantToken);
      significantToken = SignificantToken.fromContent(content); ///

      var start = index,
          ///
      deleteCount = 1;
      tokens.splice(start, deleteCount, significantToken);
      terminalNode.setSignificantToken(significantToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsIkVycm9yVG9rZW4iLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIlNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGVzIiwidGVybWluYWxOb2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLE1BQXJCLENBQTFCOztBQUNBLElBQU1DLHNCQUFzQixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUEvQjs7SUFFTUUsUzs7Ozs7Ozs0QkFDSUMsTSxFQUFRQyxJLEVBQU07QUFDcEIsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsYUFBS0Msb0NBQUwsQ0FBMENKLHNCQUExQyxFQUFrRUssaUJBQWxFLEVBQThFSCxNQUE5RSxFQUFzRkMsSUFBdEY7QUFDRDtBQUNGOzs7NkRBRXdDRyxvQixFQUFzQkMsZ0IsRUFBa0JMLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQzdGLFVBQU1LLGdCQUFnQixHQUFHRixvQkFBb0IsQ0FBQ0csT0FBckIsQ0FBNkJOLElBQTdCLENBQXpCO0FBRUFLLE1BQUFBLGdCQUFnQixDQUFDRSxPQUFqQixDQUF5QixVQUFDQyxlQUFEO0FBQUEsZUFBcUIsS0FBSSxDQUFDQyx1Q0FBTCxDQUE2Q0QsZUFBN0MsRUFBOERKLGdCQUE5RCxFQUFnRkwsTUFBaEYsQ0FBckI7QUFBQSxPQUF6QjtBQUNEOzs7NERBRXVDUyxlLEVBQWlCSixnQixFQUFrQkwsTSxFQUFRO0FBQUE7O0FBQ2pGLFVBQU1XLGFBQWEsR0FBR2hCLGlCQUFpQixDQUFDWSxPQUFsQixDQUEwQkUsZUFBMUIsQ0FBdEI7QUFFQUUsTUFBQUEsYUFBYSxDQUFDSCxPQUFkLENBQXNCLFVBQUNJLFlBQUQ7QUFBQSxlQUFrQixNQUFJLENBQUNDLG1DQUFMLENBQXlDRCxZQUF6QyxFQUF1RFAsZ0JBQXZELEVBQXlFTCxNQUF6RSxDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt5REFFb0NMLGlCLEVBQW1CVSxnQixFQUFrQkwsTSxFQUFRQyxJLEVBQU07QUFBQTs7QUFDdEYsVUFBTVUsYUFBYSxHQUFHaEIsaUJBQWlCLENBQUNZLE9BQWxCLENBQTBCTixJQUExQixDQUF0QjtBQUVBVSxNQUFBQSxhQUFhLENBQUNILE9BQWQsQ0FBc0IsVUFBQ0ksWUFBRDtBQUFBLGVBQWtCLE1BQUksQ0FBQ0MsbUNBQUwsQ0FBeUNELFlBQXpDLEVBQXVEUCxnQkFBdkQsRUFBeUVMLE1BQXpFLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O3dEQUVtQ1ksWSxFQUFjUCxnQixFQUFrQkwsTSxFQUFRO0FBQzFFLFVBQUljLGdCQUFKO0FBRUFBLE1BQUFBLGdCQUFnQixHQUFHRixZQUFZLENBQUNHLG1CQUFiLEVBQW5COztBQUVBLFVBQUlELGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsVUFBTUUsY0FBYyxHQUFHRixnQkFBZ0IsQ0FBQ0csZ0JBQWpCLEVBQXZCOztBQUVBLFVBQUlELGNBQUosRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxVQUFNRSxPQUFPLEdBQUdKLGdCQUFnQixDQUFDSyxVQUFqQixFQUFoQjtBQUFBLFVBQ01DLEtBQUssR0FBR3BCLE1BQU0sQ0FBQ3FCLE9BQVAsQ0FBZVAsZ0JBQWYsQ0FEZDtBQUdBQSxNQUFBQSxnQkFBZ0IsR0FBR1QsZ0JBQWdCLENBQUNpQixXQUFqQixDQUE2QkosT0FBN0IsQ0FBbkIsQ0FsQjBFLENBa0JoQjs7QUFFMUQsVUFBTUssS0FBSyxHQUFHSCxLQUFkO0FBQUEsVUFBc0I7QUFDaEJJLE1BQUFBLFdBQVcsR0FBRyxDQURwQjtBQUdBeEIsTUFBQUEsTUFBTSxDQUFDeUIsTUFBUCxDQUFjRixLQUFkLEVBQXFCQyxXQUFyQixFQUFrQ1YsZ0JBQWxDO0FBRUFGLE1BQUFBLFlBQVksQ0FBQ2MsbUJBQWIsQ0FBaUNaLGdCQUFqQztBQUNEOzs7Z0NBRWtCYSxLLEVBQVE7QUFBRSxhQUFPLElBQUlBLEtBQUosRUFBUDtBQUFxQjs7Ozs7O2VBR3JDNUIsUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vQCpcIik7XG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpO1xuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbihlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5LCBFcnJvclRva2VuLCB0b2tlbnMsIG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlUXVlcnksIFNpZ25pZmljYW50VG9rZW4sIHRva2Vucywgbm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKSk7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlLCBTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGVRdWVyeSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zLCBub2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIFNpZ25pZmljYW50VG9rZW4sIHRva2VucykpO1xuICB9XG5cbiAgcmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgaWYgKGVuZE9mTGluZVRva2VuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTsgLy8vXG5cbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MgKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXX0=