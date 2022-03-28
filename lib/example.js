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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXSwibmFtZXMiOlsiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJyZW5kZXJZYXBwU3R5bGVzIiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztRQUVOLFdBQVc7QUFFRyxJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFFTSxJQUFBLE1BQVMsV0FBVCxTQUFTLENBQUE7QUFFdEIsSUFBQSxJQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDbkIsSUFBQSxLQUFxQixrQ0FBckIscUJBQXFCLEVBQUE7QUFDZixJQUFBLFdBQTJCLGtDQUEzQiwyQkFBMkIsRUFBQTs7Ozs7O0FBRXRELElBQUlBLElBQUksQUFBQztBQUVULElBQU1DLElBQUksR0FBRyxJQUFJQyxLQUFJLEtBQUEsRUFBRSxFQUNqQkMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEFBQUMsRUFBRSxHQUFHO0FBRXpELE9BQVFKLE9BQU87SUFDYixLQUFLLEtBQUs7UUFBRUgsSUFBSSxHQUFHUSxJQUFPLFFBQUEsQ0FBQztRQUFDLE1BQU07SUFDbEMsS0FBSyxNQUFNO1FBQUVSLElBQUksR0FBR1MsS0FBUSxRQUFBLENBQUM7UUFBQyxNQUFNO0lBQ3BDLEtBQUssWUFBWTtRQUFFVCxJQUFJLEdBQUdVLFdBQWMsUUFBQSxDQUFDO1FBQUMsTUFBTTtDQUNqRDtBQUVEQyxDQUFBQSxHQUFBQSxNQUFnQixBQUFFLENBQUEsaUJBQUYsRUFBRSxDQUFDO0FBRW5CVixJQUFJLENBQUNXLEtBQUssZUFFUixvQkFBQ1osSUFBSSxPQUFHLENBRVQsQ0FBQyJ9