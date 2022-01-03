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
        var _this;
        _this = _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEphdmFTY3JpcHRQbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qYXZhc2NyaXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRWaWV3IGV4dGVuZHMgVmlldyB7XG4gIFBsdWdpbiA9IEphdmFTY3JpcHRQbHVnaW47XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5mdW5jdGlvbiBzaW1wbGVBcHBsaWNhdGlvbihzZWxlY3Rvcikge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoc2VsZWN0b3IpO1xuXG4gIGJvZHkubW91bnQoXG5cbiAgICA8cD5cbiAgICAgIEEgc2ltcGxlIGFwcGxpY2F0aW9uLlxuICAgIDwvcD5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoc2ltcGxlQXBwbGljYXRpb24pXFxgXG5cbiAgY29sb3I6ICMzMzM7XG5cblxcYDtgO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiamF2YXNjcmlwdFwiXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRWaWV3IiwiUGx1Z2luIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUVHLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQ0EsY0FBYyxpQkFBcEIsUUFBUTtjQUFGQSxjQUFjOzhCQUFkQSxjQUFjO2FBQWRBLGNBQWM7OEJBQWRBLGNBQWM7Ozt1REFDakNDLENBQU0sU0FIcUIsV0FBeUI7dURBS3BEQyxDQUFjLGlCQUFJLENBd0JqQjs7O1dBM0JrQkYsY0FBYztFQUpsQixLQUFTO2dCQUlMQSxjQUFjLEVBNkIxQkcsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVk7QUFDekIsQ0FBQztrQkEvQmtCSixjQUFjIn0=