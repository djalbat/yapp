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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy95YXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHN0eWxlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdHlsZVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcbmltcG9ydCBQcmV0dHlQcmludGVyIGZyb20gXCIuL3ByZXR0eVByaW50ZXJcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuaW1wb3J0IHsgcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BsdWdpblwiO1xuaW1wb3J0IHsgcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Db250ZW50LCBjb250ZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvY29udGVudFwiO1xuaW1wb3J0IHsgY29sb3VyLCBjYXJldENvbG91ciwgYm9yZGVyQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuaW1wb3J0IHsgREVGQVVMVF9FRElUQUJMRSwgREVGQVVMVF9GSVJBX0NPREUsIERFRkFVTFRfREVGRVJfUkVOREVSLCBERUZBVUxUX0hJRERFTl9HVVRURVIsIERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMsIERFRkFVTFRfRkFOQ1lfU0NST0xMQkFSUyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNsYXNzIFlhcHAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHBsdWdpbikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0UGx1Z2luKCkge1xuICAgIHJldHVybiB0aGlzLnBsdWdpbjtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSByaWNoVGV4dGFyZWFDb250ZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSB7XG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0xlZnQgPSB0aGlzLmdldFBhZGRpbmdMZWZ0KCksXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0ID0gdGhpcy5nZXRQYWRkaW5nUmlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tID0gdGhpcy5nZXRQYWRkaW5nQm90dG9tKCksXG4gICAgICAgICAgYm9yZGVyVG9wV2lkdGggPSB0aGlzLmdldEJvcmRlclRvcFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyTGVmdFdpZHRoID0gdGhpcy5nZXRCb3JkZXJMZWZ0V2lkdGgoKSxcbiAgICAgICAgICBib3JkZXJSaWdodFdpZHRoID0gdGhpcy5nZXRCb3JkZXJSaWdodFdpZHRoKCksXG4gICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGggPSB0aGlzLmdldEJvcmRlckJvdHRvbVdpZHRoKCk7XG5cbiAgICB0b3AgPSBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3A7XG4gICAgbGVmdCA9IGJvcmRlckxlZnRXaWR0aCArIHBhZGRpbmdMZWZ0O1xuXG4gICAgd2lkdGggLT0gKCBib3JkZXJMZWZ0V2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIGJvcmRlclJpZ2h0V2lkdGggKTtcbiAgICBoZWlnaHQgLT0gKCBib3JkZXJUb3BXaWR0aCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tICsgYm9yZGVyQm90dG9tV2lkdGggKTtcblxuICAgIGlmIChndXR0ZXJXaWR0aCAhPT0gbnVsbCkge1xuICAgICAgbGVmdCArPSBndXR0ZXJXaWR0aDtcbiAgICAgIHdpZHRoIC09IGd1dHRlcldpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSBib3VuZHM7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVyQm91bmRzO1xuICB9XG5cbiAgZ2V0SW5pdGlhbExpbmVDb3VudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5pdGlhbExpbmVDb3VudCA9IGxpbmVDb3VudDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbExpbmVDb3VudDtcbiAgfVxuXG4gIGdldFNjcm9sbGJhclRoaWNrbmVzcygpIHtcbiAgICBsZXQgc2Nyb2xsYmFyVGhpY2tuZXNzID0gMDtcblxuICAgIGNvbnN0IHsgaGlkZGVuU2Nyb2xsYmFycyA9IERFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGZhbmN5U2Nyb2xsYmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbGJhclRoaWNrbmVzcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7IHRoaXMucGx1Z2luLnNldExleGVyKGxleGVyKTsgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHsgdGhpcy5wbHVnaW4uc2V0UGFyc2VyKHBhcnNlcik7IH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzQ29udGVudENoYW5nZWQoKTtcblxuICAgIGlmIChjb250ZW50Q2hhbmdlZCkge1xuICAgICAgY29uc3QgeyBvbkNvbnRlbnRDaGFuZ2UgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gb25Db250ZW50Q2hhbmdlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciAmJiBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eVByaW50ZXIoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnBsdWdpbi51cGRhdGUoY29udGVudCk7XG5cbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBndXR0ZXJXaWR0aCA9IHRoaXMudXBkYXRlUHJldHR5UHJpbnRlcih0b2tlbnMpO1xuXG4gICAgaWYgKGd1dHRlcldpZHRoICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpLFxuICAgICAgICAgICAgcmljaFRleHRhcmVhQm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBsZXQgaW5uZXJCb3VuZHMsXG4gICAgICAgIGd1dHRlcldpZHRoO1xuXG4gICAgZ3V0dGVyV2lkdGggPSBudWxsO1xuXG4gICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKTtcblxuICAgIGNvbnN0IHByZXR0eVByaW50ZXJCb3VuZHMgPSBpbm5lckJvdW5kczsgIC8vL1xuXG4gICAgdGhpcy5zZXRQcmV0dHlQcmludGVyQm91bmRzKHByZXR0eVByaW50ZXJCb3VuZHMpO1xuXG4gICAgZ3V0dGVyV2lkdGggPSB0aGlzLnJlc2l6ZVByZXR0eVByaW50ZXIoKTtcblxuICAgIGlubmVyQm91bmRzID0gdGhpcy5nZXRJbm5lckJvdW5kcyhndXR0ZXJXaWR0aCk7XG5cbiAgICBjb25zdCByaWNoVGV4dGFyZWFCb3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnNldFJpY2hUZXh0YXJlYUJvdW5kcyhyaWNoVGV4dGFyZWFCb3VuZHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLmdldExpbmVIZWlnaHQoKSxcbiAgICAgICAgICBwYWRkaW5nVG9wID0gdGhpcy5nZXRQYWRkaW5nVG9wKCksXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbSA9IHRoaXMuZ2V0UGFkZGluZ0JvdHRvbSgpLFxuICAgICAgICAgIGJvcmRlclRvcFdpZHRoID0gdGhpcy5nZXRCb3JkZXJUb3BXaWR0aCgpLFxuICAgICAgICAgIGluaXRpYWxMaW5lQ291bnQgPSB0aGlzLmdldEluaXRpYWxMaW5lQ291bnQoKSxcbiAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aCA9IHRoaXMuZ2V0Qm9yZGVyQm90dG9tV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSB0aGlzLmdldFNjcm9sbGJhclRoaWNrbmVzcygpLFxuICAgICAgICAgIGhlaWdodCA9IGJvcmRlclRvcFdpZHRoICsgcGFkZGluZ1RvcCArIGluaXRpYWxMaW5lQ291bnQgKiBsaW5lSGVpZ2h0ICsgcGFkZGluZ0JvdHRvbSArIGJvcmRlckJvdHRvbVdpZHRoICsgc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmaXJhQ29kZSA9IERFRkFVTFRfRklSQV9DT0RFLCBkZWZlclJlbmRlciA9IERFRkFVTFRfREVGRVJfUkVOREVSIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmlyYUNvZGUpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmaXJhLWNvZGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGRlZmVyUmVuZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgZmlyYUNvZGUgPSBERUZBVUxUX0ZJUkFfQ09ERSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZpcmFDb2RlKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZmlyYS1jb2RlXCIpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBoaWRkZW5HdXR0ZXIgPSBERUZBVUxUX0hJRERFTl9HVVRURVIsIGhpZGRlblNjcm9sbGJhcnMgPSBERUZBVUxUX0hJRERFTl9TQ1JPTExCQVJTLCBmYW5jeVNjcm9sbGJhcnMgPSBERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNjcm9sbGJhclRoaWNrbmVzcyA9IHRoaXMuZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKCk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFByZXR0eVByaW50ZXIgaGlkZGVuR3V0dGVyPXtoaWRkZW5HdXR0ZXJ9IHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gYWN0aXZlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UGx1Z2luID0gdGhpcy5nZXRQbHVnaW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlWWFwcCA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICByZXNpemVZYXBwID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFlhcHBIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcExleGVyID0gdGhpcy5zZXRMZXhlci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0WWFwcFBhcnNlciA9IHRoaXMuc2V0UGFyc2VyLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGx1Z2luLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHVwZGF0ZVlhcHAsXG4gICAgICByZXNpemVZYXBwLFxuICAgICAgc2V0WWFwcFdpZHRoLFxuICAgICAgc2V0WWFwcEhlaWdodCxcbiAgICAgIHNldFlhcHBMZXhlcixcbiAgICAgIHNldFlhcHBQYXJzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGVkaXRhYmxlID0gREVGQVVMVF9FRElUQUJMRSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy5wbHVnaW4uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsICAvLy9cbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDsgLy8vXG5cbiAgICB0aGlzLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcblxuICAgIHRoaXMuc2Nyb2xsUHJldHR5UHJpbnRlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRSaWNoVGV4dGFyZWFSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLm9uUmVzaXplKChldmVudCwgZWxlbWVudCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5YXBwXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJQbHVnaW5cIixcbiAgICBcImxhbmd1YWdlXCIsXG4gICAgXCJmaXJhQ29kZVwiLFxuICAgIFwiZWRpdGFibGVcIixcbiAgICBcImRlZmVyUmVuZGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgbGFuZ3VhZ2UsIFBsdWdpbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IENsYXNzID0gWWFwcCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllc0Zyb21Db250ZW50TGFuZ3VhZ2VQbHVnaW5BbmRPcHRpb25zKGNvbnRlbnQsIGxhbmd1YWdlLCBQbHVnaW4sIG9wdGlvbnMpLFxuICAgICAgICAgIHBsdWdpbiA9IHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSxcbiAgICAgICAgICB5YXBwID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHBsdWdpbik7XG5cbiAgICByZXR1cm4geWFwcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlLCBQbHVnaW4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGx1Z2luID0gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pLFxuICAgICAgICAgIHlhcHAgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgcGx1Z2luKTtcblxuICAgIHJldHVybiB5YXBwO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oWWFwcC5wcm90b3R5cGUsIHN0eWxlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFlhcHApYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIFxuICBjb2xvcjogJHtjb2xvdXJ9O1xuICBjYXJldC1jb2xvcjogJHtjYXJldENvbG91cn07XG4gIGJvcmRlci1jb2xvcjogJHtib3JkZXJDb2xvdXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCIsIFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLCBtb25vc3BhY2U7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xuXG4gIC5maXJhLWNvZGUge1xuXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxO1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiWWFwcCIsInNlbGVjdG9yIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwiZ2V0Q29udGVudCIsInJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRSaWNoVGV4dGFyZWFDb250ZW50IiwiY29udGVudCIsImdldElubmVyQm91bmRzIiwiZ3V0dGVyV2lkdGgiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInBhZGRpbmdUb3AiLCJnZXRQYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJnZXRQYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImdldFBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJnZXRQYWRkaW5nQm90dG9tIiwiYm9yZGVyVG9wV2lkdGgiLCJnZXRCb3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImdldEJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJnZXRCb3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJnZXRCb3JkZXJCb3R0b21XaWR0aCIsImJvdW5kcyIsIkJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJpbm5lckJvdW5kcyIsImdldEluaXRpYWxMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tQ29udGVudCIsImluaXRpYWxMaW5lQ291bnQiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJwcm9wZXJ0aWVzIiwiaGlkZGVuU2Nyb2xsYmFycyIsIkRFRkFVTFRfSElEREVOX1NDUk9MTEJBUlMiLCJmYW5jeVNjcm9sbGJhcnMiLCJERUZBVUxUX0ZBTkNZX1NDUk9MTEJBUlMiLCJzZXRMZXhlciIsImxleGVyIiwic2V0UGFyc2VyIiwicGFyc2VyIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsInVwZGF0ZSIsInNjcm9sbEhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwicmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwicmVzaXplIiwicHJldHR5UHJpbnRlckJvdW5kcyIsInNldFByZXR0eVByaW50ZXJCb3VuZHMiLCJyZXNpemVQcmV0dHlQcmludGVyIiwicmVuZGVyIiwibGluZUhlaWdodCIsImdldExpbmVIZWlnaHQiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsImZpcmFDb2RlIiwiREVGQVVMVF9GSVJBX0NPREUiLCJkZWZlclJlbmRlciIsIkRFRkFVTFRfREVGRVJfUkVOREVSIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwiY2hpbGRFbGVtZW50cyIsImhpZGRlbkd1dHRlciIsIkRFRkFVTFRfSElEREVOX0dVVFRFUiIsImJpbmQiLCJQcmV0dHlQcmludGVyIiwiUmljaFRleHRhcmVhIiwib25DaGFuZ2UiLCJvblNjcm9sbCIsImFjdGl2ZSIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVZYXBwIiwicmVzaXplWWFwcCIsInNldFlhcHBXaWR0aCIsInNldFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImVkaXRhYmxlIiwiREVGQVVMVF9FRElUQUJMRSIsImxhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJjb250ZW50RnJvbUNoaWxkRWxlbWVudHMiLCJyZWFkT25seSIsInNldExhbmd1YWdlIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwib25SZXNpemUiLCJmcm9tQ29udGVudCIsIlBsdWdpbiIsIm9wdGlvbnMiLCJDbGFzcyIsInByb3BlcnRpZXNGcm9tQ29udGVudExhbmd1YWdlUGx1Z2luQW5kT3B0aW9ucyIsInBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbiIsInlhcHAiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzdHlsZU1peGlucyIsIndpdGhTdHlsZSIsImNvbG91ciIsImNhcmV0Q29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXNCLEdBQWlCLENBQWpCLGNBQWlCO0FBRUEsR0FBTSxDQUFOLEtBQU07QUFFckIsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFDZixHQUFnQixDQUFoQixhQUFnQjtBQUNmLEdBQWlCLENBQWpCLGNBQWlCO0FBRUwsR0FBZ0MsQ0FBaEMsbUJBQWdDO0FBQzFCLEdBQW9CLENBQXBCLE9BQW9CO0FBQ0YsR0FBd0IsQ0FBeEIsV0FBd0I7QUFDdkIsR0FBcUIsQ0FBckIsUUFBcUI7QUFDaEIsR0FBaUIsQ0FBakIsT0FBaUI7QUFDaUUsR0FBWSxDQUFaLFNBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQWZsSzs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozs4QkFBQTs7Ozs7Ozs7OzJCQUFBOzs7Ozs7Ozs7Ozs7c0NBQUE7Ozs7Ozs7Ozs7OztVQUFBOztLQUFBOzs7Ozs7OztxRkFB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