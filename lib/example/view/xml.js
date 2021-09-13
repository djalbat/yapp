"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _view = _interopRequireDefault(require("../view"));
var _xml = _interopRequireDefault(require("../../plugin/xml"));
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
var XMLView = /*#__PURE__*/ function(View) {
    _inherits(XMLView, View);
    function XMLView() {
        _classCallCheck(this, XMLView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Plugin", _xml.default);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Look to Windward by Iain M. Banks -->\n<book>\n  <name>\n    Look to Windward\n  </name>\n  <author>\n    Iain M. Banks\n  </author>\n  <language>\n    English\n  </language>\n  <genre>\n    Science fiction\n  </genre>\n</book>");
        return _this;
    }
    return XMLView;
}(_view.default);
_defineProperty(XMLView, "defaultProperties", {
    className: "xml"
});
exports.default = XMLView;
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1sLmpzIl0sIm5hbWVzIjpbIlZpZXciLCJYTUxQbHVnaW4iLCJYTUxWaWV3IiwiUGx1Z2luIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUVKLEdBQWtCLENBQWxCLElBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQixPQUFPLGlCQUFiLFFBQVE7Y0FBRixPQUFPO2FBQVAsT0FBTzs4QkFBUCxPQUFPOztpRUFBUCxPQUFPO3dEQUMxQixNQUFNLEdBSGMsSUFBa0I7d0RBS3RDLGNBQWMsSUFBSSxvUkFlYjs7O1dBbEJjLE9BQU87RUFKWCxLQUFTO2dCQUlMLE9BQU8sR0FvQm5CLGlCQUFpQixHQUFHLENBQUM7SUFDMUIsU0FBUyxHQUFFLEdBQUs7QUFDbEIsQ0FBQztrQkF0QmtCLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IFhNTFBsdWdpbiBmcm9tIFwiLi4vLi4vcGx1Z2luL3htbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxWaWV3IGV4dGVuZHMgVmlldyB7XG4gIFBsdWdpbiA9IFhNTFBsdWdpbjtcblxuICBpbml0aWFsQ29udGVudCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjwhLS0gTG9vayB0byBXaW5kd2FyZCBieSBJYWluIE0uIEJhbmtzIC0tPlxuPGJvb2s+XG4gIDxuYW1lPlxuICAgIExvb2sgdG8gV2luZHdhcmRcbiAgPC9uYW1lPlxuICA8YXV0aG9yPlxuICAgIElhaW4gTS4gQmFua3NcbiAgPC9hdXRob3I+XG4gIDxsYW5ndWFnZT5cbiAgICBFbmdsaXNoXG4gIDwvbGFuZ3VhZ2U+XG4gIDxnZW5yZT5cbiAgICBTY2llbmNlIGZpY3Rpb25cbiAgPC9nZW5yZT5cbjwvYm9vaz5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieG1sXCJcbiAgfTtcbn07XG4iXX0=