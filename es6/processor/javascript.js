"use strict";

import Processor from "../processor";

export default class JavaScriptProcessor extends Processor {
  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
