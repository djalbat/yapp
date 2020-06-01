"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(lexer, parser, processor, tokens, node) {
    _classCallCheck(this, Model);

    this.lexer = lexer;
    this.parser = parser;
    this.processor = processor;
    this.tokens = tokens;
    this.node = node;
  }

  _createClass(Model, [{
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
    key: "update",
    value: function update(content) {
      this.tokens = this.lexer.tokenise(content);
      this.node = this.parser.parse(this.tokens);
      this.processor.process(this.tokens, this.node);
    }
  }], [{
    key: "fromLexerParserAndProcessor",
    value: function fromLexerParserAndProcessor(Class, lexer, parser, processor) {
      var tokens = null,
          node = null,
          model = new Class(lexer, parser, processor, tokens, node);
      return model;
    }
  }]);

  return Model;
}();

var _default = Model;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZXNzb3IiLCJ0b2tlbnMiLCJub2RlIiwibGFuZ3VhZ2UiLCJnZXRUb2tlbnMiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2Nlc3MiLCJDbGFzcyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxTQUEzQixFQUFzQ0MsTUFBdEMsRUFBOENDLElBQTlDLEVBQW9EO0FBQUE7O0FBQ2xELFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7a0NBRWE7QUFBRSxhQUFPLEtBQUtDLFFBQVo7QUFBdUI7OztnQ0FFM0I7QUFDVixVQUFNRixNQUFNLEdBQUcsS0FBS0QsU0FBTCxDQUFlSSxTQUFmLENBQXlCLEtBQUtILE1BQTlCLENBQWY7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NkJBRVFKLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzJCQUVNTSxPLEVBQVM7QUFDZCxXQUFLSixNQUFMLEdBQWMsS0FBS0gsS0FBTCxDQUFXUSxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS0gsSUFBTCxHQUFZLEtBQUtILE1BQUwsQ0FBWVEsS0FBWixDQUFrQixLQUFLTixNQUF2QixDQUFaO0FBRUEsV0FBS0QsU0FBTCxDQUFlUSxPQUFmLENBQXVCLEtBQUtQLE1BQTVCLEVBQW9DLEtBQUtDLElBQXpDO0FBQ0Q7OztnREFFa0NPLEssRUFBT1gsSyxFQUFPQyxNLEVBQVFDLFMsRUFBVztBQUNsRSxVQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUFBLFVBQ01DLElBQUksR0FBRyxJQURiO0FBQUEsVUFFTVEsS0FBSyxHQUFHLElBQUlELEtBQUosQ0FBVVgsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsSUFBNUMsQ0FGZDtBQUlBLGFBQU9RLEtBQVA7QUFDRDs7Ozs7O2VBR1liLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7IHJldHVybiB0aGlzLmxhbmd1YWdlOyB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucHJvY2Vzc29yLmdldFRva2Vucyh0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gIH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICB1cGRhdGUoY29udGVudCkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMucGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucHJvY2Vzc29yLnByb2Nlc3ModGhpcy50b2tlbnMsIHRoaXMubm9kZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxleGVyUGFyc2VyQW5kUHJvY2Vzc29yKENsYXNzLCBsZXhlciwgcGFyc2VyLCBwcm9jZXNzb3IpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIG1vZGVsID0gbmV3IENsYXNzKGxleGVyLCBwYXJzZXIsIHByb2Nlc3NvciwgdG9rZW5zLCBub2RlKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiJdfQ==