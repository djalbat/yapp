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
    key: "replaceNonTerminalNodesTokens",
    value: function replaceNonTerminalNodesTokens(nonTerminalNodeQuery, SignificantToken, tokens, node) {
      var _this = this;

      var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
      nonTerminalNodes.forEach(function (nonTerminalNode) {
        return _this.replaceNonTerminalNodeTokens(nonTerminalNode, SignificantToken, tokens);
      });
    }
  }, {
    key: "replaceNonTerminalNodeTokens",
    value: function replaceNonTerminalNodeTokens(nonTerminalNode, SignificantToken, tokens) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsIkVycm9yVG9rZW4iLCJub25UZXJtaW5hbE5vZGVRdWVyeSIsIlNpZ25pZmljYW50VG9rZW4iLCJub25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsImZvckVhY2giLCJub25UZXJtaW5hbE5vZGUiLCJyZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJlbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsImZyb21Db250ZW50Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixNQUFyQixDQUExQjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsWUFBckIsQ0FBL0I7O0lBRU1FLFM7Ozs7Ozs7NEJBQ0lDLE0sRUFBUUMsSSxFQUFNO0FBQ3BCLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtDLG9DQUFMLENBQTBDSixzQkFBMUMsRUFBa0VLLGlCQUFsRSxFQUE4RUgsTUFBOUUsRUFBc0ZDLElBQXRGO0FBQ0Q7QUFDRjs7O2tEQUU2Qkcsb0IsRUFBc0JDLGdCLEVBQWtCTCxNLEVBQVFDLEksRUFBTTtBQUFBOztBQUNsRixVQUFNSyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLENBQUNHLE9BQXJCLENBQTZCTixJQUE3QixDQUF6QjtBQUVBSyxNQUFBQSxnQkFBZ0IsQ0FBQ0UsT0FBakIsQ0FBeUIsVUFBQ0MsZUFBRDtBQUFBLGVBQXFCLEtBQUksQ0FBQ0MsNEJBQUwsQ0FBa0NELGVBQWxDLEVBQW1ESixnQkFBbkQsRUFBcUVMLE1BQXJFLENBQXJCO0FBQUEsT0FBekI7QUFDRDs7O2lEQUU0QlMsZSxFQUFpQkosZ0IsRUFBa0JMLE0sRUFBUTtBQUFBOztBQUN0RSxVQUFNVyxhQUFhLEdBQUdoQixpQkFBaUIsQ0FBQ1ksT0FBbEIsQ0FBMEJFLGVBQTFCLENBQXRCO0FBRUFFLE1BQUFBLGFBQWEsQ0FBQ0gsT0FBZCxDQUFzQixVQUFDSSxZQUFEO0FBQUEsZUFBa0IsTUFBSSxDQUFDQyxtQ0FBTCxDQUF5Q0QsWUFBekMsRUFBdURQLGdCQUF2RCxFQUF5RUwsTUFBekUsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7eURBRW9DTCxpQixFQUFtQlUsZ0IsRUFBa0JMLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQ3RGLFVBQU1VLGFBQWEsR0FBR2hCLGlCQUFpQixDQUFDWSxPQUFsQixDQUEwQk4sSUFBMUIsQ0FBdEI7QUFFQVUsTUFBQUEsYUFBYSxDQUFDSCxPQUFkLENBQXNCLFVBQUNJLFlBQUQ7QUFBQSxlQUFrQixNQUFJLENBQUNDLG1DQUFMLENBQXlDRCxZQUF6QyxFQUF1RFAsZ0JBQXZELEVBQXlFTCxNQUF6RSxDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7Ozt3REFFbUNZLFksRUFBY1AsZ0IsRUFBa0JMLE0sRUFBUTtBQUMxRSxVQUFJYyxnQkFBSjtBQUVBQSxNQUFBQSxnQkFBZ0IsR0FBR0YsWUFBWSxDQUFDRyxtQkFBYixFQUFuQjs7QUFFQSxVQUFJRCxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QjtBQUNEOztBQUVELFVBQU1FLGNBQWMsR0FBR0YsZ0JBQWdCLENBQUNHLGdCQUFqQixFQUF2Qjs7QUFFQSxVQUFJRCxjQUFKLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsVUFBTUUsT0FBTyxHQUFHSixnQkFBZ0IsQ0FBQ0ssVUFBakIsRUFBaEI7QUFBQSxVQUNNQyxLQUFLLEdBQUdwQixNQUFNLENBQUNxQixPQUFQLENBQWVQLGdCQUFmLENBRGQ7QUFHQUEsTUFBQUEsZ0JBQWdCLEdBQUdULGdCQUFnQixDQUFDaUIsV0FBakIsQ0FBNkJKLE9BQTdCLENBQW5CLENBbEIwRSxDQWtCaEI7O0FBRTFELFVBQU1LLEtBQUssR0FBR0gsS0FBZDtBQUFBLFVBQXNCO0FBQ2hCSSxNQUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFHQXhCLE1BQUFBLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQkMsV0FBckIsRUFBa0NWLGdCQUFsQztBQUVBRixNQUFBQSxZQUFZLENBQUNjLG1CQUFiLENBQWlDWixnQkFBakM7QUFDRDs7O2dDQUVrQmEsSyxFQUFRO0FBQUUsYUFBTyxJQUFJQSxLQUFKLEVBQVA7QUFBcUI7Ozs7OztlQUdyQzVCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpO1xuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4oZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSwgRXJyb3JUb2tlbiwgdG9rZW5zLCBub2RlKTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2Rlc1Rva2Vucyhub25UZXJtaW5hbE5vZGVRdWVyeSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zLCBub2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlcyA9IG5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBub25UZXJtaW5hbE5vZGVzLmZvckVhY2goKG5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKSk7XG4gIH1cblxuICByZXBsYWNlTm9uVGVybWluYWxOb2RlVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9uVGVybWluYWxOb2RlKTtcblxuICAgIHRlcm1pbmFsTm9kZXMuZm9yRWFjaCgodGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlUXVlcnksIFNpZ25pZmljYW50VG9rZW4sIHRva2Vucywgbm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgU2lnbmlmaWNhbnRUb2tlbiwgdG9rZW5zKSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW47XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7IC8vL1xuXG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHRlcm1pbmFsTm9kZS5zZXRTaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzICkgeyByZXR1cm4gbmV3IENsYXNzKCk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc29yO1xuIl19