"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 60rem;\n  min-width: 24rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LeftSizeableDiv = /*#__PURE__*/ function(SizeableDiv) {
    _inherits(LeftSizeableDiv, SizeableDiv);
    var _super = _createSuper(LeftSizeableDiv);
    function LeftSizeableDiv() {
        _classCallCheck(this, LeftSizeableDiv);
        return _super.apply(this, arguments);
    }
    _createClass(LeftSizeableDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), getLeftSizeableDivWidth = this.getWidth.bind(this), parentContext1 = Object.assign(context, {
                    getLeftSizeableDivWidth: getLeftSizeableDivWidth
                });
                return parentContext1;
            }
        }
    ]);
    return LeftSizeableDiv;
}(_easyLayout.SizeableDiv);
_defineProperty(LeftSizeableDiv, "defaultProperties", {
    className: "left"
});
var _default = (0, _easyWithStyle.default)(LeftSizeableDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS9sZWZ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBTaXplYWJsZURpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5jbGFzcyBMZWZ0U2l6ZWFibGVEaXYgZXh0ZW5kcyBTaXplYWJsZURpdiB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdldExlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGdldExlZnRTaXplYWJsZURpdldpZHRoXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGVmdFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZWZ0U2l6ZWFibGVEaXYpYFxuXG4gIHdpZHRoOiA2MHJlbTtcbiAgbWluLXdpZHRoOiAyNHJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkxlZnRTaXplYWJsZURpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwiZ2V0V2lkdGgiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiU2l6ZWFibGVEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O2tFQUVTLGlCQUFpQjswQkFFWCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBQSxBQUFNQSxlQUFlLGlCQWdCbEIsQUFoQkg7OzthQUFNQSxlQUFlOzs7Ozs7WUFDbkJDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxFQUMzQkMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbERMLGNBQWEsR0FBR00sTUFBTSxDQUFDQyxNQUFNLENBQUNOLE9BQU8sRUFBRTtvQkFDckNFLHVCQUF1QixFQUF2QkEsdUJBQXVCO2lCQUN4QixDQUFDLEFBQUM7Z0JBRVQsT0FBT0gsY0FBYSxDQUFDO2FBQ3RCOzs7O0NBS0YsQ0FkNkJRLFdBQVcsWUFBQSxDQWN4QztBQUhDLGdCQVhJVCxlQUFlLEVBV1pVLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsTUFBTTtDQUNsQixDQUFDO2VBR1dDLElBQUFBLGNBQVMsUUFBQSxFQUFDWixlQUFlLENBQUMifQ==