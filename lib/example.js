"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _xml = _interopRequireDefault(require("./example/view/xml"));

var _json = _interopRequireDefault(require("./example/view/json"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

var _javascript = _interopRequireDefault(require("./example/view/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;
var View;
var body = new _easy.Body(),
    example = window.location.search.substring(1); ///

switch (example) {
  case "xml":
    View = _xml["default"];
    break;

  case "json":
    View = _json["default"];
    break;

  case "javascript":
    View = _javascript["default"];
    break;
}

renderStyles();
renderStyle(_syntax["default"]);
renderStyle(_firaCode["default"]);
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJWaWV3IiwiYm9keSIsIkJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJYTUxWaWV3IiwiSlNPTlZpZXciLCJKYXZhU2NyaXB0VmlldyIsInN5bnRheFN0eWxlIiwiZmlyYUNvZGVTdHlsZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVIwQztJQVVsQ0EsVyxHQUE4QkMseUIsQ0FBOUJELFc7SUFBYUUsWSxHQUFpQkQseUIsQ0FBakJDLFk7QUFFckIsSUFBSUMsSUFBSjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFBQSxJQUNNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBRGhCLEMsQ0FDc0Q7O0FBRXRELFFBQVFKLE9BQVI7QUFDRSxPQUFLLEtBQUw7QUFBWUgsSUFBQUEsSUFBSSxHQUFHUSxlQUFQO0FBQWdCOztBQUM1QixPQUFLLE1BQUw7QUFBYVIsSUFBQUEsSUFBSSxHQUFHUyxnQkFBUDtBQUFpQjs7QUFDOUIsT0FBSyxZQUFMO0FBQW1CVCxJQUFBQSxJQUFJLEdBQUdVLHNCQUFQO0FBQXVCO0FBSDVDOztBQU1BWCxZQUFZO0FBRVpGLFdBQVcsQ0FBRWMsa0JBQUYsQ0FBWDtBQUVBZCxXQUFXLENBQUVlLG9CQUFGLENBQVg7QUFFQVgsSUFBSSxDQUFDWSxLQUFMLGVBRUksb0JBQUMsSUFBRCxPQUZKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcbmltcG9ydCBKYXZhU2NyaXB0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdFwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKCBzeW50YXhTdHlsZSApO1xuXG5yZW5kZXJTdHlsZSggZmlyYUNvZGVTdHlsZSApO1xuXG5ib2R5Lm1vdW50KFxuXG4gICAgPFZpZXcgLz5cblxuKTtcbiJdfQ==