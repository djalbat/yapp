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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUHJvY2Vzc29yIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwibm9uVGVybWluYWxOb2RlUXVlcnkiLCJjYWxsYmFjayIsIm5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZm9yRWFjaCIsIm5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VucyIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnRzIiwicHVzaCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiZW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiZ2V0Q29udGVudCIsImluZGV4IiwiaW5kZXhPZiIsIlRva2VuIiwiZnJvbUNvbnRlbnQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwic2V0U2lnbmlmaWNhbnRUb2tlbiIsIkNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLE1BQXJCLENBQTFCOztBQUNBLElBQU1DLHNCQUFzQixHQUFHRixnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUEvQjs7SUFFTUUsUzs7Ozs7Ozs0QkFDSUMsTSxFQUFRQyxJLEVBQU07QUFDcEIsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsYUFBS0Msb0NBQUwsQ0FBMENKLHNCQUExQyxFQUFrRSxVQUFDSyxPQUFEO0FBQUEsaUJBQWFDLGlCQUFiO0FBQUEsU0FBbEUsRUFBMkZKLE1BQTNGLEVBQW1HQyxJQUFuRztBQUNEO0FBQ0Y7Ozs2REFFd0NJLG9CLEVBQXNCQyxRLEVBQVVOLE0sRUFBUUMsSSxFQUFNO0FBQUE7O0FBQ3JGLFVBQU1NLGdCQUFnQixHQUFHRixvQkFBb0IsQ0FBQ0csT0FBckIsQ0FBNkJQLElBQTdCLENBQXpCO0FBRUFNLE1BQUFBLGdCQUFnQixDQUFDRSxPQUFqQixDQUF5QixVQUFDQyxlQUFEO0FBQUEsZUFBcUIsS0FBSSxDQUFDQyx1Q0FBTCxDQUE2Q0QsZUFBN0MsRUFBOERKLFFBQTlELEVBQXdFTixNQUF4RSxDQUFyQjtBQUFBLE9BQXpCO0FBQ0Q7Ozs0REFFdUNVLGUsRUFBaUJKLFEsRUFBVU4sTSxFQUFRO0FBQUE7O0FBQ3pFLFVBQU1ZLGFBQWEsR0FBR2pCLGlCQUFpQixDQUFDYSxPQUFsQixDQUEwQkUsZUFBMUIsQ0FBdEI7QUFFQUUsTUFBQUEsYUFBYSxDQUFDSCxPQUFkLENBQXNCLFVBQUNJLFlBQUQ7QUFBQSxlQUFrQixNQUFJLENBQUNDLG1DQUFMLENBQXlDRCxZQUF6QyxFQUF1RFAsUUFBdkQsRUFBaUVOLE1BQWpFLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O3lEQUVvQ0wsaUIsRUFBbUJXLFEsRUFBVU4sTSxFQUFRQyxJLEVBQU07QUFBQTs7QUFDOUUsVUFBTWMsUUFBUSxHQUFHLEVBQWpCO0FBQUEsVUFDTUgsYUFBYSxHQUFHakIsaUJBQWlCLENBQUNhLE9BQWxCLENBQTBCUCxJQUExQixDQUR0QjtBQUdBVyxNQUFBQSxhQUFhLENBQUNILE9BQWQsQ0FBc0IsVUFBQ0ksWUFBRCxFQUFrQjtBQUN0QyxZQUFNVixPQUFPLEdBQUcsTUFBSSxDQUFDVyxtQ0FBTCxDQUF5Q0QsWUFBekMsRUFBdURQLFFBQXZELEVBQWlFTixNQUFqRSxDQUFoQjs7QUFFQSxZQUFJRyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJZLFVBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjYixPQUFkO0FBQ0Q7QUFDRixPQU5EO0FBUUEsYUFBT1ksUUFBUDtBQUNEOzs7d0RBRW1DRixZLEVBQWNQLFEsRUFBVU4sTSxFQUFRO0FBQ2xFLFVBQUlpQixnQkFBSjtBQUVBQSxNQUFBQSxnQkFBZ0IsR0FBR0osWUFBWSxDQUFDSyxtQkFBYixFQUFuQjs7QUFFQSxVQUFJRCxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUM3QixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNRSxjQUFjLEdBQUdGLGdCQUFnQixDQUFDRyxnQkFBakIsRUFBdkI7O0FBRUEsVUFBSUQsY0FBSixFQUFvQjtBQUNsQixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNaEIsT0FBTyxHQUFHYyxnQkFBZ0IsQ0FBQ0ksVUFBakIsRUFBaEI7QUFBQSxVQUNNQyxLQUFLLEdBQUd0QixNQUFNLENBQUN1QixPQUFQLENBQWVOLGdCQUFmLENBRGQ7QUFBQSxVQUVNTyxLQUFLLEdBQUdsQixRQUFRLENBQUNILE9BQUQsQ0FGdEIsQ0Fma0UsQ0FpQmpDOztBQUVqQyxVQUFJcUIsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRURQLE1BQUFBLGdCQUFnQixHQUFHTyxLQUFLLENBQUNDLFdBQU4sQ0FBa0J0QixPQUFsQixDQUFuQjtBQUVBLFVBQU11QixLQUFLLEdBQUdKLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQkssTUFBQUEsV0FBVyxHQUFHLENBRHBCO0FBR0EzQixNQUFBQSxNQUFNLENBQUM0QixNQUFQLENBQWNGLEtBQWQsRUFBcUJDLFdBQXJCLEVBQWtDVixnQkFBbEM7QUFFQUosTUFBQUEsWUFBWSxDQUFDZ0IsbUJBQWIsQ0FBaUNaLGdCQUFqQztBQUVBLGFBQU9kLE9BQVA7QUFDRDs7O2dDQUVrQjJCLEssRUFBUTtBQUFFLGFBQU8sSUFBSUEsS0FBSixFQUFQO0FBQXFCOzs7Ozs7ZUFHckMvQixTIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9AKlwiKTtcbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIik7XG5cbmNsYXNzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKGVycm9yVGVybWluYWxOb2RlUXVlcnksIChjb250ZW50KSA9PiBFcnJvclRva2VuLCB0b2tlbnMsIG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMobm9uVGVybWluYWxOb2RlUXVlcnksIGNhbGxiYWNrLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVzID0gbm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgobm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrLCB0b2tlbnMpKTtcbiAgfVxuXG4gIHJlcGxhY2VOb25UZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2Vucyhub25UZXJtaW5hbE5vZGUsIGNhbGxiYWNrLCB0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZVNpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlLCBjYWxsYmFjaywgdG9rZW5zKSk7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odGVybWluYWxOb2RlUXVlcnksIGNhbGxiYWNrLCB0b2tlbnMsIG5vZGUpIHtcbiAgICBjb25zdCBjb250ZW50cyA9IFtdLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgdGVybWluYWxOb2Rlcy5mb3JFYWNoKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuKHRlcm1pbmFsTm9kZSwgY2FsbGJhY2ssIHRva2Vucyk7XG5cbiAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH1cblxuICByZXBsYWNlVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbih0ZXJtaW5hbE5vZGUsIGNhbGxiYWNrLCB0b2tlbnMpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlbjtcblxuICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICBpZiAoZW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBpbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIFRva2VuID0gY2FsbGJhY2soY29udGVudCk7IC8vL1xuXG4gICAgaWYgKFRva2VuID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzaWduaWZpY2FudFRva2VuID0gVG9rZW4uZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdG9rZW5zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdGVybWluYWxOb2RlLnNldFNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcyApIHsgcmV0dXJuIG5ldyBDbGFzcygpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NvcjtcbiJdfQ==