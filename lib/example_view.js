"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _xml = _interopRequireDefault(require("./example/view/xml"));

var _json = _interopRequireDefault(require("./example/view/json"));

var _yapp = _interopRequireDefault(require("./style/yapp"));

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
renderStyle(_yapp["default"]);
renderStyle(_firaCode["default"]);
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVfdmlldy5qcyJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsIlZpZXciLCJib2R5IiwiQm9keSIsImV4YW1wbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsIlhNTFZpZXciLCJKU09OVmlldyIsIkphdmFTY3JpcHRWaWV3Iiwic3ludGF4U3R5bGUiLCJ5YXBwU3R5bGUiLCJmaXJhQ29kZVN0eWxlIiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBVDBDO0lBV2xDQSxXLEdBQThCQyx5QixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCx5QixDQUFqQkMsWTtBQUVyQixJQUFJQyxJQUFKO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUFBLElBQ01DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsU0FBdkIsQ0FBaUMsQ0FBakMsQ0FEaEIsQyxDQUNzRDs7QUFFdEQsUUFBUUosT0FBUjtBQUNFLE9BQUssS0FBTDtBQUFZSCxJQUFBQSxJQUFJLEdBQUdRLGVBQVA7QUFBZ0I7O0FBQzVCLE9BQUssTUFBTDtBQUFhUixJQUFBQSxJQUFJLEdBQUdTLGdCQUFQO0FBQWlCOztBQUM5QixPQUFLLFlBQUw7QUFBbUJULElBQUFBLElBQUksR0FBR1Usc0JBQVA7QUFBdUI7QUFINUM7O0FBTUFYLFlBQVk7QUFFWkYsV0FBVyxDQUFDYyxrQkFBRCxDQUFYO0FBRUFkLFdBQVcsQ0FBQ2UsZ0JBQUQsQ0FBWDtBQUVBZixXQUFXLENBQUNnQixvQkFBRCxDQUFYO0FBRUFaLElBQUksQ0FBQ2EsS0FBTCxlQUVFLG9CQUFDLElBQUQsT0FGRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBYTUxWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy94bWxcIjtcbmltcG9ydCBKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvanNvblwiO1xuaW1wb3J0IHlhcHBTdHlsZSBmcm9tIFwiLi9zdHlsZS95YXBwXCJcbmltcG9ydCBzeW50YXhTdHlsZSBmcm9tIFwiLi9zdHlsZS9zeW50YXhcIlxuaW1wb3J0IGZpcmFDb2RlU3R5bGUgZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIlxuaW1wb3J0IEphdmFTY3JpcHRWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qYXZhc2NyaXB0XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5sZXQgVmlldztcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJ4bWxcIjogVmlldyA9IFhNTFZpZXc7IGJyZWFrO1xuICBjYXNlIFwianNvblwiOiBWaWV3ID0gSlNPTlZpZXc7IGJyZWFrO1xuICBjYXNlIFwiamF2YXNjcmlwdFwiOiBWaWV3ID0gSmF2YVNjcmlwdFZpZXc7IGJyZWFrO1xufVxuXG5yZW5kZXJTdHlsZXMoKTtcblxucmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG5yZW5kZXJTdHlsZSh5YXBwU3R5bGUpO1xuXG5yZW5kZXJTdHlsZShmaXJhQ29kZVN0eWxlKTtcblxuYm9keS5tb3VudChcblxuICA8VmlldyAvPlxuXG4pO1xuIl19