"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interpreter = /*#__PURE__*/function () {
  function Interpreter(lexer, parser, processor, tokens, node) {
    _classCallCheck(this, Interpreter);

    this.lexer = lexer;
    this.parser = parser;
    this.processor = processor;
    this.tokens = tokens;
    this.node = node;
  }

  _createClass(Interpreter, [{
    key: "getLanguage",
    value: function getLanguage() {
      return this.language;
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
    key: "fromLexerParserAndProcessor",
    value: function fromLexerParserAndProcessor(Class, Lexer, Parser, Processor) {
      var lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          processor = Processor.fromNothing(),
          tokens = null,
          node = null,
          interpreter = new Class(lexer, parser, processor, tokens, node);
      return interpreter;
    }
  }]);

  return Interpreter;
}();

var _default = Interpreter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVycHJldGVyLmpzIl0sIm5hbWVzIjpbIkludGVycHJldGVyIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwibGFuZ3VhZ2UiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJDbGFzcyIsIkxleGVyIiwiUGFyc2VyIiwiUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciLCJpbnRlcnByZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsU0FBM0IsRUFBc0NDLE1BQXRDLEVBQThDQyxJQUE5QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2tDQUVhO0FBQUUsYUFBTyxLQUFLQyxRQUFaO0FBQXVCOzs7Z0NBRTNCO0FBQ1YsYUFBTyxLQUFLRixNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NkJBRVFKLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzJCQUVNSSxPLEVBQVM7QUFDZCxXQUFLSCxNQUFMLEdBQWMsS0FBS0gsS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS0YsSUFBTCxHQUFZLEtBQUtILE1BQUwsQ0FBWU8sS0FBWixDQUFrQixLQUFLTCxNQUF2QixDQUFaO0FBRUEsV0FBS0QsU0FBTCxDQUFlTyxPQUFmLENBQXVCLEtBQUtOLE1BQTVCLEVBQW9DLEtBQUtDLElBQXpDO0FBQ0Q7OztnREFFa0NNLEssRUFBT0MsSyxFQUFPQyxNLEVBQVFDLFMsRUFBVztBQUNsRSxVQUFNYixLQUFLLEdBQUdXLEtBQUssQ0FBQ0csV0FBTixFQUFkO0FBQUEsVUFDTWIsTUFBTSxHQUFHVyxNQUFNLENBQUNFLFdBQVAsRUFEZjtBQUFBLFVBRU1aLFNBQVMsR0FBR1csU0FBUyxDQUFDQyxXQUFWLEVBRmxCO0FBQUEsVUFHTVgsTUFBTSxHQUFHLElBSGY7QUFBQSxVQUlNQyxJQUFJLEdBQUcsSUFKYjtBQUFBLFVBS01XLFdBQVcsR0FBRyxJQUFJTCxLQUFKLENBQVVWLEtBQVYsRUFBaUJDLE1BQWpCLEVBQXlCQyxTQUF6QixFQUFvQ0MsTUFBcEMsRUFBNENDLElBQTVDLENBTHBCO0FBT0EsYUFBT1csV0FBUDtBQUNEOzs7Ozs7ZUFHWWhCLFciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgSW50ZXJwcmV0ZXIge1xuICBjb25zdHJ1Y3RvcihsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7IHJldHVybiB0aGlzLmxhbmd1YWdlOyB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZXhlclBhcnNlckFuZFByb2Nlc3NvcihDbGFzcywgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2Nlc3NvciA9IFByb2Nlc3Nvci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgaW50ZXJwcmV0ZXIgPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIGludGVycHJldGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVycHJldGVyO1xuIl19