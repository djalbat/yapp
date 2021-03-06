"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyLayout = require("easy-layout");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 12rem;\n  min-height: 6rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MiddleSizeableDiv = function(SizeableDiv) {
    _inherits(MiddleSizeableDiv, _easyLayout.SizeableDiv);
    function MiddleSizeableDiv() {
        _classCallCheck(this, MiddleSizeableDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MiddleSizeableDiv).apply(this, arguments));
    }
    return MiddleSizeableDiv;
}(_easyLayout.SizeableDiv);
_defineProperty(MiddleSizeableDiv, "defaultProperties", {
    className: "middle"
});
var _default = _easyWithStyle.default(MiddleSizeableDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS9taWRkbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNpemVhYmxlRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmNsYXNzIE1pZGRsZVNpemVhYmxlRGl2IGV4dGVuZHMgU2l6ZWFibGVEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1pZGRsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNaWRkbGVTaXplYWJsZURpdilgXG5cbiAgaGVpZ2h0OiAxMnJlbTtcbiAgbWluLWhlaWdodDogNnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFWCxXQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVFHLCtDQUs1Qzs7Ozs7OztJQVhNLGlCQUFpQixZQUFTLFdBQVc7Y0FBckMsaUJBQWlCLEVBRkssV0FBYTthQUVuQyxpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztXQUFqQixpQkFBaUI7RUFGSyxXQUFhO2dCQUVuQyxpQkFBaUIsR0FDZCxpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7O2VBTkQsY0FBaUIsU0FVZCxpQkFBaUIifQ==