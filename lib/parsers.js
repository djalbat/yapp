"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserFromLanguage = parserFromLanguage;

var _javascript = _interopRequireDefault(require("./parser/javascript"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function parserFromLanguage(language) {
  var Parser; ///

  switch (language) {
    case _constants.JAVASCRIPT_LANGUAGE:
      Parser = _javascript["default"];
      break;
  }

  var parser = Parser.fromNothing();
  return parser;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlcnMuanMiXSwibmFtZXMiOlsicGFyc2VyRnJvbUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJQYXJzZXIiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwiSmF2YVNjcmlwdFBhcnNlciIsInBhcnNlciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7O0FBRU8sU0FBU0Esa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQzNDLE1BQUlDLE1BQUosQ0FEMkMsQ0FDOUI7O0FBRWIsVUFBUUQsUUFBUjtBQUNFLFNBQUtFLDhCQUFMO0FBQTJCRCxNQUFBQSxNQUFNLEdBQUdFLHNCQUFUO0FBQTJCO0FBRHhEOztBQUlBLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxXQUFQLEVBQWY7QUFFQSxTQUFPRCxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4vcGFyc2VyL2phdmFzY3JpcHRcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gIGxldCBQYXJzZXI7ICAvLy9cblxuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgY2FzZSBKQVZBU0NSSVBUX0xBTkdVQUdFIDogUGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlcjsgYnJlYWs7XG4gIH1cblxuICBjb25zdCBwYXJzZXIgPSBQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gcGFyc2VyO1xufVxuIl19