"use strict";

import { Query } from "occam-query";

import Processor from "../processor";
import NameToken from "../token/significant/name";
import ErrorToken from "../token/significant/error";
import CommentToken from "../token/significant/comment";
import AttributeToken from "../token/significant/attribute";

const nameTerminalNodeQuery = Query.fromExpressionString("//name/@*"),
      errorTerminalNodeQuery = Query.fromExpressionString("/*/error/@*"),
      attributeTerminalNodeQuery = Query.fromExpressionString("//attribute/@identifier"),
      commentNonTerminalNodeQuery = Query.fromExpressionString("//comment");

export default class XMLProcessor extends Processor {
  process(tokens, node) {
    if (node === null) {
      return;
    }

    this.replaceTerminalNodesSignificantToken(tokens, node, (content) => {
      const token = NameToken;

      return token;
    }, nameTerminalNodeQuery);

    this.replaceTerminalNodesSignificantToken(tokens, node, (content) => {
      const token = ErrorToken;

      return token;
    }, errorTerminalNodeQuery);

    this.replaceTerminalNodesSignificantToken(tokens, node, (content) => {
      const token = AttributeToken;

      return token;
    }, attributeTerminalNodeQuery);

    this.replaceNonTerminalNodesSignificantTokens(tokens, node, (content) => {
      const token = CommentToken;

      return token;
    }, commentNonTerminalNodeQuery);
  }

  static fromNothing() { return Processor.fromNothing(XMLProcessor); }
}
