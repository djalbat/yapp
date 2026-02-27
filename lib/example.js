"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _index = require("./index");
const _xml = /*#__PURE__*/ _interop_require_default(require("./example/view/xml"));
const _json = /*#__PURE__*/ _interop_require_default(require("./example/view/json"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("./example/view/plainText"));
const _javascript = /*#__PURE__*/ _interop_require_default(require("./example/view/javascript"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { renderStyles } = _easywithstyle.default;
let View;
const body = new _easy.Body(), example = window.location.search.substring(1); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyByZW5kZXJZYXBwU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBYTUxWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy94bWxcIjtcbmltcG9ydCBKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvanNvblwiO1xuaW1wb3J0IFBsYWluVGV4dFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3BsYWluVGV4dFwiO1xuaW1wb3J0IEphdmFTY3JpcHRWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qYXZhc2NyaXB0XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcInhtbFwiOiBWaWV3ID0gWE1MVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJqc29uXCI6IFZpZXcgPSBKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJwbGFpbi10ZXh0XCI6IFZpZXcgPSBQbGFpblRleHRWaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5tb3VudChcblxuICA8Vmlldy8+XG5cbik7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiUGxhaW5UZXh0VmlldyIsIkphdmFTY3JpcHRWaWV3IiwicmVuZGVyWWFwcFN0eWxlcyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO3NFQUVlO3NCQUVEO3VCQUNZOzREQUViOzZEQUNDO2tFQUNLO21FQUNDOzs7Ozs7QUFFM0IsTUFBTSxFQUFFQSxZQUFZLEVBQUUsR0FBR0Msc0JBQVM7QUFFbEMsSUFBSUM7QUFFSixNQUFNQyxPQUFPLElBQUlDLFVBQUksSUFDZkMsVUFBVUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFLLEdBQUc7QUFFekQsT0FBUUo7SUFDTixLQUFLO1FBQU9ILE9BQU9RLFlBQU87UUFBRTtJQUM1QixLQUFLO1FBQVFSLE9BQU9TLGFBQVE7UUFBRTtJQUM5QixLQUFLO1FBQWNULE9BQU9VLGtCQUFhO1FBQUU7SUFDekMsS0FBSztRQUFjVixPQUFPVyxtQkFBYztRQUFFO0FBQzVDO0FBRUFDLElBQUFBLHVCQUFnQjtBQUVoQmQ7QUFFQUcsS0FBS1ksS0FBSyxlQUVSLG9CQUFDYiJ9