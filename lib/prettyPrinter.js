"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _gutter = _interopRequireDefault(require("./gutter"));
var _syntax = _interopRequireDefault(require("./syntax"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  position: relative;\n  overflow: hidden;\n  \n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PrettyPrinter = /*#__PURE__*/ function(Element) {
    _inherits(PrettyPrinter, Element);
    function PrettyPrinter() {
        _classCallCheck(this, PrettyPrinter);
        return _possibleConstructorReturn(this, _getPrototypeOf(PrettyPrinter).apply(this, arguments));
    }
    _createClass(PrettyPrinter, [
        {
            key: "getWidth",
            value: function getWidth() {
                var hidden = this.isHidden();
                if (hidden) {
                    this.show();
                }
                var width = _get(_getPrototypeOf(PrettyPrinter.prototype), "getWidth", this).call(this);
                if (hidden) {
                    this.hide();
                }
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var hidden = this.isHidden();
                if (hidden) {
                    this.show();
                }
                var height = _get(_getPrototypeOf(PrettyPrinter.prototype), "getHeight", this).call(this);
                if (hidden) {
                    this.hide();
                }
                return height;
            }
        },
        {
            key: "getInnerBounds",
            value: function getInnerBounds(previousGutterWidth) {
                var top = 0, left = 0, width = this.getWidth(), height = this.getHeight();
                left += previousGutterWidth;
                width -= previousGutterWidth;
                var innerBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);
                return innerBounds;
            }
        },
        {
            key: "getRichTextareaBounds",
            value: function getRichTextareaBounds(innerBounds) {
                var top = innerBounds.getTop(), left = innerBounds.getLeft(), width = innerBounds.getWidth(), height = innerBounds.getHeight(), richTextareaBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);
                return richTextareaBounds;
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollGutter(scrollTop, scrollLeft);
                this.scrollSyntax(scrollTop, scrollLeft);
            }
        },
        {
            key: "update",
            value: function update(tokens) {
                var richTextareaBounds = null, previousGutterWidth = this.getPreviousGutterWidth();
                this.updateSyntax(tokens);
                this.updateGutter(tokens);
                var gutterWidth = this.getGutterWidth();
                if (previousGutterWidth !== gutterWidth) {
                    previousGutterWidth = gutterWidth; ///
                    this.setPreviousGutterWidth(previousGutterWidth);
                    richTextareaBounds = this.resize();
                }
                return richTextareaBounds;
            }
        },
        {
            key: "resize",
            value: function resize() {
                var previousGutterWidth = this.getPreviousGutterWidth(), innerBounds = this.getInnerBounds(previousGutterWidth), richTextareaBounds = this.getRichTextareaBounds(innerBounds), bounds = innerBounds; ///
                this.positionGutter();
                this.setSyntaxBounds(bounds);
                return richTextareaBounds;
            }
        },
        {
            key: "getPreviousGutterWidth",
            value: function getPreviousGutterWidth() {
                var state = this.getState(), previousGutterWidth = state.previousGutterWidth;
                return previousGutterWidth;
            }
        },
        {
            key: "setPreviousGutterWidth",
            value: function setPreviousGutterWidth(previousGutterWidth) {
                this.updateState({
                    previousGutterWidth: previousGutterWidth
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ _easy.React.createElement(_gutter.default, null),
                    /*#__PURE__*/ _easy.React.createElement(_syntax.default, null), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), resizePrettyPrinter = this.resize.bind(this), updatePrettyPrinter = this.update.bind(this), scrollPrettyPrinter = this.scroll.bind(this), setPrettyPrinterWidth = this.setWidth.bind(this), setPrettyPrinterHeight = this.setHeight.bind(this), parentContext1 = Object.assign({
                }, context, {
                    resizePrettyPrinter: resizePrettyPrinter,
                    updatePrettyPrinter: updatePrettyPrinter,
                    scrollPrettyPrinter: scrollPrettyPrinter,
                    setPrettyPrinterWidth: setPrettyPrinterWidth,
                    setPrettyPrinterHeight: setPrettyPrinterHeight
                });
                return parentContext1;
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousGutterWidth = 0;
                this.setState({
                    previousGutterWidth: previousGutterWidth
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "getGutterWidth",
                    "setSyntaxBounds",
                    "positionGutter",
                    "updateGutter",
                    "updateSyntax",
                    "scrollGutter",
                    "scrollSyntax"
                ]);
                this.setInitialState();
            }
        }
    ]);
    return PrettyPrinter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PrettyPrinter, "tagName", "div");
_defineProperty(PrettyPrinter, "defaultProperties", {
    className: "pretty-printer"
});
var _default = (0, _easyWithStyle).default(PrettyPrinter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiQm91bmRzIiwiRWxlbWVudCIsIkd1dHRlciIsIlN5bnRheCIsIlByZXR0eVByaW50ZXIiLCJnZXRXaWR0aCIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImdldEhlaWdodCIsImhlaWdodCIsImdldElubmVyQm91bmRzIiwicHJldmlvdXNHdXR0ZXJXaWR0aCIsInRvcCIsImxlZnQiLCJpbm5lckJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInVwZGF0ZSIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVTeW50YXgiLCJ1cGRhdGVHdXR0ZXIiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImJvdW5kcyIsInBvc2l0aW9uR3V0dGVyIiwic2V0U3ludGF4Qm91bmRzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRUEsR0FBTSxDQUFOLEtBQU07QUFFMUIsR0FBVSxDQUFWLE9BQVU7QUFDVixHQUFVLENBQVYsT0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVLVywyUUFleEM7Ozs7Ozs7SUFwTE0sYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDakIsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBRTVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxJQUFJLENBQUMsSUFBSTtnQkFDWCxDQUFDO2dCQUVELEdBQUssQ0FBQyxLQUFLLHdCQVJULGFBQWEsY0FRSyxRQUFRLEdBQWQsSUFBSztnQkFFbkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNYLElBQUksQ0FBQyxJQUFJO2dCQUNYLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7WUFFRCxHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFFNUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNYLElBQUksQ0FBQyxJQUFJO2dCQUNYLENB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