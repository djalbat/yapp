"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
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
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgUGxhaW5UZXh0VmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcInBsYWluLXRleHRcIjogVmlldyA9IFBsYWluVGV4dFZpZXc7IGJyZWFrO1xuICBjYXNlIFwiamF2YXNjcmlwdFwiOiBWaWV3ID0gSmF2YVNjcmlwdFZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJZYXBwU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJib2R5IiwiQm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIlhNTFZpZXciLCJKU09OVmlldyIsIlBsYWluVGV4dFZpZXciLCJKYXZhU2NyaXB0VmlldyIsInJlbmRlcllhcHBTdHlsZXMiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvQkFFYztxQkFFWTswREFFYjsyREFDQztnRUFDSztpRUFDQzs7Ozs7O0FBRTNCLElBQUlBO0FBRUosSUFBTUMsT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLFVBQVVDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSyxHQUFHO0FBRXpELE9BQVFKO0lBQ04sS0FBSztRQUFPSCxPQUFPUSxZQUFPO1FBQUU7SUFDNUIsS0FBSztRQUFRUixPQUFPUyxhQUFRO1FBQUU7SUFDOUIsS0FBSztRQUFjVCxPQUFPVSxrQkFBYTtRQUFFO0lBQ3pDLEtBQUs7UUFBY1YsT0FBT1csbUJBQWM7UUFBRTtBQUM1QztBQUVBQyxJQUFBQSx1QkFBZ0I7QUFFaEJYLEtBQUtZLEtBQUssZUFFUixvQkFBQ2IifQ==