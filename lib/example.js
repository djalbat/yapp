"use strict";
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
(0, _index).renderYappStyles();
body.mount(/*#__PURE__*/ React.createElement(View, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXSwibmFtZXMiOlsiVmlldyIsImJvZHkiLCJleGFtcGxlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7QUFJUyxHQUFNLENBQU4sS0FBTTtBQUVNLEdBQVMsQ0FBVCxNQUFTO0FBRXRCLEdBQW9CLENBQXBCLElBQW9CO0FBQ25CLEdBQXFCLENBQXJCLEtBQXFCO0FBQ2YsR0FBMkIsQ0FBM0IsV0FBMkI7Ozs7OztBQUV0RCxHQUFHLENBQUNBLElBQUk7QUFFUixHQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBVkssS0FBTSxTQVdyQkMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUV6RCxNQUFNLENBQUVKLE9BQU87SUFDYixJQUFJLENBQUMsQ0FBSztRQUFFRixJQUFJLEdBVkUsSUFBb0I7UUFVVixLQUFLO0lBQ2pDLElBQUksQ0FBQyxDQUFNO1FBQUVBLElBQUksR0FWRSxLQUFxQjtRQVVWLEtBQUs7SUFDbkMsSUFBSSxDQUFDLENBQVk7UUFBRUEsSUFBSSxHQVZFLFdBQTJCO1FBVVYsS0FBSzs7SUFkaEIsTUFBUztBQW1CMUNDLElBQUksQ0FBQ00sS0FBSyxtQ0FFUFAsSUFBSSJ9