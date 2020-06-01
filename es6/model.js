"use strict";

class Model {
  constructor(lexer, parser, processor, tokens, node) {
    this.lexer = lexer;
    this.parser = parser;
    this.processor = processor;
    this.tokens = tokens;
    this.node = node;
  }

  getLanguage() { return this.language; }

  getTokens() {
    const tokens = this.processor.getTokens(this.tokens);

    return tokens;
  }

  getNode() {
    return this.node;
  }

  setLexer(lexer) {
    this.lexer = lexer;
  }

  setParser(parser) {
    this.parser = parser;
  }

  update(content) {
    this.tokens = this.lexer.tokenise(content);

    this.node = this.parser.parse(this.tokens);

    this.processor.process(this.tokens, this.node);
  }

  static fromLexerParserAndProcessor(Class, lexer, parser, processor) {
    const tokens = null,
          node = null,
          model = new Class(lexer, parser, processor, tokens, node);

    return model;
  }
}

export default Model;
