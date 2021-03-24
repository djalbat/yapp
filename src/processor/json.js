"use strict";

import Processor from "../processor";

export default class JSONProcessor extends Processor {
  static fromNothing() { return Processor.fromNothing(JSONProcessor); }
}
