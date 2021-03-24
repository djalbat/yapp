"use strict";

import Processor from "../processor";

export default class PlainTextProcessor extends Processor {
  process(tokens, node) {}  ///

  static fromNothing() { return Processor.fromNothing(PlainTextProcessor); }
}
