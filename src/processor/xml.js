"use strict";

import { Query } from "occam-query";

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
      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => ErrorToken, errorTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => NameToken, nameTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => AttributeToken, attributeTerminalNodeQuery);

      this.replaceNonTerminalNodesSignificantTokens(tokens, node, (content) => CommentToken, commentNonTerminalNodeQuery);
    }
  }

  static fromNothing() { return Processor.fromNothing(XMLProcessor); }
}
