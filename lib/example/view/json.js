"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _view = _interopRequireDefault(require("../view"));
var _json = _interopRequireDefault(require("../../plugin/json"));
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
var JSONView = /*#__PURE__*/ function(View) {
    _inherits(JSONView, View);
    function JSONView() {
        _classCallCheck(this, JSONView);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(JSONView).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "Plugin", _json.default);
        _defineProperty(_assertThisInitialized(_this), "initialContent", "{  \n  \"type\": \"book\",\n  \"title\": \"Look to Windward\",\n  \"author\": \"Look to Windward\",\n  \"stores\" : [{\n    \"identifier\": 123\n  }],\n  \"details\" : {\n    \"in-print\": true,\n    \"stock-count\": 123\n  }\n}");
        return _this;
    }
    return JSONView;
}(_view.default);
_defineProperty(JSONView, "defaultProperties", {
    className: "json"
});
exports.default = JSONView;
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEpTT05QbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05WaWV3IGV4dGVuZHMgVmlldyB7XG4gIFBsdWdpbiA9IEpTT05QbHVnaW47XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBgeyAgXG4gIFwidHlwZVwiOiBcImJvb2tcIixcbiAgXCJ0aXRsZVwiOiBcIkxvb2sgdG8gV2luZHdhcmRcIixcbiAgXCJhdXRob3JcIjogXCJMb29rIHRvIFdpbmR3YXJkXCIsXG4gIFwic3RvcmVzXCIgOiBbe1xuICAgIFwiaWRlbnRpZmllclwiOiAxMjNcbiAgfV0sXG4gIFwiZGV0YWlsc1wiIDoge1xuICAgIFwiaW4tcHJpbnRcIjogdHJ1ZSxcbiAgICBcInN0b2NrLWNvdW50XCI6IDEyM1xuICB9XG59YDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImpzb25cIlxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBRUgsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJCLFFBQVE7Y0FBUixRQUFRO2FBQVIsUUFBUTs4QkFBUixRQUFROztpRUFBUixRQUFRO3dEQUMzQixNQUFNLEdBSGUsS0FBbUI7d0RBS3hDLGNBQWMsSUFBSSxvT0FXbkI7OztXQWRvQixRQUFRO0VBSlosS0FBUztnQkFJTCxRQUFRLEdBZ0JwQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLElBQU07O2tCQWpCQSxRQUFRIn0=