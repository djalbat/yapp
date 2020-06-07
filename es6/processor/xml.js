"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import NameToken from "../token/significant/name";
import ErrorToken from "../token/significant/error";
import CommentToken from "../token/significant/comment";
import AttributeToken from "../token/significant/attribute";

const nameTerminalNodeQuery = Query.fromExpression("//name/@*"),
      errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      attributeTerminalNodeQuery = Query.fromExpression("//attribute/@identifier"),
      commentNonTerminalNodeQuery = Query.fromExpression("//comment");

export default class XMLProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, (content) => ErrorToken, tokens, node);

      this.replaceTerminalNodesSignificantToken(nameTerminalNodeQuery, (content) => NameToken, tokens, node);

      this.replaceTerminalNodesSignificantToken(attributeTerminalNodeQuery, (content) => AttributeToken, tokens, node);

      this.replaceNonTerminalNodesSignificantTokens(commentNonTerminalNodeQuery, (content) => CommentToken, tokens, node);
    }
  }

  static fromNothing() { return Processor.fromNothing(XMLProcessor); }
}
