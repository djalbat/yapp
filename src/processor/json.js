"use strict";

import { Query } from "occam-query";

import Processor from "../processor";
import ErrorToken from "../token/significant/error";

const errorTerminalNodeQuery = Query.fromExpressionString("/*/error/@*");

export default class JSONProcessor extends Processor {
  process(tokens, node) {
    if (node === null) {
      return;
    }

    this.replaceTerminalNodesSignificantToken(tokens, node, (content) => {
      const token = ErrorToken;

      return token;
    }, errorTerminalNodeQuery);
  }

  static fromNothing() { return Processor.fromNothing(JSONProcessor); }
}
