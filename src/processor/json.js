"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import ErrorToken from "../token/significant/error";

const errorTerminalNodeQuery = Query.fromExpression("//error/@*");

  export default class JSONProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => ErrorToken, errorTerminalNodeQuery);
    }
  }

  static fromNothing() { return Processor.fromNothing(JSONProcessor); }
}
