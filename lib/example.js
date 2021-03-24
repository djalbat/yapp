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