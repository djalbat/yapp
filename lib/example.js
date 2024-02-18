"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("./index");
var _xml = /*#__PURE__*/ _interop_require_default(require("./example/view/xml"));
var _json = /*#__PURE__*/ _interop_require_default(require("./example/view/json"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./example/view/plainText"));
var _javascript = /*#__PURE__*/ _interop_require_default(require("./example/view/javascript"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
var View;
var body = new _easy.Body(), example = window.location.search.substring(1); ///
switch(example){
    case "xml":
        View = _xml.default;
        break;
    case "json":
        View = _json.default;
        break;
    case "plain-text":
        View = _plainText.default;
        break;
    case "javascript":
        View = _javascript.default;
        break;
}
(0, _index.renderYappStyles)();
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgUGxhaW5UZXh0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcInBsYWluLXRleHRcIjogVmlldyA9IFBsYWluVGV4dFZpZXc7IGJyZWFrO1xuICBjYXNlIFwiamF2YXNjcmlwdFwiOiBWaWV3ID0gSmF2YVNjcmlwdFZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJZYXBwU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJWaWV3IiwiYm9keSIsIkJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJYTUxWaWV3IiwiSlNPTlZpZXciLCJQbGFpblRleHRWaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJyZW5kZXJZYXBwU3R5bGVzIiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7b0JBRUQ7cUJBRVk7MERBRWI7MkRBQ0M7Z0VBQ0s7aUVBQ0M7Ozs7OztBQUUzQixJQUFNLEFBQUVBLGVBQWlCQyxzQkFBUyxDQUExQkQ7QUFFUixJQUFJRTtBQUVKLElBQU1DLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxVQUFVQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUssR0FBRztBQUV6RCxPQUFRSjtJQUNOLEtBQUs7UUFBT0gsT0FBT1EsWUFBTztRQUFFO0lBQzVCLEtBQUs7UUFBUVIsT0FBT1MsYUFBUTtRQUFFO0lBQzlCLEtBQUs7UUFBY1QsT0FBT1Usa0JBQWE7UUFBRTtJQUN6QyxLQUFLO1FBQWNWLE9BQU9XLG1CQUFjO1FBQUU7QUFDNUM7QUFFQUMsSUFBQUEsdUJBQWdCO0FBRWhCZDtBQUVBRyxLQUFLWSxLQUFLLGVBRVIsb0JBQUNiIn0=