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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHN0eWxlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdHlsZVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSB7XG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0xlZnQgPSB0aGlzLmdldFBhZGRpbmdMZWZ0KCksXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQYWRkaW5nUmlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICB0b3AgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3A7XG4gICAgbGVmdCA9IGJvcmRlckxlZnRXaWR0aCArIHBhZGRpbmdMZWZ0O1xuXG4gICAgd2lkdGggLT0gKCBib3JkZXJMZWZ0V2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIGJvcmRlclJpZ2h0V2lkdGggKTtcbiAgICBoZWlnaHQgLT0gKCBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKTtcblxuICAgIGlmIChndXR0ZXJXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgbGVmdCArPSBndXR0ZXJXaWR0aDtcbiAgICAgIHdpZHRoIC09IGd1dHRlcldpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSBib3VuZHM7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVyQm91bmRzO1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIGdldFNjcm9sbGJhclRoaWNrbmVzcygpIHtcbiAgICBsZXQgc2Nyb2xsYmFyVGhpY2tuZXNzID0gMDtcblxuICAgIGNvbnN0IHsgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGZhbmN5U2Nyb2xsYmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbGJhclRoaWNrbmVzcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBndXR0ZXJXaWR0aCA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKGd1dHRlcldpZHRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpLFxuICAgICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgaW5uZXJCb3VuZHMsXG4gICAgICAgIGd1dHRlcldpZHRoO1xuXG4gICAgZ3V0dGVyV2lkdGggPSBudWxsO1xuXG4gICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKTtcblxuICAgIGNvbnN0IHByZXR0eVByaW50ZXJCb3VuZHMgPSBpbm5lckJvdW5kczsgIC8vL1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyQm91bmRzKHByZXR0eVByaW50ZXJCb3VuZHMpO1xuXG4gICAgZ3V0dGVyV2lkdGggPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhndXR0ZXJXaWR0aCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSB0aGlzLmdldFNjcm9sbGJhclRoaWNrbmVzcygpLFxuICAgICAgICAgIGhlaWdodCA9IGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcCArIGluaXRpYWxMaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgcGFkZGluZ0JvdHRvbSArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBkZWZlclJlbmRlciA9IERFRkFVTFRfREVGRVJfUkVOREVSIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGRlZmVyUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBoaWRkZW5HdXR0ZXIgPSBERUZBVUxUX0hJRERFTl9HVVRURVIsIGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImRlZmVyUmVuZGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWWFwcC5wcm90b3R5cGUsIHN0eWxlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxO1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldElubmVyQm91bmRzIiwiZ3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJnZXRQYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImdldFBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJnZXRQYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJpbm5lckJvdW5kcyIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImluaXRpYWxMaW5lQ291bnQiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJwcm9wZXJ0aWVzIiwiaGlkZGVuU2Nyb2xsYmFycyIsIkRFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMiLCJmYW5jeVNjcm9sbGJhcnMiLCJERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInVwZGF0ZSIsInNjcm9sbEhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwicmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwicmVzaXplIiwicHJldHR5UHJpbnRlckJvdW5kcyIsInNldFByZXR0eVByaW50ZXJCb3VuZHMiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVuZGVyIiwibGluZUhlaWdodCIsImdldExpbmVIZWlnaHQiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsImZpcmFDb2RlIiwiREVGQVVMVF9GSVJBX0NPREUiLCJkZWZlclJlbmRlciIsIkRFRkFVTFRfREVGRVJfUkVOREVSIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwiY2hpbGRFbGVtZW50cyIsImhpZGRlbkd1dHRlciIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsImJpbmQiLCJQcmV0dHlQcmludGVyIiwiUmljaFRleHRhcmVhIiwib25DaGFuZ2UiLCJvblNjcm9sbCIsImFjdGl2ZSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVZYXBwIiwicmVzaXplWWFwcCIsInNldFlhcHBXaWR0aCIsInNldFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImVkaXRhYmxlIiwiREVGQVVMVF9FRElUQUJMRSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyIsIndpdGhTdHlsZSIsImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRVMsR0FBaUIsQ0FBakIsY0FBaUI7QUFFQSxHQUFNLENBQU4sS0FBTTtBQUVyQixHQUFnQixDQUFoQixNQUFnQjtBQUNmLEdBQWdCLENBQWhCLGFBQWdCO0FBQ2YsR0FBaUIsQ0FBakIsY0FBaUI7QUFFTCxHQUFnQyxDQUFoQyxtQkFBZ0M7QUFDMUIsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDRixHQUF3QixDQUF4QixXQUF3QjtBQUN2QixHQUFxQixDQUFyQixRQUFxQjtBQUNoQixHQUFpQixDQUFqQixPQUFpQjtBQUNpRSxHQUFZLENBQVosU0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0Y7Ozs7Ozs7O3NDOzs7Ozs7aUM7OztpRTs7Uzs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7Ozs7OztVOzt3Qjs7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7Ozs7OEI7Ozs7Ozs7OzsyQjs7Ozs7Ozs7Ozs7O3NDOzs7Ozs7Ozs7Ozs7VTs7Szs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7Ozs7UUFnUm5JLENBT3RCO1FBQVMsQ0FDSDtRQUFjLENBQ2I7UUFBZSxDQUNYO1FBQW1CLENBa0J2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