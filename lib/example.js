"use strict";

require("juxtapose");

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _xml = _interopRequireDefault(require("./example/view/xml"));

var _json = _interopRequireDefault(require("./example/view/json"));

var _javascript = _interopRequireDefault(require("./example/view/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyles = _easyWithStyle["default"].renderStyles;
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
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFOMEM7SUFRbENBLFksR0FBaUJDLHlCLENBQWpCRCxZO0FBRVIsSUFBSUUsSUFBSjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFBQSxJQUNNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBRGhCLEMsQ0FDc0Q7O0FBRXRELFFBQVFKLE9BQVI7QUFDRSxPQUFLLEtBQUw7QUFBWUgsSUFBQUEsSUFBSSxHQUFHUSxlQUFQO0FBQWdCOztBQUM1QixPQUFLLE1BQUw7QUFBYVIsSUFBQUEsSUFBSSxHQUFHUyxnQkFBUDtBQUFpQjs7QUFDOUIsT0FBSyxZQUFMO0FBQW1CVCxJQUFBQSxJQUFJLEdBQUdVLHNCQUFQO0FBQXVCO0FBSDVDOztBQU1BWixZQUFZO0FBRVpHLElBQUksQ0FBQ1UsS0FBTCxlQUVJLG9CQUFDLElBQUQsT0FGSiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBYTUxWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy94bWxcIjtcbmltcG9ydCBKU09OVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXcvanNvblwiO1xuaW1wb3J0IEphdmFTY3JpcHRWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qYXZhc2NyaXB0XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmxldCBWaWV3O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcInhtbFwiOiBWaWV3ID0gWE1MVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJqc29uXCI6IFZpZXcgPSBKU09OVmlldzsgYnJlYWs7XG4gIGNhc2UgXCJqYXZhc2NyaXB0XCI6IFZpZXcgPSBKYXZhU2NyaXB0VmlldzsgYnJlYWs7XG59XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gICAgPFZpZXcgLz5cblxuKTtcbiJdfQ==