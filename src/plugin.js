"use strict";

class Plugin {
  constructor(lexer, parser, processor, tokens, node) {
    this.lexer = lexer;
    this.parser = parser;
    this.processor = processor;
    this.tokens = tokens;
    this.node = node;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getProcessor() {
    return this.processor;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getLanguage() {
    const { language } = this.constructor;

    return language;
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

  static fromNothing(Class) {
    const { Lexer, Parser, Processor } = Class,
          lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          processor = Processor.fromNothing(),
          tokens = null,
          node = null,
          plugin = new Class(lexer, parser, processor, tokens, node);

    return plugin;
  }
}

export default Plugin;
