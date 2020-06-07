"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plugin = /*#__PURE__*/function () {
  function Plugin(lexer, parser, processor, tokens, node) {
    _classCallCheck(this, Plugin);

    this.lexer = lexer;
    this.parser = parser;
    this.processor = processor;
    this.tokens = tokens;
    this.node = node;
  }

  _createClass(Plugin, [{
    key: "getLexer",
    value: function getLexer() {
      return this.lexer;
    }
  }, {
    key: "getParser",
    value: function getParser() {
      return this.parser;
    }
  }, {
    key: "getProcessor",
    value: function getProcessor() {
      return this.processor;
    }
  }, {
    key: "getTokens",
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return this.language;
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.lexer = lexer;
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.parser = parser;
    }
  }, {
    key: "setProcessor",
    value: function setProcessor(processor) {
      this.processor = processor;
    }
  }, {
    key: "update",
    value: function update(content) {
      this.tokens = this.lexer.tokenise(content);
      this.node = this.parser.parse(this.tokens);
      this.processor.process(this.tokens, this.node);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      var Lexer = Class.Lexer,
          Parser = Class.Parser,
          Processor = Class.Processor,
          lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          processor = Processor.fromNothing(),
          tokens = null,
          node = null,
          plugin = new Class(lexer, parser, processor, tokens, node);
      return plugin;
    }
  }]);

  return Plugin;
}();

var _default = Plugin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi5qcyJdLCJuYW1lcyI6WyJQbHVnaW4iLCJsZXhlciIsInBhcnNlciIsInByb2Nlc3NvciIsInRva2VucyIsIm5vZGUiLCJsYW5ndWFnZSIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicHJvY2VzcyIsIkNsYXNzIiwiTGV4ZXIiLCJQYXJzZXIiLCJQcm9jZXNzb3IiLCJmcm9tTm90aGluZyIsInBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsU0FBM0IsRUFBc0NDLE1BQXRDLEVBQThDQyxJQUE5QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLSixLQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7a0NBRWE7QUFBRSxhQUFPLEtBQUtDLFFBQVo7QUFBdUI7Ozs2QkFFOUJMLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzJCQUVNSSxPLEVBQVM7QUFDZCxXQUFLSCxNQUFMLEdBQWMsS0FBS0gsS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS0YsSUFBTCxHQUFZLEtBQUtILE1BQUwsQ0FBWU8sS0FBWixDQUFrQixLQUFLTCxNQUF2QixDQUFaO0FBRUEsV0FBS0QsU0FBTCxDQUFlTyxPQUFmLENBQXVCLEtBQUtOLE1BQTVCLEVBQW9DLEtBQUtDLElBQXpDO0FBQ0Q7OztnQ0FFa0JNLEssRUFBTztBQUFBLFVBQ2hCQyxLQURnQixHQUNhRCxLQURiLENBQ2hCQyxLQURnQjtBQUFBLFVBQ1RDLE1BRFMsR0FDYUYsS0FEYixDQUNURSxNQURTO0FBQUEsVUFDREMsU0FEQyxHQUNhSCxLQURiLENBQ0RHLFNBREM7QUFBQSxVQUVsQmIsS0FGa0IsR0FFVlcsS0FBSyxDQUFDRyxXQUFOLEVBRlU7QUFBQSxVQUdsQmIsTUFIa0IsR0FHVFcsTUFBTSxDQUFDRSxXQUFQLEVBSFM7QUFBQSxVQUlsQlosU0FKa0IsR0FJTlcsU0FBUyxDQUFDQyxXQUFWLEVBSk07QUFBQSxVQUtsQlgsTUFMa0IsR0FLVCxJQUxTO0FBQUEsVUFNbEJDLElBTmtCLEdBTVgsSUFOVztBQUFBLFVBT2xCVyxNQVBrQixHQU9ULElBQUlMLEtBQUosQ0FBVVYsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsSUFBNUMsQ0FQUztBQVN4QixhQUFPVyxNQUFQO0FBQ0Q7Ozs7OztlQUdZaEIsTSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NvcjtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMYW5ndWFnZSgpIHsgcmV0dXJuIHRoaXMubGFuZ3VhZ2U7IH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFByb2Nlc3Nvcihwcm9jZXNzb3IpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5wcm9jZXNzb3IucHJvY2Vzcyh0aGlzLnRva2VucywgdGhpcy5ub2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcykge1xuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yIH0gPSBDbGFzcyxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvY2Vzc29yID0gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwbHVnaW4gPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIHBsdWdpbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW47XG4iXX0=