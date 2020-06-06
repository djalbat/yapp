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
      var tokens = this.processor.getTokens(this.tokens);
      return tokens;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVycHJldGVyLmpzIl0sIm5hbWVzIjpbIkludGVycHJldGVyIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwibGFuZ3VhZ2UiLCJnZXRUb2tlbnMiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJDbGFzcyIsIkxleGVyIiwiUGFyc2VyIiwiUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciLCJpbnRlcnByZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsU0FBM0IsRUFBc0NDLE1BQXRDLEVBQThDQyxJQUE5QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2tDQUVhO0FBQUUsYUFBTyxLQUFLQyxRQUFaO0FBQXVCOzs7Z0NBRTNCO0FBQ1YsVUFBTUYsTUFBTSxHQUFHLEtBQUtELFNBQUwsQ0FBZUksU0FBZixDQUF5QixLQUFLSCxNQUE5QixDQUFmO0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzZCQUVRSixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OztpQ0FFWUMsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7OzsyQkFFTUssTyxFQUFTO0FBQ2QsV0FBS0osTUFBTCxHQUFjLEtBQUtILEtBQUwsQ0FBV1EsUUFBWCxDQUFvQkQsT0FBcEIsQ0FBZDtBQUVBLFdBQUtILElBQUwsR0FBWSxLQUFLSCxNQUFMLENBQVlRLEtBQVosQ0FBa0IsS0FBS04sTUFBdkIsQ0FBWjtBQUVBLFdBQUtELFNBQUwsQ0FBZVEsT0FBZixDQUF1QixLQUFLUCxNQUE1QixFQUFvQyxLQUFLQyxJQUF6QztBQUNEOzs7Z0RBRWtDTyxLLEVBQU9DLEssRUFBT0MsTSxFQUFRQyxTLEVBQVc7QUFDbEUsVUFBTWQsS0FBSyxHQUFHWSxLQUFLLENBQUNHLFdBQU4sRUFBZDtBQUFBLFVBQ01kLE1BQU0sR0FBR1ksTUFBTSxDQUFDRSxXQUFQLEVBRGY7QUFBQSxVQUVNYixTQUFTLEdBQUdZLFNBQVMsQ0FBQ0MsV0FBVixFQUZsQjtBQUFBLFVBR01aLE1BQU0sR0FBRyxJQUhmO0FBQUEsVUFJTUMsSUFBSSxHQUFHLElBSmI7QUFBQSxVQUtNWSxXQUFXLEdBQUcsSUFBSUwsS0FBSixDQUFVWCxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QkMsU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDQyxJQUE1QyxDQUxwQjtBQU9BLGFBQU9ZLFdBQVA7QUFDRDs7Ozs7O2VBR1lqQixXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIEludGVycHJldGVyIHtcbiAgY29uc3RydWN0b3IobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkgeyByZXR1cm4gdGhpcy5sYW5ndWFnZTsgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnByb2Nlc3Nvci5nZXRUb2tlbnModGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZXhlclBhcnNlckFuZFByb2Nlc3NvcihDbGFzcywgTGV4ZXIsIFBhcnNlciwgUHJvY2Vzc29yKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb2Nlc3NvciA9IFByb2Nlc3Nvci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgaW50ZXJwcmV0ZXIgPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgcHJvY2Vzc29yLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIGludGVycHJldGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVycHJldGVyO1xuIl19