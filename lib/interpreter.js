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
          interpreter = new Class(lexer, parser, processor, tokens, node);
      return interpreter;
    }
  }]);

  return Interpreter;
}();

var _default = Interpreter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVycHJldGVyLmpzIl0sIm5hbWVzIjpbIkludGVycHJldGVyIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwibGFuZ3VhZ2UiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJDbGFzcyIsIkxleGVyIiwiUGFyc2VyIiwiUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciLCJpbnRlcnByZXRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsU0FBM0IsRUFBc0NDLE1BQXRDLEVBQThDQyxJQUE5QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLSixLQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7a0NBRWE7QUFBRSxhQUFPLEtBQUtDLFFBQVo7QUFBdUI7Ozs2QkFFOUJMLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzJCQUVNSSxPLEVBQVM7QUFDZCxXQUFLSCxNQUFMLEdBQWMsS0FBS0gsS0FBTCxDQUFXTyxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS0YsSUFBTCxHQUFZLEtBQUtILE1BQUwsQ0FBWU8sS0FBWixDQUFrQixLQUFLTCxNQUF2QixDQUFaO0FBRUEsV0FBS0QsU0FBTCxDQUFlTyxPQUFmLENBQXVCLEtBQUtOLE1BQTVCLEVBQW9DLEtBQUtDLElBQXpDO0FBQ0Q7OztnQ0FFa0JNLEssRUFBTztBQUFBLFVBQ2hCQyxLQURnQixHQUNhRCxLQURiLENBQ2hCQyxLQURnQjtBQUFBLFVBQ1RDLE1BRFMsR0FDYUYsS0FEYixDQUNURSxNQURTO0FBQUEsVUFDREMsU0FEQyxHQUNhSCxLQURiLENBQ0RHLFNBREM7QUFBQSxVQUVsQmIsS0FGa0IsR0FFVlcsS0FBSyxDQUFDRyxXQUFOLEVBRlU7QUFBQSxVQUdsQmIsTUFIa0IsR0FHVFcsTUFBTSxDQUFDRSxXQUFQLEVBSFM7QUFBQSxVQUlsQlosU0FKa0IsR0FJTlcsU0FBUyxDQUFDQyxXQUFWLEVBSk07QUFBQSxVQUtsQlgsTUFMa0IsR0FLVCxJQUxTO0FBQUEsVUFNbEJDLElBTmtCLEdBTVgsSUFOVztBQUFBLFVBT2xCVyxXQVBrQixHQU9KLElBQUlMLEtBQUosQ0FBVVYsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsSUFBNUMsQ0FQSTtBQVN4QixhQUFPVyxXQUFQO0FBQ0Q7Ozs7OztlQUdZaEIsVyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBJbnRlcnByZXRlciB7XG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc29yO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkgeyByZXR1cm4gdGhpcy5sYW5ndWFnZTsgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0UHJvY2Vzc29yKHByb2Nlc3Nvcikge1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnByb2Nlc3Nvci5wcm9jZXNzKHRoaXMudG9rZW5zLCB0aGlzLm5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBQcm9jZXNzb3IgfSA9IENsYXNzLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9jZXNzb3IgPSBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGludGVycHJldGVyID0gbmV3IENsYXNzKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKTtcblxuICAgIHJldHVybiBpbnRlcnByZXRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnByZXRlcjtcbiJdfQ==