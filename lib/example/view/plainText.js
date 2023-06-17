"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextView;
    }
});
var _view = /*#__PURE__*/ _interop_require_default(require("../view"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../../plugin/plainText"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var PlainTextView = /*#__PURE__*/ function(View) {
    _inherits(PlainTextView, View);
    var _super = _create_super(PlainTextView);
    function PlainTextView() {
        _class_call_check(this, PlainTextView);
        return _super.apply(this, arguments);
    }
    return PlainTextView;
}(_view.default);
_define_property(PlainTextView, "Plugin", _plainText.default);
_define_property(PlainTextView, "firaCode", true);
_define_property(PlainTextView, "initialContent", "Some plain text...");
_define_property(PlainTextView, "defaultProperties", {
    className: "plain-text"
});
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGxhaW5UZXh0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vdmlld1wiO1xuXG5pbXBvcnQgUGxhaW5UZXh0UGx1Z2luIGZyb20gXCIuLi8uLi9wbHVnaW4vcGxhaW5UZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgc3RhdGljIFBsdWdpbiA9IFBsYWluVGV4dFBsdWdpbjtcblxuICBzdGF0aWMgZmlyYUNvZGUgPSB0cnVlO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBTb21lIHBsYWluIHRleHQuLi5gO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGxhaW4tdGV4dFwiXG4gIH07XG59O1xuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQbGFpblRleHRWaWV3IiwiVmlldyIsIlBsdWdpbiIsIlBsYWluVGV4dFBsdWdpbiIsImZpcmFDb2RlIiwiaW5pdGlhbENvbnRlbnQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkRBSko7Z0VBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1dBQUFBO0VBQXNCQyxhQUFJO0FBQzdDLGlCQURtQkQsZUFDWkUsVUFBU0Msa0JBQWU7QUFFL0IsaUJBSG1CSCxlQUdaSSxZQUFXO0FBRWxCLGlCQUxtQkosZUFLWkssa0JBQWtCO0FBRXpCLGlCQVBtQkwsZUFPWk0scUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==