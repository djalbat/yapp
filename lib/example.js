"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easy = require("easy");
var _index = require("./index");
var _xml = _interopRequireDefault(require("./example/view/xml"));
var _json = _interopRequireDefault(require("./example/view/json"));
var _javascript = _interopRequireDefault(require("./example/view/javascript"));
function _interopRequireDefault(obj) {
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
    case "javascript":
        View = _javascript.default;
        break;
}
(0, _index.renderYappStyles)();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXSwibmFtZXMiOlsiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJyZW5kZXJZYXBwU3R5bGVzIiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztRQUVOLFdBQVc7b0JBRUcsTUFBTTtxQkFFTSxTQUFTOzBDQUV0QixvQkFBb0I7MkNBQ25CLHFCQUFxQjtpREFDZiwyQkFBMkI7Ozs7OztBQUV0RCxJQUFJQSxJQUFJLEFBQUM7QUFFVCxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSSxLQUFBLEVBQUUsRUFDakJDLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxBQUFDLEVBQUUsR0FBRztBQUV6RCxPQUFRSixPQUFPO0lBQ2IsS0FBSyxLQUFLO1FBQUVILElBQUksR0FBR1EsSUFBTyxRQUFBLENBQUM7UUFBQyxNQUFNO0lBQ2xDLEtBQUssTUFBTTtRQUFFUixJQUFJLEdBQUdTLEtBQVEsUUFBQSxDQUFDO1FBQUMsTUFBTTtJQUNwQyxLQUFLLFlBQVk7UUFBRVQsSUFBSSxHQUFHVSxXQUFjLFFBQUEsQ0FBQztRQUFDLE1BQU07Q0FDakQ7QUFFREMsSUFBQUEsTUFBZ0IsaUJBQUEsR0FBRSxDQUFDO0FBRW5CVixJQUFJLENBQUNXLEtBQUssZUFFUixvQkFBQ1osSUFBSSxPQUFHLENBRVQsQ0FBQyJ9