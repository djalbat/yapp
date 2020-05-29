"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

var _javascript = _interopRequireDefault(require("./example/view/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;
var body = new _easy.Body(),
    view = /*#__PURE__*/React.createElement(_javascript["default"], null);
renderStyles();
renderStyle(_syntax["default"]);
renderStyle(_firaCode["default"]);
body.mount(view);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJib2R5IiwiQm9keSIsInZpZXciLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFOMEM7SUFRbENBLFcsR0FBOEJDLHlCLENBQTlCRCxXO0lBQWFFLFksR0FBaUJELHlCLENBQWpCQyxZO0FBRXJCLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFBQSxJQUNNQyxJQUFJLGdCQUVGLG9CQUFDLHNCQUFELE9BSFI7QUFPQUgsWUFBWTtBQUVaRixXQUFXLENBQUNNLGtCQUFELENBQVg7QUFFQU4sV0FBVyxDQUFDTyxvQkFBRCxDQUFYO0FBRUFKLElBQUksQ0FBQ0ssS0FBTCxDQUFXSCxJQUFYIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuaW1wb3J0IGZpcmFDb2RlU3R5bGUgZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmltcG9ydCBKYXZhU2NyaXB0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdFwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8SmF2YVNjcmlwdFZpZXcgLz5cblxuICAgICAgO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxucmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG5yZW5kZXJTdHlsZShmaXJhQ29kZVN0eWxlKTtcblxuYm9keS5tb3VudCh2aWV3KTtcbiJdfQ==