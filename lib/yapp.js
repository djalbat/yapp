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
var _style = /*#__PURE__*/ _interopRequireDefault(require("./mixins/style"));
var _richTextarea = /*#__PURE__*/ _interopRequireDefault(require("./richTextarea"));
var _prettyPrinter = /*#__PURE__*/ _interopRequireDefault(require("./prettyPrinter"));
var _scrollbarThickness = require("./utilities/scrollbarThickness");
var _plugin = require("./utilities/plugin");
var _properties = require("./utilities/properties");
var _content = require("./utilities/content");
var _colour = require("./scheme/colour");
var _defaults = require("./defaults");
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
        "\n\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ",
        ";\n  caret-color: ",
        ";\n  border-color: ",
        ";\n  background-color: ",
        ';\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: "Menlo", "Lucida Sans Typewriter", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: "Fira Code";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: "calt" 1;\n    \n  }\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Yapp = /*#__PURE__*/ function(Element) {
    _inherits(Yapp, Element);
    var _super = _createSuper(Yapp);
    function Yapp(selector, plugin) {
        _classCallCheck(this, Yapp);
        var _this;
        _this = _super.call(this, selector);
        _this.plugin = plugin;
        return _this;
    }
    _createClass(Yapp, [
        {
            key: "getPlugin",
            value: function getPlugin() {
                return this.plugin;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var richTextareaContent = this.getRichTextareaContent(), content = richTextareaContent; ///
                return content;
            }
        },
        {
            key: "getInnerBounds",
            value: function getInnerBounds(gutterWidth) {
                var top, left, width = this.getWidth(), height = this.getHeight();
                var paddingTop = this.getPaddingTop(), paddingLeft = this.getPaddingLeft(), paddingRight = this.getPaddingRight(), paddingBottom = this.getPaddingBottom(), borderTopWidth = this.getBorderTopWidth(), borderLeftWidth = this.getBorderLeftWidth(), borderRightWidth = this.getBorderRightWidth(), borderBottomWidth = this.getBorderBottomWidth();
                top = paddingTop;
                left = paddingLeft;
                width -= borderLeftWidth + paddingLeft + paddingRight + borderRightWidth;
                height -= borderTopWidth + paddingTop + paddingBottom + borderBottomWidth;
                if (gutterWidth !== null) {
                    left += gutterWidth;
                    width -= gutterWidth;
                }
                var bounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height), innerBounds = bounds; ///
                return innerBounds;
            }
        },
        {
            key: "getInitialLineCount",
            value: function getInitialLineCount() {
                var content = this.getContent(), lineCount = (0, _content.lineCountFromContent)(content), initialLineCount = lineCount; ///
                return initialLineCount;
            }
        },
        {
            key: "getScrollbarThickness",
            value: function getScrollbarThickness() {
                var scrollbarThickness = 0;
                var _properties = this.properties, _hiddenScrollbars = _properties.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars;
                if (!hiddenScrollbars) {
                    var _properties1 = this.properties, _fancyScrollbars = _properties1.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars;
                    scrollbarThickness = (0, _scrollbarThickness.getScrollbarThickness)(fancyScrollbars);
                }
                return scrollbarThickness;
            }
        },
        {
            key: "setLexer",
            value: function setLexer(lexer) {
                this.plugin.setLexer(lexer);
            }
        },
        {
            key: "setParser",
            value: function setParser(parser) {
                this.plugin.setParser(parser);
            }
        },
        {
            key: "changeHandler",
            value: function changeHandler(event, element) {
                var richTextarea = element, contentChanged = richTextarea.hasContentChanged();
                if (contentChanged) {
                    var onContentChange = this.properties.onContentChange, contentChangeHandler = onContentChange; ///
                    this.update();
                    element = this; ///
                    contentChangeHandler && contentChangeHandler(event, element); ///
                }
            }
        },
        {
            key: "scrollHandler",
            value: function scrollHandler(event, element) {
                var richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
            }
        },
        {
            key: "update",
            value: function update() {
                var content = this.getContent();
                this.plugin.update(content);
                var tokens = this.plugin.getTokens(), gutterWidth = this.updatePrettyPrinter(tokens);
                if (gutterWidth !== null) {
                    var innerBounds = this.getInnerBounds(gutterWidth), richTextareaBounds = innerBounds; ///
                    this.setRichTextareaBounds(richTextareaBounds);
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
                var innerBounds, gutterWidth;
                gutterWidth = null;
                innerBounds = this.getInnerBounds(gutterWidth);
                var prettyPrinterBounds = innerBounds; ///
                this.setPrettyPrinterBounds(prettyPrinterBounds);
                gutterWidth = this.resizePrettyPrinter();
                innerBounds = this.getInnerBounds(gutterWidth);
                var richTextareaBounds = innerBounds; ///
                this.setRichTextareaBounds(richTextareaBounds);
            }
        },
        {
            key: "render",
            value: function render() {
                var lineHeight = this.getLineHeight(), paddingTop = this.getPaddingTop(), paddingBottom = this.getPaddingBottom(), borderTopWidth = this.getBorderTopWidth(), initialLineCount = this.getInitialLineCount(), borderBottomWidth = this.getBorderBottomWidth(), scrollbarThickness = this.getScrollbarThickness(), height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;
                this.setHeight(height);
                this.resize();
                this.update();
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode, _deferRender = _properties.deferRender, deferRender = _deferRender === void 0 ? _defaults.DEFAULT_DEFER_RENDER : _deferRender;
                if (firaCode) {
                    this.addClass("fira-code");
                }
                if (deferRender) {
                    return;
                }
                this.render();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, _firaCode = _properties.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode;
                if (firaCode) {
                    this.removeClass("fira-code");
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, _hiddenGutter = _properties.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _hiddenScrollbars = _properties.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars, _fancyScrollbars = _properties.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, changeHandler = this.changeHandler.bind(this), scrollHandler = this.scrollHandler.bind(this), scrollbarThickness = this.getScrollbarThickness();
                return [
                    /*#__PURE__*/ _easy.React.createElement(_prettyPrinter.default, {
                        hiddenGutter: hiddenGutter,
                        scrollbarThickness: scrollbarThickness
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                        onChange: changeHandler,
                        onScroll: scrollHandler,
                        hiddenScrollbars: hiddenScrollbars,
                        fancyScrollbars: fancyScrollbars,
                        active: true
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPlugin = this.getPlugin.bind(this), getContent = this.getContent.bind(this), updateYapp = this.update.bind(this), resizeYapp = this.resize.bind(this), setYappWidth = this.setWidth.bind(this), setYappHeight = this.setHeight.bind(this), setYappLexer = this.setLexer.bind(this), setYappParser = this.setParser.bind(this); ///
                return {
                    getPlugin: getPlugin,
                    getContent: getContent,
                    updateYapp: updateYapp,
                    resizeYapp: resizeYapp,
                    setYappWidth: setYappWidth,
                    setYappHeight: setYappHeight,
                    setYappLexer: setYappLexer,
                    setYappParser: setYappParser
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var _this = this;
                this.assignContext();
                var _properties = this.properties, childElements = _properties.childElements, _editable = _properties.editable, editable = _editable === void 0 ? _defaults.DEFAULT_EDITABLE : _editable, language = this.plugin.getLanguage(), content = (0, _content.contentFromChildElements)(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
                this.setLanguage(language);
                this.scrollPrettyPrinter(scrollTop, scrollLeft);
                this.setRichTextareaContent(content);
                this.setRichTextareaReadOnly(readOnly);
                this.onResize(function(event, element) {
                    return _this.resize();
                });
            }
        }
    ], [
        {
            key: "fromContent",
            value: function fromContent(content, language, Plugin, options) {
                var Class = Yapp, properties = (0, _properties.propertiesFromContentLanguagePluginAndOptions)(content, language, Plugin, options), plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin = properties.Plugin, plugin = (0, _plugin.pluginFromLanguageAndPlugin)(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        }
    ]);
    return Yapp;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Yapp, "tagName", "div");
_defineProperty(Yapp, "defaultProperties", {
    className: "yapp"
});
_defineProperty(Yapp, "ignoredProperties", [
    "Plugin",
    "language",
    "firaCode",
    "editable",
    "deferRender",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
]);
Object.assign(Yapp.prototype, _style.default);
var _default = (0, _easyWithStyle.default)(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHN0eWxlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdHlsZVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSB7XG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0xlZnQgPSB0aGlzLmdldFBhZGRpbmdMZWZ0KCksXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQYWRkaW5nUmlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICB0b3AgPSBwYWRkaW5nVG9wO1xuICAgIGxlZnQgPSBwYWRkaW5nTGVmdDtcblxuICAgIHdpZHRoIC09ICggYm9yZGVyTGVmdFdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBib3JkZXJSaWdodFdpZHRoICk7XG4gICAgaGVpZ2h0IC09ICggYm9yZGVyVG9wV2lkdGggKyBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbSArIGJvcmRlckJvdHRvbVdpZHRoICk7XG5cbiAgICBpZiAoZ3V0dGVyV2lkdGggIT09IG51bGwpIHtcbiAgICAgIGxlZnQgKz0gZ3V0dGVyV2lkdGg7XG4gICAgICB3aWR0aCAtPSBndXR0ZXJXaWR0aDtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIGlubmVyQm91bmRzID0gYm91bmRzOyAvLy9cblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldEluaXRpYWxMaW5lQ291bnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSBsaW5lQ291bnQ7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxMaW5lQ291bnQ7XG4gIH1cblxuICBnZXRTY3JvbGxiYXJUaGlja25lc3MoKSB7XG4gICAgbGV0IHNjcm9sbGJhclRoaWNrbmVzcyA9IDA7XG5cbiAgICBjb25zdCB7IGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoIWhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIGNvbnN0IHsgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IGdldFNjcm9sbGJhclRoaWNrbmVzcyhmYW5jeVNjcm9sbGJhcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxiYXJUaGlja25lc3M7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikgeyB0aGlzLnBsdWdpbi5zZXRMZXhlcihsZXhlcik7IH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7IHRoaXMucGx1Z2luLnNldFBhcnNlcihwYXJzZXIpOyB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gcmljaFRleHRhcmVhLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XG5cbiAgICBpZiAoY29udGVudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHsgb25Db250ZW50Q2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IG9uQ29udGVudENoYW5nZTsgLy8vXG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgJiYgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpOyAvLy9cbiAgICB9XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy5wbHVnaW4udXBkYXRlKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5wbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgZ3V0dGVyV2lkdGggPSB0aGlzLnVwZGF0ZVByZXR0eVByaW50ZXIodG9rZW5zKTtcblxuICAgIGlmIChndXR0ZXJXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSxcbiAgICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgICB9XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgbGV0IGlubmVyQm91bmRzLFxuICAgICAgICBndXR0ZXJXaWR0aDtcblxuICAgIGd1dHRlcldpZHRoID0gbnVsbDtcblxuICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhndXR0ZXJXaWR0aCk7XG5cbiAgICBjb25zdCBwcmV0dHlQcmludGVyQm91bmRzID0gaW5uZXJCb3VuZHM7ICAvLy9cblxuICAgIHRoaXMuc2V0UHJldHR5UHJpbnRlckJvdW5kcyhwcmV0dHlQcmludGVyQm91bmRzKTtcblxuICAgIGd1dHRlcldpZHRoID0gdGhpcy5yZXNpemVQcmV0dHlQcmludGVyKCk7XG5cbiAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpO1xuXG4gICAgY29uc3QgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFCb3VuZHMocmljaFRleHRhcmVhQm91bmRzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5nZXRMaW5lSGVpZ2h0KCksXG4gICAgICAgICAgcGFkZGluZ1RvcCA9IHRoaXMuZ2V0UGFkZGluZ1RvcCgpLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBhZGRpbmdCb3R0b20oKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gdGhpcy5nZXRJbml0aWFsTGluZUNvdW50KCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBpbml0aWFsTGluZUNvdW50ICogbGluZUhlaWdodCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCArIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSwgZGVmZXJSZW5kZXIgPSBERUZBVUxUX0RFRkVSX1JFTkRFUiB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cblxuICAgIGlmIChkZWZlclJlbmRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyID0gREVGQVVMVF9ISURERU5fR1VUVEVSLCBoaWRkZW5TY3JvbGxiYXJzID0gREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgZmFuY3lTY3JvbGxiYXJzID0gREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSB0aGlzLmdldFNjcm9sbGJhclRoaWNrbmVzcygpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxQcmV0dHlQcmludGVyIGhpZGRlbkd1dHRlcj17aGlkZGVuR3V0dGVyfSBzY3JvbGxiYXJUaGlja25lc3M9e3Njcm9sbGJhclRoaWNrbmVzc30gLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0gaGlkZGVuU2Nyb2xsYmFycz17aGlkZGVuU2Nyb2xsYmFyc30gZmFuY3lTY3JvbGxiYXJzPXtmYW5jeVNjcm9sbGJhcnN9IGFjdGl2ZSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luLmJpbmQodGhpcyksXG4gICAgICAgICAgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZVlhcHAgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgcmVzaXplWWFwcCA9IHRoaXMucmVzaXplLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwSGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBMZXhlciA9IHRoaXMuc2V0TGV4ZXIuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBQYXJzZXIgPSB0aGlzLnNldFBhcnNlci5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBsdWdpbixcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICB1cGRhdGVZYXBwLFxuICAgICAgcmVzaXplWWFwcCxcbiAgICAgIHNldFlhcHBXaWR0aCxcbiAgICAgIHNldFlhcHBIZWlnaHQsXG4gICAgICBzZXRZYXBwTGV4ZXIsXG4gICAgICBzZXRZYXBwUGFyc2VyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBlZGl0YWJsZSA9IERFRkFVTFRfRURJVEFCTEUgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBsYW5ndWFnZSA9IHRoaXMucGx1Z2luLmdldExhbmd1YWdlKCksXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLCAgLy8vXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7IC8vL1xuXG4gICAgdGhpcy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQ29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgoZXZlbnQsIGVsZW1lbnQpID0+IHRoaXMucmVzaXplKCkpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwieWFwcFwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiUGx1Z2luXCIsXG4gICAgXCJsYW5ndWFnZVwiLFxuICAgIFwiZmlyYUNvZGVcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJkZWZlclJlbmRlclwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJub1Njcm9sbGJhcnNcIixcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBDbGFzcyA9IFlhcHAsXG4gICAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyhjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSwgUGx1Z2luIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFlhcHAucHJvdG90eXBlLCBzdHlsZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZYXBwKWBcblxuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBcbiAgY29sb3I6ICR7Y29sb3VyfTtcbiAgY2FyZXQtY29sb3I6ICR7Y2FyZXRDb2xvdXJ9O1xuICBib3JkZXItY29sb3I6ICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNZW5sb1wiLCBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIiwgbW9ub3NwYWNlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcblxuICAuZmlyYS1jb2RlIHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTtcbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIllhcHAiLCJzZWxlY3RvciIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldENvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRJbm5lckJvdW5kcyIsImd1dHRlcldpZHRoIiwidG9wIiwibGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJwYWRkaW5nVG9wIiwiZ2V0UGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwiZ2V0UGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJnZXRQYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiZ2V0UGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiZ2V0Qm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJnZXRJbml0aWFsTGluZUNvdW50IiwibGluZUNvdW50IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJpbml0aWFsTGluZUNvdW50IiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsImhpZGRlblNjcm9sbGJhcnMiLCJERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIiwiZmFuY3lTY3JvbGxiYXJzIiwiREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwib25Db250ZW50Q2hhbmdlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInJlc2l6ZSIsInByZXR0eVByaW50ZXJCb3VuZHMiLCJzZXRQcmV0dHlQcmludGVyQm91bmRzIiwicmVzaXplUHJldHR5UHJpbnRlciIsInJlbmRlciIsImxpbmVIZWlnaHQiLCJnZXRMaW5lSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiZGVmZXJSZW5kZXIiLCJERUZBVUxUX0RFRkVSX1JFTkRFUiIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkRWxlbWVudHMiLCJoaWRkZW5HdXR0ZXIiLCJERUZBVUxUX0hJRERFTl9HVVRURVIiLCJiaW5kIiwiUHJldHR5UHJpbnRlciIsIlJpY2hUZXh0YXJlYSIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJhY3RpdmUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlWWFwcCIsInJlc2l6ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJlZGl0YWJsZSIsIkRFRkFVTFRfRURJVEFCTEUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsIm9uUmVzaXplIiwiZnJvbUNvbnRlbnQiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic3R5bGVNaXhpbnMiLCJ3aXRoU3R5bGUiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkErUmIsU0E2QkU7OztlQTdCRixRQTZCRTs7O2tFQTFUb0IsaUJBQWlCO29CQUVBLE1BQU07MERBRXJCLGdCQUFnQjtpRUFDZixnQkFBZ0I7a0VBQ2YsaUJBQWlCO2tDQUVMLGdDQUFnQztzQkFDMUIsb0JBQW9COzBCQUNGLHdCQUF3Qjt1QkFDdkIscUJBQXFCO3NCQUNoQixpQkFBaUI7d0JBQ2lFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEssSUFBQSxBQUFNQSxJQUFJLGlCQTRRUCxBQTVRSDs7O2FBQU1BLElBQUksQ0FDSUMsUUFBUSxFQUFFQyxNQUFNOzs7a0NBQ3BCRCxRQUFRLEVBQUU7UUFFaEIsTUFBS0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7Ozs7O1lBR3ZCQyxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUks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