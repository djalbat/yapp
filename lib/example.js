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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJyZW5kZXJZYXBwU3R5bGVzIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJWaWV3IiwiYm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOztBQUlTLEdBQU0sQ0FBTixLQUFNO0FBRU0sR0FBUyxDQUFULE1BQVM7QUFFdEIsR0FBb0IsQ0FBcEIsSUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsS0FBcUI7QUFDZixHQUEyQixDQUEzQixXQUEyQjs7Ozs7O0FBRXRELEdBQUcsQ0FBQyxJQUFJO0FBRVIsR0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBVkssS0FBTSxTQVdyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFekQsTUFBTSxDQUFFLE9BQU87SUFDYixJQUFJLENBQUMsQ0FBSztRQUFFLElBQUksR0FWRSxJQUFvQjtRQVVWLEtBQUs7SUFDakMsSUFBSSxDQUFDLENBQU07UUFBRSxJQUFJLEdBVkUsS0FBcUI7UUFVVixLQUFLO0lBQ25DLElBQUksQ0FBQyxDQUFZO1FBQUUsSUFBSSxHQVZFLFdBQTJCO1FBVVYsS0FBSzs7SUFkaEIsTUFBUztBQW1CMUMsSUFBSSxDQUFDLEtBQUssbUNBRVAsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXX0=