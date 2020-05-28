"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamStyles = require("occam-styles");

var _view = _interopRequireDefault(require("./example/view"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;
var body = new _easy.Body(),
    view = /*#__PURE__*/React.createElement(_view["default"], null);
renderStyles();
renderStyle(_syntax["default"]);
renderStyle(_occamStyles.firaCodeStyle);
body.mount(view);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJib2R5IiwiQm9keSIsInZpZXciLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFOMEM7SUFRbENBLFcsR0FBOEJDLHlCLENBQTlCRCxXO0lBQWFFLFksR0FBaUJELHlCLENBQWpCQyxZO0FBRXJCLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFBQSxJQUNNQyxJQUFJLGdCQUVGLG9CQUFDLGdCQUFELE9BSFI7QUFPQUgsWUFBWTtBQUVaRixXQUFXLENBQUNNLGtCQUFELENBQVg7QUFFQU4sV0FBVyxDQUFDTywwQkFBRCxDQUFYO0FBRUFKLElBQUksQ0FBQ0ssS0FBTCxDQUFXSCxJQUFYIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGZpcmFDb2RlU3R5bGUgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8VmlldyAvPlxuXG4gICAgICA7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5yZW5kZXJTdHlsZShzeW50YXhTdHlsZSk7XG5cbnJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUpO1xuXG5ib2R5Lm1vdW50KHZpZXcpO1xuIl19