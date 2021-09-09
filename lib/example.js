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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJyZW5kZXJZYXBwU3R5bGVzIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJWaWV3IiwiYm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOztBQUlTLEdBQU0sQ0FBTixLQUFNO0FBRU0sR0FBUyxDQUFULE1BQVM7QUFFdEIsR0FBb0IsQ0FBcEIsSUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsS0FBcUI7QUFDZixHQUEyQixDQUEzQixXQUEyQjs7Ozs7O0FBRXRELEdBQUcsQ0FBQyxJQUFJO0FBRVIsR0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBVkssS0FBTSxTQVdyQixPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFFekQsTUFBTSxDQUFFLE9BQU87SUFDYixJQUFJLEVBQUMsR0FBSztRQUFFLElBQUksR0FWRSxJQUFvQjtRQVVWLEtBQUs7SUFDakMsSUFBSSxFQUFDLElBQU07UUFBRSxJQUFJLEdBVkUsS0FBcUI7UUFVVixLQUFLO0lBQ25DLElBQUksRUFBQyxVQUFZO1FBQUUsSUFBSSxHQVZFLFdBQTJCO1FBVVYsS0FBSzs7SUFkaEIsTUFBUztBQW1CMUMsSUFBSSxDQUFDLEtBQUssbUNBRVAsSUFBSSJ9