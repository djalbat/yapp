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
var _easy = require("easy");
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("./syntax"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
        "\n\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  grid-area: syntax;\n\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Highlights = /*#__PURE__*/ function(Element) {
    _inherits(Highlights, Element);
    var _super = _createSuper(Highlights);
    function Highlights() {
        _classCallCheck(this, Highlights);
        return _super.apply(this, arguments);
    }
    _createClass(Highlights, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateSyntax(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollSyntax(scrollTop, scrollLeft);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_syntax.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updateHighlights = this.update.bind(this), scrollHighlights = this.scroll.bind(this), parentContext1 = Object.assign({}, context, {
                    updateHighlights: updateHighlights,
                    scrollHighlights: scrollHighlights
                });
                return parentContext1;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "updateHighlights",
                    "scrollHighlights",
                    "scrollbarThickness"
                ]);
            }
        }
    ]);
    return Highlights;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Highlights, "tagName", "div");
_defineProperty(Highlights, "defaultProperties", {
    className: "highlights"
});
var _default = (0, _easyWithStyle.default)(Highlights)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oaWdobGlnaHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcclxuXHJcbmNsYXNzIEhpZ2hsaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN5bnRheCh0b2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zY3JvbGxTeW50YXgoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPFN5bnRheC8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICB1cGRhdGVIaWdobGlnaHRzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxIaWdobGlnaHRzID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcclxuICAgICAgICAgICAgdXBkYXRlSGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgc2Nyb2xsSGlnaGxpZ2h0c1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcclxuICAgICAgXCJ1cGRhdGVIaWdobGlnaHRzXCIsXHJcbiAgICAgIFwic2Nyb2xsSGlnaGxpZ2h0c1wiLFxyXG4gICAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImhpZ2hsaWdodHNcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShIaWdobGlnaHRzKWBcclxuXHJcbiAgei1pbmRleDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1hcmVhOiBzeW50YXg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiSGlnaGxpZ2h0cyIsInVwZGF0ZSIsInRva2VucyIsInVwZGF0ZVN5bnRheCIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxTeW50YXgiLCJjaGlsZEVsZW1lbnRzIiwiU3ludGF4IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlSGlnaGxpZ2h0cyIsImJpbmQiLCJzY3JvbGxIaWdobGlnaHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBb0RiLFNBaUJFOzs7ZUFqQkYsUUFpQkU7OztrRUFuRW9CLGlCQUFpQjtvQkFFZixNQUFNOzJEQUVYLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLFVBQVUsaUJBNENmLEFBNUNEO2NBQU1BLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUNkQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQ0MsWUFBWSxDQUFDRCxNQUFNLENBQUMsQ0FBQztZQUM1QixDQUFDOzs7WUFFREUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLFlBQVksQ0FBQ0YsU0FBUyxFQUFFQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDOzs7WUFFREUsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QscUJBRUUsb0JBQUNDLE9BQU0sUUFBQSxPQUFFLENBRVQ7WUFDSixDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2YsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEVBQzFCQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNaLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM3Q0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDWCxNQUFNLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDckNKLGNBQWEsR0FBR00sTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFTixPQUFPLEVBQUU7b0JBQ3pDRSxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtvQkFDaEJFLGdCQUFnQixFQUFoQkEsZ0JBQWdCO2lCQUNqQixDQUFDLEFBQUM7Z0JBRVQsT0FBT0wsY0FBYSxDQUFDO1lBQ3ZCLENBQUM7OztZQUVEUSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxJQUFJLENBQUNDLGFBQWEsQ0FBQztvQkFDakIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtpQkFDckIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7O1dBbkNHbkIsVUFBVTtDQTBDZixrQkExQ3dCb0IsS0FBTyxRQUFBLEVBMEMvQjtBQUxDLGdCQXJDSXBCLFVBQVUsRUFxQ1BxQixTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQXZDSXJCLFVBQVUsRUF1Q1BzQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFlBQVk7Q0FDeEIsQ0FBQztJQUdKLFFBaUJFLEdBakJhQyxJQUFBQSxjQUFTLFFBQUEsRUFBQ3hCLFVBQVUsQ0FBQyJ9