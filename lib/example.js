"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _index = require("./index");

var _easy = require("easy");

var _xml = _interopRequireDefault(require("./example/view/xml"));

var _json = _interopRequireDefault(require("./example/view/json"));

var _javascript = _interopRequireDefault(require("./example/view/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
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
renderStyle(_index.syntaxStyle);
renderStyle(_index.firaCodeStyle);
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJWaWV3IiwiYm9keSIsIkJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJYTUxWaWV3IiwiSlNPTlZpZXciLCJKYXZhU2NyaXB0VmlldyIsInN5bnRheFN0eWxlIiwiZmlyYUNvZGVTdHlsZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQVIwQztBQUVZO0lBUTlDQSxXLEdBQThCQyx5QixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCx5QixDQUFqQkMsWTtBQUVyQixJQUFJQyxJQUFKO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUFBLElBQ01DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FEaEIsQyxDQUNzRDs7QUFFdEQsUUFBUUosT0FBUjtBQUNFLE9BQUssS0FBTDtBQUFZSCxJQUFBQSxJQUFJLEdBQUdRLGVBQVA7QUFBZ0I7O0FBQzVCLE9BQUssTUFBTDtBQUFhUixJQUFBQSxJQUFJLEdBQUdTLGdCQUFQO0FBQWlCOztBQUM5QixPQUFLLFlBQUw7QUFBbUJULElBQUFBLElBQUksR0FBR1Usc0JBQVA7QUFBdUI7QUFINUM7O0FBTUFYLFlBQVk7QUFFWkYsV0FBVyxDQUFDYyxrQkFBRCxDQUFYO0FBRUFkLFdBQVcsQ0FBQ2Usb0JBQUQsQ0FBWDtBQUVBWCxJQUFJLENBQUNZLEtBQUwsZUFFRSxvQkFBQyxJQUFELE9BRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwianV4dGFwb3NlXCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHN5bnRheFN0eWxlLCBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgWE1MVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcveG1sXCI7XG5pbXBvcnQgSlNPTlZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2pzb25cIjtcbmltcG9ydCBKYXZhU2NyaXB0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdFwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKHN5bnRheFN0eWxlKTtcblxucmVuZGVyU3R5bGUoZmlyYUNvZGVTdHlsZSk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcgLz5cblxuKTtcbiJdfQ==