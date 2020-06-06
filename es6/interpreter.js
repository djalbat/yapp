"use strict";

class Interpreter {
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

  setProcessor(processor) {
    this.processor = processor;
  }

  update(content) {
    this.tokens = this.lexer.tokenise(content);

    this.node = this.parser.parse(this.tokens);

    this.processor.process(this.tokens, this.node);
  }

  static fromLexerParserAndProcessor(Class, Lexer, Parser, Processor) {
    const lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          processor = Processor.fromNothing(),
          tokens = null,
          node = null,
          interpreter = new Class(lexer, parser, processor, tokens, node);

    return interpreter;
  }
}

export default Interpreter;
