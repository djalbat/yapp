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
      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => ErrorToken, errorTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => NameToken, nameTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => AttributeToken, attributeTerminalNodeQuery);

      this.replaceNonTerminalNodesSignificantTokens(tokens, node, (content, type) => CommentToken, commentNonTerminalNodeQuery);
    }
  }

  static fromNothing() { return Processor.fromNothing(XMLProcessor); }
}
