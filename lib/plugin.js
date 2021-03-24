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