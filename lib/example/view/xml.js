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
    "@swc/helpers - typeof";
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
        return _super.apply(this, arguments);
    }
    return XMLView;
}(_view.default);
exports.default = XMLView;
_defineProperty(XMLView, "Plugin", _xml.default);
_defineProperty(XMLView, "firaCode", false);
_defineProperty(XMLView, "initialContent", "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- Look to Windward by Iain M. Banks -->\n<book>\n  <name>\n    Look to Windward\n  </name>\n  <author>\n    Iain M. Banks\n  </author>\n  <language>\n    English\n  </language>\n  <genre>\n    Science fiction\n  </genre>\n</book>");
_defineProperty(XMLView, "defaultProperties", {
    className: "xml"
});
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4veG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIFBsdWdpbiA9IFhNTFBsdWdpbjtcblxuICBzdGF0aWMgZmlyYUNvZGUgPSBmYWxzZTtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48IS0tIExvb2sgdG8gV2luZHdhcmQgYnkgSWFpbiBNLiBCYW5rcyAtLT5cbjxib29rPlxuICA8bmFtZT5cbiAgICBMb29rIHRvIFdpbmR3YXJkXG4gIDwvbmFtZT5cbiAgPGF1dGhvcj5cbiAgICBJYWluIE0uIEJhbmtzXG4gIDwvYXV0aG9yPlxuICA8bGFuZ3VhZ2U+XG4gICAgRW5nbGlzaFxuICA8L2xhbmd1YWdlPlxuICA8Z2VucmU+XG4gICAgU2NpZW5jZSBmaWN0aW9uXG4gIDwvZ2VucmU+XG48L2Jvb2s+YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInhtbFwiXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlhNTFZpZXciLCJWaWV3IiwiUGx1Z2luIiwiWE1MUGx1Z2luIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBRUosR0FBa0IsQ0FBbEIsSUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQkEsT0FBTyxpQkFBYixRQUFROzs7YUFBRkEsT0FBTzs7Ozs7RUFBU0MsS0FBSTtrQkFBcEJELE9BQU87Z0JBQVBBLE9BQU8sRUFDbkJFLENBQU0sU0FBR0MsSUFBUztnQkFETkgsT0FBTyxFQUduQkksQ0FBUSxXQUFHLEtBQUs7Z0JBSEpKLE9BQU8sRUFLbkJLLENBQWMsaUJBQUksQ0FlcEI7Z0JBcEJjTCxPQUFPLEVBc0JuQk0sQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQUs7QUFDbEIsQ0FBQyJ9