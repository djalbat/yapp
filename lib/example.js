"use strict";

require("juxtapose");

var _easy = require("easy");

var _index = require("./index");

var _xml = _interopRequireDefault(require("./example/view/xml"));

var _json = _interopRequireDefault(require("./example/view/json"));

var _javascript = _interopRequireDefault(require("./example/view/javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
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

(0, _index.renderYappStyles)();
body.mount( /*#__PURE__*/React.createElement(View, null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiVmlldyIsImJvZHkiLCJCb2R5IiwiZXhhbXBsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwiWE1MVmlldyIsIkpTT05WaWV3IiwiSmF2YVNjcmlwdFZpZXciLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFKNEM7QUFNNUMsSUFBSUEsSUFBSjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFBQSxJQUNNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBRGhCLEMsQ0FDc0Q7O0FBRXRELFFBQVFKLE9BQVI7QUFDRSxPQUFLLEtBQUw7QUFBWUgsSUFBQUEsSUFBSSxHQUFHUSxlQUFQO0FBQWdCOztBQUM1QixPQUFLLE1BQUw7QUFBYVIsSUFBQUEsSUFBSSxHQUFHUyxnQkFBUDtBQUFpQjs7QUFDOUIsT0FBSyxZQUFMO0FBQW1CVCxJQUFBQSxJQUFJLEdBQUdVLHNCQUFQO0FBQXVCO0FBSDVDOztBQU1BO0FBRUFULElBQUksQ0FBQ1UsS0FBTCxlQUVFLG9CQUFDLElBQUQsT0FGRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IHJlbmRlcllhcHBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFhNTFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L3htbFwiO1xuaW1wb3J0IEpTT05WaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlldy9qc29uXCI7XG5pbXBvcnQgSmF2YVNjcmlwdFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3L2phdmFzY3JpcHRcIjtcblxubGV0IFZpZXc7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwieG1sXCI6IFZpZXcgPSBYTUxWaWV3OyBicmVhaztcbiAgY2FzZSBcImpzb25cIjogVmlldyA9IEpTT05WaWV3OyBicmVhaztcbiAgY2FzZSBcImphdmFzY3JpcHRcIjogVmlldyA9IEphdmFTY3JpcHRWaWV3OyBicmVhaztcbn1cblxucmVuZGVyWWFwcFN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXX0=