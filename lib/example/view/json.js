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
var JSONView = /*#__PURE__*/ function(View) {
    _inherits(JSONView, View);
    var _super = _createSuper(JSONView);
    function JSONView() {
        _classCallCheck(this, JSONView);
        return _super.apply(this, arguments);
    }
    return JSONView;
}(_view.default);
exports.default = JSONView;
_defineProperty(JSONView, "Plugin", _json.default);
_defineProperty(JSONView, "firaCode", true);
_defineProperty(JSONView, "initialContent", "{  \n  \"type\": \"book\",\n  \"title\": \"Look to Windward\",\n  \"author\": \"Look to Windward\",\n  \"stores\" : [{\n    \"identifier\": 123\n  }],\n  \"details\" : {\n    \"in-print\": true,\n    \"stock-count\": 123\n  }\n}");
_defineProperty(JSONView, "defaultProperties", {
    className: "json"
});
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuaW1wb3J0IEpTT05QbHVnaW4gZnJvbSBcIi4uLy4uL3BsdWdpbi9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05WaWV3IGV4dGVuZHMgVmlldyB7XG4gIHN0YXRpYyBQbHVnaW4gPSBKU09OUGx1Z2luO1xuXG4gIHN0YXRpYyBmaXJhQ29kZSA9IHRydWU7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYHsgIFxuICBcInR5cGVcIjogXCJib29rXCIsXG4gIFwidGl0bGVcIjogXCJMb29rIHRvIFdpbmR3YXJkXCIsXG4gIFwiYXV0aG9yXCI6IFwiTG9vayB0byBXaW5kd2FyZFwiLFxuICBcInN0b3Jlc1wiIDogW3tcbiAgICBcImlkZW50aWZpZXJcIjogMTIzXG4gIH1dLFxuICBcImRldGFpbHNcIiA6IHtcbiAgICBcImluLXByaW50XCI6IHRydWUsXG4gICAgXCJzdG9jay1jb3VudFwiOiAxMjNcbiAgfVxufWA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJqc29uXCJcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSlNPTlZpZXciLCJWaWV3IiwiUGx1Z2luIiwiSlNPTlBsdWdpbiIsImZpcmFDb2RlIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRWlCLEdBQVMsQ0FBVCxLQUFTO0FBRUgsR0FBbUIsQ0FBbkIsS0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFKMUM7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFNZSxHQUFLLENBQUNBLFFBQVEsaUJBQWQsUUFBUTs2QkFOdkI7O2FBTXFCQSxRQUFRO3VDQU43Qjs7OztFQU1zQ0MsS0FBSTtrQkFBckJELFFBQVEsQUFON0I7Z0JBTXFCQSxRQUFRLEVBQ3BCRSxDQUFNLFNBQUdDLEtBQVUsU0FQNUI7Z0JBTXFCSCxRQUFRLEVBR3BCSSxDQUFRLFdBQUcsSUFBSSxDQVR4QjtnQkFNcUJKLFFBQVEsRUFLcEJLLENBQWMsaUJBQUksQ0FXMUIsc09BdEJEO2dCQU1xQkwsUUFBUSxFQWtCcEJNLENBQWlCLG9CQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUMsQ0ExQkgifQ==