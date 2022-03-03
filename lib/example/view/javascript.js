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
var JavaScriptView = /*#__PURE__*/ function(View) {
    _inherits(JavaScriptView, View);
    var _super = _createSuper(JavaScriptView);
    function JavaScriptView() {
        _classCallCheck(this, JavaScriptView);
        return _super.apply(this, arguments);
    }
    return JavaScriptView;
}(_view.default);
exports.default = JavaScriptView;
_defineProperty(JavaScriptView, "Plugin", _javascript.default);
_defineProperty(JavaScriptView, "firaCode", true);
_defineProperty(JavaScriptView, "initialContent", "\"use strict\";\n\nimport \"juxtapose\";\n\nimport withStyle from \"easy-with-style\"; ///\n\nimport { Body } from \"easy\";\n\nfunction simpleApplication(selector) {\n  const body = new Body(selector);\n\n  body.mount(\n\n    <p>\n      A simple application.\n    </p>\n\n  );\n}\n\nexport default withStyle(simpleApplication)`\n\n  color: #333;\n\n`;");
_defineProperty(JavaScriptView, "defaultProperties", {
    className: "javascript"
});
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEphdmFTY3JpcHRQbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qYXZhc2NyaXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRWaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luO1xuXG4gIHN0YXRpYyBmaXJhQ29kZSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7IC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZnVuY3Rpb24gc2ltcGxlQXBwbGljYXRpb24oc2VsZWN0b3IpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KHNlbGVjdG9yKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKHNpbXBsZUFwcGxpY2F0aW9uKVxcYFxuXG4gIGNvbG9yOiAjMzMzO1xuXG5cXGA7YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImphdmFzY3JpcHRcIlxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0VmlldyIsIlZpZXciLCJQbHVnaW4iLCJKYXZhU2NyaXB0UGx1Z2luIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFSSxHQUFTLENBQVQsS0FBUztBQUVHLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1U7O3dCOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFakNBLGNBQWMsaUJBQXBCLFFBQVE7bUM7O2FBQUZBLGNBQWM7NkM7Ozs7RUFBU0MsS0FBSTtrQkFBM0JELGNBQWMsQTtnQkFBZEEsY0FBYyxFQUMxQkUsQ0FBTSxTQUFHQyxXQUFnQixTO2dCQURiSCxjQUFjLEVBRzFCSSxDQUFRLFdBQUcsSUFBSSxDO2dCQUhISixjQUFjLEVBSzFCSyxDQUFjLGlCQUFJLENBd0J4QixrVztnQkE3QmtCTCxjQUFjLEVBK0IxQk0sQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVk7QUFDekIsQ0FBQyxDIn0=