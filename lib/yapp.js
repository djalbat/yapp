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
        ";\n\n  font-size: 13px;\n  line-height: 20px;\n  font-family: \"Menlo\", \"Lucida Sans Typewriter\", monospace;\n  text-rendering: optimizeLegibility;\n  font-feature-settings: normal;\n\n  .fira-code {\n\n    font-size: 13px;\n    line-height: 20px;\n    font-family: \"Fira Code\";\n    text-rendering: optimizeLegibility;\n    font-feature-settings: \"calt\" 1;\n    \n  }\n\n"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHN0eWxlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdHlsZVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSB7XG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0xlZnQgPSB0aGlzLmdldFBhZGRpbmdMZWZ0KCksXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQYWRkaW5nUmlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICB0b3AgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3A7XG4gICAgbGVmdCA9IGJvcmRlckxlZnRXaWR0aCArIHBhZGRpbmdMZWZ0O1xuXG4gICAgd2lkdGggLT0gKCBib3JkZXJMZWZ0V2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIGJvcmRlclJpZ2h0V2lkdGggKTtcbiAgICBoZWlnaHQgLT0gKCBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKTtcblxuICAgIGlmIChndXR0ZXJXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgbGVmdCArPSBndXR0ZXJXaWR0aDtcbiAgICAgIHdpZHRoIC09IGd1dHRlcldpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSBib3VuZHM7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVyQm91bmRzO1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIGdldFNjcm9sbGJhclRoaWNrbmVzcygpIHtcbiAgICBsZXQgc2Nyb2xsYmFyVGhpY2tuZXNzID0gMDtcblxuICAgIGNvbnN0IHsgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGZhbmN5U2Nyb2xsYmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbGJhclRoaWNrbmVzcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBndXR0ZXJXaWR0aCA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKGd1dHRlcldpZHRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpLFxuICAgICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgaW5uZXJCb3VuZHMsXG4gICAgICAgIGd1dHRlcldpZHRoO1xuXG4gICAgZ3V0dGVyV2lkdGggPSBudWxsO1xuXG4gICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKTtcblxuICAgIGNvbnN0IHByZXR0eVByaW50ZXJCb3VuZHMgPSBpbm5lckJvdW5kczsgIC8vL1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyQm91bmRzKHByZXR0eVByaW50ZXJCb3VuZHMpO1xuXG4gICAgZ3V0dGVyV2lkdGggPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhndXR0ZXJXaWR0aCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSB0aGlzLmdldFNjcm9sbGJhclRoaWNrbmVzcygpLFxuICAgICAgICAgIGhlaWdodCA9IGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcCArIGluaXRpYWxMaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgcGFkZGluZ0JvdHRvbSArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBkZWZlclJlbmRlciA9IERFRkFVTFRfREVGRVJfUkVOREVSIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGRlZmVyUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBoaWRkZW5HdXR0ZXIgPSBERUZBVUxUX0hJRERFTl9HVVRURVIsIGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImRlZmVyUmVuZGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWWFwcC5wcm90b3R5cGUsIHN0eWxlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxO1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldElubmVyQm91bmRzIiwiZ3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJnZXRQYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImdldFBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJnZXRQYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsImJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJpbm5lckJvdW5kcyIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJpbml0aWFsTGluZUNvdW50IiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsImhpZGRlblNjcm9sbGJhcnMiLCJmYW5jeVNjcm9sbGJhcnMiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInVwZGF0ZSIsInNjcm9sbEhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwicmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwicmVzaXplIiwicHJldHR5UHJpbnRlckJvdW5kcyIsInNldFByZXR0eVByaW50ZXJCb3VuZHMiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVuZGVyIiwibGluZUhlaWdodCIsImdldExpbmVIZWlnaHQiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsImZpcmFDb2RlIiwiZGVmZXJSZW5kZXIiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2xhc3MiLCJjaGlsZEVsZW1lbnRzIiwiaGlkZGVuR3V0dGVyIiwiYmluZCIsIm9uQ2hhbmdlIiwib25TY3JvbGwiLCJhY3RpdmUiLCJwYXJlbnRDb250ZXh0IiwidXBkYXRlWWFwcCIsInJlc2l6ZVlhcHAiLCJzZXRZYXBwV2lkdGgiLCJzZXRXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJlZGl0YWJsZSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInlhcHAiLCJmcm9tQ2xhc3MiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVBLEdBQU0sQ0FBTixL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