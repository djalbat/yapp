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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var XMLView = /*#__PURE__*/ function(View) {
    _inherits(XMLView, View);
    var _super = _createSuper(XMLView);
    function XMLView() {
        _classCallCheck(this, XMLView);
        var _this;
        _this = _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4veG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgUGx1Z2luID0gWE1MUGx1Z2luO1xuXG4gIGluaXRpYWxDb250ZW50ID0gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPCEtLSBMb29rIHRvIFdpbmR3YXJkIGJ5IElhaW4gTS4gQmFua3MgLS0+XG48Ym9vaz5cbiAgPG5hbWU+XG4gICAgTG9vayB0byBXaW5kd2FyZFxuICA8L25hbWU+XG4gIDxhdXRob3I+XG4gICAgSWFpbiBNLiBCYW5rc1xuICA8L2F1dGhvcj5cbiAgPGxhbmd1YWdlPlxuICAgIEVuZ2xpc2hcbiAgPC9sYW5ndWFnZT5cbiAgPGdlbnJlPlxuICAgIFNjaWVuY2UgZmljdGlvblxuICA8L2dlbnJlPlxuPC9ib29rPmA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ4bWxcIlxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJYTUxWaWV3IiwiUGx1Z2luIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUVKLEdBQWtCLENBQWxCLElBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQkEsT0FBTyxpQkFBYixRQUFRO2NBQUZBLE9BQU87OEJBQVBBLE9BQU87YUFBUEEsT0FBTzs4QkFBUEEsT0FBTzs7O3VEQUMxQkMsQ0FBTSxTQUhjLElBQWtCO3VEQUt0Q0MsQ0FBYyxpQkFBSSxDQWViOzs7V0FsQmNGLE9BQU87RUFKWCxLQUFTO2dCQUlMQSxPQUFPLEVBb0JuQkcsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQUs7QUFDbEIsQ0FBQztrQkF0QmtCSixPQUFPIn0=