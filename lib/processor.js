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
        this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, function (content) {
          return _error["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJjYWxsYmFjayIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VucyIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnRzIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLE1BQXJCLENBQTFCO0FBQUEsSUFDTUMsc0JBQXNCLEdBQUdGLGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBRC9COztJQUdNRSxTOzs7Ozs7OzRCQUNJQyxNLEVBQVFDLEksRUFBTTtBQUNwQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLQyxvQ0FBTCxDQUEwQ0osc0JBQTFDLEVBQWtFLFVBQUNLLE9BQUQ7QUFBQSxpQkFBYUMsaUJBQWI7QUFBQSxTQUFsRSxFQUEyRkosTUFBM0YsRUFBbUdDLElBQW5HO0FBQ0Q7QUFDRjs7OzZEQUV3Q0ksb0IsRUFBc0JDLFEsRUFBVU4sTSxFQUFRQyxJLEVBQU07QUFBQTs7QUFDckYsVUFBTU0sZ0JBQWdCLEdBQUdGLG9CQUFvQixDQUFDRyxPQUFyQixDQUE2QlAsSUFBN0IsQ0FBekI7QUFFQU0sTUFBQUEsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLFVBQUNDLGVBQUQ7QUFBQSxlQUFxQixLQUFJLENBQUNDLHVDQUFMLENBQTZDRCxlQUE3QyxFQUE4REosUUFBOUQsRUFBd0VOLE1BQXhFLENBQXJCO0FBQUEsT0FBekI7QUFDRDs7OzREQUV1Q1UsZSxFQUFpQkosUSxFQUFVTixNLEVBQVE7QUFBQTs7QUFDekUsVUFBTVksYUFBYSxHQUFHakIsaUJBQWlCLENBQUNhLE9BQWxCLENBQTBCRSxlQUExQixDQUF0QjtBQUVBRSxNQUFBQSxhQUFhLENBQUNILE9BQWQsQ0FBc0IsVUFBQ0ksWUFBRDtBQUFBLGVBQWtCLE1BQUksQ0FBQ0MsbUNBQUwsQ0FBeUNELFlBQXpDLEVBQXVEUCxRQUF2RCxFQUFpRU4sTUFBakUsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7eURBRW9DTCxpQixFQUFtQlcsUSxFQUFVTixNLEVBQVFDLEksRUFBTTtBQUFBOztBQUM5RSxVQUFNYyxRQUFRLEdBQUcsRUFBakI7QUFBQSxVQUNNSCxhQUFhLEdBQUdqQixpQkFBaUIsQ0FBQ2EsT0FBbEIsQ0FBMEJQLElBQTFCLENBRHRCO0FBR0FXLE1BQUFBLGFBQWEsQ0FBQ0gsT0FBZCxDQUFzQixVQUFDSSxZQUFELEVBQWtCO0FBQ3RDLFlBQU1WLE9BQU8sR0FBRyxNQUFJLENBQUNXLG1DQUFMLENBQXlDRCxZQUF6QyxFQUF1RFAsUUFBdkQsRUFBaUVOLE1BQWpFLENBQWhCOztBQUVBLFlBQUlHLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQlksVUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNiLE9BQWQ7QUFDRDtBQUNGLE9BTkQ7QUFRQSxhQUFPWSxRQUFQO0FBQ0Q7Ozt3REFFbUNGLFksRUFBY1AsUSxFQUFVTixNLEVBQVE7QUFDbEUsVUFBSWlCLGdCQUFKO0FBRUFBLE1BQUFBLGdCQUFnQixHQUFHSixZQUFZLENBQUNLLG1CQUFiLEVBQW5COztBQUVBLFVBQUlELGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1FLGNBQWMsR0FBR0YsZ0JBQWdCLENBQUNHLGdCQUFqQixFQUF2Qjs7QUFFQSxVQUFJRCxjQUFKLEVBQW9CO0FBQ2xCLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1oQixPQUFPLEdBQUdjLGdCQUFnQixDQUFDSSxVQUFqQixFQUFoQjtBQUFBLFVBQ01DLEtBQUssR0FBR3RCLE1BQU0sQ0FBQ3VCLE9BQVAsQ0FBZU4sZ0JBQWYsQ0FEZDtBQUFBLFVBRU1PLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ0gsT0FBRCxDQUZ0QixDQWZrRSxDQWlCakM7O0FBRWpDLFVBQUlxQixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixlQUFPLElBQVA7QUFDRDs7QUFFRFAsTUFBQUEsZ0JBQWdCLEdBQUdPLEtBQUssQ0FBQ0MsV0FBTixDQUFrQnRCLE9BQWxCLENBQW5CO0FBRUEsVUFBTXVCLEtBQUssR0FBR0osS0FBZDtBQUFBLFVBQXNCO0FBQ2hCSyxNQUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFHQTNCLE1BQUFBLE1BQU0sQ0FBQzRCLE1BQVAsQ0FBY0YsS0FBZCxFQUFxQkMsV0FBckIsRUFBa0NWLGdCQUFsQztBQUVBSixNQUFBQSxZQUFZLENBQUNnQixtQkFBYixDQUFpQ1osZ0JBQWpDO0FBRUEsYUFBT2QsT0FBUDtBQUNEOzs7Z0NBRWtCMkIsSyxFQUFPO0FBQUUsYUFBTyxJQUFJQSxLQUFKLEVBQVA7QUFBcUI7Ozs7OztlQUdwQy9CLFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKTtcblxuY2xhc3MgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4oZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIHRva2Vucywgbm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGVRdWVyeSwgY2FsbGJhY2ssIHRva2Vucywgbm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZXMgPSBub25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgbm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChub25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2ssIHRva2VucykpO1xuICB9XG5cbiAgcmVwbGFjZU5vblRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgY2FsbGJhY2ssIHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIGNhbGxiYWNrLCB0b2tlbnMpKTtcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGVRdWVyeSwgY2FsbGJhY2ssIHRva2Vucywgbm9kZSkge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gW10sXG4gICAgICAgICAgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICB0ZXJtaW5hbE5vZGVzLmZvckVhY2goKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBjYWxsYmFjaywgdG9rZW5zKTtcblxuICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50cztcbiAgfVxuXG4gIHJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgY2FsbGJhY2ssIHRva2Vucykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgIGlmIChlbmRPZkxpbmVUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgVG9rZW4gPSBjYWxsYmFjayhjb250ZW50KTsgLy8vXG5cbiAgICBpZiAoVG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSBUb2tlbi5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0ZXJtaW5hbE5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXX0=