"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexerFromLanguage = lexerFromLanguage;

var _javascript = _interopRequireDefault(require("./lexer/javascript"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function lexerFromLanguage(language) {
  var Lexer; ///

  switch (language) {
    case _constants.JAVASCRIPT_LANGUAGE:
      Lexer = _javascript["default"];
      break;
  }

  var lexer = Lexer.fromNothing();
  return lexer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGVycy5qcyJdLCJuYW1lcyI6WyJsZXhlckZyb21MYW5ndWFnZSIsImxhbmd1YWdlIiwiTGV4ZXIiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwiSmF2YVNjcmlwdExleGVyIiwibGV4ZXIiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUVPLFNBQVNBLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQztBQUMxQyxNQUFJQyxLQUFKLENBRDBDLENBQzlCOztBQUVaLFVBQVFELFFBQVI7QUFDRSxTQUFLRSw4QkFBTDtBQUEyQkQsTUFBQUEsS0FBSyxHQUFHRSxzQkFBUjtBQUF5QjtBQUR0RDs7QUFJQSxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksV0FBTixFQUFkO0FBRUEsU0FBT0QsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBKQVZBU0NSSVBUX0xBTkdVQUdFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhlckZyb21MYW5ndWFnZShsYW5ndWFnZSkge1xuICBsZXQgTGV4ZXI7ICAvLy9cblxuICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgY2FzZSBKQVZBU0NSSVBUX0xBTkdVQUdFIDogTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7IGJyZWFrO1xuICB9XG5cbiAgY29uc3QgbGV4ZXIgPSBMZXhlci5mcm9tTm90aGluZygpO1xuXG4gIHJldHVybiBsZXhlcjtcbn1cbiJdfQ==