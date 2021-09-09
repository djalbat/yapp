"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _view = _interopRequireDefault(require("../view"));
var _javascript = _interopRequireDefault(require("../../plugin/javascript"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var JavaScriptView = /*#__PURE__*/ function(View) {
    _inherits(JavaScriptView, View);
    function JavaScriptView() {
        _classCallCheck(this, JavaScriptView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(JavaScriptView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Plugin", _javascript.default);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "\"use strict\";\n\nimport \"juxtapose\";\n\nimport withStyle from \"easy-with-style\"; ///\n\nimport { Body } from \"easy\";\n\nfunction simpleApplication(selector) {\n  const body = new Body(selector);\n\n  body.mount(\n\n    <p>\n      A simple application.\n    </p>\n\n  );\n}\n\nexport default withStyle(simpleApplication)`\n\n  color: #333;\n\n`;");
        return _this;
    }
    return JavaScriptView;
}(_view.default);
_defineProperty(JavaScriptView, "defaultProperties", {
    className: "javascript"
});
exports.default = JavaScriptView;
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJWaWV3IiwiSmF2YVNjcmlwdFBsdWdpbiIsIkphdmFTY3JpcHRWaWV3IiwiUGx1Z2luIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUVHLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQyxjQUFjLGlCQUFwQixRQUFRO2NBQUYsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYzs7aUVBQWQsY0FBYzt3REFDakMsTUFBTSxHQUhxQixXQUF5Qjt3REFLcEQsY0FBYyxJQUFJLGdXQXdCakI7OztXQTNCa0IsY0FBYztFQUpsQixLQUFTO2dCQUlMLGNBQWMsR0E2QjFCLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLFVBQVk7QUFDekIsQ0FBQztrQkEvQmtCLGNBQWMifQ==