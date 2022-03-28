"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _style = _interopRequireDefault(require("./mixins/style"));
var _richTextarea = _interopRequireDefault(require("./richTextarea"));
var _prettyPrinter = _interopRequireDefault(require("./prettyPrinter"));
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
        "\n\n  width: 100%;\n  position: relative;\n\n  border: 1px solid;\n  \n  color: ",
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
                top = borderTopWidth + paddingTop;
                left = borderLeftWidth + paddingLeft;
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
                var content = this.getContent(), lineCount = (0, _content).lineCountFromContent(content), initialLineCount = lineCount; ///
                return initialLineCount;
            }
        },
        {
            key: "getScrollbarThickness",
            value: function getScrollbarThickness() {
                var scrollbarThickness = 0;
                var _properties2 = this.properties, _hiddenScrollbars = _properties2.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars;
                if (!hiddenScrollbars) {
                    var _properties1 = this.properties, _fancyScrollbars = _properties1.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars;
                    scrollbarThickness = (0, _scrollbarThickness).getScrollbarThickness(fancyScrollbars);
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
                var _properties3 = this.properties, _firaCode = _properties3.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode, _deferRender = _properties3.deferRender, deferRender = _deferRender === void 0 ? _defaults.DEFAULT_DEFER_RENDER : _deferRender;
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
                var _properties4 = this.properties, _firaCode = _properties4.firaCode, firaCode = _firaCode === void 0 ? _defaults.DEFAULT_FIRA_CODE : _firaCode;
                if (firaCode) {
                    this.removeClass("fira-code");
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties5 = this.properties, _hiddenGutter = _properties5.hiddenGutter, hiddenGutter = _hiddenGutter === void 0 ? _defaults.DEFAULT_HIDDEN_GUTTER : _hiddenGutter, _hiddenScrollbars = _properties5.hiddenScrollbars, hiddenScrollbars = _hiddenScrollbars === void 0 ? _defaults.DEFAULT_HIDDEN_SCROLLBARS : _hiddenScrollbars, _fancyScrollbars = _properties5.fancyScrollbars, fancyScrollbars = _fancyScrollbars === void 0 ? _defaults.DEFAULT_FANCY_SCROLLBARS : _fancyScrollbars, changeHandler = this.changeHandler.bind(this), scrollHandler = this.scrollHandler.bind(this), scrollbarThickness = this.getScrollbarThickness();
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
                var _properties6 = this.properties, childElements = _properties6.childElements, _editable = _properties6.editable, editable = _editable === void 0 ? _defaults.DEFAULT_EDITABLE : _editable, language = this.plugin.getLanguage(), content = (0, _content).contentFromChildElements(childElements), readOnly = !editable, scrollTop = 0, scrollLeft = 0; ///
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
                var Class = Yapp, properties = (0, _properties).propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options), plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
                return yapp;
            }
        },
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var language = properties.language, Plugin = properties.Plugin, plugin = (0, _plugin).pluginFromLanguageAndPlugin(language, Plugin), yapp = _easy.Element.fromClass(Class, properties, plugin);
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
var _default = (0, _easyWithStyle).default(Yapp)(_templateObject(), _colour.colour, _colour.caretColour, _colour.borderColour, _colour.backgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIiwiLi4vc3JjL2NvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0LCBCb3VuZHMsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgc3R5bGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0eWxlXCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuaW1wb3J0IFByZXR0eVByaW50ZXIgZnJvbSBcIi4vcHJldHR5UHJpbnRlclwiO1xuXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyVGhpY2tuZXNzXCI7XG5pbXBvcnQgeyBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvcGx1Z2luXCI7XG5pbXBvcnQgeyBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgbGluZUNvdW50RnJvbUNvbnRlbnQsIGNvbnRlbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9jb250ZW50XCI7XG5pbXBvcnQgeyBjb2xvdXIsIGNhcmV0Q29sb3VyLCBib3JkZXJDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VESVRBQkxFLCBERUZBVUxUX0ZJUkFfQ09ERSwgREVGQVVMVF9ERUZFUl9SRU5ERVIsIERFRkFVTFRfSElEREVOX0dVVFRFUiwgREVGQVVMVF9ISURERU5fU0NST0xMQkFSUywgREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY2xhc3MgWWFwcCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgcGx1Z2luKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBnZXRQbHVnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGx1Z2luO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5nZXRSaWNoVGV4dGFyZWFDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHJpY2hUZXh0YXJlYUNvbnRlbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpIHtcbiAgICBsZXQgdG9wLFxuICAgICAgICBsZWZ0LFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSB0aGlzLmdldFBhZGRpbmdUb3AoKSxcbiAgICAgICAgICBwYWRkaW5nTGVmdCA9IHRoaXMuZ2V0UGFkZGluZ0xlZnQoKSxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQgPSB0aGlzLmdldFBhZGRpbmdSaWdodCgpLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBhZGRpbmdCb3R0b20oKSxcbiAgICAgICAgICBib3JkZXJUb3BXaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyVG9wV2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJMZWZ0V2lkdGggPSB0aGlzLmdldEJvcmRlckxlZnRXaWR0aCgpLFxuICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGggPSB0aGlzLmdldEJvcmRlclJpZ2h0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKTtcblxuICAgIHRvcCA9IGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcDtcbiAgICBsZWZ0ID0gYm9yZGVyTGVmdFdpZHRoICsgcGFkZGluZ0xlZnQ7XG5cbiAgICB3aWR0aCAtPSAoIGJvcmRlckxlZnRXaWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgYm9yZGVyUmlnaHRXaWR0aCApO1xuICAgIGhlaWdodCAtPSAoIGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20gKyBib3JkZXJCb3R0b21XaWR0aCApO1xuXG4gICAgaWYgKGd1dHRlcldpZHRoICE9PSBudWxsKSB7XG4gICAgICBsZWZ0ICs9IGd1dHRlcldpZHRoO1xuICAgICAgd2lkdGggLT0gZ3V0dGVyV2lkdGg7XG4gICAgfVxuXG4gICAgY29uc3QgYm91bmRzID0gQm91bmRzLmZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IGJvdW5kczsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRJbml0aWFsTGluZUNvdW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbml0aWFsTGluZUNvdW50ID0gbGluZUNvdW50OyAvLy9cblxuICAgIHJldHVybiBpbml0aWFsTGluZUNvdW50O1xuICB9XG5cbiAgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCkge1xuICAgIGxldCBzY3JvbGxiYXJUaGlja25lc3MgPSAwO1xuXG4gICAgY29uc3QgeyBoaWRkZW5TY3JvbGxiYXJzID0gREVGQVVMVF9ISURERU5fU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKCFoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoZmFuY3lTY3JvbGxiYXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHsgdGhpcy5wbHVnaW4uc2V0TGV4ZXIobGV4ZXIpOyB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikgeyB0aGlzLnBsdWdpbi5zZXRQYXJzZXIocGFyc2VyKTsgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpO1xuXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgICBjb25zdCB7IG9uQ29udGVudENoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSBvbkNvbnRlbnRDaGFuZ2U7IC8vL1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyICYmIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTsgLy8vXG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMucGx1Z2luLnVwZGF0ZShjb250ZW50KTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgIGd1dHRlcldpZHRoID0gdGhpcy51cGRhdGVQcmV0dHlQcmludGVyKHRva2Vucyk7XG5cbiAgICBpZiAoZ3V0dGVyV2lkdGggIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhndXR0ZXJXaWR0aCksXG4gICAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGxldCBpbm5lckJvdW5kcyxcbiAgICAgICAgZ3V0dGVyV2lkdGg7XG5cbiAgICBndXR0ZXJXaWR0aCA9IG51bGw7XG5cbiAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpO1xuXG4gICAgY29uc3QgcHJldHR5UHJpbnRlckJvdW5kcyA9IGlubmVyQm91bmRzOyAgLy8vXG5cbiAgICB0aGlzLnNldFByZXR0eVByaW50ZXJCb3VuZHMocHJldHR5UHJpbnRlckJvdW5kcyk7XG5cbiAgICBndXR0ZXJXaWR0aCA9IHRoaXMucmVzaXplUHJldHR5UHJpbnRlcigpO1xuXG4gICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKTtcblxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMuc2V0UmljaFRleHRhcmVhQm91bmRzKHJpY2hUZXh0YXJlYUJvdW5kcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMuZ2V0TGluZUhlaWdodCgpLFxuICAgICAgICAgIHBhZGRpbmdUb3AgPSB0aGlzLmdldFBhZGRpbmdUb3AoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IHRoaXMuZ2V0SW5pdGlhbExpbmVDb3VudCgpLFxuICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoID0gdGhpcy5nZXRCb3JkZXJCb3R0b21XaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm9yZGVyVG9wV2lkdGggKyBwYWRkaW5nVG9wICsgaW5pdGlhbExpbmVDb3VudCAqIGxpbmVIZWlnaHQgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKyBzY3JvbGxiYXJUaGlja25lc3M7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZpcmFDb2RlID0gREVGQVVMVF9GSVJBX0NPREUsIGRlZmVyUmVuZGVyID0gREVGQVVMVF9ERUZFUl9SRU5ERVIgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmaXJhQ29kZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZpcmEtY29kZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmZXJSZW5kZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGhpZGRlbkd1dHRlciA9IERFRkFVTFRfSElEREVOX0dVVFRFUiwgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIGZhbmN5U2Nyb2xsYmFycyA9IERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gdGhpcy5zY3JvbGxIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gdGhpcy5nZXRTY3JvbGxiYXJUaGlja25lc3MoKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8UHJldHR5UHJpbnRlciBoaWRkZW5HdXR0ZXI9e2hpZGRlbkd1dHRlcn0gc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9IGhpZGRlblNjcm9sbGJhcnM9e2hpZGRlblNjcm9sbGJhcnN9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRQbHVnaW4gPSB0aGlzLmdldFBsdWdpbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVZYXBwID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHJlc2l6ZVlhcHAgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwTGV4ZXIgPSB0aGlzLnNldExleGVyLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRZYXBwUGFyc2VyID0gdGhpcy5zZXRQYXJzZXIuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQbHVnaW4sXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgdXBkYXRlWWFwcCxcbiAgICAgIHJlc2l6ZVlhcHAsXG4gICAgICBzZXRZYXBwV2lkdGgsXG4gICAgICBzZXRZYXBwSGVpZ2h0LFxuICAgICAgc2V0WWFwcExleGVyLFxuICAgICAgc2V0WWFwcFBhcnNlclxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgZWRpdGFibGUgPSBERUZBVUxUX0VESVRBQkxFIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLnBsdWdpbi5nZXRMYW5ndWFnZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCwgIC8vL1xuICAgICAgICAgIHNjcm9sbExlZnQgPSAwOyAvLy9cblxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5zY3JvbGxQcmV0dHlQcmludGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUNvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYVJlYWRPbmx5KHJlYWRPbmx5KTtcblxuICAgIHRoaXMub25SZXNpemUoKGV2ZW50LCBlbGVtZW50KSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInlhcHBcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIlBsdWdpblwiLFxuICAgIFwibGFuZ3VhZ2VcIixcbiAgICBcImZpcmFDb2RlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiZGVmZXJSZW5kZXJcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBsYW5ndWFnZSwgUGx1Z2luLCBvcHRpb25zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBZYXBwLFxuICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucyksXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIFBsdWdpbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwbHVnaW4gPSBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbiksXG4gICAgICAgICAgeWFwcCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBwbHVnaW4pO1xuXG4gICAgcmV0dXJuIHlhcHA7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihZYXBwLnByb3RvdHlwZSwgc3R5bGVNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoWWFwcClgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgXG4gIGNvbG9yOiAke2NvbG91cn07XG4gIGNhcmV0LWNvbG9yOiAke2NhcmV0Q29sb3VyfTtcbiAgYm9yZGVyLWNvbG9yOiAke2JvcmRlckNvbG91cn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTWVubG9cIiwgXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsIG1vbm9zcGFjZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XG5cbiAgLmZpcmEtY29kZSB7XG5cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCI7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwiY2FsdFwiIDE7XG4gICAgXG4gIH1cblxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nV29vZCA9IFwiI2Y4ZjZmMVwiO1xuZXhwb3J0IGNvbnN0IGJvbmpvdXIgPSBcIiNlNWUwZTFcIjtcbmV4cG9ydCBjb25zdCBnYWluc2Jvcm91Z2ggPSBcIiNkNWQ4ZDJcIjtcbmV4cG9ydCBjb25zdCBzdGFyZHVzdCA9IFwiIzlmOWY5Y1wiO1xuZXhwb3J0IGNvbnN0IGh1cnJpY2FuZSA9IFwiIzkwODk4OVwiO1xuZXhwb3J0IGNvbnN0IHN0b3JtRHVzdCA9IFwiIzY0NjQ2M1wiO1xuZXhwb3J0IGNvbnN0IGVtcGVyb3IgPSBcIiM1MTUxNTBcIjtcbmV4cG9ydCBjb25zdCB0dWF0YXJhID0gXCIjMzYzNTM0XCI7XG5leHBvcnQgY29uc3Qgd29vZHNtb2tlID0gXCIjMGMwZDBmXCI7XG5cbmV4cG9ydCBjb25zdCBjaXRyb24gPSBcIiM4NmI5MjNcIjtcbmV4cG9ydCBjb25zdCBzdXNoaSA9IFwiIzdmYTgyZlwiO1xuZXhwb3J0IGNvbnN0IG9saXZlRHJhYiA9IFwiIzYzODgyOVwiO1xuZXhwb3J0IGNvbnN0IHJpZmxlR3JlZW4gPSBcIiM0MTQ4MzNcIjtcbmV4cG9ydCBjb25zdCBsb2dDYWJpbiA9IFwiIzI0MzAxZFwiO1xuZXhwb3J0IGNvbnN0IGJsYWNrT2xpdmUgPSBcIiMxYzI0MTJcIjtcbmV4cG9ydCBjb25zdCBodW50ZXJHcmVlbiA9IFwiIzE2MWQxMFwiO1xuXG5leHBvcnQgY29uc3QgY2FkZXRCbHVlID0gXCIjNWY5ZWEwXCI7XG5leHBvcnQgY29uc3QgaGF2ZWxvY2tCbHVlID0gXCIjNUI4RGUxXCI7XG5cbmV4cG9ydCBjb25zdCBwb21lZ3JhbmF0ZSA9IFwiI2Y1MjkyOVwiO1xuZXhwb3J0IGNvbnN0IHJhenptYXRhenogPSBcIiNlMzI1NmJcIjtcbmV4cG9ydCBjb25zdCBmbGFtaW5nbyA9IFwiI2YzNGI0NFwiO1xuZXhwb3J0IGNvbnN0IHRhaGl0aSA9IFwiI0Y1OEEwQVwiO1xuZXhwb3J0IGNvbnN0IGVxdWF0b3IgPSBcIiNlNGFDNWVcIjtcblxuZXhwb3J0IGNvbnN0IHBvcnRpY2EgPSBcIiNmN2U3NWZcIjtcbmV4cG9ydCBjb25zdCBjZWxlcnkgPSBcIiNiY2I4NTJcIjtcbmV4cG9ydCBjb25zdCBzeWNhbW9yZSA9IFwiIzkwOGQzOVwiO1xuIl0sIm5hbWVzIjpbIllhcHAiLCJzZWxlY3RvciIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldENvbnRlbnQiLCJyaWNoVGV4dGFyZWFDb250ZW50IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImNvbnRlbnQiLCJnZXRJbm5lckJvdW5kcyIsImd1dHRlcldpZHRoIiwidG9wIiwibGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJwYWRkaW5nVG9wIiwiZ2V0UGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwiZ2V0UGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJnZXRQYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiZ2V0UGFkZGluZ0JvdHRvbSIsImJvcmRlclRvcFdpZHRoIiwiZ2V0Qm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJnZXRCb3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiZ2V0Qm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiZ2V0Qm9yZGVyQm90dG9tV2lkdGgiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJnZXRJbml0aWFsTGluZUNvdW50IiwibGluZUNvdW50IiwibGluZUNvdW50RnJvbUNvbnRlbnQiLCJpbml0aWFsTGluZUNvdW50IiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsImhpZGRlblNjcm9sbGJhcnMiLCJERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTIiwiZmFuY3lTY3JvbGxiYXJzIiwiREVGQVVMVF9GQU5DWV9TQ1JPTExCQVJTIiwic2V0TGV4ZXIiLCJsZXhlciIsInNldFBhcnNlciIsInBhcnNlciIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwib25Db250ZW50Q2hhbmdlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInJpY2hUZXh0YXJlYUJvdW5kcyIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInJlc2l6ZSIsInByZXR0eVByaW50ZXJCb3VuZHMiLCJzZXRQcmV0dHlQcmludGVyQm91bmRzIiwicmVzaXplUHJldHR5UHJpbnRlciIsInJlbmRlciIsImxpbmVIZWlnaHQiLCJnZXRMaW5lSGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJmaXJhQ29kZSIsIkRFRkFVTFRfRklSQV9DT0RFIiwiZGVmZXJSZW5kZXIiLCJERUZBVUxUX0RFRkVSX1JFTkRFUiIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsImNoaWxkRWxlbWVudHMiLCJoaWRkZW5HdXR0ZXIiLCJERUZBVUxUX0hJRERFTl9HVVRURVIiLCJiaW5kIiwiUHJldHR5UHJpbnRlciIsIlJpY2hUZXh0YXJlYSIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJhY3RpdmUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlWWFwcCIsInJlc2l6ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJlZGl0YWJsZSIsIkRFRkFVTFRfRURJVEFCTEUiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiY29udGVudEZyb21DaGlsZEVsZW1lbnRzIiwicmVhZE9ubHkiLCJzZXRMYW5ndWFnZSIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsIm9uUmVzaXplIiwiZnJvbUNvbnRlbnQiLCJQbHVnaW4iLCJvcHRpb25zIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzRnJvbUNvbnRlbnRMYW5ndWFnZVBsdWdpbkFuZE9wdGlvbnMiLCJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJ5YXBwIiwiRWxlbWVudCIsImZyb21DbGFzcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwic3R5bGVNaXhpbnMiLCJ3aXRoU3R5bGUiLCJjb2xvdXIiLCJjYXJldENvbG91ciIsImJvcmRlckNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVBLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUVyQixJQUFBLE1BQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNmLElBQUEsYUFBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ2YsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFTCxJQUFBLG1CQUFnQyxXQUFoQyxnQ0FBZ0MsQ0FBQTtBQUMxQixJQUFBLE9BQW9CLFdBQXBCLG9CQUFvQixDQUFBO0FBQ0YsSUFBQSxXQUF3QixXQUF4Qix3QkFBd0IsQ0FBQTtBQUN2QixJQUFBLFFBQXFCLFdBQXJCLHFCQUFxQixDQUFBO0FBQ2hCLElBQUEsT0FBaUIsV0FBakIsaUJBQWlCLENBQUE7QUFDaUUsSUFBQSxTQUFZLFdBQVosWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxLLElBQUEsQUFBTUEsSUFBSSxpQkE0UVAsQUE1UUg7OzthQUFNQSxJQUFJLENBQ0lDLFFBQVEsRUFBRUMsTUFBTTs7O2tDQUNwQkQsUUFBUSxDQ25CbEIsQ0RtQm9CO1FBRWhCLE1BQUtDLE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7OztZQUd2QkMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNELE1BQU0sQ0FBQzthQUNwQjs7O1lBRURFLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLElBQU1DLG1CQUFtQixHQUFHLElBQUksQ0FBQ0Msc0JBQXNCLEVBQUUsRUFDbkRDLE9BQU8sR0FBR0YsbUJBQW1CLEFBQUMsRUFBRSxHQUFHO2dCQUV6QyxPQUFPRSxPQUFPLENBQUM7YUFDaEI7OztZQUVEQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLENBQUNDLFdBQVcsRUFBRTtnQkFDMUIsSUFBSUMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFLEFBQUM7Z0JBRTlCLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0MsY0FBYyxFQUFFLEVBQ25DQyxZQUFZLEdBQUcsSUFBSSxDQUFDQyxlQUFlLEVBQUUsRUFDckNDLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEVBQ3ZDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRSxFQUN6Q0MsZUFBZSxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUUsRUFDM0NDLGdCQUFnQixHQUFHLElBQUksQ0FBQ0MsbUJBQW1CLEVBQUUsRUFDN0NDLGlCQUFpQixHQUFHLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUUsQUFBQztnQkFFdERyQixHQUFHLEdBQUdjLGNBQWMsR0FBR1IsVUFBVSxDQUFDO2dCQUNsQ0wsSUFBSSxHQUFHZSxlQUFlLEdBQUdSLFdBQVcsQ0FBQztnQkFFckNOLEtBQUssSUFBTWMsZUFBZSxHQUFHUixXQUFXLEdBQUdFLFlBQVksR0FBR1EsZ0JBQWdCLEFBQUUsQ0FBQztnQkFDN0VkLE1BQU0sSUFBTVUsY0FBYyxHQUFHUixVQUFVLEdBQUdNLGFBQWEsR0FBR1EsaUJBQWlCLEFBQUUsQ0FBQztnQkFFOUUsSUFBSXJCLFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBQ3hCRSxJQUFJLElBQUlGLFdBQVcsQ0FBQztvQkFDcEJHLEtBQUssSUFBSUgsV0FBVyxDQUFDO2lCQUN0QjtnQkFFRCxJQUFNdUIsTUFBTSxHQUFHQyxLQUFNLE9BQUEsQ0FBQ0MseUJBQXlCLENBQUN4QixHQUFHLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFRSxNQUFNLENBQUMsRUFDbkVxQixXQUFXLEdBQUdILE1BQU0sQUFBQyxFQUFDLEdBQUc7Z0JBRS9CLE9BQU9HLFdBQVcsQ0FBQzthQUNwQjs7O1lBRURDLEdBQW1CLEVBQW5CQSxxQkFBbUI7bUJBQW5CQSxTQUFBQSxtQkFBbUIsR0FBRztnQkFDcEIsSUFBTTdCLE9BQU8sR0FBRyxJQUFJLENBQUNILFVBQVUsRUFBRSxFQUMzQmlDLFNBQVMsR0FBR0MsQ0FBQUEsR0FBQUEsUUFBb0IsQUFBUyxDQUFBLHFCQUFULENBQUMvQixPQUFPLENBQUMsRUFDekNnQyxnQkFBZ0IsR0FBR0YsU0FBUyxBQUFDLEVBQUMsR0FBRztnQkFFdkMsT0FBT0UsZ0JBQWdCLENBQUM7YUFDekI7OztZQUVEQyxHQUFxQixFQUFyQkEsdUJBQXFCO21CQUFyQkEsU0FBQUEscUJBQXFCLEdBQUc7Z0JBQ3RCLElBQUlDLGtCQUFrQixHQUFHLENBQUMsQUFBQztnQkFFM0IsSUFBeUQsWUFBZSxHQUFmLElBQUksQ0FBQ0MsVUFBVSxzQkFBZixZQUFlLENBQWhFQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQixrQ0FBR0MsU0FBeUIsMEJBQUEsb0JBQUEsQUFBcUI7Z0JBRXpFLElBQUksQ0FBQ0QsZ0JBQWdCLEVBQUU7b0JBQ3JCLElBQXVELFlBQWUsR0FBZixJQUFJLENBQUNELFVBQVUscUJBQWYsWUFBZSxDQUE5REcsZUFBZSxFQUFmQSxlQUFlLGlDQUFHQyxTQUF3Qix5QkFBQSxtQkFBQSxBQUFxQjtvQkFFdkVMLGtCQUFrQixHQUFHRCxDQUFBQSxHQUFBQSxtQkFBcUIsQUFBaUIsQ0FBQSxzQkFBakIsQ0FBQ0ssZUFBZSxDQUFDLENBQUM7aUJBQzdEO2dCQUVELE9BQU9KLGtCQUFrQixDQUFDO2FBQzNCOzs7WUFFRE0sR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUM5QyxNQUFNLENBQUM2QyxRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVoREMsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLE1BQU0sRUFBRTtnQkFBRSxJQUFJLENBQUNoRCxNQUFNLENBQUMrQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7OztZQUVwREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUM1QixJQUFNQyxZQUFZLEdBQUdELE9BQU8sRUFDdEJFLGNBQWMsR0FBR0QsWUFBWSxDQUFDRSxpQkFBaUIsRUFBRSxBQUFDO2dCQUV4RCxJQUFJRCxjQUFjLEVBQUU7b0JBQ2xCLElBQU0sQUFBRUUsZUFBZSxHQUFLLElBQUksQ0FBQ2YsVUFBVSxDQUFuQ2UsZUFBZSxBQUFvQixFQUNyQ0Msb0JBQW9CLEdBQUdELGVBQWUsQUFBQyxFQUFDLEdBQUc7b0JBRWpELElBQUksQ0FBQ0UsTUFBTSxFQUFFLENBQUM7b0JBRWROLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUVuQkssb0JBQW9CLElBQUlBLG9CQUFvQixDQUFDTixLQUFLLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRztpQkFDbEU7YUFDRjs7O1lBRURPLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxDQUFDUixLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDNUIsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLEVBQ3RCUSxTQUFTLEdBQUdQLFlBQVksQ0FBQ1EsWUFBWSxFQUFFLEVBQ3ZDQyxVQUFVLEdBQUdULFlBQVksQ0FBQ1UsYUFBYSxFQUFFLEFBQUM7Z0JBRWhELElBQUksQ0FBQ0MsbUJBQW1CLENBQUNKLFNBQVMsRUFBRUUsVUFBVSxDQUFDLENBQUM7YUFDakQ7OztZQUVESixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNcEQsT0FBTyxHQUFHLElBQUksQ0FBQ0gsVUFBVSxFQUFFLEFBQUM7Z0JBRWxDLElBQUksQ0FBQ0YsTUFBTSxDQUFDeUQsTUFBTSxDQUFDcEQsT0FBTyxDQUFDLENBQUM7Z0JBRTVCLElBQU0yRCxNQUFNLEdBQUcsSUFBSSxDQUFDaEUsTUFBTSxDQUFDaUUsU0FBUyxFQUFFLEVBQ2hDMUQsV0FBVyxHQUFHLElBQUksQ0FBQzJELG1CQUFtQixDQUFDRixNQUFNLENBQUMsQUFBQztnQkFFckQsSUFBSXpELFdBQVcsS0FBSyxJQUFJLEVBQUU7b0JBQ3hCLElBQU0wQixXQUFXLEdBQUcsSUFBSSxDQUFDM0IsY0FBYyxDQUFDQyxXQUFXLENBQUMsRUFDOUM0RCxrQkFBa0IsR0FBR2xDLFdBQVcsQUFBQyxFQUFDLEdBQUc7b0JBRTNDLElBQUksQ0FBQ21DLHFCQUFxQixDQUFDRCxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNoRDthQUNGOzs7WUFFREUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBSXBDLFdBQVcsRUFDWDFCLFdBQVcsQUFBQztnQkFFaEJBLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBRW5CMEIsV0FBVyxHQUFHLElBQUksQ0FBQzNCLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7Z0JBRS9DLElBQU0rRCxtQkFBbUIsR0FBR3JDLFdBQVcsQUFBQyxFQUFFLEdBQUc7Z0JBRTdDLElBQUksQ0FBQ3NDLHNCQUFzQixDQUFDRCxtQkFBbUIsQ0FBQyxDQUFDO2dCQUVqRC9ELFdBQVcsR0FBRyxJQUFJLENBQUNpRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUV6Q3ZDLFdBQVcsR0FBRyxJQUFJLENBQUMzQixjQUFjLENBQUNDLFdBQVcsQ0FBQyxDQUFDO2dCQUUvQyxJQUFNNEQsa0JBQWtCLEdBQUdsQyxXQUFXLEFBQUMsRUFBQyxHQUFHO2dCQUUzQyxJQUFJLENBQUNtQyxxQkFBcUIsQ0FBQ0Qsa0JBQWtCLENBQUMsQ0FBQzthQUNoRDs7O1lBRURNLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQzdELFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxFQUNqQ0ssYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLGNBQWMsR0FBRyxJQUFJLENBQUNDLGlCQUFpQixFQUFFLEVBQ3pDYyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNILG1CQUFtQixFQUFFLEVBQzdDTixpQkFBaUIsR0FBRyxJQUFJLENBQUNDLG9CQUFvQixFQUFFLEVBQy9DVSxrQkFBa0IsR0FBRyxJQUFJLENBQUNELHFCQUFxQixFQUFFLEVBQ2pEMUIsTUFBTSxHQUFHVSxjQUFjLEdBQUdSLFVBQVUsR0FBR3VCLGdCQUFnQixHQUFHcUMsVUFBVSxHQUFHdEQsYUFBYSxHQUFHUSxpQkFBaUIsR0FBR1csa0JBQWtCLEFBQUM7Z0JBRXBJLElBQUksQ0FBQ3FDLFNBQVMsQ0FBQ2hFLE1BQU0sQ0FBQyxDQUFDO2dCQUV2QixJQUFJLENBQUN5RCxNQUFNLEVBQUUsQ0FBQztnQkFFZCxJQUFJLENBQUNaLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7OztZQUVEb0IsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBNkUsWUFBZSxHQUFmLElBQUksQ0FBQ3JDLFVBQVUsY0FBZixZQUFlLENBQXBGc0MsUUFBUSxFQUFSQSxRQUFRLDBCQUFHQyxTQUFpQixrQkFBQSxZQUFBLGlCQUF5QyxZQUFlLENBQXREQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUdDLFNBQW9CLHFCQUFBLGVBQUEsQUFBcUI7Z0JBRTdGLElBQUlILFFBQVEsRUFBRTtvQkFDWixJQUFJLENBQUNJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUI7Z0JBRUQsSUFBSUYsV0FBVyxFQUFFO29CQUNmLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDUCxNQUFNLEVBQUUsQ0FBQzthQUNmOzs7WUFFRFUsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBeUMsWUFBZSxHQUFmLElBQUksQ0FBQzNDLFVBQVUsY0FBZixZQUFlLENBQWhEc0MsUUFBUSxFQUFSQSxRQUFRLDBCQUFHQyxTQUFpQixrQkFBQSxZQUFBLEFBQXFCO2dCQUV6RCxJQUFJRCxRQUFRLEVBQUU7b0JBQ1osSUFBSSxDQUFDTSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUEySSxZQUFlLEdBQWYsSUFBSSxDQUFDN0MsVUFBVSxrQkFBZixZQUFlLENBQWxKOEMsWUFBWSxFQUFaQSxZQUFZLDhCQUFHQyxTQUFxQixzQkFBQSxnQkFBQSxzQkFBK0YsWUFBZSxDQUE1RzlDLGdCQUFnQixFQUFoQkEsZ0JBQWdCLGtDQUFHQyxTQUF5QiwwQkFBQSxvQkFBQSxxQkFBaUQsWUFBZSxDQUE5REMsZUFBZSxFQUFmQSxlQUFlLGlDQUFHQyxTQUF3Qix5QkFBQSxtQkFBQSxFQUNoSUssYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDdUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM3QzlCLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQzhCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDN0NqRCxrQkFBa0IsR0FBRyxJQUFJLENBQUNELHFCQUFxQixFQUFFLEFBQUM7Z0JBRXhELE9BQVE7a0NBRU4sMEJBQUNtRCxjQUFhLFFBQUE7d0JBQUNILFlBQVksRUFBRUEsWUFBWTt3QkFBRS9DLGtCQUFrQixFQUFFQSxrQkFBa0I7c0JBQUk7a0NBQ3JGLDBCQUFDbUQsYUFBWSxRQUFBO3dCQUFDQyxRQUFRLEVBQUUxQyxhQUFhO3dCQUFFMkMsUUFBUSxFQUFFbEMsYUFBYTt3QkFBRWpCLGdCQUFnQixFQUFFQSxnQkFBZ0I7d0JBQUVFLGVBQWUsRUFBRUEsZUFBZTt3QkFBRWtELE1BQU0sRUFBTkEsSUFBTTtzQkFBRztpQkFFaEosQ0FBRTthQUNKOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTTdGLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ3VGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDckN0RixVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLENBQUNzRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3ZDTyxVQUFVLEdBQUcsSUFBSSxDQUFDdEMsTUFBTSxDQUFDK0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNuQ1EsVUFBVSxHQUFHLElBQUksQ0FBQzNCLE1BQU0sQ0FBQ21CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDbkNTLFlBQVksR0FBRyxJQUFJLENBQUNDLFFBQVEsQ0FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN2Q1csYUFBYSxHQUFHLElBQUksQ0FBQ3ZCLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN6Q1ksWUFBWSxHQUFHLElBQUksQ0FBQ3ZELFFBQVEsQ0FBQzJDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDdkNhLGFBQWEsR0FBRyxJQUFJLENBQUN0RCxTQUFTLENBQUN5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBRSxHQUFHO2dCQUVyRCxPQUFRO29CQUNOdkYsU0FBUyxFQUFUQSxTQUFTO29CQUNUQyxVQUFVLEVBQVZBLFVBQVU7b0JBQ1Y2RixVQUFVLEVBQVZBLFVBQVU7b0JBQ1ZDLFVBQVUsRUFBVkEsVUFBVTtvQkFDVkMsWUFBWSxFQUFaQSxZQUFZO29CQUNaRSxhQUFhLEVBQWJBLGFBQWE7b0JBQ2JDLFlBQVksRUFBWkEsWUFBWTtvQkFDWkMsYUFBYSxFQUFiQSxhQUFhO2lCQUNkLENBQUU7YUFDSjs7O1lBRURDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHOztnQkFDWCxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUVyQixJQUF1RCxZQUFlLEdBQWYsSUFBSSxDQUFDL0QsVUFBVSxFQUE5RDZDLGFBQWEsR0FBa0MsWUFBZSxDQUE5REEsYUFBYSxjQUFrQyxZQUFlLENBQS9DbUIsUUFBUSxFQUFSQSxRQUFRLDBCQUFHQyxTQUFnQixpQkFBQSxZQUFBLEVBQzVDQyxRQUFRLEdBQUcsSUFBSSxDQUFDMUcsTUFBTSxDQUFDMkcsV0FBVyxFQUFFLEVBQ3BDdEcsT0FBTyxHQUFHdUcsQ0FBQUEsR0FBQUEsUUFBd0IsQUFBZSxDQUFBLHlCQUFmLENBQUN2QixhQUFhLENBQUMsRUFDakR3QixRQUFRLEdBQUcsQ0FBQ0wsUUFBUSxFQUNwQjdDLFNBQVMsR0FBRyxDQUFDLEVBQ2JFLFVBQVUsR0FBRyxDQUFDLEFBQUMsRUFBQyxHQUFHO2dCQUV6QixJQUFJLENBQUNpRCxXQUFXLENBQUNKLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMzQyxtQkFBbUIsQ0FBQ0osU0FBUyxFQUFFRSxVQUFVLENBQUMsQ0FBQztnQkFFaEQsSUFBSSxDQUFDa0Qsc0JBQXNCLENBQUMxRyxPQUFPLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDMkcsdUJBQXVCLENBQUNILFFBQVEsQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLENBQUNJLFFBQVEsQ0FBQyxTQUFDL0QsS0FBSyxFQUFFQyxPQUFPOzJCQUFLLE1BQUtrQixNQUFNLEVBQUU7aUJBQUEsQ0FBQyxDQUFDO2FBQ2xEOzs7O1lBbUJNNkMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUM3RyxPQUFPLEVBQUVxRyxRQUFRLEVBQUVTLE1BQU0sRUFBRUMsT0FBTyxFQUFFO2dCQUNyRCxJQUFNQyxLQUFLLEdBQUd2SCxJQUFJLEVBQ1owQyxVQUFVLEdBQUc4RSxDQUFBQSxHQUFBQSxXQUE2QyxBQUFvQyxDQUFBLDhDQUFwQyxDQUFDakgsT0FBTyxFQUFFcUcsUUFBUSxFQUFFUyxNQUFNLEVBQUVDLE9BQU8sQ0FBQyxFQUM5RnBILE1BQU0sR0FBR3VILENBQUFBLEdBQUFBLE9BQTJCLEFBQWtCLENBQUEsNEJBQWxCLENBQUNiLFFBQVEsRUFBRVMsTUFBTSxDQUFDLEVBQ3RESyxJQUFJLEdBQUdDLEtBQU8sUUFBQSxDQUFDQyxTQUFTLENBQUNMLEtBQUssRUFBRTdFLFVBQVUsRUFBRXhDLE1BQU0sQ0FBQyxBQUFDO2dCQUUxRCxPQUFPd0gsSUFBSSxDQUFDO2FBQ2I7OztZQUVNRSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0wsS0FBSyxFQUFFN0UsVUFBVSxFQUFFO2dCQUNsQyxJQUFRa0UsUUFBUSxHQUFhbEUsVUFBVSxDQUEvQmtFLFFBQVEsRUFBRVMsTUFBTSxHQUFLM0UsVUFBVSxDQUFyQjJFLE1BQU0sRUFDbEJuSCxNQUFNLEdBQUd1SCxDQUFBQSxHQUFBQSxPQUEyQixBQUFrQixDQUFBLDRCQUFsQixDQUFDYixRQUFRLEVBQUVTLE1BQU0sQ0FBQyxFQUN0REssSUFBSSxHQUFHQyxLQUFPLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDTCxLQUFLLEVBQUU3RSxVQUFVLEVBQUV4QyxNQUFNLENBQUMsQUFBQztnQkFFMUQsT0FBT3dILElBQUksQ0FBQzthQUNiOzs7O0NBQ0Ysa0JBMVFrQkMsS0FBTyxRQUFBLEVBMFF6QjtBQWpDQyxnQkF6T0kzSCxJQUFJLEVBeU9ENkgsU0FBTyxFQUFHLEtBQUssQ0FBQztBQUV2QixnQkEzT0k3SCxJQUFJLEVBMk9EOEgsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxNQUFNO0NBQ2xCLENBQUM7QUFFRixnQkEvT0kvSCxJQUFJLEVBK09EZ0ksbUJBQWlCLEVBQUc7SUFDekIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtDQUNsQixDQUFDO0FBb0JKQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ2xJLElBQUksQ0FBQ21JLFNBQVMsRUFBRUMsTUFBVyxRQUFBLENBQUMsQ0FBQztlQUU1QkMsQ0FBQUEsR0FBQUEsY0FBUyxBQUFNLENBQUEsUUFBTixDQUFDckksSUFBSSxDQUFDLG9CQU9uQnNJLE9BQU0sT0FBQSxFQUNBQyxPQUFXLFlBQUEsRUFDVkMsT0FBWSxhQUFBLEVBQ1JDLE9BQWdCLGlCQUFBIn0=