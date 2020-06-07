"use strict";

import Processor from "../processor";

export default class JSONProcessor extends Processor {
  process(tokens, node) {}  ///

  static fromNothing() { return Processor.fromNothing(JSONProcessor); }
}
